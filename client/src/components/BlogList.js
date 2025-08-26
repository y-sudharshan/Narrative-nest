import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BlogList = ({ search = "" }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("/api/blogs");
        setBlogs(res.data);
      } catch (err) {
        setError("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const filtered = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.content.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading blogs...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {filtered.map((blog) => (
        <div key={blog._id} className="bg-white p-6 rounded shadow">
          <Link to={`/blog/${blog._id}`} className="text-xl font-bold text-blue-900 hover:underline">
            {blog.title}
          </Link>
          <p className="mt-2 text-gray-700" dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 100) + "..." }} />
          <div className="mt-4 text-sm text-gray-500">By {blog.author?.username || "Unknown"}</div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
