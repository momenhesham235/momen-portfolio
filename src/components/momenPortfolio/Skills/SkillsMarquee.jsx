import { useRef } from "react";
import {
  // eslint-disable-next-line no-unused-vars
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";

import { skills } from "@constants/skills";
import { useMotionSafe } from "@hooks/use-motion-pref";
import "./skills-marquee.css";

/** Copies of the run laid side by side; the row loops by one copy's width. */
const COPIES = 4;
/** Idle drift, in percent of the whole row per second. */
const BASE_VELOCITY = 2.2;
/** Scroll speed at which the marquee is pushed to full boost. */
const VELOCITY_CEILING = 1600;
/** Row slows to a crawl under the pointer so a logo can actually be read. */
const HOVER_DAMPING = 0.15;

const allSkills = skills.flatMap((group) => group.items);

/** Keeps `value` inside [min, max) by wrapping it — the seam-free loop. */
const wrap = (min, max, value) => {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
};

/**
 * Infinite tech strip whose speed and direction answer to the scroll.
 *
 * Idle it drifts. Scrolling down pushes it along; scrolling up drags it the
 * other way — the strip reads as something the page is physically moving
 * rather than a decoration playing next to it.
 *
 * Entirely decorative: every logo here is already listed, with its name, in
 * the grid above, so the whole strip is hidden from assistive tech instead of
 * being announced twice.
 */
const SkillsMarquee = () => {
  const motionSafe = useMotionSafe();

  /* The loop is a permanent rAF that writes a transform every frame. Parking
     it while the strip is off-screen keeps it from taxing the whole page for
     something nobody can see — `once: false` because it has to shut down
     again on the way out, not just start up on the way in. */
  const rootRef = useRef(null);
  const inView = useInView(rootRef, { once: false, amount: 0 });

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  /* Raw scroll velocity is spiky enough to make the strip stutter; the spring
     is what turns it into a push. */
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(
    smoothVelocity,
    [-VELOCITY_CEILING, VELOCITY_CEILING],
    [-4, 4],
    { clamp: false }
  );

  /* One copy is 1/COPIES of the row, so wrapping over that span puts an
     identical copy exactly where the last one was — no visible seam. */
  const x = useTransform(baseX, (value) => `${wrap(-100 / COPIES, 0, value)}%`);

  const direction = useRef(1);
  const hovering = useRef(false);

  useAnimationFrame((_, delta) => {
    if (!motionSafe || !inView) return;

    let moveBy = direction.current * BASE_VELOCITY * (delta / 1000);

    const factor = velocityFactor.get();
    if (factor < 0) direction.current = -1;
    else if (factor > 0) direction.current = 1;

    // Scroll speed scales the idle drift rather than replacing it, so the
    // strip never stalls dead when the page is still.
    moveBy += direction.current * moveBy * factor;

    if (hovering.current) moveBy *= HOVER_DAMPING;

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className="skills-marquee"
      ref={rootRef}
      aria-hidden="true"
      onPointerEnter={() => {
        hovering.current = true;
      }}
      onPointerLeave={() => {
        hovering.current = false;
      }}
    >
      <motion.div
        className="skills-marquee__row"
        style={motionSafe ? { x } : undefined}
      >
        {Array.from({ length: COPIES }, (_, copy) => (
          <div className="skills-marquee__run" key={copy}>
            {allSkills.map((skill) => (
              <span className="skills-marquee__item" key={`${copy}-${skill.name}`}>
                <img
                  src={skill.img}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="skills-marquee__icon"
                />
                <span className="skills-marquee__name">{skill.name}</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsMarquee;
