import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import '../styles/experience.css';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "OpenGPU",
      position: "Full Stack Engineer",
      period: "2024 – Present",
      techStack: "Distributed Systems, Go + Next.js + Redis",
      description: "At OpenGPU, I designed the backend architecture for a distributed Web3 compute network, combining blockchain processing, real-time task orchestration, and secure key management.",
      achievements: [
        "Developed transaction queue systems with Go + Redis Streams, ensuring low-latency and concurrency safety.",
        "Integrated Ethereum smart contract modules for on-chain compute validation.",
        "Built secure REST & WebSocket APIs for cross-chain event handling.",
        "Designed cryptographic signing workflows compatible with hardware wallets.",
        "Automated deployments using Docker, GitHub Actions, and Linux CI/CD pipelines."
      ]
    },
    {
      company: "Web3 Startup",
      position: "Full Stack Developer",
      period: "2022 – 2024",
      techStack: "Web3, Smart Contracts, React, Ethers.js",
      description: "Contributed to over 200 Web3 projects — from NFT marketplaces to dApp interfaces and automated on-chain tools. Balanced smart contract integration with strong API design and modular UI patterns.",
      achievements: [
        "Built secure REST & WebSocket APIs with NestJS and Express.",
        "Integrated multiple blockchains with Ethers.js and Web3.js.",
        "Created reusable React components for wallet connection, token transactions, and contract calls.",
        "Implemented backend caching and rate-limiting strategies for high-traffic apps.",
        "Improved UX flow for on-chain operations by reducing failed transactions by 40%."
      ]
    },
    // {
    //   company: "Freelance & Side Projects",
    //   position: "Full Stack Engineer",
    //   period: "2020 – 2022",
    //   techStack: "API Development, System Design",
    //   description: "Developed various SaaS and blockchain tools combining frontend React dashboards and backend automation.",
    //   achievements: [
    //     "Built monitoring and logging tools using NestJS + MongoDB.",
    //     "Created UI kits in React and TypeScript for client dashboards.",
    //     "Automated CI/CD pipelines and testing flows for multiple clients."
    //   ]
    // }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <motion.div
          ref={ref}
          className="experience-content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Experience</h2>
          
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="experience-item"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <div className="experience-header">
                  <div className="experience-number">{index + 1}️⃣</div>
                  <div className="experience-info">
                    <h3 className="company-name">{exp.company}</h3>
                    <h4 className="position">{exp.position}</h4>
                    <span className="period">{exp.period}</span>
                    <div className="tech-stack-tags">
                      {exp.techStack.split(', ').map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="experience-description">"{exp.description}"</p>
                
                <ul className="achievements">
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.li
                      key={achIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: (index * 0.2) + (achIndex * 0.1) + 0.3, duration: 0.5 }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
