import React, { useEffect, useState } from "react";
import BlogEditor from "../components/BlogEditor";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBlogPage = () => {
  const { id } = useParams();
  const { token } = useSelector((state) => state.auth);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`/api/blogs/${id}`);
        setBlog(res.data);
      } catch (err) {
        alert("Failed to load blog");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  const handleSubmit = async (data) => {
    try {
      await axios.put(
        `/api/blogs/${id}`,
        data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      navigate(`/blog/${id}`);
    } catch (err) {
      alert(err.response?.data?.error || "Error updating blog");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!blog) return null;

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Edit Blog</h2>
      <BlogEditor onSubmit={handleSubmit} initialTitle={blog.title} initialContent={blog.content} />
    </div>
  );
};

export default EditBlogPage;
