import { type ReactNode } from 'react';
import { motion } from 'motion/react';

import './Stepper.css';

type StepperProps = {
  steps: string[];
  label?: string;
  className?: string;
  renderStepLabel?: (step: string, index: number) => ReactNode;
};

function CheckIcon() {
  return (
    <svg className="rb-stepper-check" fill="none" stroke="currentColor" strokeWidth={2.4} viewBox="0 0 24 24">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.15, type: 'tween', ease: 'easeOut', duration: 0.35 }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default function Stepper({
  steps,
  label = 'Pasos completados',
  className = '',
  renderStepLabel,
}: StepperProps) {
  return (
    <div className={['rb-stepper', className].filter(Boolean).join(' ')} aria-label={label}>
      {steps.map((step, index) => (
        <div key={step} className="rb-stepper-item">
          <motion.div
            className="rb-stepper-indicator"
            initial={{ scale: 0.78, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.12 }}
          >
            <CheckIcon />
          </motion.div>
          <span className="rb-stepper-label">
            {renderStepLabel ? renderStepLabel(step, index) : step}
          </span>
          {index < steps.length - 1 ? (
            <motion.span
              className="rb-stepper-connector"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.42, delay: index * 0.12 + 0.12 }}
              aria-hidden="true"
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}
