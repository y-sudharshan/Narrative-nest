import React from "react";
import BlogEditor from "../components/BlogEditor";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBlogPage = () => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      await axios.post(
        "/api/blogs",
        data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.error || "Error creating blog");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Create Blog</h2>
      <BlogEditor onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateBlogPage;
