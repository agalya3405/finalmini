import React, { useState } from "react";
import { isValidYear } from "../utils/validation";

const MIN_YEAR = 1947;
const MAX_YEAR = 2025;

export default function YearSelectionScreen({ onTravel }) {
  const [year, setYear] = useState(2001);

  const handleSurprise = () => {
    const randomYear = Math.floor(Math.random() * (MAX_YEAR - MIN_YEAR + 1)) + MIN_YEAR;
    setYear(randomYear);
    onTravel(randomYear);
  };

  const handleTravel = () => {
    if (isValidYear(year, MIN_YEAR, MAX_YEAR)) {
      onTravel(year);
    } else {
      alert(`Please enter a year between ${MIN_YEAR} and ${MAX_YEAR}`);
    }
  };

  return (
    <div className="screen active">
      <div className="selection-container">
        <h2>Choose Your Destination Year</h2>
        <label>Enter Year ({MIN_YEAR}-{MAX_YEAR})</label>
        <input
          type="number"
          value={year}
          min={MIN_YEAR}
          max={MAX_YEAR}
          onChange={(e) => setYear(parseInt(e.target.value || 2001))}
        />
        <div className="button-group">
          <button onClick={handleTravel} className="travel-btn">
            Travel to {year}
          </button>
          <button onClick={handleSurprise} className="surprise-btn">
            Surprise Me!
          </button>
        </div>
      </div>
    </div>
  );
}
