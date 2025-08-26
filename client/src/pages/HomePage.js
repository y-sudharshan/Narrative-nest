import React from "react";



import BlogList from "../components/BlogList";
import SearchBar from "../components/SearchBar";
import { useState } from "react";


const HomePage = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
const features = [
  {
    title: "Rich Text Editor",
    desc: "Create beautiful blogs with a modern editor.",
    icon: "📝",
  },
  {
    title: "Comments & Likes",
    desc: "Engage with the community and share feedback.",
    icon: "💬",
  },
  {
    title: "Profile & Dashboard",
    desc: "Manage your blogs and profile easily.",
    icon: "👤",
  },
  {
    title: "Search & Filter",
    desc: "Find blogs by category, author, or keywords.",
    icon: "🔍",
  },
];

const HomePage = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16 px-4 rounded-lg mb-10 shadow-lg flex flex-col items-center">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Narrative Nest</h1>
        <p className="text-xl mb-6 max-w-2xl text-center">A dynamic platform to create, share, and discover amazing stories and blogs. Join the community and start your narrative today!</p>
        <a href="/create" className="bg-white text-blue-900 font-bold px-6 py-3 rounded-full shadow hover:bg-blue-100 transition">Start Writing</a>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {features.map((f) => (
          <div key={f.title} className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
            <span className="text-4xl">{f.icon}</span>
            <div>
              <h3 className="font-bold text-lg mb-1">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Search and Blog List */}
      <SearchBar onSearch={setSearch} />
      <BlogList search={search} />
    </div>
  );
};

export default HomePage;
