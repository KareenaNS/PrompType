import {React, useState } from "react";
import "../App.css";

const categories = [
  {
    name: "Inputs",
    description: "Components for data entry like text fields, checkboxes, radios, etc.",
    color: "#fde3a7",
    components: [
      {
        name: "Input",
        description: "Captures user input in a form field.",
        code: `<Input label="Your input" />`,
      },
      {
        name: "Checkbox",
        description: "Binary toggle for options like 'Remember Me'.",
        code: `<Checkbox label="Remember me" />`,
      },
      {
        name: "Radio",
        description: "Radio buttons to select one option from many.",
        code: `<Radio label="Option A" />`,
      },
    ],
  },
  {
    name: "Buttons",
    description: "Action triggers including buttons, toggles, and switches.",
    color: "#c5eff7",
    components: [
      {
        name: "Button",
        description: "Triggers an action or event.",
        code: `<Button variant="primary">Click Me</Button>`,
      },
      {
        name: "Toggle",
        description: "Switch component to toggle between states.",
        code: `<Toggle label="Enable feature" />`,
      },
    ],
  },
  {
    name: "Navigation",
    description: "Menus, tabs, breadcrumbs, and other navigation aids.",
    color: "#d5f4e6",
    components: [
      {
        name: "Nav",
        description: "Primary navigation container.",
        code: `<Nav>...</Nav>`,
      },
      {
        name: "Breadcrumbs",
        description: "Shows the current page’s location within a navigational hierarchy.",
        code: `<Breadcrumbs items={items} />`,
      },
      {
        name: "Tabs",
        description: "Tabbed navigation to switch between views.",
        code: `<Tabs><Tab label="Tab 1" /></Tabs>`,
      },
    ],
  },
  {
    name: "Data Display",
    description: "Cards, tables, badges, and charts for presenting information.",
    color: "#f7cac9",
    components: [
      {
        name: "BarChart",
        description: "Displays a bar chart of data.",
        code: `<BarChart data={data} />`,
      },
      {
        name: "LineChart",
        description: "Displays a line graph of trends.",
        code: `<LineChart data={data} />`,
      },
      {
        name: "PieChart",
        description: "Displays data as pie slices.",
        code: `<PieChart data={data} />`,
      },
    ],
  },
  {
    name: "Feedback",
    description: "Banners, alerts, loaders, and other feedback components.",
    color: "#d6eaf8",
  },
  {
    name: "Layout",
    description: "Containers, grids, and structure components for page layout.",
    color: "#f9e79f",
  },
];
function Categories() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [activeComponent, setActiveComponent] = useState(null);

  const handleCategoryClick = (name) => {
    setActiveComponent(null);
    setExpandedCategory(expandedCategory === name ? null : name);
  };

  const handleComponentClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="categories-container">
      <h2>Visa Product Design System Categories</h2>
      <div className="category-grid">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="category-card"
            style={{ backgroundColor: cat.color }}
          >
            <h3
              style={{ cursor: "pointer" }}
              onClick={() => handleCategoryClick(cat.name)}
            >
              {cat.name}
            </h3>
            <p>{cat.description}</p>
            {expandedCategory === cat.name && (
              <div className="components-list">
                {cat.components.map((comp) => (
                  <div
                    key={comp.name}
                    className="component-card"
                    onClick={() => handleComponentClick(comp)}
                    style={{
                      border:
                        activeComponent?.name === comp.name
                          ? "2px solid #0070f3"
                          : "1px solid #ccc",
                      padding: "8px",
                      margin: "8px 0",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    <strong>{comp.name}</strong>
                    <p>{comp.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {activeComponent && (
        <div
          className="component-detail-backdrop"
          onClick={() => setActiveComponent(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            className="component-detail-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#fff",
              padding: "2rem",
              borderRadius: "8px",
              maxWidth: "600px",
              maxHeight: "80vh",
              overflowY: "auto",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            }}
          >
            <h3>{activeComponent.name}</h3>
            <p>{activeComponent.description}</p>
            <pre
              style={{
                backgroundColor: "#f4f4f4",
                padding: "1rem",
                borderRadius: "6px",
                overflowX: "auto",
                marginTop: "1rem",
                fontFamily: "monospace",
              }}
            >
              <code>{activeComponent.code}</code>
            </pre>
            <button
              onClick={() => setActiveComponent(null)}
              style={{
                marginTop: "1rem",
                padding: "0.5rem 1rem",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Categories;