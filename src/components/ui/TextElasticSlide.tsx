"use client";

import React, { ReactNode } from "react";
import TypewriterText from "./TypewriterText";

interface TextElasticSlideProps {
  children: ReactNode;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "div" | "span";
}

export default function TextElasticSlide({
  children,
  containerClassName = "",
  textClassName = "",
  as: Component = "h2",
}: TextElasticSlideProps) {
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
