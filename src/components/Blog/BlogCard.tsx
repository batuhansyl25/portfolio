import { motion } from 'framer-motion';
import { BlogPost } from '@data/blogPosts';
import './Blog.css';

interface BlogCardProps {
  post: BlogPost;
  index: number;
  onClick: () => void;
  isInView: boolean;
}

export function BlogCard({ post, index, onClick, isInView }: BlogCardProps) {
  return (
    <motion.div
      className="blog-card glass"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      onClick={onClick}
    >
      <h3 className="blog-card-title">{post.title}</h3>
      <p className="blog-card-excerpt">{post.excerpt}</p>
      <div className="blog-card-meta">
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>
      <button className="blog-card-btn">Read Article →</button>
    </motion.div>
  );
}
