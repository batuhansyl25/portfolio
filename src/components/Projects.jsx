import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import '../styles/projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      emoji: "🧮",
      title: "Secure Compute & Transaction Backend",
      subtitle: "Go • Redis • Docker • Web3",
      description: "Built a distributed backend capable of processing 10K+ secure transactions per second with real-time signing and verification.",
      results: "→ Achieved 85% latency reduction, zero memory leaks, and stable throughput across multi-node clusters.",
      stack: ["Go", "Redis", "Docker", "Web3"]
    },
    {
      emoji: "💳",
      title: "Smart Contract & Tokenization API",
      subtitle: "Solidity • NestJS • Ethers.js",
      description: "Developed APIs for asset tokenization and decentralized custody systems.",
      results: "→ Supported ERC-20 / ERC-721 smart contracts with real-time metadata syncing and off-chain validation.",
      stack: ["Solidity", "NestJS", "Ethers.js"]
    },
    {
      emoji: "⚙️",
      title: "Continuous Integration & Secure Deployment",
      subtitle: "Docker • GitHub Actions • Linux",
      description: "Implemented end-to-end CI/CD pipelines with image verification, rollback, and automated secrets management.",
      results: "→ Reduced deployment errors by 70%, increased overall uptime and system security.",
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
                <div className="project-header">
                  {/* <div className="project-emoji">{highlight.emoji}</div> */}
                  <div className="project-info">
                    <h3 className="project-title">{highlight.title}</h3>
                    <h4 className="project-subtitle">{highlight.subtitle}</h4>
                  </div>
                </div>
                
                <div className="project-content">
                  <p className="project-description">{highlight.description}</p>
                  <p className="project-results">{highlight.results}</p>
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
