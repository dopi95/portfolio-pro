import { MdOutlineAddCircleOutline, MdOutlineTimer, MdOutlineWeb } from "react-icons/md";
import Card from "../components/Card";

const projects = [
  { icon: <MdOutlineAddCircleOutline />, title: "Counter App", description: "A counter with increment, decrement, reset and localStorage persistence built with React Hooks." },
  { icon: <MdOutlineTimer />, title: "Digital Clock & Timer", description: "A real-time digital clock and a stopwatch with lap tracking, centiseconds and localStorage." },
  { icon: <MdOutlineWeb />, title: "Portfolio Website", description: "This portfolio — built with React, React Router, dark mode toggle and reusable components." },
];

export default function Projects() {
  return (
    <section className="page">
      <div className="page-header">
        <h2>My <span>Projects</span></h2>
        <div className="divider" />
        <p>Things I've built</p>
      </div>
      <div className="cards-grid">
        {projects.map(p => <Card key={p.title} {...p} />)}
      </div>
    </section>
  );
}
