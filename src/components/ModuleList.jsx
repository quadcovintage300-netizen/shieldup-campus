import { useState } from "react";
import { modules } from "../data/modules";
import ModuleCard from "./ModuleCard";

const PREVIEW_COUNT = 3;

export default function ModuleList() {
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const term = search.trim().toLowerCase();
  const isSearching = term !== "";

  // search always looks at ALL modules, including hidden ones
  const matches = modules.filter((m) => m.title.toLowerCase().includes(term));

  const visible = showAll || isSearching ? matches : matches.slice(0, PREVIEW_COUNT);

  return (
    <section id="modules" className="section">
      <h2>Our Modules</h2>

      <label htmlFor="search">Search modules by title</label>
      <input
        id="search"
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Try phishing"
      />

      {visible.length === 0 ? (
        <p className="empty">No modules found</p>
      ) : (
        <div className="grid">
          {visible.map((m) => (
            <ModuleCard key={m.id} module={m} />
          ))}
        </div>
      )}

      {!isSearching && (
        <button
          className="btn btn-primary center"
          aria-expanded={showAll}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Explore All Modules"}
        </button>
      )}
    </section>
  );
}
