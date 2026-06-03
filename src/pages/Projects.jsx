import Card from "../components/Card";

const projects = [
  { icon: "🔢", title: "Counter App", description: "A counter with increment, decrement, reset and localStorage persistence built with React Hooks." },
  { icon: "⏱️", title: "Digital Clock & Timer", description: "A real-time digital clock and a stopwatch with lap tracking, centiseconds and localStorage." },
  { icon: "🌐", title: "Portfolio Website", description: "This portfolio — built with React, React Router, dark mode toggle and reusable components." },
];

export default function Projects() {
  return (
    <section className="page">
      <h2>Projects</h2>
      <p className="page-sub">Things I've built</p>
      <div className="cards-grid">
        {projects.map(p => <Card key={p.title} {...p} />)}
      </div>
    </section>
  );
}
