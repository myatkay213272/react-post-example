import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = ({ posts, setPosts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const postId = Number(id);

  const post = posts.find((p) => p.id === postId);

  const [editTitle, setEditTitle] = useState('');
  const [editAuthor, setEditAuthor] = useState('');
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditAuthor(post.author);
      setEditContent(post.content);
    }
  }, [post]);

  const handleSave = () => {
    const updatedPost = {
      ...post,
      title: editTitle,
      author: editAuthor,
      content: editContent,
    };

    const updatedPosts = posts.map((p) =>
      p.id === postId ? updatedPost : p
    );

    setPosts(updatedPosts);
    navigate('/');
  };

  if (!post) {
    return (
      <div className="container mt-4">
        <h2 className="text-danger">Post Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Edit Post</h2>
      <form onSubmit={(e) => e.preventDefault()} className="d-flex flex-column gap-3">
        <input
          className="form-control"
          type="text"
          placeholder="Post Title"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Author"
          value={editAuthor}
          onChange={(e) => setEditAuthor(e.target.value)}
        />
        <textarea
          className="form-control"
          rows="3"
          placeholder="Content"
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
        ></textarea>
        <div className="d-flex gap-2">
          <button className="btn btn-success" onClick={handleSave}>
            Save Changes
          </button>
          <button className="btn btn-secondary" onClick={() => navigate('/')}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
