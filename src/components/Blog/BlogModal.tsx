import { motion, AnimatePresence } from 'framer-motion';
import { BlogPost } from '@data/blogPosts';
import './Blog.css';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export function BlogModal({ post, onClose }: BlogModalProps) {
  if (!post) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-content glass"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ type: 'spring', duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
          <div className="modal-header">
            <h2>{post.title}</h2>
            <div className="modal-meta">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
          <div className="modal-body">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split('\n')
                  .map((line) => {
                    // Convert markdown headings
                    if (line.startsWith('# '))
                      return `<h1>${line.substring(2)}</h1>`;
                    if (line.startsWith('## '))
                      return `<h2>${line.substring(3)}</h2>`;
                    if (line.startsWith('### '))
                      return `<h3>${line.substring(4)}</h3>`;
                    // Convert code blocks
                    if (line.startsWith('```'))
                      return line.includes('```tsx')
                        ? '<pre><code class="language-tsx">'
                        : line.includes('```')
                        ? '</code></pre>'
                        : '';
                    // Convert bold
                    line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                    return line ? `<p>${line}</p>` : '';
                  })
                  .join(''),
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
