export default function SearchHistory({ history, onSelect }) {
  if (history.length === 0) return null;

  return (
    <div className="historyBox">
      <h3>Riwayat Pencarian</h3>

      {history.map((item, index) => (
        <button
          key={index}
          className="historyItem"
          onClick={() => onSelect(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}