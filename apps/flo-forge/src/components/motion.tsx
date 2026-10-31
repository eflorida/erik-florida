"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { MotionConfig, useAnimate, useInView } from "motion/react";

const MotionContext = createContext({
  enabled: false,
  ready: false,
  reduced: true,
  toggle: () => {},
});
const subscribe = () => () => {};

// Keep interactive controls disabled in server HTML until React can handle input.
const clientReady = () => true;
const serverReady = () => false;
const mediaQuery = "(prefers-reduced-motion: reduce)";
const readReducedMotion = () => window.matchMedia(mediaQuery).matches;
const serverReducedMotion = () => true;
function subscribeReducedMotion(onChange: () => void) {
  const query = window.matchMedia(mediaQuery);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

export function MotionProvider({ children }: { children: ReactNode }) {
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    readReducedMotion,
    serverReducedMotion,
  );
  const ready = useSyncExternalStore(subscribe, clientReady, serverReady);
  const [playing, setPlaying] = useState(true);
  const enabled = ready && playing && !reduced;

  return (
    <MotionContext.Provider
      value={{
        enabled,
        ready,
        reduced,
        toggle: () => setPlaying((value) => !value),
      }}
    >
      <MotionConfig reducedMotion="user">
        <div className="forge-site" data-motion={enabled ? "on" : "off"}>
          {children}
        </div>
      </MotionConfig>
    </MotionContext.Provider>
  );
}

export function useForgeMotion() {
  return useContext(MotionContext);
}

export function MotionToggle() {
  const { enabled, ready, reduced, toggle } = useForgeMotion();
  return (
    <button
      className="motion-toggle"
      type="button"
      onClick={toggle}
      disabled={!ready || Boolean(reduced)}
      aria-pressed={!enabled}
      aria-label={
        reduced
          ? "Motion disabled by your device preference"
          : enabled
            ? "Pause animations"
            : "Play animations"
      }
    >
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
        {enabled ? (
          <path
            d="M5.5 3v10M10.5 3v10"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        ) : (
          <path d="m5 3 8 5-8 5V3Z" fill="currentColor" />
        )}
      </svg>
      <span>Motion {enabled ? "on" : "off"}</span>
    </button>
  );
}

// Progressive enhancement: the server HTML is visible even without JavaScript.
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const inView = useInView(scope, { once: true, amount: 0.12 });
  const { enabled } = useForgeMotion();

  useEffect(() => {
    if (!inView || !enabled) return;
    const controls = animate(
      scope.current,
      { opacity: [0, 1], y: [24, 0] },
      { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    );
    return () => {
      controls.complete();
    };
  }, [animate, delay, enabled, inView, scope]);

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
