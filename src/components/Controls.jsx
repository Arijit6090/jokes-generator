export default function Controls({ onRefresh, onLoadMore, loading }) {
  return (
    <section className="controls">
      <button className="btn primary" onClick={onRefresh} disabled={loading}>
        {loading ? "Loading..." : "Refresh jokes"}
      </button>

      <button className="btn secondary" onClick={onLoadMore} disabled={loading}>
        Load more
      </button>
    </section>
  );
}