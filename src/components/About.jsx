import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import "../styles/about.css";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techStackCategories = [
    {
      category: "Languages",
      items: ["Go", "TypeScript", "Solidity", "JavaScript", "Python"]
    },
    {
      category: "Backend",
      items: ["NestJS", "Express", "Redis", "PostgreSQL"]
    },
    {
      category: "Blockchain",
      items: ["Ethereum", "Web3.js", "Ethers.js", "Hardhat"]
    },
    {
      category: "Tools",
      items: ["Docker", "GitHub Actions", "Linux", "CI/CD"]
    },
    // {
    //   category: "Domains",
    //   items: ["Digital Asset Custody", "Tokenization", "Secure API Design"]
    // }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          ref={ref}
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>

          <div className="about-text">
            <p>
              I’m Batuhan Soylu, a Full-Stack Engineer focused on
              blockchain-backed financial systems and secure distributed
              infrastructures. My work combines traditional backend engineering
              with modern decentralized architecture — bridging the gap between
              Web2 reliability and Web3 innovation.
            </p>
            <p>
              At OpenGPU, I’ve built distributed compute and transaction
              processing systems using Go, Redis, and NestJS. I also design
              wallet management layers, transaction verification tools, and
              scalable APIs compatible with Ethereum and Layer 2 protocols.
            </p>
            <p>
              I’m passionate about integrating blockchain technologies into
              regulated environments, ensuring compliance, performance, and
              cryptographic integrity across every layer of the stack.
            </p>
          </div>

          <div className="tech-stack">
            <h3>🚀 Tech Stack</h3>
            <div className="tech-categories">
              {techStackCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  className="tech-category"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                >
                  <h4 className="category-title">{category.category}:</h4>
                  <div className="tech-items">
                    {category.items.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="tech-item"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.8 }
                        }
                        transition={{ 
                          delay: (categoryIndex * 0.1) + (techIndex * 0.05) + 0.2, 
                          duration: 0.5 
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
