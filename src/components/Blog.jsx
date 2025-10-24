import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import BlogPost from './BlogPost';
import { getAllBlogPosts } from '../utils/markdownParser';
import '../styles/blog.css';

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = getAllBlogPosts().map((post, index) => ({
    id: post.id,
    title: post.title,
    description: post.description,
    number: `${index + 1}️⃣`,
    hasContent: true
  }));

  return (
    <section id="blog" className="blog">
      <div className="blog-container">
        <motion.div
          ref={ref}
          className="blog-content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Blog</h2>
          
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                className="blog-card"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -5 }}
                onClick={() => post.hasContent && setSelectedPost(post.id)}
                style={{ cursor: post.hasContent ? 'pointer' : 'default' }}
              >
                <div className="blog-number">{post.number}</div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-description">{post.description}</p>
                {post.hasContent && (
                  <div className="blog-indicator">
                    <span>Read More</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <BlogPost 
        isOpen={selectedPost !== null} 
        onClose={() => setSelectedPost(null)}
        postId={selectedPost}
      />
    </section>
  );
};

export default Blog;
