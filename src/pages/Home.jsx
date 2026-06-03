import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Home() {
  return (
    <section className="page hero">
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1>Elyas Yenealem</h1>
        <p className="hero-sub">Frontend Developer &amp; React Enthusiast</p>
        <p className="hero-desc">
          I build clean, responsive, and user-friendly web experiences.
          Passionate about modern UI and great code.
        </p>
        <div className="hero-btns">
          <Link to="/projects"><Button>View My Work</Button></Link>
          <Link to="/contact"><Button variant="outline">Contact Me</Button></Link>
        </div>
      </div>
    </section>
  );
}
