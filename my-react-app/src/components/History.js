//this will be the history page for each unique user
// src/pages/History.js
import "../App.css";
import { useEffect, useState } from "react";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("ui-history")) || [];
    setHistory(savedHistory);
  }, []);

  const handleCopy = (snippet) => {
    navigator.clipboard.writeText(snippet);
  };

  return (
    <div className="history-container">
      <h2>Past Searches</h2>
      {history.length === 0 ? (
        <p>No history yet.</p>
      ) : (
        history.map((item, index) => (
          <div key={index} className="history-card">
            <h4>🔍 {item.query}</h4>
            <div className="history-components">
              {item.suggestions.map((comp, idx) => (
                <div key={idx} className="history-component" style={{ backgroundColor: comp.color }}>
                  <strong>{comp.name}</strong>
                  <p>{comp.description}</p>
                </div>
              ))}
            </div>
            <pre className="code-box">
              <code>{item.codeSnippet}</code>
            </pre>
            <button onClick={() => handleCopy(item.codeSnippet)}>Copy Code</button>
          </div>
        ))
      )}
    </div>
  );
}

export default History;
