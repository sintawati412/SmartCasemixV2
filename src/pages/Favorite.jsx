import { useEffect, useState } from "react";

import {
  FaBookMedical,
  FaProcedures,
  FaClipboardCheck,
  FaTrash,
  FaEye,
  FaDownload,
} from "react-icons/fa";

import PDFViewer from "../components/PDFViewer";

export default function Favorite() {

  const [favorites, setFavorites] = useState([]);
  const [pdf, setPdf] = useState(null);

  useEffect(() => {

    const data =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(data);

  }, []);

  function hapus(index){

    const baru=[...favorites];

    baru.splice(index,1);

    setFavorites(baru);

    localStorage.setItem(
      "favorites",
      JSON.stringify(baru)
    );

  }

  function download(file){

    const a=document.createElement("a");

    a.href=file;

    a.download=file.split("/").pop();

    a.click();

  }

  function getIcon(type){

    switch(type){

      case "ICD-10":

        return <FaBookMedical/>;

      case "ICD-9-CM":

        return <FaProcedures/>;

      default:

        return <FaClipboardCheck/>;

    }

  }

  return(

<div className="favoritePage">

<h1>

⭐ Dokumen Favorit

</h1>

<p>

Semua dokumen yang Anda simpan akan muncul di sini.

</p>

{favorites.length===0? (

<div className="emptyFavorite">

<h2>

Belum ada dokumen favorit

</h2>

<p>

Tambahkan dokumen dari halaman ICD-10,

ICD-9-CM atau BA Kesepakatan.

</p>

</div>

):(

<div className="favoriteGrid">

{favorites.map((item,index)=>(

<div
key={index}
className="favoriteCard"
>

<div className="favoriteTop">

<div className="favoriteIcon">

{getIcon(item.title)}

</div>

<div>

<h2>

{item.title}

</h2>

<p>

{item.description}

</p>

</div>

</div>

<div className="favoriteButton">

<button

className="openBtn"

onClick={()=>setPdf(item.file)}

>

<FaEye/>

&nbsp;

Buka

</button>

<button

className="downloadBtn"

onClick={()=>download(item.file)}

>

<FaDownload/>

&nbsp;

Download

</button>

<button

className="deleteBtn"

onClick={()=>hapus(index)}

>

<FaTrash/>

&nbsp;

Hapus

</button>

</div>

</div>

))}

</div>

)}

{pdf&&(

<PDFViewer

file={pdf}

onClose={()=>setPdf(null)}

/>

)}

</div>

  );

}