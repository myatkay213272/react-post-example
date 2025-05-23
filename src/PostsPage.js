import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PostsPage = ({ posts }) => {
  const { id } = useParams(); 
  const post = posts.find(post => post.id === Number(id)); 

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
            <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>

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
