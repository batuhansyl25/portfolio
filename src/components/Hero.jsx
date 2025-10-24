import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import '../styles/hero.css';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = "Full-Stack Engineer specialized in Go, Web3, and Distributed Systems.";
  
  useEffect(() => {
    // Reset animation when component mounts
    setDisplayedText('');
    setCurrentIndex(0);
    setShowCursor(true);
  }, []);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50); // Adjust speed here (lower = faster)
      
      return () => clearTimeout(timeout);
    } else {
      // Start cursor blinking after typing is complete
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      
      return () => clearInterval(cursorInterval);
    }
  }, [currentIndex, fullText]);

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    // In a real implementation, this would download a PDF
    alert('CV download functionality would be implemented here');
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="hero-headline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="typing-text">
              {displayedText}
              <span className={`cursor ${showCursor ? 'visible' : 'hidden'}`}>|</span>
            </span>
          </motion.h1>
          
          <motion.p
            className="hero-subhead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I build fast, reliable backends in Go with Redis and NestJS, design modern frontends with React and Next.js, and deliver production-ready systems powered by Docker and CI/CD pipelines.
          </motion.p>
          
          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Clean architecture, strong performance, and a focus on scalable real-world systems.
          </motion.p>
          
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <button className="btn btn-primary" onClick={scrollToProjects}>
              View Projects
            </button>
            <button className="btn btn-secondary" onClick={downloadCV}>
              Download CV
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
