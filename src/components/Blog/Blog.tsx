import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { blogPosts, BlogPost } from '@data/blogPosts';
import { BlogCard } from './BlogCard';
import { BlogModal } from './BlogModal';
import './Blog.css';

export function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="blog" className="blog" ref={ref}>
      <motion.div
        className="blog-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Blog</h2>
        <p className="blog-subtitle">
          Sharing what I've learned building frontends at scale
        </p>
      </motion.div>

      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={post.id}
            post={post}
            index={index}
            onClick={() => setSelectedPost(post)}
            isInView={isInView}
          />
        ))}
      </div>

      <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </section>
  );
}
