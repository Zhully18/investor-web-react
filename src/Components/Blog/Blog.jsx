import React from 'react'
import { blog } from '../data'
import './Blog.css'

const Blog = () => {
  return (
    <div>
      <div className="blog">
        <h2>Insights and Updates from Our Experts</h2>
        <p>Stay Ahead with the Latest News and Market Trends</p>
        <div className="blog_content">
            {blog.map((item) => {
              return (
                <div className="blog_list">
                  <img src={item.image} alt="" />
                  <h3>{item.title} </h3>
                  <p>{item.text} </p>
                  <button>Read More</button>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Blog