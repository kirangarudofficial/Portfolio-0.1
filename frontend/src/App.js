import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data));

    fetch('http://localhost:5000/api/skills')
      .then(res => res.json())
      .then(data => setSkills(data));
  }, []);

  return (
    <div>
      <ThemeToggle />
      <Hero />
      <AboutMe />
      <section>
        <h2>Projects</h2>
        {projects.map((proj, idx) => (
          <div key={idx}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        ))}
      </section>
      <section>
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, idx) => (
            <li key={idx}>{skill.name} - {skill.level}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;
