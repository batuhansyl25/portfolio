import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scrollTo } from '@utils/scrollTo';
import './Navigation.css';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Find active section only on homepage
      if (isHomePage) {
        const sections = navItems.map((item) => item.id);
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleNavClick = (sectionId: string) => {
    if (isHomePage) {
      scrollTo(sectionId);
    }
    // If not on homepage, the Link will handle navigation
  };

  return (
    <motion.nav
      className={`navigation ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="nav-content">
        <Link to="/" className="nav-logo">
          <span className="text-gradient">BS</span>
        </Link>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              {isHomePage ? (
                <button
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  to={`/#${item.id}`}
                  className="nav-link"
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
