import { useState } from "react";
import usePdfSearch from "../hooks/usePdfSearch";
import SearchBox from "../components/SearchBox";
import { FaFilePdf } from "react-icons/fa";

export default function SearchPDF() {

  const { loading, search } = usePdfSearch();

  const [hasil, setHasil] = useState([]);

  function cari(keyword) {

    if (keyword.trim() === "") {
      setHasil([]);
      return;
    }

    const result = search(keyword);

    setHasil(result);

  }

  if (loading) {

    return (
      <div style={{ padding: 30 }}>
        <h2>Loading PDF...</h2>
      </div>
    );

  }

  return (

    <div>

      <h1>Pencarian PDF</h1>

      <SearchBox onSearch={cari} />

      <table className="table">

        <thead>

          <tr>

            <th>Sumber</th>

            <th>Halaman</th>

            <th>Isi</th>

            <th>Aksi</th>

          </tr>

        </thead>

        <tbody>

          {hasil.map((item, index) => (

            <tr key={index}>

              <td>{item.source}</td>

              <td>{item.page}</td>

              <td>

                {item.text.length > 250
                  ? item.text.substring(0,250)+"..."
                  : item.text}

              </td>

              <td>

                <button
                  className="pdfBtn"
                  onClick={() => window.open(item.file,"_blank")}
                >

                  <FaFilePdf/>

                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}