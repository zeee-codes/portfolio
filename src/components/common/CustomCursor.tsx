import { useEffect, useRef, useState } from "react";

type CursorVariant = "default" | "view" | "magnet" | "link";

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(true);
  const [variant, setVariant] = useState<CursorVariant>("default");
  const variantRef = useRef<CursorVariant>(variant);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const hovering = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarsePointer) {
      setEnabled(false);
      return;
    }

    const updateTarget = (event: MouseEvent) => {
      target.current.x = event.clientX;
      target.current.y = event.clientY;
    };

    const updateHoverState = (event: MouseEvent | FocusEvent) => {
      const element = event.target as HTMLElement | null;
      if (!element) return;
      const target = element.closest("[data-cursor]") as HTMLElement | null;
      const cursorType = (target?.dataset.cursor as CursorVariant | undefined) ?? "default";
      setVariant(cursorType);
      hovering.current = cursorType !== "default";
    };

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.18;
      current.current.y += (target.current.y - current.current.y) * 0.18;

      const dot = dotRef.current;
      const ring = ringRef.current;

      if (dot) {
        dot.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
      }

      if (ring) {
        const type = variantRef.current;
        const scale =
          type === "view"
            ? 2.4
            : type === "magnet"
              ? 2.0
              : type === "link"
                ? 1.6
                : 1;
        ring.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) scale(${scale})`;
      }

      rafId.current = window.requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", updateTarget, { passive: true });
    window.addEventListener("mouseover", updateHoverState, { passive: true });
    window.addEventListener("focusin", updateHoverState);

    rafId.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", updateTarget);
      window.removeEventListener("mouseover", updateHoverState);
      window.removeEventListener("focusin", updateHoverState);
      if (rafId.current) window.cancelAnimationFrame(rafId.current);
    };
  }, []);

  useEffect(() => {
    variantRef.current = variant;
  }, [variant]);

  if (!enabled) return null;

  return (
    <div className="custom-cursor" aria-hidden="true">
      <div ref={ringRef} className={`cursor-ring is-${variant}`} />
      <div ref={dotRef} className={`cursor-dot is-${variant}`} />
    </div>
  );
};

export default CustomCursor;
