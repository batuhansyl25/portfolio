import { useEffect, useRef, useState } from 'react';
import './TechShowcase.css';

export function TechShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="tech-showcase" 
      className={`tech-showcase ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
    >
      {/* Animated grid background */}
      <div className="grid-background">
        <div className="grid-lines"></div>
        <div className="grid-glow"></div>
      </div>

      {/* Floating particles */}
      <div className="particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              '--delay': `${i * 0.3}s`,
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`,
            } as React.CSSProperties}
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div className="tech-content">
        <div className="holographic-card">
          <div className="card-glow"></div>
          <div className="card-inner">
            <h2 className="tech-title">Built for Performance</h2>
            <p className="tech-subtitle">
              Every line of code. Every component. Every interaction.
              <br />
              Crafted with precision and attention to detail.
            </p>
            
            {/* Tech stats */}
            <div className="tech-stats">
              <div className="stat-item">
                <div className="stat-value">60fps</div>
                <div className="stat-label">Smooth Animations</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">100%</div>
                <div className="stat-label">Optimized</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">∞</div>
                <div className="stat-label">Scalable</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient orbs */}
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>
    </section>
  );
}
