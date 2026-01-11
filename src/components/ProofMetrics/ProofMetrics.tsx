import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './ProofMetrics.css';

const metrics = [
  { value: '3+', label: 'Years Experience', suffix: '' },
  { value: '200', label: 'Projects', suffix: '+' },
  { value: 'React', label: '& TypeScript', suffix: '' },
  { value: 'Remote', label: 'Ready', suffix: '' },
];

export function ProofMetrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="metrics" className="metrics" ref={ref}>
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            className="metric-card glass"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="metric-value">
              {metric.value}
              {metric.suffix}
            </div>
            <div className="metric-label">{metric.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
