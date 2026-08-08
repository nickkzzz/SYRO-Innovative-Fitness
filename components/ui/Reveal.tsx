"use client";

import {
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

interface RevealProps {
  children: ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
  className?: string;
}

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      style={{
        animationDelay: `${delay}ms`,
      }}
      className={`
        ${isVisible ? `reveal-${direction}` : "opacity-0"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}