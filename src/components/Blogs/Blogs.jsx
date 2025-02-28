import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleBookmark}) => {
    const [blogs, setBlogs]=useState([]);
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then (data => setBlogs(data))
    },[])
    return (
        <div>
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map (blog=> <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark}></Blog>)
            }
        </div>
    );
};

export default Blogs;