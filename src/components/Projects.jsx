import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import '../styles/projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      title: "OpenGPU Core Backend",
      subtitle: "Go • Redis • Docker • CI/CD",
      challenge: "Designing the compute orchestration layer for OpenGPU, handling job scheduling, distributed processing, and state management.",
      solution: "Built a distributed queue system using Redis Streams and Go worker pools, implementing connection pooling and circuit breakers for high availability.",
      results: "Reduced latency by 85% and achieved 10K+ ops/sec throughput.",
      stack: ["Go", "Redis", "Docker", "CI/CD"]
    },
    {
      title: "Full-Stack Web3 Infrastructure",
      subtitle: "React • NestJS • Ethers.js • Next.js",
      challenge: "Creating reusable SDKs and UI components for wallet connection, contract read/write, and real-time blockchain event listeners.",
      solution: "Built comprehensive React component library with Next.js, integrating Web3.js and Ethers.js for multi-chain support with custom hooks for state management.",
      results: "Accelerated dApp development by 70%, simplified multi-chain integration.",
      stack: ["React", "NestJS", "Ethers.js", "Next.js"]
    },
    {
      title: "CI/CD Deployment Automation",
      subtitle: "Docker • GitHub Actions • Linux",
      challenge: "Building standardized pipelines for building, testing, and deploying Go + Node.js microservices.",
      solution: "Created Docker-based deployment templates with GitHub Actions, implementing blue-green deployments, automated testing, and monitoring integration.",
      results: "Reduced deployment time from 12 min → 3 min, increased reliability across environments.",
      stack: ["Docker", "GitHub Actions", "Linux"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.div
          ref={ref}
          className="projects-content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Work Highlights</h2>
          
          <div className="projects-grid">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <div className="project-number">{index + 1}️⃣</div>
                <h3 className="project-title">{highlight.title}</h3>
                <h4 className="project-subtitle">{highlight.subtitle}</h4>
                
                <div className="case-study">
                  <div className="case-section">
                    <h5 className="case-label">Challenge</h5>
                    <p className="case-text">{highlight.challenge}</p>
                  </div>
                  
                  <div className="case-section">
                    <h5 className="case-label">Solution</h5>
                    <p className="case-text">{highlight.solution}</p>
                  </div>
                  
                  <div className="case-section">
                    <h5 className="case-label">Results</h5>
                    <p className="case-text results-text">{highlight.results}</p>
                  </div>
                </div>
                
                <div className="project-stack">
                  {highlight.stack.map((tech, techIndex) => (
                    <span key={techIndex} className="stack-item">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
