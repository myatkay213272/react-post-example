import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import EditPost from './EditPost';

const PostsPage = ({ posts, setPosts }) => {
  const { id } = useParams();
  const postId = Number(id); 
  const navigate = useNavigate();

  const post = posts.find(post => post.id === postId);

  const handleDelete = () => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
    navigate('/');
  };

  return (
    <div className="container mt-4">
      {post ? (
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <h6 className="card-subtitle mb-2 text-muted">
              By {post.author} on {post.date}
            </h6>
            <p className="card-text">{post.content}</p>

            <div className="d-flex gap-2 mt-3">
              <Link to="/" className="btn btn-primary">Back to Home</Link>
              <button onClick={handleDelete} className="btn btn-danger">Delete</button>

              <Link to={`/edit/${postId}`} className="btn btn-warning">
                Edit Post
              </Link>


            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-danger">Post Not Found</h2>
          <p className="mb-2">Well, that's disappointing.</p>
          <Link to="/" className="btn btn-primary">Visit Our Homepage</Link>
        </div>
      )}
    </div>
  );
};

export default PostsPage;
