import { useEffect, useState } from "react";
import {
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

export default function Header() {
  const [tanggal, setTanggal] = useState("");
  const [jam, setJam] = useState("");

  useEffect(() => {
    function update() {
      const now = new Date();

      setTanggal(
        now.toLocaleDateString("id-ID", {
          weekday: "long",
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      );

      setJam(
        now.toLocaleTimeString("id-ID")
      );
    }

    update();

    const timer = setInterval(update, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="topHeader">

      <div className="headerLeft">

        <div>
          <h1>Dashboard</h1>
          <p>SmartCasemix Digital Library</p>
        </div>

      </div>

      <div className="headerRight">

        <div className="clockBox">

          <h3>{tanggal}</h3>

          <span>{jam}</span>

        </div>

        <button className="notifBtn">

          <FaBell />

        </button>

        <div className="profileBox">

          <FaUserCircle className="userIcon"/>

          <div>

            <strong>Sonia</strong>

            <small>Administrator</small>

          </div>

        </div>

      </div>

    </header>
  );
}