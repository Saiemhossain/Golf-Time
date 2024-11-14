/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { useEffect } from 'react'
import './App.css'
import { useState } from 'react';
import { data } from 'autoprefixer';

function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('http://localhost:1337/api/blogs?populate=*')
      .then(res => res.json())
      .then(data => {
        console.log(data.data);
        setBlogs(data.data)
      });
  }, []);

  return (
    <>
      <section className="max-w-[600px] p-20 mx-auto">
        {blogs.map(blog => (
          <div key={blog.id} className="shadow mb-5 p-10">
            <h2 className="text-2xl">{blog.Title}</h2>
            <img src = {`http://localhost:1337/${blog.Image[0].formats.medium.url}`} />
            
          </div>
        ))}
      </section>
    </>
  );
}

export default App
