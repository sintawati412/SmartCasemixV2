import { FaTimes, FaDownload, FaExternalLinkAlt } from "react-icons/fa";

export default function PDFViewer({ file, onClose }) {
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

        <div className="pdfBody">

          <iframe
            src={file}
            title="PDF Viewer"
            width="100%"
            height="100%"
            style={{
              border: "none",
              borderRadius: "10px",
            }}
          />

        </div>

      </div>

    </div>
  );
}