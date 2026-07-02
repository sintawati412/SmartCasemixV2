import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  FaTimes,
  FaDownload,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaSearchPlus,
  FaSearchMinus,
} from "react-icons/fa";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdfjs/pdf.worker.min.mjs";

export default function PDFViewer({ file, onClose }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [pageWidth, setPageWidth] = useState(800);

  useEffect(() => {
    function resize() {
      if (window.innerWidth < 768) {
        setPageWidth(window.innerWidth - 40);
      } else {
        setPageWidth(850);
      }
    }

    resize();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function downloadPDF() {
    const link = document.createElement("a");
    link.href = file;
    link.download = "";
    link.click();
  }

  return (
    <div className="pdfOverlay">
      <div className="pdfModal">

        <div className="pdfHeader">
          <h2>📄 Preview Dokumen</h2>

          <div className="pdfToolbar">

            <button
              onClick={() => setScale((s) => Math.min(s + 0.2, 3))}
              title="Zoom In"
            >
              <FaSearchPlus />
            </button>

            <button
              onClick={() => setScale((s) => Math.max(s - 0.2, 0.6))}
              title="Zoom Out"
            >
              <FaSearchMinus />
            </button>

            <button
              onClick={() => window.open(file, "_blank")}
              title="Buka Tab Baru"
            >
              <FaExternalLinkAlt />
            </button>

            <button
              onClick={downloadPDF}
              title="Download"
            >
              <FaDownload />
            </button>

            <button
              className="closeBtn"
              onClick={onClose}
            >
              <FaTimes />
            </button>

          </div>
        </div>

        <div
          style={{
            flex: 1,
            overflow: "auto",
            display: "flex",
            justifyContent: "center",
            padding: 20,
            background: "#f3f4f6",
          }}
        >
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<h3>Memuat PDF...</h3>}
          >
            <Page
              pageNumber={pageNumber}
              width={pageWidth}
              scale={scale}
            />
          </Document>
        </div>

        {numPages && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 15,
              padding: 15,
              flexWrap: "wrap",
            }}
          >
            <button
              disabled={pageNumber === 1}
              onClick={() => setPageNumber(pageNumber - 1)}
            >
              <FaChevronLeft />
            </button>

            <strong>
              Halaman {pageNumber} / {numPages}
            </strong>

            <button
              disabled={pageNumber === numPages}
              onClick={() => setPageNumber(pageNumber + 1)}
            >
              <FaChevronRight />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}