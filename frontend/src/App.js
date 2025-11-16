import React, { useEffect, useState } from "react";

function App() {
  const [emotion, setEmotion] = useState("");
  const [note, setNote] = useState("");
  const [entries, setEntries] = useState([]);

  const emotions = [
    { label: "Happy 😊", value: "Happy" },
    { label: "Calm 😌", value: "Calm" },
    { label: "Neutral 😐", value: "Neutral" },
    { label: "Sad 😢", value: "Sad" },
    { label: "Angry 😤", value: "Angry" },
    { label: "Confused 😵", value: "Confused" }
  ];

  const fetchEntries = async () => {
    const res = await fetch("http://localhost:3000/api/entries");
    const data = await res.json();
    setEntries(data);
  };

  const addEntry = async () => {
    if (!emotion || !note.trim()) {
      alert("Yo, pick an emotion AND write something ");
      return;
    }

    await fetch("http://localhost:3000/api/entries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ emotion, note })
    });

    setEmotion("");
    setNote("");
    fetchEntries();
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div className="app-container">
      <h1 className="title">Emotion Journal</h1>

      <div className="journal-card">
        <label className="label">Emotion</label>

        <select
          className="input"
          value={emotion}
          onChange={(e) => setEmotion(e.target.value)}
        >
          <option value="">Select how you feel…</option>
          {emotions.map((e) => (
            <option key={e.value} value={e.value}>
              {e.label}
            </option>
          ))}
        </select>

        <label className="label">Your Note</label>
        <textarea
          className="textarea"
          placeholder="Write what’s going on in your head…"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <button className="button" onClick={addEntry}>
          Save Entry
        </button>
      </div>

      <h2 className="subtitle">Past Entries</h2>

      <div className="entries-list">
        {entries.length === 0 ? (
          <p className="empty">No entries yet  write your first one!</p>
        ) : (
          entries.map((entry) => (
            <div key={entry.id} className="entry-item">
              <div className="entry-emotion">{entry.emotion}</div>
              <div className="entry-note">{entry.note}</div>
              <div className="entry-date">
                {new Date(entry.created_at).toLocaleString()}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
