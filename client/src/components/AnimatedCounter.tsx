import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string | number;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({ value, duration = 2, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Parse the numeric part and the suffix (e.g., "36,000+" -> 36000 and "+")
    const stringValue = value.toString();
    const numericMatch = stringValue.match(/[\d,.]+/);
    
    if (!numericMatch) {
      setDisplayValue(stringValue);
      return;
    }

    const numericPart = parseFloat(numericMatch[0].replace(/,/g, ""));
    const prefix = stringValue.substring(0, numericMatch.index);
    const suffix = stringValue.substring((numericMatch.index || 0) + numericMatch[0].length);

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const current = Math.floor(numericPart * easeProgress);
      
      // Format number with commas
      const formattedNumber = current.toLocaleString();
      
      setDisplayValue(`${prefix}${formattedNumber}${suffix}`);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration, isInView]);

  return <span ref={ref} className={className}>{displayValue}</span>;
}
