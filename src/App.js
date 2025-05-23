import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Post from './Post';
import HomePage from './HomePage';
import PostPage from './PostsPage';
import EditPost from './EditPost';

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Understanding JSX in React',
      author: 'John Doe',
      content: 'React makes it easy to create interactive UIs. Design simple views for each state in your application.',
      date: 'May 23, 2025'
    },
    {
      id: 2,
      title: 'Understanding useState',
      author: 'Jane Smith',
      content: 'The useState hook lets you add React state to function components.',
      date: 'May 20, 2025'
    },
    {
      id: 3,
      title: 'React Router Basics',
      author: 'Mike Johnson',
      content: 'React Router enables navigation among views of various components in a React application.',
      date: 'May 18, 2025'
    }
  ]);


  return (
    <Router>
      <Navbar/>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage posts={posts} setPosts={setPosts} />} />
          <Route path="/post" element={<Post posts={posts} setPosts={setPosts}/>} />
          <Route path="/post/:id" element={<PostPage posts={posts} setPosts={setPosts} />} />
          <Route path="/edit/:id" element={<EditPost posts={posts} setPosts={setPosts} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
