import React from "react";
import "./Projects.css";

export default function Projects() {
  const projects = [
    { name: "Project Alpha", description: "Exploring innovative solutions for digital growth." },
    { name: "Project Beta", description: "Collaborative work to enhance user experience." },
    { name: "Project Gamma", description: "Piloting confidence in digital transformation." },
  ];

  return (
    <section className="projects" id="projects">
      <h2>We talk about our projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
