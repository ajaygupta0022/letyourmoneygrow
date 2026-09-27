import React, { useEffect, useState, useRef } from 'react';
import { useInView, useSpring } from 'framer-motion';

export default function AnimatedCounter({ from = 0, to, duration = 2, decimals = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(from);

  const springValue = useSpring(from, {
    duration: duration * 1000,
    bounce: 0
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(to);
    }
  }, [isInView, springValue, to]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setValue(latest);
    });
    return () => unsubscribe();
  }, [springValue]);

  const formattedValue = new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);

  return <span ref={ref}>{formattedValue}</span>;
}
