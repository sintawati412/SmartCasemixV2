import {
  FaBookMedical,
  FaProcedures,
  FaClipboardList,
  FaStar,
  FaArrowRight,
  FaChartLine,
  FaHistory,
  FaFolderOpen,
  FaSearch,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";

export default function Dashboard() {

  const cards = [
    {
      title: "ICD-10",
      total: "22.000+",
      desc: "Diagnosis",
      icon: <FaBookMedical />,
      color: "#1976D2",
      link: "/icd10",
    },
    {
      title: "ICD-9-CM",
      total: "3.900+",
      desc: "Procedure",
      icon: <FaProcedures />,
      color: "#2E7D32",
      link: "/icd9",
    },
    {
      title: "BA Kesepakatan",
      total: "2024",
      desc: "Dokumen",
      icon: <FaClipboardList />,
      color: "#F57C00",
      link: "/ba",
    },
    {
      title: "Favorit",
      total: JSON.parse(localStorage.getItem("favorites") || "[]").length,
      desc: "Dokumen",
      icon: <FaStar />,
      color: "#C2185B",
      link: "/favorite",
    },
  ];

  return (
    <div className="dashboardPage">

      {/* HERO */}

      <section className="heroSection">

        <div className="heroLeft">

          <span className="heroBadge">
            🏥 SmartCasemix Digital Library
          </span>

          <h1>
            Selamat Datang 👋
          </h1>

          <p>
            Seluruh dokumen ICD-10, ICD-9-CM,
            dan BA Kesepakatan tersedia dalam
            satu aplikasi.
          </p>

          <Link
            to="/search"
            className="heroButton"
          >
            <FaSearch />
            Cari Dokumen
          </Link>

        </div>

        <div className="heroRight">

          <img
            src="/logo.jpg"
            alt="Logo"
            className="heroLogo"
          />

        </div>

      </section>

      {/* STATISTIK */}

      <section className="dashboardGrid">

        {cards.map((item, index) => (

          <DashboardCard
            key={index}
            {...item}
          />

        ))}

      </section>

      {/* QUICK MENU */}

      <section className="quickSection">

        <h2>

          <FaFolderOpen />

          Quick Menu

        </h2>

        <div className="quickGrid">

          <Link to="/icd10" className="quickCard">

            📘

            <span>ICD-10</span>

          </Link>

          <Link to="/icd9" className="quickCard">

            📗

            <span>ICD-9-CM</span>

          </Link>

          <Link to="/ba" className="quickCard">

            📙

            <span>BA Kesepakatan</span>

          </Link>

          <Link to="/search" className="quickCard">

            🔍

            <span>Search</span>

          </Link>

          <Link to="/favorite" className="quickCard">

            ⭐

            <span>Favorit</span>

          </Link>

        </div>

      </section>

      {/* INFORMASI */}

      <section className="dashboardInfo">

        <div className="infoBox">

          <h2>

            <FaChartLine />

            Informasi Sistem

          </h2>

          <ul>

            <li>Versi SmartCasemix : <b>2.0</b></li>

            <li>Framework : <b>React + Vite</b></li>

            <li>PDF Viewer : <b>React PDF</b></li>

            <li>Pencarian : <b>PDF Search</b></li>

            <li>Penyimpanan : <b>Local Storage</b></li>

          </ul>

        </div>

        <div className="infoBox">

          <h2>

            <FaHistory />

            Aktivitas

          </h2>

          <ul>

            <li>📘 Membuka ICD-10</li>

            <li>📗 Membuka ICD-9-CM</li>

            <li>📙 Membuka BA Kesepakatan</li>

            <li>🔍 Melakukan pencarian</li>

            <li>⭐ Menambahkan favorit</li>

          </ul>

        </div>

      </section>

    </div>
  );
}