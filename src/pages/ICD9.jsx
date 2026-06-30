import { useState } from "react";
import PDFViewer from "../components/PDFViewer";

import {
  FaProcedures,
  FaEye,
  FaDownload,
  FaHeart,
  FaCheckCircle,
  FaCalendarAlt,
  FaFilePdf,
} from "react-icons/fa";

export default function ICD9() {

  const [open, setOpen] = useState(false);

  function downloadPDF() {

    const link = document.createElement("a");

    link.href = "/pdf/ICD9CM.pdf";

    link.download = "ICD9CM.pdf";

    link.click();

  }

  function tambahFavorit() {

    const data = {

      title: "ICD-9-CM",

      description: "Procedure Coding",

      file: "/pdf/ICD9CM.pdf",

      cover: "/icd9.png",

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

<div className="libraryBanner green">

<div>

<span className="libraryBadge green">

📗 Digital Library

</span>

<h1>

ICD-9-CM

</h1>

<p>

International Classification of Diseases

Clinical Modification

Procedure Coding

</p>

</div>

<FaProcedures className="bannerIcon"/>

</div>


<div className="libraryCard">

<div className="libraryLeft">

<img

src="/icd9.png"

alt="ICD9"

className="libraryCover"

/>

</div>

<div className="libraryRight">

<h2>

ICD-9-CM

</h2>

<h4>

Procedure Coding

</h4>

<p>

ICD-9-CM merupakan standar internasional

untuk melakukan pengkodean tindakan medis

dan prosedur pelayanan pasien di rumah sakit.

Dokumen ini digunakan dalam coding tindakan,

klaim BPJS, serta pelaporan rumah sakit.

</p>


<div className="featureGrid">

<div>

<FaCheckCircle/>

<span>

3.900+ Procedure

</span>

</div>

<div>

<FaCalendarAlt/>

<span>

Versi Terbaru

</span>

</div>

<div>

<FaFilePdf/>

<span>

PDF Resmi

</span>

</div>

<div>

<FaProcedures/>

<span>

Procedure Coding

</span>

</div>

</div>


<div className="buttonGroup">

<button

className="openBtn green"

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

Tentang ICD-9-CM

</h2>

<p>

ICD-9-CM digunakan sebagai standar

pengkodean tindakan medis maupun

prosedur yang dilakukan kepada pasien.

Dokumen ini sangat penting bagi petugas

Casemix, Coding, Verifikator,

dan proses klaim BPJS.

</p>

</div>


{open && (

<PDFViewer

file="/pdf/ICD9CM.pdf"

onClose={()=>setOpen(false)}

/>

)}

</div>

  );

}