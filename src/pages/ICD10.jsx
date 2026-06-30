import { useState } from "react";
import PDFViewer from "../components/PDFViewer";

import {
  FaBookMedical,
  FaEye,
  FaDownload,
  FaHeart,
  FaCheckCircle,
  FaCalendarAlt,
  FaFilePdf,
} from "react-icons/fa";

export default function ICD10() {
  const [open, setOpen] = useState(false);

  function downloadPDF() {
    const link = document.createElement("a");
    link.href = "/pdf/ICD10.pdf";
    link.download = "ICD10.pdf";
    link.click();
  }

  function tambahFavorit() {
    const data = {
      title: "ICD-10",
      description: "International Classification of Diseases",
      file: "/pdf/ICD10.pdf",
      cover: "/icd10.png",
    };

    const favorit =
      JSON.parse(localStorage.getItem("favorites")) || [];

    const ada = favorit.find(
      (item) => item.title === data.title
    );

    if (ada) {
      alert("Dokumen sudah ada di Favorit.");
      return;
    }

    favorit.push(data);

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorit)
    );

    alert("Berhasil ditambahkan ke Favorit.");
  }

  return (
    <div className="libraryPage">

      {/* Banner */}

      <div className="libraryBanner blue">

        <div>

          <span className="libraryBadge blue">
            📘 Digital Library
          </span>

          <h1>ICD-10</h1>

          <p>
            International Classification of Diseases
            Tenth Revision
          </p>

        </div>

        <FaBookMedical className="bannerIcon" />

      </div>

      {/* Card */}

      <div className="libraryCard">

        <div className="libraryLeft">

          <img
            src="/icd10.png"
            alt="ICD10"
            className="libraryCover"
          />

        </div>

        <div className="libraryRight">

          <h2>ICD-10</h2>

          <h4>
            International Classification of Diseases
          </h4>

          <p>
            ICD-10 merupakan standar internasional
            untuk klasifikasi diagnosis penyakit yang
            digunakan di rumah sakit, klinik, BPJS,
            dan fasilitas pelayanan kesehatan.
          </p>

          {/* Feature */}

          <div className="featureGrid">

            <div>
              <FaCheckCircle />
              <span>22.000+ Diagnosis</span>
            </div>

            <div>
              <FaCalendarAlt />
              <span>Versi Terbaru</span>
            </div>

            <div>
              <FaFilePdf />
              <span>PDF Resmi</span>
            </div>

            <div>
              <FaBookMedical />
              <span>Coding Diagnosis</span>
            </div>

          </div>

          {/* Button */}

          <div className="buttonGroup">

            <button
              className="openBtn"
              onClick={() => setOpen(true)}
            >
              <FaEye />
              &nbsp;
              Buka PDF
            </button>

            <button
              className="downloadBtn"
              onClick={downloadPDF}
            >
              <FaDownload />
              &nbsp;
              Download
            </button>

            <button
              className="favBtn"
              onClick={tambahFavorit}
            >
              <FaHeart />
              &nbsp;
              Favorit
            </button>

          </div>

        </div>

      </div>

      {/* Informasi */}

      <div className="infoCard">

        <h2>Tentang ICD-10</h2>

        <p>
          ICD-10 digunakan sebagai acuan utama
          dalam pengkodean diagnosis pasien.
          Sistem ini membantu proses pelaporan,
          klaim BPJS, analisis data kesehatan,
          serta meningkatkan standar dokumentasi
          medis di fasilitas pelayanan kesehatan.
        </p>

      </div>

      {/* PDF */}

      {open && (
        <PDFViewer
          file="/pdf/ICD10.pdf"
          onClose={() => setOpen(false)}
        />
      )}

    </div>
  );
}