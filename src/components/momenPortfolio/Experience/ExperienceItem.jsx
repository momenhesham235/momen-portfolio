import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { FaBriefcase } from "react-icons/fa6";
import { HiOutlineCalendar } from "react-icons/hi2";

/**
 * One card in the stacking deck.
 *
 * The stack itself is pure CSS: every item is `position: sticky` with a `top`
 * offset a few pixels lower than the one before it, so as you scroll, each
 * card pins in place and the next one rides up and covers it — leaving a thin
 * sliver of the buried cards visible, like a hand of cards.
 *
 * Motion layers the depth on top, from two scroll sources:
 *
 *  1. `enter` — measured on this card, for the rise-and-fade as it arrives.
 *     Safe to measure here because it has finished before the card ever pins.
 *
 *  2. `deckProgress` — measured on the *container* (see Experience.jsx for why)
 *     and sliced by index, driving the shrink and dim so a buried card reads
 *     as further away rather than merely hidden.
 */
const ExperienceItem = ({
  entry,
  item,
  index,
  total,
  deckProgress,
  currentLabel,
}) => {
  const ref = useRef(null);
  const isCurrent = entry.current;
  const isLast = index === total - 1;

  const { scrollYProgress: enterRaw } = useScroll({
    target: ref,
    offset: ["start 95%", "start 55%"],
  });
  const enter = useSpring(enterRaw, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  });

  const opacity = useTransform(enter, [0, 1], [0, 1]);
  const y = useTransform(enter, [0, 1], [70, 0]);

  /* This card is on top from the moment it pins until the next one lands —
     one slice of the deck's travel. useTransform clamps outside the range, so
     the card holds its final look for the rest of the scroll. */
  const coverRange = [index / total, (index + 1) / total];

  /* The last card is never covered, so it must not shrink or dim — otherwise
     it would recede while it is still the one being read. */
  const scale = useTransform(deckProgress, coverRange, isLast ? [1, 1] : [1, 0.92]);
  const dim = useTransform(deckProgress, coverRange, isLast ? [0, 0] : [0, 0.55]);

  // Parallax inside a pinned card: the ghost number keeps drifting after the
  // card itself has stopped moving, which is what keeps a pinned card alive.
  const indexY = useTransform(deckProgress, coverRange, [26, -34]);

  return (
    <div
      ref={ref}
      className="exp-stack__item"
      style={{ "--i": String(index) }}
      role="listitem"
    >
      <motion.article
        className={`experience-card${isCurrent ? " is-current" : ""}`}
        style={{ opacity, y, scale }}
      >
        {/* Darkening veil rather than lowered opacity — the card has to stay
            fully opaque or the cards beneath would show straight through it. */}
        <motion.span
          className="experience-card__dim"
          style={{ opacity: dim }}
          aria-hidden="true"
        />

        <motion.span
          className="experience-card__index"
          style={{ y: indexY }}
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>

        <header className="experience-card__top">
          <span className="experience-marker" aria-hidden="true">
            <FaBriefcase />
          </span>

          <span className="experience-card__step" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
            <span className="experience-card__step-total">
              {" / "}
              {String(total).padStart(2, "0")}
            </span>
          </span>

          {isCurrent && (
            <span className="experience-card__badge">
              <span className="experience-card__badge-dot" aria-hidden="true" />
              {currentLabel}
            </span>
          )}
        </header>

        <div className="experience-card__heading">
          <h3 className="experience-card__title">{item.title}</h3>
          <p className="experience-card__company">{item.company}</p>
        </div>

        <p className="experience-card__date">
          <HiOutlineCalendar aria-hidden="true" />
          <span>
            {item.startDate} – {item.endDate}
          </span>
        </p>

        {Array.isArray(item.description) && item.description.length > 0 && (
          <ul className="experience-card__list">
            {item.description.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        )}

        {entry.tech?.length > 0 && (
          <ul className="experience-card__tech" aria-label="Tech stack">
            {entry.tech.map((techItem) => (
              <li key={techItem}>{techItem}</li>
            ))}
          </ul>
        )}
      </motion.article>
    </div>
  );
};

export default ExperienceItem;
