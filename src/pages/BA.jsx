import { useState } from "react";
import PDFViewer from "../components/PDFViewer";

import {
  FaClipboardCheck,
  FaEye,
  FaDownload,
  FaHeart,
  FaCheckCircle,
  FaCalendarAlt,
  FaFilePdf,
  FaBalanceScale,
} from "react-icons/fa";

export default function BA() {

  const [open, setOpen] = useState(false);

  function downloadPDF() {

    const link = document.createElement("a");

    link.href = "/pdf/BA.pdf";

    link.download = "BA_Kesepakatan.pdf";

    link.click();

  }

  function tambahFavorit() {

    const data = {

      title: "BA Kesepakatan",

      description: "Pedoman Coding Rumah Sakit",

      file: "/pdf/BA.pdf",

      cover: "/ba.png",

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

<div className="libraryBanner orange">

<div>

<span className="libraryBadge orange">

📙 Digital Library

</span>

<h1>

BA Kesepakatan

</h1>

<p>

Berita Acara Kesepakatan

Coding & Casemix

</p>

</div>

<FaClipboardCheck className="bannerIcon"/>

</div>

<div className="libraryCard">

<div className="libraryLeft">

<img

src="/ba.png"

alt="BA"

className="libraryCover"

/>

</div>

<div className="libraryRight">

<h2>

BA Kesepakatan

</h2>

<h4>

Pedoman Coding Rumah Sakit

</h4>

<p>

BA Kesepakatan merupakan dokumen resmi
yang digunakan sebagai acuan dalam
pengkodean diagnosis dan tindakan
berdasarkan hasil kesepakatan nasional
antara organisasi profesi dan instansi
terkait.

</p>

<div className="featureGrid">

<div>

<FaCheckCircle/>

<span>

Pedoman Nasional

</span>

</div>

<div>

<FaCalendarAlt/>

<span>

Update 2024

</span>

</div>

<div>

<FaFilePdf/>

<span>

PDF Lengkap

</span>

</div>

<div>

<FaBalanceScale/>

<span>

Aturan Coding

</span>

</div>

</div>

<div className="buttonGroup">

<button

className="openBtn orange"

onClick={()=>setOpen(true)}

>

<FaEye/>

&nbsp;

Buka PDF

</button>

<button

className="downloadBtn"

onClick={downloadPDF}

>

<FaDownload/>

&nbsp;

Download

</button>

<button

className="favBtn"

onClick={tambahFavorit}

>

<FaHeart/>

&nbsp;

Favorit

</button>

</div>

</div>

</div>

<div className="infoCard">

<h2>

Tentang BA Kesepakatan

</h2>

<p>

Dokumen BA Kesepakatan berisi aturan,
pedoman, dan hasil kesepakatan nasional
mengenai proses coding diagnosis maupun
tindakan. Dokumen ini menjadi referensi
utama bagi petugas Coding, Casemix,
Verifikator Internal, serta proses
klaim BPJS Kesehatan.

</p>

</div>

{open && (

<PDFViewer

file="/pdf/BA.pdf"

onClose={()=>setOpen(false)}

/>

)}

</div>

  );

}