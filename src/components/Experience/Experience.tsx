import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TimelineItem } from './TimelineItem';
import './Experience.css';

const experiences = [
  {
    company: 'OGPU',
    role: 'Full Stack Developer',
    period: '2024 – 2025',
    responsibilities: [
      'Built end-to-end features using React/TypeScript frontend and Node.js/NestJS backend for web3 platform serving 10K+ daily users',
      'Designed and implemented RESTful APIs with NestJS, ensuring scalable backend architecture and clean separation of concerns',
      'Developed scalable React components with complex state management for crypto wallet integrations',
      'Optimized full-stack performance achieving 90+ Lighthouse scores and efficient database queries',
      'Shipped product features from database to UI, collaborating across design, product, and infrastructure teams',
    ],
  },
  {
    company: 'Private Company',
    role: 'Frontend Developer',
    period: '2021 – 2024',
    responsibilities: [
      'Led frontend development for 100+ client projects across SaaS, e-commerce, and dashboards',
      'Designed and implemented reusable component library reducing development time by 60%',
      'Integrated REST APIs and built data-driven UI layers for complex business applications',
      'Mentored junior developers on React best practices and modern frontend architecture',
      'Worked directly with product and backend teams to deliver features from concept to production',
    ],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="experience" ref={ref}>
      <motion.div
        className="experience-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Experience</h2>
        <p className="experience-subtitle">
          Building production-ready frontends for 3+ years
        </p>
      </motion.div>

      <div className="timeline">
        <div className="timeline-line" />
        {experiences.map((exp, index) => (
          <TimelineItem
            key={exp.company}
            company={exp.company}
            role={exp.role}
            period={exp.period}
            responsibilities={exp.responsibilities}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>
    </section>
  );
}
