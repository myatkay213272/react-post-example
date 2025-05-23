import React, { useState } from 'react';
import logo from './logo192.png';
import Post from './Post';

const HomePage = ({posts,setPosts}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn); // toggles between true and false
  };

  return (
    <main className="container text-center mt-5">
      <button
        className="btn btn-primary mb-3"
        onClick={handleClick}
      >
        {isLoggedIn ? 'LogIn' : 'LogOut'}
      </button>

      <div>
        <img src={logo} alt="logo" className="img-fluid" style={{ width: '100px' }} />
      </div>

      <Post  posts={posts} setPosts={setPosts}/>
      
    </main>
  );
};

export default HomePage;
