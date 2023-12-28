import { Link } from "react-router-dom";

import "./Header.css";
export default function Header() {
  return (
    <header>
      <h1>Ver Reci Tymi</h1>
      <ul>
        <Link to="/">
          <li>Menu</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </header>
  );
}
