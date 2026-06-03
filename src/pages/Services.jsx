import { MdOutlineDesignServices, MdOutlineSpeed, MdOutlineApi, MdOutlineArchitecture } from "react-icons/md";
import Card from "../components/Card";

const services = [
  { icon: <MdOutlineDesignServices />, title: "UI Development", description: "Building pixel-perfect, responsive interfaces using React and modern CSS." },
  { icon: <MdOutlineSpeed />, title: "Performance Optimization", description: "Ensuring fast load times and smooth interactions across all devices." },
  { icon: <MdOutlineApi />, title: "API Integration", description: "Connecting frontends to REST APIs and handling data efficiently." },
  { icon: <MdOutlineArchitecture />, title: "Component Architecture", description: "Designing scalable, reusable component systems for large applications." },
];

export default function Services() {
  return (
    <section className="page">
      <div className="page-header">
        <h2>My <span>Services</span></h2>
        <div className="divider" />
        <p>What I can do for you</p>
      </div>
      <div className="cards-grid">
        {services.map(s => <Card key={s.title} {...s} />)}
      </div>
    </section>
  );
}
