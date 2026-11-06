"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";

export function PageTransitionLoader() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const fadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const finishTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetLoader = useCallback(() => {
    setProgress(100);
    if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    fadeTimeoutRef.current = setTimeout(() => {
      setActive(false);
      setProgress(0);
    }, 200);
  }, []);

  // When pathname changes, immediately finish and fade out
  useEffect(() => {
    if (active) {
      resetLoader();
    }
  }, [pathname, active, resetLoader]);

  useEffect(() => {
    function normalize(path: string) {
      return path.split("?")[0].split("#")[0].replace(/\/+$/, "") || "/";
    }

    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      const targetAttr = target.getAttribute("target");
      const downloadAttr = target.getAttribute("download");

      if (
        !href ||
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        targetAttr === "_blank" ||
        downloadAttr !== null
      ) {
        return;
      }

      const currentNorm = normalize(window.location.pathname);
      const targetNorm = normalize(href);

      // Do not trigger if clicking the page we are already on
      if (currentNorm === targetNorm) {
        return;
      }

      // Start sleek top progress bar
      setActive(true);
      setProgress(35);

      if (finishTimeoutRef.current) clearTimeout(finishTimeoutRef.current);

      // Smooth step to 75%
      setTimeout(() => setProgress(75), 120);

      // Max safety: automatically finish within 1 second so it NEVER gets stuck
      finishTimeoutRef.current = setTimeout(() => {
        resetLoader();
      }, 1000);
    }

    document.addEventListener("click", handleClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
      if (finishTimeoutRef.current) clearTimeout(finishTimeoutRef.current);
    };
  }, [resetLoader]);

  if (!active && progress === 0) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[10000] h-[2.5px] overflow-hidden bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full bg-accent shadow-[0_0_6px_var(--color-accent)] transition-all ease-out"
        style={{
          width: `${progress}%`,
          transitionDuration: progress === 100 ? "120ms" : "200ms",
          opacity: progress === 100 ? 0 : 1,
        }}
      />
    </div>
  );
}
