import React from "react";
import "./Newsletter.css";

export default function Newsletter() {
  return (
    <section className="newsletter" id="newsletter">
      <h2>Subscribe to our Newsletter</h2>
      <p>Stay updated with our latest projects and collaborations.</p>
      <form className="newsletter-form">
        <input
          type="email"
          placeholder="Enter your email"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}
