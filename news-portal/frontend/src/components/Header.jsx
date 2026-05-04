import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/news">News</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}