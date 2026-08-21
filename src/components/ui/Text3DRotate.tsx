"use client";

import React, { useEffect, useMemo, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Text3DRotateProps {
  children: ReactNode;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "div" | "span";
}

function processNode(node: ReactNode, keyPrefix: string = "flip"): ReactNode {
  if (typeof node === "string" || typeof node === "number") {
    const str = String(node);
    const words = str.split(" ");
    return words.map((word, wIdx) => (
      <span key={`${keyPrefix}-w-${wIdx}`} className="inline-block whitespace-nowrap mr-[0.25em]">
        {word.split("").map((char, cIdx) => (
          <span
            key={`${keyPrefix}-w-${wIdx}-c-${cIdx}`}
            className="inline-block transform-gpu will-change-transform opacity-0 flip-char"
            style={{
              perspective: "600px",
              transformStyle: "preserve-3d",
            }}
          >
            {char}
          </span>
        ))}
      </span>
    ));
  }

  if (React.isValidElement(node)) {
    const element = node as React.ReactElement<any>;
    const children = element.props.children;
    if (!children) return element;

    const processedChildren = React.Children.map(children, (child, idx) =>
      processNode(child, `${keyPrefix}-${idx}`)
    );

    return React.cloneElement(element, { ...element.props }, processedChildren);
  }

  if (Array.isArray(node)) {
    return React.Children.map(node, (child, idx) =>
      processNode(child, `${keyPrefix}-${idx}`)
    );
  }

  return node;
}

export default function Text3DRotate({
  children,
  containerClassName = "",
  textClassName = "",
  animationDuration = 0.9,
  stagger = 0.02,
  as: Component = "h2",
}: Text3DRotateProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  const splitText = useMemo(() => {
    return processNode(children);
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const chars = el.querySelectorAll(".flip-char");
    if (!chars || chars.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        chars,
        {
          opacity: 0,
          rotateY: 90,
          rotateX: -45,
          z: -80,
          transformOrigin: "50% 50% -50px",
        },
        {
          opacity: 1,
          rotateY: 0,
          rotateX: 0,
          z: 0,
          duration: animationDuration,
          stagger: stagger,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: el,
            start: "top bottom-=15%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [animationDuration, stagger, children]);

  return (
    <Component ref={containerRef as any} className={`relative block ${containerClassName}`}>
      <span className={`block ${textClassName}`}>{splitText}</span>
    </Component>
  );
}
