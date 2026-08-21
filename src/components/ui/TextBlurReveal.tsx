"use client";

import React, { ReactNode } from "react";
import TypewriterText from "./TypewriterText";

interface TextBlurRevealProps {
  children: ReactNode;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "div" | "span";
}

export default function TextBlurReveal({
  children,
  containerClassName = "",
  textClassName = "",
  as: Component = "h2",
}: TextBlurRevealProps) {
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
