import { motion } from 'framer-motion';
import './Skills.css';

interface SkillCardProps {
  title: string;
  description: string;
  index: number;
  isInView: boolean;
}

export function SkillCard({ title, description, index, isInView }: SkillCardProps) {
  return (
    <motion.div
      className="skill-card glass"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <h4 className="skill-title">{title}</h4>
      <p className="skill-description">{description}</p>
    </motion.div>
  );
}
