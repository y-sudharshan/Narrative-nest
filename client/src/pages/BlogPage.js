import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import CommentSection from "../components/CommentSection";

const BlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token, user } = useSelector((state) => state.auth);


  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`/api/blogs/${id}`);
        setBlog(res.data);
      } catch (err) {
        setError("Failed to load blog");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      await axios.delete(`/api/blogs/${id}`, { headers: { Authorization: `Bearer ${token}` } });
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.error || "Error deleting blog");
    }
  };

  const handleLike = async () => {
    if (!token) return alert("Login to like blogs");
    try {
      const res = await axios.post(
        `/api/blogs/${id}/like`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setBlog(res.data);
    } catch (err) {
      alert(err.response?.data?.error || "Error liking blog");
    }
  };

  const handleCommentAdded = (comment) => {
    setBlog((prev) => ({ ...prev, comments: [...prev.comments, comment] }));
  };

  if (loading) return <p>Loading blog...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!blog) return null;

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">{blog.title}</h2>
      <div className="mb-4 text-gray-700" dangerouslySetInnerHTML={{ __html: blog.content }} />
      <div className="mb-4 text-sm text-gray-500">By {blog.author?.username || "Unknown"}</div>
      {user && blog.author?._id === user.id && (
        <div className="mb-4 flex gap-2">
          <button onClick={handleEdit} className="bg-yellow-500 text-white px-4 py-2 rounded font-bold">Edit</button>
          <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded font-bold">Delete</button>
        </div>
      )}
      <button
        onClick={handleLike}
        className="bg-blue-900 text-white px-4 py-2 rounded font-bold mb-4"
      >
        Like ({blog.likes.length})
      </button>
      <CommentSection blogId={id} comments={blog.comments || []} onCommentAdded={handleCommentAdded} />
    </div>
  );
};

export default BlogPage;
