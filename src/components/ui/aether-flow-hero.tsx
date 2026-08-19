"use client";

import { useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────────────────────
//  SILK FABRIC RENDERER — Canvas 2D
//  Technique: 260 fine parallel bezier curves (warp threads) with anisotropic
//  shading. Light reflects bright off raised peaks, dark in deep fold valleys.
//  Drapes diagonally toward bottom-right corner like thrown silk fabric.
// ─────────────────────────────────────────────────────────────────────────────

interface Props {
  className?: string;
}

// Anisotropic silk shading — bright specular peaks, deep shadow valleys
// Models how woven silk fibers reflect light along the thread direction
function silkColor(h: number): [number, number, number] {
  // h: 0.0 = deepest shadow valley, 1.0 = brightest specular peak
  if (h > 0.82) {
    // Silk specular highlight — near-white with warm blush
    const t = (h - 0.82) / 0.18;
    return [
      Math.round(205 + t * 48),   // 205 → 253
      Math.round(t * 215),         // 0   → 215
      Math.round(7 + t * 208),     // 7   → 215
    ];
  } else if (h > 0.52) {
    // Upper mid-tone — brand red
    const t = (h - 0.52) / 0.3;
    return [
      Math.round(75 + t * 130),    // 75  → 205
      0,
      Math.round(2 + t * 5),       // 2   → 7
    ];
  } else if (h > 0.22) {
    // Lower mid-tone — deep crimson
    const t = (h - 0.22) / 0.3;
    return [
      Math.round(22 + t * 53),     // 22  → 75
      0,
      Math.round(t * 2),           // 0   → 2
    ];
  } else {
    // Shadow valley — near-black velvet
    const t = h / 0.22;
    return [Math.round(4 + t * 18), 0, 0]; // 4 → 22
  }
}

export default function AetherFlowHero({ className = "" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let raf: number;
    let t = 0;
    let isVisible = true;

    const resize = () => {
      width  = canvas.width  = Math.round(canvas.offsetWidth);
      height = canvas.height = Math.round(canvas.offsetHeight);
    };

    window.addEventListener("resize", resize, { passive: true });

    const io = new IntersectionObserver(
      ([e]) => { isVisible = e.isIntersecting; },
      { threshold: 0.01 }
    );
    io.observe(canvas);

    resize();

    const render = () => {
      raf = requestAnimationFrame(render);
      if (!isVisible || width === 0 || height === 0) return;

      t += 0.0028; // very slow — fabric breathes, doesn't ripple

      ctx.clearRect(0, 0, width, height);

      // ── 260 warp threads spanning the canvas diagonally ──────────────────
      const THREADS = 260;
      const threadW = (height / THREADS) * 1.55; // slight overlap for no gaps

      for (let i = 0; i < THREADS; i++) {
        const baseY = (i / THREADS) * height;

        // ── Compound fold waves — 3 harmonics like real draped fabric ────
        // Primary large fold:
        const f1 = Math.sin(i * 0.072 + t * 0.75) * 0.42;
        // Secondary ripple:
        const f2 = Math.sin(i * 0.145 - t * 0.55 + 1.8) * 0.22;
        // Fine surface texture:
        const f3 = Math.sin(i * 0.31  + t * 0.4  + 3.1) * 0.08;

        // Normalised thread "height" (0 = valley, 1 = peak)
        const raw = f1 + f2 + f3; // range ≈ [-0.72, 0.72]
        const h   = Math.max(0, Math.min(1, (raw + 0.72) / 1.44));

        // Fabric drape displacement along Y (threads sag toward bottom-right)
        const yOffset = f1 * 52 + f2 * 24 + f3 * 10;

        // ── Draw each thread as a bezier curve across the canvas ─────────
        // Colour stays constant per thread (anisotropic — colour is per-thread)
        const [r, g, b] = silkColor(h);

        ctx.beginPath();

        // Start point — thread enters from left edge
        const y0 = baseY + yOffset;
        ctx.moveTo(0, y0);

        // 6-segment bezier path across the full width
        const SEG = 6;
        for (let s = 0; s < SEG; s++) {
          const xA = ((s + 0.33) / SEG) * width;
          const xB = ((s + 0.67) / SEG) * width;
          const xC = ((s + 1.0)  / SEG) * width;

          // Progressive diagonal drape toward bottom-right
          const drape = (xC / width) * height * 0.22;

          const yA = baseY
            + (Math.sin(i * 0.072 + xA / width * 2.5 + t * 0.75) * 0.42
            +  Math.sin(i * 0.145 + xA / width * 3.5 - t * 0.55) * 0.22) * 52
            + (xA / width) * height * 0.22;

          const yB = baseY
            + (Math.sin(i * 0.072 + xB / width * 2.5 + t * 0.75) * 0.42
            +  Math.sin(i * 0.145 + xB / width * 3.5 - t * 0.55) * 0.22) * 52
            + (xB / width) * height * 0.22;

          const yC = baseY
            + (Math.sin(i * 0.072 + xC / width * 2.5 + t * 0.75) * 0.42
            +  Math.sin(i * 0.145 + xC / width * 3.5 - t * 0.55) * 0.22) * 52
            + drape;

          ctx.bezierCurveTo(xA, yA, xB, yB, xC, yC);
        }

        ctx.strokeStyle = `rgb(${r},${g},${b})`;
        ctx.lineWidth   = threadW;
        ctx.lineCap     = "butt";
        ctx.stroke();
      }
    };

    render();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute top-0 right-0 h-full"
        style={{
          display: "block",
          width: "82%",
          // Soft fade-in from left → full opacity by 40% across canvas
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 7%, rgba(0,0,0,0.4) 20%, #000 42%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 7%, rgba(0,0,0,0.4) 20%, #000 42%)",
        }}
      />
    </div>
  );
}
