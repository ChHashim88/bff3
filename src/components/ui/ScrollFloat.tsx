"use client";

import React, { ReactNode } from "react";
import TypewriterText from "./TypewriterText";

interface ScrollFloatProps {
  children: ReactNode;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "div" | "span";
}

export default function ScrollFloat({
  children,
  containerClassName = "",
  textClassName = "",
  as: Component = "h2",
}: ScrollFloatProps) {
  return (
    <TypewriterText
      as={Component}
      containerClassName={containerClassName}
      textClassName={textClassName}
    >
      {children}
    </TypewriterText>
  );
}
