export function searchKeyword(data, keyword) {
  keyword = keyword.toLowerCase().trim();

  if (!keyword) return [];

  return data.filter((page) =>
    page.text.toLowerCase().includes(keyword)
  );
}