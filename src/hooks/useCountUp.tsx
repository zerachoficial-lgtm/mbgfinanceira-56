import { useEffect, useState } from 'react';
import { useScrollAnimation } from './useScrollAnimation';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  start?: number;
  suffix?: string;
  prefix?: string;
  formatter?: (value: number) => string;
}

export const useCountUp = ({
  end,
  duration = 2000,
  start = 0,
  suffix = '',
  prefix = '',
  formatter
}: UseCountUpOptions) => {
  const [count, setCount] = useState(start);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = start + (end - start) * easeOutQuart;
      
      setCount(Math.floor(currentCount));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration, start]);

  const formatValue = () => {
    if (formatter) {
      return formatter(count);
    }
    return `${prefix}${count.toLocaleString('pt-BR')}${suffix}`;
  };

  return { ref, value: formatValue(), isVisible };
};

export const formatLargeNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(0)}Mi`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(0)}K`;
  }
  return num.toString();
};