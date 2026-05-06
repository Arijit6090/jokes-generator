import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Controls from "./components/Controls";
import JokeGrid from "./components/JokeGrid";
import {
  extractJokes,
  fetchRandomJokes,
  normalizeJoke,
} from "./api/jokes";

export default function App() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadJokes = async ({ append = false } = {}) => {
    try {
      setLoading(true);
      setError("");

      const data = await fetchRandomJokes();
      const extracted = extractJokes(data);

      const normalized = extracted.length
        ? extracted.map((joke, index) => normalizeJoke(joke, index))
        : [normalizeJoke(data?.data || data, 0)];

      setJokes((prev) => {
        const combined = append ? [...prev, ...normalized] : normalized;

        const seen = new Set();
        return combined.filter((item) => {
          const key = `${item.text}-${item.punchline}`;
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        });
      });
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to fetch jokes."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadJokes();
  }, []);

  const handleCopy = async (joke) => {
    const text = joke.punchline
      ? `${joke.text}\n\n${joke.punchline}`
      : joke.text;

    try {
      await navigator.clipboard.writeText(text);
      alert("Joke copied to clipboard!");
    } catch {
      alert("Copy failed. Your browser may not allow clipboard access.");
    }
  };

  const jokeCount = useMemo(() => jokes.length, [jokes]);

  return (
    <main className="app">
      <div className="container">
        <Header totalCount={jokeCount} jokes={jokes} />

        <Controls
          loading={loading}
          onRefresh={() => loadJokes({ append: true })}
          onLoadMore={() => loadJokes({ append: true })}
        />

        {error && <div className="error-box">{error}</div>}

        {loading && jokes.length === 0 ? (
          <div className="loading-box">Fetching jokes...</div>
        ) : (
          <JokeGrid jokes={jokes} onCopy={handleCopy} />
        )}
      </div>
    </main>
  );
}