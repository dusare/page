import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { gsap } from 'gsap';

import './TextType.css';

type VariableSpeed = {
  min: number;
  max: number;
};

type TextTypeProps = HTMLAttributes<HTMLElement> & {
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: ReactNode;
  cursorClassName?: string;
  cursorBlinkDuration?: number;
  textColors?: string[];
  variableSpeed?: VariableSpeed;
  onSentenceComplete?: (sentence: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
};

function TextType({
  text,
  as: Component = 'div',
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = '',
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = '|',
  cursorClassName = '',
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ...props
}: TextTypeProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const cursorRef = useRef<HTMLSpanElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  const currentText = textArray[currentTextIndex] ?? '';
  const processedText = reverseMode ? Array.from(currentText).reverse().join('') : currentText;

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (!showCursor || !cursorRef.current) return undefined;

    gsap.set(cursorRef.current, { opacity: 1 });
    const tween = gsap.to(cursorRef.current, {
      opacity: 0,
      duration: cursorBlinkDuration,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    });

    return () => tween.kill();
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    if (!isVisible || textArray.length === 0) return undefined;

    let timeout: number;

    if (isDeleting) {
      if (displayedText === '') {
        if (!loop && currentTextIndex === textArray.length - 1) return undefined;

        onSentenceComplete?.(textArray[currentTextIndex], currentTextIndex);
        setIsDeleting(false);
        setCurrentTextIndex((previous) => (previous + 1) % textArray.length);
        setCurrentCharIndex(0);
      } else {
        timeout = window.setTimeout(() => {
          setDisplayedText((previous) => previous.slice(0, -1));
        }, deletingSpeed);
      }
    } else if (currentCharIndex < processedText.length) {
      const delay =
        currentCharIndex === 0 && displayedText === ''
          ? initialDelay
          : variableSpeed
            ? getRandomSpeed()
            : typingSpeed;

      timeout = window.setTimeout(
        () => {
          setDisplayedText((previous) => previous + processedText[currentCharIndex]);
          setCurrentCharIndex((previous) => previous + 1);
        },
        delay,
      );
    } else if (textArray.length > 1) {
      timeout = window.setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    }

    return () => window.clearTimeout(timeout);
  }, [
    currentCharIndex,
    currentTextIndex,
    deletingSpeed,
    displayedText,
    getRandomSpeed,
    isDeleting,
    isVisible,
    loop,
    initialDelay,
    onSentenceComplete,
    pauseDuration,
    processedText,
    textArray,
    typingSpeed,
    variableSpeed,
  ]);

  const shouldHideCursor = hideCursorWhileTyping && (currentCharIndex < currentText.length || isDeleting);
  const textColor = textColors.length > 0 ? textColors[currentTextIndex % textColors.length] : 'inherit';
  const componentClassName = ['text-type', className].filter(Boolean).join(' ');

  return (
    <Component ref={containerRef} className={componentClassName} {...props}>
      <span className="text-type__content" style={{ color: textColor }}>
        {displayedText}
      </span>
      {showCursor ? (
        <span
          ref={cursorRef}
          className={[
            'text-type__cursor',
            cursorClassName,
            shouldHideCursor ? 'text-type__cursor--hidden' : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {cursorCharacter}
        </span>
      ) : null}
    </Component>
  );
}

export default TextType;
