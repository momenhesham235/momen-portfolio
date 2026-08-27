import { useCallback, useRef } from "react";

import { useMotionSafe } from "./use-motion-pref";

/**
 * Origin-aware ripple.
 *
 * Publishes the interaction point to the host element as `--ripple-x` /
 * `--ripple-y` and toggles `is-rippling`, leaving the actual animation to CSS.
 * Keeping the paint in CSS means the ripple runs on the compositor and needs
 * no per-frame React work.
 *
 * Spread the returned handlers on the element that owns the ripple overlay:
 *
 *   const ripple = useRipple();
 *   <div className="ds-form-field__control" {...ripple}>…</div>
 */
export const useRipple = () => {
  const ref = useRef(null);
  const motionSafe = useMotionSafe();

  /* A click fires pointerdown and then focus. Without this flag the focus pass
     would overwrite the coordinates the pointer just published and restart the
     animation from the fallback origin — so every mouse ripple would appear to
     start from the same spot no matter where the field was clicked. */
  const fromPointer = useRef(false);

  const start = useCallback(
    (event) => {
      if (!motionSafe) return;
      const el = ref.current;
      if (!el) return;

      const isFocus = event?.type === "focus" || event?.type === "focusin";
      if (isFocus && fromPointer.current) return;

      const rect = el.getBoundingClientRect();

      /* Keyboard focus carries no coordinates — ripple from the centre, which
         is direction-neutral and so reads the same in Arabic as in English. */
      const hasPoint = !isFocus && typeof event?.clientX === "number";
      const x = hasPoint ? event.clientX - rect.left : rect.width / 2;
      const y = hasPoint ? event.clientY - rect.top : rect.height / 2;

      if (!isFocus) {
        fromPointer.current = true;
        // Released after the focus this pointerdown is about to trigger.
        window.requestAnimationFrame(() => {
          fromPointer.current = false;
        });
      }

      el.style.setProperty("--ripple-x", `${x}px`);
      el.style.setProperty("--ripple-y", `${y}px`);

      /* Reflow between removing and re-adding the class, or a second ripple
         inside the same animation cycle would be a no-op. */
      el.classList.remove("is-rippling");
      void el.offsetWidth;
      el.classList.add("is-rippling");
    },
    [motionSafe]
  );

  const clear = useCallback(() => {
    ref.current?.classList.remove("is-rippling");
  }, []);

  return {
    ref,
    onPointerDown: start,
    onFocus: start,
    onBlur: clear,
  };
};
