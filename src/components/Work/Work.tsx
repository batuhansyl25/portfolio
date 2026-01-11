import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { projects, Project } from '@data/projects';
import { ProjectCard } from './ProjectCard';
import './Work.css';

type FilterCategory = 'All' | 'UI' | 'Dashboard' | 'SaaS';

const filters: FilterCategory[] = ['All', 'UI', 'Dashboard', 'SaaS'];

export function Work() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProjects: Project[] =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="work" ref={ref}>
      <motion.div
        className="work-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Selected Work</h2>
        <p className="work-subtitle">
          Real projects, real impact. Here's how I solve problems with code.
        </p>
      </motion.div>

      <motion.div
        className="work-filters"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </motion.div>

      <motion.div className="projects-grid" layout>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
