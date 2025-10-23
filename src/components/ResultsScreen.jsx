import React, { useState } from "react";
import { NEWS_DATA } from "../data/newsData";
import { SONGS_DATA } from "../data/songsData";
import { MEDIA_DATA } from "../data/mediaData";

export default function ResultsScreen({ year, onBack }) {
  const [category, setCategory] = useState("news");

  const getData = () => {
    const map = { news: NEWS_DATA, songs: SONGS_DATA, media: MEDIA_DATA };
    return map[category].filter((item) => item.year === year);
  };

  const data = getData();

  return (
    <div className="screen active">
      <div className="results-container">
        <h1 id="selected-year-display">{year}</h1>
        <p className="subtitle">A journey through time and culture</p>
        <div className="tabs">
          {["news", "songs", "media"].map((c) => (
            <button
              key={c}
              className={`tab-button ${c === category ? "active" : ""}`}
              onClick={() => setCategory(c)}
            >
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          ))}
        </div>
        <div id="results-content" className="results-grid">
          {data.length > 0 ? (
            data.map((item, index) => (
              <div key={index} className="result-card">
                <h3>
                  <span className="rank">{item.rank}.</span> {item.title}
                </h3>
                <p>{item.summary || item.description}</p>
                <p className="meta-info">{item.source_name || item.film}</p>
              </div>
            ))
          ) : (
            <p className="loading-text">No {category} data found for {year}.</p>
          )}
        </div>
        <button onClick={onBack} className="back-btn">Choose Another Year</button>
      </div>
    </div>
  );
}
