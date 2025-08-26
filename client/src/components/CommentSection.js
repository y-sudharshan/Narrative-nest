import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const CommentSection = ({ blogId, comments, onCommentAdded }) => {
  const [content, setContent] = useState("");
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(
        `/api/blogs/${blogId}/comment`,
        { content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setContent("");
      onCommentAdded(res.data);
    } catch (err) {
      setError(err.response?.data?.error || "Error adding comment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold mb-2">Comments</h3>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Add a comment..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="flex-1 px-3 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-900 text-white px-4 py-2 rounded font-bold"
          disabled={loading}
        >
          {loading ? "Posting..." : "Post"}
        </button>
      </form>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <div className="space-y-2">
        {comments.length === 0 && <p>No comments yet.</p>}
        {comments.map((comment) => (
          <div key={comment._id} className="bg-gray-100 p-2 rounded">
            <span className="font-bold">{comment.author?.username || "User"}:</span> {comment.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
