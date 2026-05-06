import { useEffect, useState } from "react";

export default function Header({ totalCount, jokes = [] }) {
  const [randomJoke, setRandomJoke] = useState(null);

  useEffect(() => {
    if (jokes.length > 0) {
      const randomIndex = Math.floor(Math.random() * jokes.length);
      setRandomJoke(jokes[randomIndex]);
    }
  }, [jokes]);

  return (
    <header className="header">
      <div>
        <p className="eyebrow">Random Jokes Viewer</p>
        <h1> Toaday's Jokes</h1>
        <p className="subtitle">
          {randomJoke
            ? `"${randomJoke.text}"`
            : "Fetch fresh jokes, reveal punchlines, and keep the fun going."}
        </p>
      </div>

      <div className="stats">
        <span className="stats-number">{totalCount}</span>
        <span className="stats-label">Jokes loaded</span>
      </div>
    </header>
  );
}