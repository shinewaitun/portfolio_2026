"use client";

import {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import type { PointerEvent as ReactPointerEvent, ReactNode } from "react";
import Nav from "./nav";
import type { NavItem } from "./nav";

type SliderProps = {
  items: NavItem[];
  children: ReactNode;
};

const SWIPE_THRESHOLD = 60;
const WHEEL_THRESHOLD = 80;
const COOLDOWN_MS = 650;
const AXIS_SLOP = 8;

const clamp = (index: number, count: number) =>
  Math.max(0, Math.min(count - 1, index));

export default function Slider({ items, children }: SliderProps) {
  const count = items.length;
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragX, setDragX] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const startY = useRef(0);
  const lockAxis = useRef<"x" | "y" | null>(null);
  const lastFlip = useRef(0);
  const wheelAccum = useRef(0);
  const activeRef = useRef(0);
  const touchId = useRef<number | null>(null);
  const suppressClickUntil = useRef(0);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  const goTo = useCallback(
    (index: number) => {
      const now = Date.now();
      if (now - lastFlip.current < COOLDOWN_MS) return;
      lastFlip.current = now;
      const next = clamp(index, count);
      activeRef.current = next;
      setActive(next);
      window.history.replaceState(null, "", `#${items[next].id}`);
      setDragX(0);
    },
    [count, items]
  );

  const navigate = useCallback(
    (index: number) => {
      const next = clamp(index, count);
      activeRef.current = next;
      setActive(next);
      window.history.replaceState(null, "", `#${items[next].id}`);
      setDragX(0);
    },
    [count, items]
  );

  useEffect(() => {
    const syncHash = () => {
      const index = items.findIndex((item) => `#${item.id}` === window.location.hash);
      if (index >= 0) {
        activeRef.current = index;
        setActive(index);
        setDragX(0);
      }
    };
    const frame = window.requestAnimationFrame(syncHash);
    window.addEventListener("hashchange", syncHash);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", syncHash);
    };
  }, [items]);

  const goToRef = useRef(goTo);
  const navigateRef = useRef(navigate);
  useEffect(() => {
    goToRef.current = goTo;
    navigateRef.current = navigate;
  }, [goTo, navigate]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      if (event.target instanceof HTMLElement && event.target.closest("input, textarea, select, [contenteditable='true']")) return;
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goTo(active + 1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        goTo(active - 1);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goTo, active]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey) return;
      // Let long slides scroll vertically; horizontal gestures still change slides.
      const slide = track.children[activeRef.current] as HTMLElement | undefined;
      const horizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY);
      if (!horizontal && slide && slide.scrollHeight > slide.clientHeight + 1) {
        wheelAccum.current = 0;
        return;
      }
      event.preventDefault();
      const delta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY;
      wheelAccum.current += delta;
      if (Math.abs(wheelAccum.current) >= WHEEL_THRESHOLD) {
        const dir = wheelAccum.current > 0 ? 1 : -1;
        wheelAccum.current = 0;
        goToRef.current(activeRef.current + dir);
      }
    };

    track.addEventListener("wheel", onWheel, { passive: false });
    return () => track.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const resetTouch = () => {
      touchId.current = null;
      lockAxis.current = null;
      setDragging(false);
      setDragX(0);
    };

    const onTouchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1) {
        resetTouch();
        return;
      }
      const touch = event.touches[0];
      if (!touch) return;
      touchId.current = touch.identifier;
      startX.current = touch.clientX;
      startY.current = touch.clientY;
      lockAxis.current = null;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (event.touches.length !== 1) {
        resetTouch();
        return;
      }
      const touch = Array.from(event.touches).find((point) => point.identifier === touchId.current);
      if (!touch) return;
      const dx = touch.clientX - startX.current;
      const dy = touch.clientY - startY.current;

      if (lockAxis.current === null) {
        if (Math.abs(dx) < AXIS_SLOP && Math.abs(dy) < AXIS_SLOP) return;
        lockAxis.current = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      }

      if (lockAxis.current === "y") return;

      if (event.cancelable) event.preventDefault();
      setDragging(true);
      const atEdge = (activeRef.current === 0 && dx > 0) || (activeRef.current === count - 1 && dx < 0);
      setDragX(Math.max(-track.clientWidth, Math.min(track.clientWidth, atEdge ? dx * 0.25 : dx)));
    };

    const onTouchEnd = (event: TouchEvent) => {
      const changed = Array.from(event.changedTouches).find((point) => point.identifier === touchId.current);
      if (!changed) return;
      if (lockAxis.current === "x" && changed) {
        // A horizontal drag must not activate a link underneath the finger.
        suppressClickUntil.current = Date.now() + 350;
        const dx = changed.clientX - startX.current;
        const threshold = Math.min(SWIPE_THRESHOLD, Math.max(36, track.clientWidth * 0.12));
        if (Math.abs(dx) > threshold) {
          // Touch gestures may follow each other faster than the wheel cooldown.
          navigateRef.current(activeRef.current + (dx < 0 ? 1 : -1));
        }
      }
      resetTouch();
    };

    const onTouchCancel = () => {
      resetTouch();
    };

    track.addEventListener("touchstart", onTouchStart, { passive: true });
    track.addEventListener("touchmove", onTouchMove, { passive: false });
    track.addEventListener("touchend", onTouchEnd);
    track.addEventListener("touchcancel", onTouchCancel);
    return () => {
      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchmove", onTouchMove);
      track.removeEventListener("touchend", onTouchEnd);
      track.removeEventListener("touchcancel", onTouchCancel);
    };
  }, [count]);

  useEffect(() => {
    if (!dragging) return;

    const onMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      setDragX(event.clientX - startX.current);
    };
    const onUp = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const dx = event.clientX - startX.current;
      setDragging(false);
      setDragX(0);
      if (Math.abs(dx) > SWIPE_THRESHOLD) {
        goToRef.current(activeRef.current + (dx < 0 ? 1 : -1));
      }
    };
    const onCancel = () => {
      setDragging(false);
      setDragX(0);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onCancel);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onCancel);
    };
  }, [dragging]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch" || event.button !== 0) return;
    if (event.target instanceof HTMLElement && event.target.closest("a, button, input, textarea, select, [contenteditable='true']")) return;
    startX.current = event.clientX;
    setDragging(true);
  };

  const slides = Children.toArray(children);

  return (
    <div className="viewport w-full overflow-hidden" onClick={(event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest('a[href^="#"]') : null;
      const index = items.findIndex((item) => `#${item.id}` === link?.getAttribute("href"));
      if (index >= 0) {
        event.preventDefault();
        navigate(index);
        window.requestAnimationFrame(() => {
          (trackRef.current?.children[index] as HTMLElement | undefined)?.focus({ preventScroll: true });
        });
      }
    }}>
      <div
        ref={trackRef}
        className="slide-track flex h-full w-full cursor-grab"
        style={{
          transform: `translateX(calc(${-active * 100}% + ${dragX}px))`,
          transition: dragging
            ? "none"
            : "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
          touchAction: "pan-y pinch-zoom",
          willChange: "transform",
        }}
        onPointerDown={onPointerDown}
        onClickCapture={(event) => {
          if (Date.now() < suppressClickUntil.current) {
            event.preventDefault();
            event.stopPropagation();
          }
        }}
      >
        {slides.map((child, i) => (
          <section
            key={items[i]?.id ?? i}
            id={`slide-${items[i]?.id ?? i}`}
            tabIndex={-1}
            aria-label={items[i]?.label}
            aria-hidden={i !== active}
            inert={i !== active}
            className="scrollbar-hide h-full w-full min-w-0 shrink-0 overflow-x-hidden overflow-y-auto overscroll-contain"
          >
            {child}
          </section>
        ))}
      </div>

      <Nav items={items} activeIndex={active} onNavigate={navigate} />
    </div>
  );
}
