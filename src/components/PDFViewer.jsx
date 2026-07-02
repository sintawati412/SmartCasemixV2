import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FaTimes, FaDownload, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdfjs/pdf.worker.min.mjs";

export default function PDFViewer({ file, onClose }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

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
              title="Tutup"
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
            padding: "20px",
          }}
        >
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<p>Memuat PDF...</p>}
          >
            <Page
              pageNumber={pageNumber}
              width={800}
            />
          </Document>
        </div>

        {numPages && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "15px",
              padding: "15px",
            }}
          >
            <button
              disabled={pageNumber <= 1}
              onClick={() => setPageNumber(pageNumber - 1)}
            >
              <FaChevronLeft />
            </button>

            <span>
              Halaman {pageNumber} / {numPages}
            </span>

            <button
              disabled={pageNumber >= numPages}
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