import { Link } from "@tanstack/react-router";
import "../styles/Header.scss";

export default function Header() {
  return (
    <header className="app-header">
      <Link to="/" className="logo">
        <img src="/logo-lux.png" alt="Logo" />
      </Link>
      <nav className="nav-links">
        <Link to="/">
          {({ isActive }) => (
            <span className={isActive ? "active" : undefined}>Home</span>
          )}
        </Link>
        <Link to="/wishlist">WishList</Link>
      </nav>
    </header>
  );
}
