"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useForgeMotion } from "@/components/motion";
import { ForgeAsterisk } from "@/components/icons";

const upperMark =
  "M0 212 L115 42 Q125 28 142 25 L300 0 L265 47 Q260 55 251 57 L171 72 Q160 75 154 85 L93 184 Q88 194 78 196 Z";
const lowerMark =
  "M70 260 L166 103 Q172 91 186 88 L357 59 L320 108 Q315 117 305 119 L205 138 L192 160 L244 151 L217 191 Q212 200 203 201 L169 208 Q165 208 161 216 L147 239 Q144 243 137 245 Z";

type Spark = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
};

export function ForgeScene() {
  const { enabled } = useForgeMotion();
  const canvas = useRef<HTMLCanvasElement>(null);
  const scene = useRef<HTMLDivElement>(null);
  const burst = useRef<(() => void) | null>(null);
  const [stoked, setStoked] = useState(false);
  const cooldown = useRef<ReturnType<typeof setTimeout> | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(y, { stiffness: 65, damping: 22 });
  const rotateY = useSpring(x, { stiffness: 65, damping: 22 });

  useEffect(() => {
    if (!enabled) {
      x.set(0);
      y.set(0);
    }
  }, [enabled, x, y]);

  useEffect(
    () => () => {
      if (cooldown.current) clearTimeout(cooldown.current);
    },
    [],
  );

  useEffect(() => {
    const element = canvas.current;
    const container = scene.current;
    const context = element?.getContext("2d");
    if (!element || !container || !context || !enabled) return;

    const sparks: Spark[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let previous = 0;
    let spawn = 0;
    let visible = false;

    const resize = new ResizeObserver(([entry]) => {
      if (!entry) return;
      width = entry.contentRect.width;
      height = entry.contentRect.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      element.width = Math.round(width * ratio);
      element.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    });
    resize.observe(container);

    const addSpark = (intense = false) => {
      if (sparks.length >= 100) return;
      const life = 0.6 + Math.random() * 1.6;
      sparks.push({
        x: width * (0.3 + Math.random() * 0.45),
        y: height * (0.44 + Math.random() * 0.26),
        vx: (Math.random() - 0.35) * (intense ? 230 : 50),
        vy: -(35 + Math.random() * (intense ? 240 : 80)),
        life,
        maxLife: life,
        size: 0.6 + Math.random() * 1.6,
      });
    };
    burst.current = () => {
      for (let i = 0; i < 60; i++) addSpark(true);
    };

    const draw = (time: number) => {
      const delta = Math.min((time - previous) / 1000, 0.04);
      previous = time;
      context.clearRect(0, 0, width, height);
      spawn += delta;
      if (spawn > 0.075) {
        addSpark();
        spawn = 0;
      }
      for (let i = sparks.length - 1; i >= 0; i--) {
        const spark = sparks[i];
        if (!spark) continue;
        spark.life -= delta;
        if (spark.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }
        spark.x += spark.vx * delta;
        spark.y += spark.vy * delta;
        spark.vy += 20 * delta;
        context.globalAlpha =
          Math.min(spark.life * 2, 1) * (spark.life / spark.maxLife);
        context.strokeStyle = spark.size > 1.5 ? "#ffb46e" : "#ef762e";
        context.lineWidth = spark.size;
        context.beginPath();
        context.moveTo(spark.x, spark.y);
        context.lineTo(spark.x - spark.vx * 0.025, spark.y - spark.vy * 0.025);
        context.stroke();
      }
      frame = requestAnimationFrame(draw);
    };

    const sync = () => {
      cancelAnimationFrame(frame);
      container.dataset["active"] = String(visible && !document.hidden);
      if (visible && !document.hidden) {
        previous = performance.now();
        frame = requestAnimationFrame(draw);
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = Boolean(entry?.isIntersecting);
      sync();
    });
    observer.observe(container);
    document.addEventListener("visibilitychange", sync);
    return () => {
      cancelAnimationFrame(frame);
      context.clearRect(0, 0, width, height);
      resize.disconnect();
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      burst.current = null;
    };
  }, [enabled]);

  function stoke() {
    if (!enabled || stoked) return;
    burst.current?.();
    setStoked(true);
    cooldown.current = setTimeout(() => setStoked(false), 1600);
  }

  return (
    <div
      className="forge-scene"
      ref={scene}
      data-stoked={stoked}
      onPointerMove={(event) => {
        if (!enabled || event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(((event.clientX - rect.left) / rect.width - 0.5) * 12);
        y.set(-((event.clientY - rect.top) / rect.height - 0.5) * 10);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <div className="scene-grid" aria-hidden="true" />
      <div className="scene-aura" aria-hidden="true" />
      <div className="scene-orbit orbit-one" aria-hidden="true" />
      <div className="scene-orbit orbit-two" aria-hidden="true" />
      <div className="scene-cross cross-one" aria-hidden="true" />
      <div className="scene-cross cross-two" aria-hidden="true" />
      <span className="scene-caption scene-caption-top" aria-hidden="true">
        FIG. 01 / THE FORGE
      </span>
      <span className="scene-caption scene-caption-side" aria-hidden="true">
        RAW POTENTIAL → REAL POSSIBILITY
      </span>
      <motion.div className="forge-emblem" style={{ rotateX, rotateY }}>
        <svg
          viewBox="-45 -30 460 390"
          fill="none"
          role="img"
          aria-label="The Flo Forge emblem in brushed steel and glowing ember orange"
        >
          <defs>
            <linearGradient
              id="steel"
              x1="60"
              y1="0"
              x2="240"
              y2="235"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#a2a7a7" />
              <stop offset=".18" stopColor="#565e62" />
              <stop offset=".47" stopColor="#363e41" />
              <stop offset=".71" stopColor="#586064" />
              <stop offset="1" stopColor="#23292d" />
            </linearGradient>
            <linearGradient
              id="heat"
              x1="190"
              y1="80"
              x2="240"
              y2="260"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ee9c64" />
              <stop offset=".16" stopColor="#c5622a" />
              <stop offset=".52" stopColor="#e87029" />
              <stop offset=".82" stopColor="#fd9b4c" />
              <stop offset="1" stopColor="#ffbc73" />
            </linearGradient>
            <linearGradient id="edge" x2="0" y2="1">
              <stop stopColor="#e48040" />
              <stop offset="1" stopColor="#6e311c" />
            </linearGradient>
            <linearGradient id="steel-edge" x2="0" y2="1">
              <stop stopColor="#71797c" />
              <stop offset="1" stopColor="#171e22" />
            </linearGradient>
            <filter
              id="emblem-shadow"
              x="-50%"
              y="-40%"
              width="210%"
              height="220%"
            >
              <feDropShadow
                dx="8"
                dy="27"
                stdDeviation="15"
                floodColor="#11171a"
                floodOpacity=".85"
              />
            </filter>
            <filter id="emblem-grain">
              <feTurbulence
                type="fractalNoise"
                baseFrequency=".8 .04"
                numOctaves="3"
                seed="12"
                result="noise"
              />
              <feColorMatrix in="noise" type="saturate" values="0" />
              <feComponentTransfer>
                <feFuncR type="linear" slope=".25" intercept=".375" />
                <feFuncG type="linear" slope=".25" intercept=".375" />
                <feFuncB type="linear" slope=".25" intercept=".375" />
              </feComponentTransfer>
              <feComposite in2="SourceGraphic" operator="in" />
              <feBlend in="SourceGraphic" mode="soft-light" />
            </filter>
            <filter
              id="ember-glow"
              x="-70%"
              y="-70%"
              width="240%"
              height="250%"
            >
              <feGaussianBlur stdDeviation="15" />
            </filter>
            <path id="upper-mark" d={upperMark} />
            <path id="lower-mark" d={lowerMark} />
          </defs>
          <g
            className="emblem-float"
            transform="translate(6 24) rotate(-9 180 140)"
          >
            <use
              href="#lower-mark"
              fill="#fc7024"
              opacity=".3"
              filter="url(#ember-glow)"
              transform="translate(0 18)"
            />
            <g filter="url(#emblem-shadow)">
              {Array.from({ length: 18 }, (_, index) => (
                <g
                  key={index}
                  transform={`translate(${(18 - index) * 0.25} ${18 - index})`}
                >
                  <use href="#upper-mark" fill="url(#steel-edge)" />
                  <use href="#lower-mark" fill="url(#edge)" />
                </g>
              ))}
              <use
                href="#upper-mark"
                fill="url(#steel)"
                stroke="#bec2bf"
                strokeWidth=".8"
                filter="url(#emblem-grain)"
              />
              <use
                href="#lower-mark"
                fill="url(#heat)"
                stroke="#ffb975"
                strokeWidth=".8"
                filter="url(#emblem-grain)"
              />
              <path
                d="m82 244 58-12m29-42 33-7m40-64 61-12"
                stroke="#ffcd94"
                strokeWidth="1.3"
                opacity=".7"
              />
            </g>
          </g>
        </svg>
      </motion.div>
      <canvas ref={canvas} className="spark-canvas" aria-hidden="true" />
      <div className="scene-bottom">
        <span className="scene-caption" aria-hidden="true">
          <span className="status-dot" /> IDEAS TAKE SHAPE HERE
        </span>
        <button
          className="stoke-button"
          type="button"
          onClick={stoke}
          disabled={!enabled}
          aria-label="Stoke the forge"
        >
          <ForgeAsterisk />
          <span>{stoked ? "Now we’re forging" : "Stoke the forge"}</span>
        </button>
      </div>
    </div>
  );
}
