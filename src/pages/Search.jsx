import { useState } from "react";

import {
  FaSearch,
  FaEye,
  FaHeart,
  FaFilePdf,
} from "react-icons/fa";

import SearchBox from "../components/SearchBox";
import PDFViewer from "../components/PDFViewer";
import usePdfSearch from "../hooks/usePdfSearch";

export default function Search() {

  const { loading, search } = usePdfSearch();

  const [hasil,setHasil]=useState([]);

  const [pdf,setPdf]=useState(null);

  function cari(keyword){

    const result=search(keyword);

    setHasil(result);

  }

  function tambahFavorit(item){

    const data={

      title:item.source,

      description:"Hasil Pencarian",

      file:item.file,

      cover:"",

    };

    const favorit=

    JSON.parse(localStorage.getItem("favorites"))||[];

    if(favorit.find(x=>x.title===data.title)){

      alert("Sudah ada di Favorit");

      return;

    }

    favorit.push(data);

    localStorage.setItem(

      "favorites",

      JSON.stringify(favorit)

    );

    alert("Berhasil ditambahkan");

  }

  if(loading){

    return(

      <h2>

        Loading PDF...

      </h2>

    );

  }

  return(

<div className="searchPage">

<div className="searchHeader">

<h1>

🔍 Pencarian Dokumen

</h1>

<p>

Cari diagnosis, tindakan, maupun kata

yang terdapat pada seluruh dokumen.

</p>

</div>

<SearchBox onSearch={cari}/>

<div className="searchInfo">

<b>

Total Hasil :

</b>

{hasil.length}

</div>

{

hasil.length===0?

(

<div className="emptySearch">

<FaSearch/>

<h2>

Belum ada hasil pencarian

</h2>

<p>

Silakan masukkan kata kunci.

</p>

</div>

)

:

(

<div className="resultGrid">

{

hasil.map((item,index)=>(

<div

key={index}

className="resultCard"

>

<div className="resultTop">

<div>

<h2>

<FaFilePdf/>

&nbsp;

{item.source}

</h2>

<p>

Halaman {item.page}

</p>

</div>

</div>

<div className="resultBody">

{item.text.substring(0,300)}...

</div>

<div className="resultButton">

<button

className="openBtn"

onClick={()=>setPdf(item.file)}

>

<FaEye/>

&nbsp;

Buka PDF

</button>

<button

className="favBtn"

onClick={()=>tambahFavorit(item)}

>

<FaHeart/>

&nbsp;

Favorit

</button>

</div>

</div>

))

}

</div>

)

}

{

pdf&&(

<PDFViewer

file={pdf}

onClose={()=>setPdf(null)}

/>

)

}

</div>

  );

}