import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  "font-semibold " +
  (isActive ? "text-green-900 underline" : "text-green-700 hover:underline");

export default function NavBar() {
  return (
    <nav className="bg-white shadow flex justify-center gap-6 py-4">
      <NavLink to="/" className={linkClass} end>
        Hjem
      </NavLink>
      <NavLink to="/turer" className={linkClass}>
        Turer
      </NavLink>
      <NavLink to="/hytter" className={linkClass}>
        Hytter
      </NavLink>
      <NavLink to="/kontakt" className={linkClass}>
        Kontakt
      </NavLink>
    </nav>
  );
}
