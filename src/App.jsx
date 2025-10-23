import React, { useState } from "react";
import LoginScreen from "./components/LoginScreen";
import YearSelectionScreen from "./components/YearSelectionScreen";
import ResultsScreen from "./components/ResultsScreen";
import TravelOverlay from "./components/TravelOverlay";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const [screen, setScreen] = useState("login");
  const [username, setUsername] = useState("");
  const [year, setYear] = useState(2001);
  const [overlay, setOverlay] = useState(false);

  const handleLogin = (name) => {
    setUsername(name);
    setScreen("year");
  };

  const handleTravel = (y) => {
    setOverlay(true);
    setTimeout(() => {
      setYear(y);
      setOverlay(false);
      setScreen("results");
    }, 5000);
  };

  const handleBack = () => setScreen("year");
  const handleLogout = () => setScreen("login");

  return (
    <div className="app-container">
      {overlay && <TravelOverlay />}
      {screen !== "login" && (
        <Header username={username} onLogout={handleLogout} />
      )}

      {screen === "login" && <LoginScreen onLogin={handleLogin} />}
      {screen === "year" && <YearSelectionScreen onTravel={handleTravel} />}
      {screen === "results" && <ResultsScreen year={year} onBack={handleBack} />}

      <Footer />
    </div>
  );
}
