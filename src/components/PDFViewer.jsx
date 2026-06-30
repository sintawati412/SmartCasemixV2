import { useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";

import {
  FaTimes,
  FaSearchPlus,
  FaSearchMinus,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc =
`//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function PDFViewer({

  file,

  onClose,

}) {

  const [pages, setPages] = useState(0);

  const [page, setPage] = useState(1);

  const [zoom, setZoom] = useState(1.2);

  function nextPage() {

    if (page < pages) {

      setPage(page + 1);

    }

  }

  function prevPage() {

    if (page > 1) {

      setPage(page - 1);

    }

  }

  function zoomIn() {

    setZoom((z) => z + 0.2);

  }

  function zoomOut() {

    if (zoom > 0.6) {

      setZoom((z) => z - 0.2);

    }

  }

  return (

<div className="pdfOverlay">

<div className="pdfModal">

<div className="pdfHeader">

<h2>

📄 Preview Dokumen

</h2>

<div className="pdfToolbar">

<button onClick={zoomOut}>

<FaSearchMinus/>

</button>

<button onClick={zoomIn}>

<FaSearchPlus/>

</button>

<button onClick={prevPage}>

<FaChevronLeft/>

</button>

<span>

{page} / {pages}

</span>

<button onClick={nextPage}>

<FaChevronRight/>

</button>

<button
className="closeBtn"
onClick={onClose}
>

<FaTimes/>

</button>

</div>

</div>

<div className="pdfBody">

<Document

file={file}

onLoadSuccess={({ numPages }) => {

setPages(numPages);

setPage(1);

}}

loading={<h2>Loading PDF...</h2>}

>

<Page

pageNumber={page}

scale={zoom}

/>

</Document>

</div>

</div>

</div>

  );

}