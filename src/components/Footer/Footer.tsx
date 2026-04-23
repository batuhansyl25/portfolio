import './Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {currentYear} Batuhan Soylu. Built with React, TypeScript & Three.js</p>
        <div className="footer-links">
          <a href="https://github.com/batuhansyl25" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/batuhansoylu" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:bthnsoylu35@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
