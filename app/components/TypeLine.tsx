"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

/**
 * Section sub-line with the cursor sweep.
 *
 * The text is always in the DOM and always readable — it renders at full
 * contrast on the server, drops to the muted colour only once mounted
 * (`is-armed`), and resolves back to full contrast behind a travelling cursor
 * when scrolled to (`is-in`). With JS disabled nothing arms, so the line just
 * renders normally.
 *
 * Styling lives in app/globals.css under "Cursor sweep on section sub-lines".
 */
export default function TypeLine({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [armed, setArmed] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setArmed(true);

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      // Fire once the header is properly on screen, not as its top edge clears
      // the fold — otherwise the sweep finishes below the viewport.
      { rootMargin: "0px 0px -25% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const classes = [className, armed && "is-armed", inView && "is-in"]
    .filter(Boolean)
    .join(" ");

  return (
    <span ref={ref} className={classes}>
      <span
        className="type-line"
        style={{ "--ch": text.trim().length } as CSSProperties}
      >
        {text}
      </span>
    </span>
  );
}
