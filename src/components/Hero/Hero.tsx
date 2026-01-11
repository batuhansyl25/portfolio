import { Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useCursorPosition } from '@hooks/useCursorPosition';
import { scrollTo } from '@utils/scrollTo';
import './Hero.css';

const Particles = lazy(() =>
  import('./ThreeBackground').then((module) => ({ default: module.Particles }))
);

const techStack = ['React', 'TypeScript', 'Vite', 'CSS', 'Framer Motion', 'Three.js'];

export function Hero() {
  const cursor = useCursorPosition();

  return (
    <section id="hero" className="hero">
      {/* Three.js Background */}
      <div className="hero-bg">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <Particles mouseX={cursor.x} mouseY={cursor.y} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="hero-title">
            Full Stack Developer building{' '}
            <span className="text-gradient">fast, scalable, user-focused</span> web applications
          </h1>
        </motion.div>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          3+ years shipping production React & TypeScript frontends. Backend experience with Node.js & NestJS.
          <br />
          Specializing in clean architecture, component design, and end-to-end product development.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button className="btn btn-primary" onClick={() => scrollTo('work')}>
            View Selected Work
          </button>
          <button className="btn btn-secondary" onClick={() => scrollTo('contact')}>
            Contact Me
          </button>
        </motion.div>

        <motion.div
          className="hero-tech"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {techStack.map((tech, index) => (
            <motion.span
              key={tech}
              className="tech-pill"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <div className="scroll-line" />
      </motion.div>
    </section>
  );
}
