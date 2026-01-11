import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { projects } from '@data/projects';
import { TaskFlowDemo } from '@components/ProjectDemos/TaskFlowDemo';
import { AnalyticsDemo } from '@components/ProjectDemos/AnalyticsDemo';
import { DesignSystemDemo } from '@components/ProjectDemos/DesignSystemDemo';
import { CheckoutDemo } from '@components/ProjectDemos/CheckoutDemo';
import { AdminPanelDemo } from '@components/ProjectDemos/AdminPanelDemo';
import { LandingBuilderDemo } from '@components/ProjectDemos/LandingBuilderDemo';
import './ProjectDetail.css';

const demoComponents: Record<string, React.ComponentType> = {
  'task-flow-ui': TaskFlowDemo,
  'analytics-dashboard': AnalyticsDemo,
  'design-system': DesignSystemDemo,
  'payment-flow': CheckoutDemo,
  'admin-panel': AdminPanelDemo,
  'landing-optimizer': LandingBuilderDemo,
};

// Unique theme colors for each project
const projectThemes: Record<string, { primary: string; secondary: string; accent: string }> = {
  'task-flow-ui': { primary: '#667eea', secondary: '#764ba2', accent: '#a5b4fc' },
  'analytics-dashboard': { primary: '#f093fb', secondary: '#f5576c', accent: '#fda4af' },
  'design-system': { primary: '#4facfe', secondary: '#00f2fe', accent: '#7dd3fc' },
  'payment-flow': { primary: '#43e97b', secondary: '#38f9d7', accent: '#6ee7b7' },
  'admin-panel': { primary: '#fa709a', secondary: '#fee140', accent: '#fbbf24' },
  'landing-optimizer': { primary: '#30cfd0', secondary: '#330867', accent: '#a78bfa' },
};

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    // Scroll to top when entering project detail page
    window.scrollTo(0, 0);
    
    // Apply unique theme colors to this page
    if (projectId && projectThemes[projectId]) {
      const theme = projectThemes[projectId];
      document.documentElement.style.setProperty('--project-primary', theme.primary);
      document.documentElement.style.setProperty('--project-secondary', theme.secondary);
      document.documentElement.style.setProperty('--project-accent', theme.accent);
    }

    return () => {
      // Cleanup
      document.documentElement.style.removeProperty('--project-primary');
      document.documentElement.style.removeProperty('--project-secondary');
      document.documentElement.style.removeProperty('--project-accent');
    };
  }, [projectId]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const DemoComponent = projectId ? demoComponents[projectId] : null;

  const scrollToDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    const demoSection = document.querySelector('.project-demo-section');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`project-detail project-${projectId}`}>
      {/* Hero Section */}
      <motion.section
        className="project-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="project-hero-content">
          <Link to="/#work" className="back-link">
            ← Back to Projects
          </Link>
          <span className="project-category-badge">{project.category}</span>
          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-description">{project.description}</p>

          <div className="project-cta-group">
            {DemoComponent && (
              <button onClick={scrollToDemo} className="btn btn-primary">
                View Live Demo ↓
              </button>
            )}
            {/* {project.githubUrl && (
              <a href={project.githubUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            )} */}
          </div>
        </div>
      </motion.section>

      {/* Interactive Demo Section */}
      {DemoComponent && (
        <motion.section
          className="project-demo-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <DemoComponent />
        </motion.section>
      )}

      {/* Metrics Section */}
      <motion.section
        className="project-metrics-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="section-title">Impact & Results</h2>
        <div className="metrics-grid-detail">
          {project.metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="metric-card-detail glass"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            >
              <div className="metric-value-detail">{metric.value}</div>
              <div className="metric-label-detail">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Tech Stack Section */}
      <motion.section
        className="project-tech-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className="section-title">Technology Stack</h2>
        <div className="tech-stack-grid">
          {project.tech.map((tech, index) => (
            <motion.div
              key={tech}
              className="tech-stack-item glass"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Bottom CTA */}
      <motion.section
        className="project-bottom-cta"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="bottom-cta-content">
          <h2>Interested in similar work?</h2>
          <p>Let's discuss how I can help with your project.</p>
          <div className="cta-buttons">
            <Link to="/#contact" className="btn btn-primary">
              Get in Touch
            </Link>
            <Link to="/#work" className="btn btn-secondary">
              View More Projects
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
