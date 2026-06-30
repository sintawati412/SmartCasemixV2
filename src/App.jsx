import { Outlet } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles/global.css";

export default function App() {
  return (
    <div className="app">

      <Sidebar />

      <main className="content">

        <Header />

        <div className="pageContent">
          <Outlet />
        </div>

        <Footer />

      </main>

    </div>
  );
}