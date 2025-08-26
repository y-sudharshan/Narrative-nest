import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const BlogEditor = ({ onSubmit, initialTitle = "", initialContent = "" }) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-3 py-2 border rounded"
        required
      />
      <ReactQuill value={content} onChange={setContent} className="bg-white" />
      <button
        type="submit"
        className="w-full bg-blue-900 text-white py-2 rounded font-bold"
      >
        Publish
      </button>
    </form>
  );
};

export default BlogEditor;
