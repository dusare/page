import { motion } from 'motion/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import './BlurText.css';

type AnimationSnapshot = Record<string, string | number>;

type BlurTextProps = {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  animationFrom?: AnimationSnapshot;
  animationTo?: AnimationSnapshot[];
  easing?: (value: number) => number;
  onAnimationComplete?: () => void;
  stepDuration?: number;
};

const buildKeyframes = (from: AnimationSnapshot, steps: AnimationSnapshot[]) => {
  const keys = new Set([...Object.keys(from), ...steps.flatMap((step) => Object.keys(step))]);
  const keyframes: Record<string, Array<string | number>> = {};

  keys.forEach((key) => {
    const values = [from[key], ...steps.map((step) => step[key])];
    const fallback = values.find((value) => value !== undefined) ?? 0;
    keyframes[key] = values.map((value) => value ?? fallback);
  });

  return keyframes;
};

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (value) => value,
  onAnimationComplete,
  stepDuration = 0.35,
}: BlurTextProps) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  const defaultFrom = useMemo<AnimationSnapshot>(
    () => ({
      filter: 'blur(10px)',
      opacity: 0,
      y: direction === 'top' ? -50 : 50,
    }),
    [direction],
  );

  const defaultTo = useMemo<AnimationSnapshot[]>(
    () => [
      {
        filter: 'blur(5px)',
        opacity: 0.5,
        y: direction === 'top' ? 5 : -5,
      },
      { filter: 'blur(0px)', opacity: 1, y: 0 },
    ],
    [direction],
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;
  const animateKeyframes = useMemo(
    () => buildKeyframes(fromSnapshot, toSnapshots),
    [fromSnapshot, toSnapshots],
  );
  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from(
    { length: stepCount },
    (_, index) => (stepCount === 1 ? 0 : index / (stepCount - 1)),
  );
  return (
    <span ref={ref} className={`blur-text ${className}`} aria-label={text}>
      {elements.map((segment, index) => (
        <motion.span
          className="blur-text-segment"
          key={`${segment}-${index}`}
          aria-hidden="true"
          initial={fromSnapshot}
          animate={inView ? animateKeyframes : fromSnapshot}
          transition={{
            duration: totalDuration,
            times,
            delay: (index * delay) / 1000,
            ease: easing,
          }}
          onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
        >
          {segment}
          {animateBy === 'words' && index < elements.length - 1 ? '\u00A0' : null}
        </motion.span>
      ))}
    </span>
  );
};

export default BlurText;
