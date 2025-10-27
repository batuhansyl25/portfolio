import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleEmailClick = () => {
    window.location.href = 'mailto:bthnsoylu35@gmail.com';
  };

  const handleGitHubClick = () => {
    // In a real implementation, this would open GitHub profile
    //target _blank
    window.location.href = 'https://github.com/batuhansyl25', '_blank';
  };

  const handleLinkedInClick = () => {
    // In a real implementation, this would open LinkedIn profile
    window.location.href = 'https://www.linkedin.com/in/batuhansoylu/', '_blank';
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div
          ref={ref}
          className="contact-content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Contact</h2>
          
          <div className="contact-info">
            <motion.div
              className="contact-item"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3>Email</h3>
              <p>bthnsoylu35@gmail.com</p>
            </motion.div>
            
            <motion.div
              className="contact-item"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h3>Location</h3>
              <p>İzmir, Türkiye</p>
            </motion.div>
          </div>
          
          <motion.div
            className="contact-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button className="btn btn-primary" onClick={handleEmailClick}>
              Send Email
            </button>
            <button className="btn btn-secondary" >
              <a href="https://github.com/batuhansyl25" target="_blank" rel="noopener noreferrer">GitHub</a>
            </button>
            <button className="btn btn-secondary" >
              <a href="https://www.linkedin.com/in/batuhansoylu/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
