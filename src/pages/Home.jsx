import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Home() {
  return (
    <section className="page hero">
      <div className="hero-content">
        <p className="hero-greeting">Welcome to my portfolio</p>
        <h1>
          I'm <span>Elyas</span><br />Yenealem
        </h1>
        <p className="hero-sub">
          <strong>Frontend Developer</strong> &amp; React Enthusiast
        </p>
        <p className="hero-desc">
          I craft clean, responsive, and user-friendly web experiences.
          Passionate about modern UI design and writing great code.
        </p>
        <div className="hero-btns">
          <Link to="/projects"><Button>View My Work</Button></Link>
          <Link to="/contact"><Button variant="outline">Contact Me</Button></Link>
        </div>
      </div>
    </section>
  );
}
