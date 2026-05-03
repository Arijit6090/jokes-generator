import JokeCard from "./JokeCard";

export default function JokeGrid({ jokes, onCopy }) {
  if (!jokes.length) {
    return <p className="empty-state">No jokes loaded yet.</p>;
  }

  return (
    <section className="grid">
      {jokes.map((joke) => (
        <JokeCard key={joke.id} joke={joke} onCopy={onCopy} />
      ))}
    </section>
  );
}