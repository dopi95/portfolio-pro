const skills = ["React", "JavaScript", "HTML & CSS", "Git", "Vite", "Node.js", "Tailwind CSS", "REST APIs"];

export default function About() {
  return (
    <section className="page">
      <div className="page-header">
        <h2>About <span>Me</span></h2>
        <div className="divider" />
        <p>A little bit about who I am</p>
      </div>
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
          <div className="about-highlight">
            "I believe great code is not just about making things work — it's about
            making them work beautifully."
          </div>
          <p>
            When I'm not coding, I enjoy exploring new design trends and contributing
            to open-source projects.
          </p>
        </div>
        <div className="skills-box">
          <h3>My Skills</h3>
          <ul className="skills-list">
            {skills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
