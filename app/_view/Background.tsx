"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function Background() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const container = useRef<HTMLDivElement | null>(null);
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const raf = useRef<number | null>(null);

  const dots = useMemo(
    () =>
      Array.from({ length: 60 }).map(() => ({
        x: Math.random() * 1920,
        y: Math.random() * 1080,
        r: Math.random() * 96,
        inc: Math.random() - 0.5 > 0 ? true : false,
      })),
    [],
  );

  useEffect(() => {
    if (!container.current) return;

    const ro = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setWidth(entry.contentRect.width);
        setHeight(entry.contentRect.height);
      });
    });

    ro.observe(container.current);

    return () => ro.disconnect();
  }, []);

  const mouse = useRef<Record<"x" | "y", number>>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    if (!canvas.current) return;
    const context = canvas.current.getContext("2d");

    function draw() {
      if (!context) return;
      context.reset();
      dots.forEach((dot) => {
        const { x, y, r, inc } = dot;
        dot.x = x > 1920 + r ? 0 : x + 0.05;
        dot.y = y < 0 - r ? 1080 : y - 0.05;
        dot.r = inc ? r + 0.01 : r - 0.01;
        if (r > 98) dot.inc = false;
        if (r < 94) dot.inc = true;
        context.beginPath();
        context.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        context.fillStyle = "rgb(255 255 255 / 0.3)";
        context.fill();
        context.closePath();
      });
      raf.current = window.requestAnimationFrame(draw);
    }

    raf.current = window.requestAnimationFrame(draw);

    return () => {
      if (!raf.current) return;
      window.cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dots]);

  return (
    <div
      className="fixed inset-0 -z-10 bg-gradient-to-br from-amber-200 to-orange-200"
      ref={container}
    >
      <canvas ref={canvas} width={width} height={height}></canvas>
    </div>
  );
}
