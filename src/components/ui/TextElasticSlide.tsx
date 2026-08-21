"use client";

import React, { useEffect, useMemo, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TextElasticSlideProps {
  children: ReactNode;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "div" | "span";
}

function processNode(node: ReactNode, keyPrefix: string = "slide"): ReactNode {
  if (typeof node === "string" || typeof node === "number") {
    const str = String(node);
    return str.split("").map((char, index) => (
      <span
        key={`${keyPrefix}-${index}`}
        className="inline-block overflow-hidden align-top"
        style={{ display: char === " " ? "inline" : "inline-block" }}
      >
        <span
          className="inline-block transform-gpu will-change-transform opacity-0 slide-char"
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
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

export default function TextElasticSlide({
  children,
  containerClassName = "",
  textClassName = "",
  animationDuration = 0.85,
  stagger = 0.02,
  as: Component = "h2",
}: TextElasticSlideProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  const splitText = useMemo(() => {
    return processNode(children);
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const chars = el.querySelectorAll(".slide-char");
    if (!chars || chars.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        chars,
        {
          opacity: 0,
          y: "115%",
          skewY: 6,
        },
        {
          opacity: 1,
          y: "0%",
          skewY: 0,
          duration: animationDuration,
          stagger: stagger,
          ease: "power4.out",
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
