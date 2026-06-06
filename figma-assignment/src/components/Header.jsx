// src/components/Header.jsx
import React from "react";
import "./Header.css";
 // optional CSS file

export default function Header() {
  return (
    <header className="header">
      <div className="logo">ARPITA SINHA</div>
      <nav className="nav">
        <a href="#features">Features</a>
        <a href="#projects">Projects</a>
        <a href="#newsletter">Subscribe</a>
      </nav>
    </header>
  );
}
