"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export function PageTransitionLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const safetyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // When pathname changes, complete and reset the loader
  useEffect(() => {
    if (loading) {
      setProgress(100);
      const hideTimer = setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 250);
      return () => clearTimeout(hideTimer);
    }
  }, [pathname, loading]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      // Find closest anchor tag
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      const targetAttr = target.getAttribute("target");
      const downloadAttr = target.getAttribute("download");

      // Skip non-links, external links, new tabs, downloads, or pure hash jumps
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

      // Check if navigating to the same URL
      const currentUrl = window.location.pathname;
      const targetUrl = href.split("?")[0].split("#")[0];

      if (targetUrl === currentUrl || (targetUrl === "" && href.startsWith("#"))) {
        return;
      }

      // Start transition animation
      setLoading(true);
      setProgress(25);

      if (timerRef.current) clearInterval(timerRef.current);
      if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);

      timerRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev < 65) return prev + 15;
          if (prev < 85) return prev + 5;
          return prev;
        });
      }, 150);

      // Safety timeout: auto-hide after 6 seconds if navigation didn't take place
      safetyTimeoutRef.current = setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 6000);
    }

    document.addEventListener("click", handleClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
      if (timerRef.current) clearInterval(timerRef.current);
      if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
    };
  }, []);

  if (!loading && progress === 0) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[10000]"
      aria-hidden="true"
    >
      {/* Top Accent Progress Bar */}
      <div className="h-[3px] w-full overflow-hidden bg-transparent">
        <div
          className="h-full bg-accent shadow-[0_0_8px_var(--color-accent)] transition-all ease-out"
          style={{
            width: `${progress}%`,
            transitionDuration: progress === 100 ? "150ms" : "250ms",
          }}
        />
      </div>

      {/* Industrial Spec Transit Badge */}
      <div className="absolute right-4 top-3 animate-in fade-in slide-in-from-top-1 duration-200">
        <div className="flex items-center gap-2 border border-ink bg-paper px-3 py-1 text-[11px] font-outlier font-semibold uppercase tracking-wider text-ink shadow-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 bg-accent" />
          </span>
          <span>SYSTEM LOADING...</span>
        </div>
      </div>
    </div>
  );
}

