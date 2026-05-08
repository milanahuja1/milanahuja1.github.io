import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import posts from '../posts';
import './BlogPostPage.css';

function BlogPostPage() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  return (
    <div className="blogPostPage">
      <Navbar />
      <div className="blogPostContent">
        {post ? (
          <>
            <Link to="/blog" className="blogPost-back">← Back to blog</Link>
            <h1 className="blogPost-title">{post.title}</h1>
            <p className="blogPost-date">{post.date}</p>
            <div className="blogPost-body">{post.content}</div>
          </>
        ) : (
          <div className="blogPost-404">
            <h2>Post not found.</h2>
            <Link to="/blog" className="blogPost-back">← Back to blog</Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default BlogPostPage;
