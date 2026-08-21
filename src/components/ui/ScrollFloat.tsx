"use client";

import React, { useEffect, useMemo, useRef, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement | null>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "div" | "span";
}

function processNode(node: ReactNode, keyPrefix: string = "node"): ReactNode {
  if (typeof node === "string" || typeof node === "number") {
    const str = String(node);
    const words = str.split(" ");
    return words.map((word, wIdx) => (
      <span key={`${keyPrefix}-w-${wIdx}`} className="inline-block whitespace-nowrap mr-[0.25em]">
        {word.split("").map((char, cIdx) => (
          <span
            key={`${keyPrefix}-w-${wIdx}-c-${cIdx}`}
            className="inline-block transform-gpu will-change-transform opacity-0 float-char"
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

export default function ScrollFloat({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=60%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.025,
  as: Component = "h2",
}: ScrollFloatProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  const splitText = useMemo(() => {
    return processNode(children);
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const charSpans = el.querySelectorAll(".float-char");
    if (!charSpans || charSpans.length === 0) return;

    const scroller = scrollContainerRef?.current || window;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        charSpans,
        {
          willChange: "transform, opacity",
          transformOrigin: "50% 100%",
          opacity: 0,
          y: "110%",
          scaleY: 2.0,
          scaleX: 0.8,
          rotateX: -60,
        },
        {
          duration: animationDuration,
          ease: ease,
          opacity: 1,
          y: "0%",
          scaleY: 1,
          scaleX: 1,
          rotateX: 0,
          stagger: stagger,
          scrollTrigger: {
            trigger: el,
            scroller: scroller,
            start: scrollStart,
            end: scrollEnd,
            scrub: false,
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [animationDuration, ease, scrollStart, scrollEnd, stagger, scrollContainerRef, children]);

  return (
    <Component
      ref={containerRef as any}
      className={`relative block ${containerClassName}`}
    >
      <span className={`block ${textClassName}`}>{splitText}</span>
    </Component>
  );
}
