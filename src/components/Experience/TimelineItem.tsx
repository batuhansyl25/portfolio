import { motion } from 'framer-motion';
import './Experience.css';

interface TimelineItemProps {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  index: number;
  isInView: boolean;
}

export function TimelineItem({
  company,
  role,
  period,
  responsibilities,
  index,
  isInView,
}: TimelineItemProps) {
  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="timeline-dot" />
      <div className="timeline-content glass">
        <div className="timeline-header">
          <h3 className="timeline-company">{company}</h3>
          <span className="timeline-period">{period}</span>
        </div>
        <p className="timeline-role">{role}</p>
        <ul className="timeline-responsibilities">
          {responsibilities.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
