import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillCategories } from '@data/skills';
import { SkillCard } from './SkillCard';
import './Skills.css';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="skills" ref={ref}>
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Core Skills & Strengths</h2>
        <p className="skills-subtitle">
          Not just what I use—how I work and what I bring to teams
        </p>
      </motion.div>

      <div className="skills-categories">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
          >
            <h3 className="category-title">{category.category}</h3>
            <div className="category-skills">
              {category.skills.map((skill, skillIndex) => (
                <SkillCard
                  key={skill.title}
                  title={skill.title}
                  description={skill.description}
                  index={skillIndex}
                  isInView={isInView}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
