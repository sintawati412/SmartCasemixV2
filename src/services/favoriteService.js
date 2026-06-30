const KEY = "favoriteDocuments";

export function getFavorites() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function addFavorite(doc) {
  const data = getFavorites();

  const exist = data.find(
    (item) => item.file === doc.file
  );

  if (exist) {
    alert("Dokumen sudah ada di favorit.");
    return;
  }

  data.push(doc);

  localStorage.setItem(
    KEY,
    JSON.stringify(data)
  );

  alert("Dokumen berhasil ditambahkan ke favorit.");
}

export function removeFavorite(file) {
  const data = getFavorites().filter(
    (item) => item.file !== file
  );

  localStorage.setItem(
    KEY,
    JSON.stringify(data)
  );
}