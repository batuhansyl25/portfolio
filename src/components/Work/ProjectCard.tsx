import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Project } from '@data/projects';
import './Work.css';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className="project-card glass"
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <span className="project-category">{project.category}</span>
      </div>

      <div className="project-details">
        <div className="project-detail-item">
          <span className="detail-label">Challenge</span>
          <p className="detail-text">{project.challenge}</p>
        </div>
        <div className="project-detail-item">
          <span className="detail-label">Solution</span>
          <p className="detail-text">{project.solution}</p>
        </div>
        <div className="project-detail-item">
          <span className="detail-label">Result</span>
          <p className="detail-text result">{project.result}</p>
        </div>
      </div>

      <div className="project-tech">
        {project.tech.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-links">
        <Link to={`/projects/${project.id}`} className="project-link">
          View Details →
        </Link>
      </div>
    </motion.div>
  );
}
