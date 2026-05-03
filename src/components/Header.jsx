export default function Header({ totalCount }) {
  return (
    <header className="header">
      <div>
        <p className="eyebrow">Random Jokes Viewer</p>
        <h1>Browse jokes in a clean, playful interface</h1>
        <p className="subtitle">
          Fetch fresh jokes, reveal punchlines, and keep the fun going.
        </p>
      </div>

      <div className="stats">
        <span className="stats-number">{totalCount}</span>
        <span className="stats-label">Jokes loaded</span>
      </div>
    </header>
  );
}