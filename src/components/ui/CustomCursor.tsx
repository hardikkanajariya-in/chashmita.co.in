"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Only activate for devices with a fine pointer (mouse/trackpad) and when reduced motion is not requested
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasFinePointer || prefersReducedMotion) return;

    setActive(true);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovered = false;
    let isPressed = false;
    let isVisible = false;
    let animId: number;

    const onPointerMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }

      const target = e.target as HTMLElement | null;
      if (target) {
        isHovered = Boolean(
          target.closest("a, button, [role='button'], input, textarea, select, .spec-card, .btn-interact"),
        );
      }
    };

    const onPointerDown = () => {
      isPressed = true;
    };

    const onPointerUp = () => {
      isPressed = false;
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const onMouseEnter = () => {
      isVisible = true;
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    const loop = () => {
      // Fluid spring-lerp toward cursor coordinates
      const ease = 0.2;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${
          isPressed ? 0.6 : isHovered ? 0 : 1
        })`;
      }

      if (ringRef.current) {
        const ringScale = isPressed ? 0.75 : isHovered ? 1.5 : 1;
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${ringScale})`;
        ringRef.current.setAttribute("data-hover", isHovered ? "true" : "false");
      }

      animId = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!active) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="custom-cursor-dot pointer-events-none fixed top-0 left-0 z-[var(--z-tooltip)] h-2 w-2 rounded-full bg-[var(--color-accent)] opacity-0 transition-opacity duration-200"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="custom-cursor-ring pointer-events-none fixed top-0 left-0 z-[var(--z-tooltip)] h-8 w-8 rounded-full border border-[var(--color-accent)] opacity-0 transition-[opacity,border-color,background-color] duration-200"
      />
    </>
  );
}

