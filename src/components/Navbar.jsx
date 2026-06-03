import { NavLink } from "react-router-dom";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { dark, toggle } = useTheme();
  return (
    <nav className="navbar">
      <span className="logo">EY</span>
      <ul>
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink to={to} end className={({ isActive }) => isActive ? "active" : ""}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
      <button className="theme-toggle" onClick={toggle}>
        {dark ? <BsSun size={18} /> : <BsMoon size={18} />}
      </button>
    </nav>
  );
}
