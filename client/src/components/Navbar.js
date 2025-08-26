import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-900 text-white px-4 py-3 flex justify-between items-center">
    <Link to="/" className="font-bold text-xl">Narrative Nest</Link>
    <div className="space-x-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/create" className="hover:underline">Create Blog</Link>
      <Link to="/login" className="hover:underline">Login</Link>
      <Link to="/register" className="hover:underline">Register</Link>
      <Link to="/admin" className="hover:underline">Admin</Link>
    </div>
  </nav>
);

export default Navbar;
