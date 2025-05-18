import React, { useState } from "react";

export default function App() {
  const [results, setResults] = useState([]);
  const [form, setForm] = useState({ period: "", number: "", color: "" });

  const handleAddResult = () => {
    const number = parseInt(form.number);
    const bigSmall = number >= 5 ? "Big" : "Small";
    const nextNumber = number >= 5 ? 4 : 6;
    const nextBigSmall = bigSmall === "Big" ? "Small" : "Big";
    const nextColor =
      form.color === "Green"
        ? "Red"
        : form.color === "Red"
        ? "Violet"
        : "Green";

    setResults([
      {
        ...form,
        bigSmall,
        prediction: {
          number: nextNumber,
          bigSmall: nextBigSmall,
          color: nextColor,
        },
      },
      ...results,
    ]);

    setForm({ period: "", number: "", color: "" });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>HGZY WinGo Tracker</h1>
      <input
        placeholder="Period"
        value={form.period}
        onChange={(e) => setForm({ ...form, period: e.target.value })}
      />
      <input
        placeholder="Number (0-9)"
        type="number"
        value={form.number}
        onChange={(e) => setForm({ ...form, number: e.target.value })}
      />
      <input
        placeholder="Color (Green/Red/Violet)"
        value={form.color}
        onChange={(e) => setForm({ ...form, color: e.target.value })}
      />
      <button onClick={handleAddResult}>Add Result</button>

      <div style={{ marginTop: 20 }}>
        {results.map((res, i) => (
          <div key={i} style={{ border: "1px solid gray", padding: 10, margin: 10 }}>
            <div><b>Period:</b> {res.period}</div>
            <div>Number: {res.number} ({res.bigSmall})</div>
            <div>Color: {res.color}</div>
            <hr />
            <div><b>Prediction:</b></div>
            <div>Next Number: {res.prediction.number}</div>
            <div>Next Big/Small: {res.prediction.bigSmall}</div>
            <div>Next Color: {res.prediction.color}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

