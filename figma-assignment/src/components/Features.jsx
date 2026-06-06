import React from "react";
import "./Features.css";

export default function Features() {
  const features = [
    { title: "Collaboration & Partnership", description: "Work together to achieve more." },
    { title: "Projects", description: "We talk about our projects." },
    { title: "Digital Confidence", description: "Piloting digital confidence." },
  ];

  return (
    <section className="features" id="features">
      <h2>See how we can help you progress</h2>
      <div className="features-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
