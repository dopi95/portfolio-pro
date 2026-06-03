const skills = ["React", "JavaScript", "HTML & CSS", "Git", "Vite", "Node.js"];

export default function About() {
  return (
    <section className="page">
      <h2>About Me</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            Hi! I'm <strong>Elyas Yenealem</strong>, a passionate frontend developer
            who loves turning ideas into beautiful, functional web applications.
          </p>
          <p>
            I'm currently sharpening my skills in React and modern JavaScript,
            always eager to learn new technologies and tackle real-world challenges.
          </p>
          <p>
            When I'm not coding, I enjoy exploring new design trends and contributing
            to open-source projects.
          </p>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <ul className="skills-list">
            {skills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
