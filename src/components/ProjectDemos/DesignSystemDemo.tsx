import { useState } from 'react';
import { motion } from 'framer-motion';
import './DemoStyles.css';

export function DesignSystemDemo() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [buttonVariant, setButtonVariant] = useState<'primary' | 'secondary' | 'outline'>('primary');

  return (
    <div className={`demo-container design-system-demo theme-${theme}`}>
      <div className="demo-header">
        <h3>🎨 Component Library - Interactive Demo</h3>
        <p>Explore 50+ production-ready components with theming support</p>
      </div>

      <div className="design-controls">
        <div className="control-group">
          <label>Theme:</label>
          <div className="button-group">
            <button 
              className={theme === 'light' ? 'active' : ''}
              onClick={() => setTheme('light')}
            >
              ☀️ Light
            </button>
            <button 
              className={theme === 'dark' ? 'active' : ''}
              onClick={() => setTheme('dark')}
            >
              🌙 Dark
            </button>
          </div>
        </div>

        <div className="control-group">
          <label>Button Variant:</label>
          <div className="button-group">
            <button 
              className={buttonVariant === 'primary' ? 'active' : ''}
              onClick={() => setButtonVariant('primary')}
            >
              Primary
            </button>
            <button 
              className={buttonVariant === 'secondary' ? 'active' : ''}
              onClick={() => setButtonVariant('secondary')}
            >
              Secondary
            </button>
            <button 
              className={buttonVariant === 'outline' ? 'active' : ''}
              onClick={() => setButtonVariant('outline')}
            >
              Outline
            </button>
          </div>
        </div>
      </div>

      <div className="component-showcase">
        <div className="showcase-section glass">
          <h4>Buttons</h4>
          <div className="component-row">
            <motion.button 
              className={`demo-btn ${buttonVariant}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Click Me
            </motion.button>
            <motion.button 
              className={`demo-btn ${buttonVariant}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled
            >
              Disabled
            </motion.button>
          </div>
        </div>

        <div className="showcase-section glass">
          <h4>Input Fields</h4>
          <div className="component-row">
            <input 
              type="text" 
              className="demo-input" 
              placeholder="Enter your name"
            />
            <input 
              type="email" 
              className="demo-input" 
              placeholder="email@example.com"
            />
          </div>
        </div>

        <div className="showcase-section glass">
          <h4>Cards</h4>
          <div className="component-row">
            <motion.div 
              className="demo-card"
              whileHover={{ y: -5 }}
            >
              <div className="card-header">Card Title</div>
              <div className="card-body">
                This is a beautiful card component with smooth animations.
              </div>
            </motion.div>
          </div>
        </div>

        <div className="showcase-section glass">
          <h4>Alerts</h4>
          <div className="component-row vertical">
            <div className="demo-alert success">
              ✓ Success! Your changes have been saved.
            </div>
            <div className="demo-alert warning">
              ⚠ Warning! Please review your input.
            </div>
            <div className="demo-alert error">
              ✕ Error! Something went wrong.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
