import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaBookMedical,
  FaProcedures,
  FaClipboardList,
  FaStar,
  FaSearch,
} from "react-icons/fa";

export default function Sidebar() {
  const menus = [
    {
      name: "Dashboard",
      path: "/",
      icon: <FaHome />,
    },
    {
      name: "ICD-10",
      path: "/icd10",
      icon: <FaBookMedical />,
    },
    {
      name: "ICD-9-CM",
      path: "/icd9",
      icon: <FaProcedures />,
    },
    {
      name: "BA Kesepakatan",
      path: "/ba",
      icon: <FaClipboardList />,
    },
    {
      name: "Favorit",
      path: "/favorite",
      icon: <FaStar />,
    },
    {
      name: "Cari Dokumen",
      path: "/search",
      icon: <FaSearch />,
    },
  ];

  return (
    <aside className="sidebar">

      <div className="logoArea">

        <img
          src="/logo.jpg"
          alt="Logo Hermina"
          className="logoImage"
        />

        <h2>SmartCasemix</h2>

        <p>Digital Library V2</p>

      </div>

      <nav>

        {menus.map((menu) => (

          <NavLink
            key={menu.path}
            to={menu.path}
            className={({ isActive }) =>
              isActive ? "menu active" : "menu"
            }
          >

            <div className="menuIcon">
              {menu.icon}
            </div>

            <span>{menu.name}</span>

          </NavLink>

        ))}

      </nav>

      <div className="sidebarFooter">

        <p>SmartCasemix V2</p>

        <small>© 2026 Digital Library</small>

      </div>

    </aside>
  );
}