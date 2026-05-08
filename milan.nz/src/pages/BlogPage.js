import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import posts from '../posts';
import './BlogPage.css';

function BlogPage() {
  return (
    <div className="blogPage">
      <Navbar />
      <div className="blogContent">
        <h1 className="blogTitle">BLOG</h1>
        {posts.map(post => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="post-card">
            <p className="post-card-title">{post.title}</p>
            <p className="post-card-date">{post.date}</p>
            <p className="post-card-excerpt">{post.excerpt}</p>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default BlogPage;
