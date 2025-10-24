import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getBlogPost, parseMarkdown } from '../utils/markdownParser';
import '../styles/blog.css';

const BlogPost = ({ isOpen, onClose, postId }) => {
  const [post, setPost] = useState(null);
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    if (isOpen && postId) {
      const blogPost = getBlogPost(postId);
      if (blogPost) {
        setPost(blogPost);
        setHtmlContent(parseMarkdown(blogPost.content));
      }
    }
  }, [isOpen, postId]);

  if (!isOpen || !post) return null;

  return (
    <motion.div
      className="blog-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="blog-modal"
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="blog-modal-header">
          <h2>{post.title}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="blog-modal-content">
          <div className="blog-meta">
            <span className="blog-date">{post.date}</span>
            <span className="blog-read-time">{post.readTime}</span>
          </div>
          
          <div 
            className="blog-body"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BlogPost;
