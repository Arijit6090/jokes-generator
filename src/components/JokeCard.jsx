import { useState } from "react";

export default function JokeCard({ joke, onCopy }) {
  const [showPunchline, setShowPunchline] = useState(false);

  return (
    <article className="joke-card">
      <div className="joke-top">
        <span className="tag">{joke.category}</span>
        <button
          className="text-btn"
          onClick={() => setShowPunchline((prev) => !prev)}
        >
          {showPunchline ? "Hide answer" : "Reveal answer"}
        </button>
      </div>

      <h2 className="joke-text">{joke.text}</h2>

      {joke.punchline && (
        <div className={`punchline ${showPunchline ? "show" : ""}`}>
          <p>{joke.punchline}</p>
        </div>
      )}

      <div className="card-actions">
        <button className="btn small" onClick={() => onCopy(joke)}>
          Copy
        </button>
        <button
          className="btn small ghost"
          onClick={() => setShowPunchline((prev) => !prev)}
        >
          {showPunchline ? "Collapse" : "Expand"}
        </button>
      </div>
    </article>
  );
}