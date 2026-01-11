import { Link } from 'react-router-dom';
import './ErrorBoundary.css';

export function ErrorBoundary() {
  return (
    <div className="error-boundary">
      <div className="error-content">
        <div className="error-icon">⚠️</div>
        <h1 className="error-title">Oops! Something went wrong</h1>
        <p className="error-message">
          The page you're looking for doesn't exist or an error occurred.
        </p>
        <div className="error-actions">
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
          <button 
            onClick={() => window.location.reload()} 
            className="btn btn-secondary"
          >
            Refresh Page
          </button>
        </div>
      </div>
    </div>
  );
}
