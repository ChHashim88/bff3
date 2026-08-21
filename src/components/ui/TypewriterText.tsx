"use client";

import React, { useState, useEffect, useRef, useMemo, ReactNode } from "react";

interface TypewriterTextProps {
  children: ReactNode;
  containerClassName?: string;
  textClassName?: string;
  speed?: number; // ms per char (default ~22ms)
  delay?: number; // initial delay in seconds
  cursorColor?: string;
  hideCursorOnComplete?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "div" | "span";
  onComplete?: () => void;
}

// Function to calculate total printable character count including linebreaks
function countTotalChars(node: ReactNode): number {
  let count = 0;
  function traverse(n: ReactNode) {
    if (typeof n === "string" || typeof n === "number") {
      count += String(n).length;
    } else if (React.isValidElement(n)) {
      const element = n as React.ReactElement<any>;
      if (element.type === "br") {
        count += 1;
      } else if (element.props.children) {
        React.Children.forEach(element.props.children, traverse);
      }
    } else if (Array.isArray(n)) {
      n.forEach(traverse);
    }
  }
  traverse(node);
  return count;
}

export default function TypewriterText({
  children,
  containerClassName = "",
  textClassName = "",
  speed = 20,
  delay = 0,
  cursorColor = "#CD0007",
  hideCursorOnComplete = true,
  as: Component = "h2",
  onComplete,
}: TypewriterTextProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const [typedCount, setTypedCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const totalChars = useMemo(() => countTotalChars(children), [children]);

  // IntersectionObserver trigger
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  // Typewriter character ticker
  useEffect(() => {
    if (!hasStarted) return;

    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    timeoutId = setTimeout(() => {
      let current = 0;
      intervalId = setInterval(() => {
        current += 1;
        setTypedCount(current);
        if (current >= totalChars) {
          clearInterval(intervalId);
          setTimeout(() => {
            setIsCompleted(true);
            if (onComplete) onComplete();
          }, 400);
        }
      }, speed);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [hasStarted, totalChars, speed, delay, onComplete]);

  // Recursive tree walker to render exactly N characters
  const renderTypedChildren = (node: ReactNode, counter: { current: number }): ReactNode => {
    if (counter.current >= typedCount) return null;

    if (typeof node === "string" || typeof node === "number") {
      const str = String(node);
      const words = str.split(" ");

      return words.map((word, wIdx) => {
        const wordChars: ReactNode[] = [];
        for (let i = 0; i < word.length; i++) {
          if (counter.current < typedCount) {
            wordChars.push(
              <span key={`c-${wIdx}-${i}`} className="inline-block transform-gpu">
                {word[i]}
              </span>
            );
            counter.current += 1;
          }
        }

        let hasSpace = false;
        if (wIdx < words.length - 1 && counter.current < typedCount) {
          counter.current += 1;
          hasSpace = true;
        }

        if (wordChars.length === 0 && !hasSpace) return null;

        return (
          <span key={`w-${wIdx}`} className="inline-block whitespace-nowrap mr-[0.25em]">
            {wordChars}
          </span>
        );
      });
    }

    if (React.isValidElement(node)) {
      const element = node as React.ReactElement<any>;
      if (element.type === "br") {
        if (counter.current < typedCount) {
          counter.current += 1;
          return <br key={`br-${counter.current}`} />;
        }
        return null;
      }

      const children = element.props.children;
      const processedChildren = React.Children.map(children, (child) =>
        renderTypedChildren(child, counter)
      );

      return React.cloneElement(element, { ...element.props }, processedChildren);
    }

    if (Array.isArray(node)) {
      return React.Children.map(node, (child) =>
        renderTypedChildren(child, counter)
      );
    }

    return null;
  };

  const counter = { current: 0 };
  const typedContent = renderTypedChildren(children, counter);

  return (
    <Component
      ref={containerRef as any}
      className={`relative block ${containerClassName}`}
    >
      <span className={`inline-block ${textClassName}`}>
        {typedContent}
        {(!isCompleted || !hideCursorOnComplete) && (
          <span
            className="inline-block w-[3px] sm:w-[4px] h-[0.8em] align-baseline ml-[2px] rounded-full animate-cursor-blink shrink-0"
            style={{ backgroundColor: cursorColor, boxShadow: `0 0 8px ${cursorColor}` }}
          />
        )}
      </span>
    </Component>
  );
}
