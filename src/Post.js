import { format } from 'date-fns'
import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({posts}) => {

  return (
   <>
    {
      posts.map(post => (
  <div className="container mt-4" key={post.id}>
      <div className="card">
        <div className="card-body">
          <Link to={`/post/${post.id}`}>
          <h4 className="card-title">{post.title}</h4>
        </Link>

          <h6 className="card-subtitle mb-2 text-muted">
            By {post.author} on {posts.date}
          </h6>
          <p className="card-text">
            {post.content.length < 40 ? post.content :` ${post.content.slice(0,40)}....`}
          </p>
        </div>
      </div>
    </div>      
    
  ))
    }
   </>
  )
}

export default Post

