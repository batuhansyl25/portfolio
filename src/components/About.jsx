import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import '../styles/about.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techStack = [
    'Go', 'Redis', 'Docker', 'Linux', 'React', 'Next.js', 'NestJS', 'Web3.js', 'Ethers.js'
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
              I'm Batuhan Soylu, a Full-Stack Engineer passionate about building high-performance and distributed systems.
              With experience across frontend, backend, and DevOps, I design full products — from database design and caching layers to frontend UI and deployment automation.
            </p>
            <p>
              I've developed large-scale Web3 applications, real-time compute APIs, and high-traffic web platforms. My daily stack includes Go, Redis, NestJS, React, Next.js, Docker, and Linux.
            </p>
            <p>
              Currently, I'm contributing to OpenGPU, building the project's backend in Go while also leading frontend integrations with Next.js and Ethers.js.
            </p>
          </div>
          
          <div className="tech-stack">
            <h3>Tech Stack</h3>
            <div className="tech-items">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="tech-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
