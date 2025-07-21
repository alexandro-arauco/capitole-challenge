import { Link } from "@tanstack/react-router";
import "../Header/Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="left-section">
        <div className="logo">
          <img
            src="/logo-lux.png"
            alt=""
            style={{ backgroundColor: "white", padding: 3 }}
          />
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/wishlist">Wishlist</Link>
        </nav>
      </div>
    </header>
  );
}
