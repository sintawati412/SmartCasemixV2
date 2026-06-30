import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

export async function loadPdf(path) {
  const pdf = await pdfjsLib.getDocument(path).promise;

  let hasil = [];

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);

    const text = await page.getTextContent();

    hasil.push({
      page: i,
      text: text.items.map((item) => item.str).join(" "),
    });
  }

  return hasil;
}