import { useState } from 'react';
import { format } from 'date-fns';

const AddPost = ({ posts, setPosts }) => {
  const [addPostTitle, setAddPostTitle] = useState('');
  const [addPostAuthor, setAddPostAuthor] = useState('');
  const [addPostContent, setAddPostContent] = useState('');

  const handleClick = () => {
    // Generate next id
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    // Format current date and time
    const date = format(new Date(), 'MMM dd, yyyy pp');
    const newPost = {
      id,
      title: addPostTitle,
      author: addPostAuthor,
      content: addPostContent,
      date,
    };

    // Add new post at the beginning of posts array
    setPosts([newPost, ...posts]);

    // Clear inputs
    setAddPostTitle('');
    setAddPostAuthor('');
    setAddPostContent('');
  };

  return (
    <>
      <form
        className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-2 mb-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="form-control"
          type="text"
          placeholder="Post title"
          value={addPostTitle}
          onChange={(e) => setAddPostTitle(e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Author"
          value={addPostAuthor}
          onChange={(e) => setAddPostAuthor(e.target.value)}
        />
        <textarea
          className="form-control"
          rows="1"
          placeholder="Content"
          value={addPostContent}
          onChange={(e) => setAddPostContent(e.target.value)}
        ></textarea>
        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleClick}
        >
          Add
        </button>
      </form>
    </>
  );
};

export default AddPost;
