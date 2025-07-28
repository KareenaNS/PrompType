//page for the results
import "../App.css";
import { useLocation } from 'react-router-dom';
import { Typewriter } from "react-simple-typewriter";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { getComponentSuggestions } from "./ComponentMap";
import {useEffect} from 'react';

function Results () {
    const query = new URLSearchParams(useLocation().search).get('q');
    const {components, codeSnippet} = getComponentSuggestions(query);
    const [showModal, setShowModal] = useState(false);
    const [copied, setCopied] = useState(false);
    const [activeComponent, setActiveComponent] = useState(null);
    const handleCopy = () => {
      navigator.clipboard.writeText(activeComponent.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
    const handleCardClick = (comp) => {
      setActiveComponent(comp);
      setShowModal(true);
      setCopied(false);
    };
    useEffect(() => {
      if (!query) return;
      const historyItem = {
        query,
        suggestions: componentSuggestions,
        codeSnippet,
      };
      const existingHistory = JSON.parse(localStorage.getItem("ui-history")) || [];
      const updatedHistory = [historyItem, ...existingHistory.filter(item => item.query !== query)];
      localStorage.setItem("ui-history", JSON.stringify(updatedHistory.slice(0, 10)));
    }, [query]);
    const componentSuggestions = [
      {
        name: "TextInput",
        description: "Captures user text input",
        color: "#fde3a7", // 5.71 contrast
        code: `<input type="text" placeholder="Enter text" />`,
      },
      {
        name: "Button",
        description: "Triggers form actions",
        color: "#c5eff7", //accessible blue -- 5.83
        code: `<button>Click me</button>`,
      },
      {
        name: "Checkbox",
        description: "Lets users opt in/out",
        color: "#c8f7c5", // ratio: 6
        code: `<label><input type="checkbox" /> Remember me</label>`,
      },
    ];
    return (
    <div className="results-container">
        <div className="typing-header">
            <span className="typed-query">
            <Typewriter
                words={[query]}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={1000}
            />
            </span>
        </div>
      <div className="component-grid">
        {componentSuggestions.map((comp, index) => (
          <div
            key={index}
            className="component-card"
            style={{ backgroundColor: comp.color }}
            onClick={() => handleCardClick(comp)}
          >
            <h3>{comp.name}</h3>
            <p>{comp.description}</p>
          </div>
        ))}
      </div>
      {showModal && activeComponent && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h4>{activeComponent.name} Code</h4>
            <pre>
              <code>{activeComponent.code}</code>
            </pre>
            <button onClick={handleCopy}>Copy Code</button>
            {copied && <p style={{ color: "green" }}>Copied!</p>}
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
      {/* <h3>Code Snippet</h3>
      <pre><code>{codeSnippet}</code></pre>
      <button onClick={() => navigator.clipboard.writeText(codeSnippet)}>
        Copy to Clipboard
      </button> */}
    <div className="code-snippet-block">
      <h3>Example Code Snippet</h3>
      <pre className="code-box">
        <code>{codeSnippet}</code>
      </pre>
      <button onClick={() => {
        navigator.clipboard.writeText(codeSnippet);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}>
        {copied ? "Copied!" : "Copy Code"}
      </button>
    </div>
  </div>
    );
}
export default Results;