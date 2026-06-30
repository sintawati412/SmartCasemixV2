import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {

  return (

    <div className="app">

      <Sidebar />

      <div className="content">

        <Header />

        <main>

          <Outlet />

        </main>

      </div>

    </div>

  );

}