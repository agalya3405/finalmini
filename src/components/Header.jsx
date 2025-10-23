import React from "react";

export default function Header({ username, onLogout }) {
  return (
    <header className="app-header">
      <div className="logo">
        <span>Digital Time Travel</span>
      </div>
      <div className="user-info">
        <span>Welcome, {username}</span>
        <button className="logout-btn" onClick={onLogout}>Logout</button>
      </div>
    </header>
  );
}
