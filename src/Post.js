import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import AddPost from './AddPost';

const Post = ({
  posts,
  setPosts,
  addPostTitle,
  setAddPostTitle,
  addPostAuthor,
  setAddPostAuthor,
  addPostContent,
  setAddPostContent,
  handleClick
}) => {
  return (
    <>
      <div className="container ">
        <div className="row">

           <div className="mt-2">
          <h5>Add a New Post</h5>
          <AddPost
            posts = {posts}
            setPosts={setPosts}
            addPostTitle={addPostTitle}
            setAddPostTitle={setAddPostTitle}
            addPostAuthor={addPostAuthor}
            setAddPostAuthor={setAddPostAuthor}
            addPostContent={addPostContent}
            setAddPostContent={setAddPostContent}
            handleClick={handleClick}
          />
        </div>

          {posts.map(post => (
            <div className="col-12 mb-4" key={post.id}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <Link to={`/post/${post.id}`} className="text-decoration-none">
                    <h4 className="card-title text-primary">{post.title}</h4>
                  </Link>
                  <h6 className="card-subtitle mb-2 text-muted">
                    By {post.author} on {post.date}
                  </h6>
                  <p className="card-text">
                    {post.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default Post;
