import Card from "../components/Card";

const services = [
  { icon: "🎨", title: "UI Development", description: "Building pixel-perfect, responsive interfaces using React and modern CSS." },
  { icon: "⚡", title: "Performance Optimization", description: "Ensuring fast load times and smooth interactions across all devices." },
  { icon: "🔗", title: "API Integration", description: "Connecting frontends to REST APIs and handling data efficiently." },
  { icon: "🛠️", title: "Component Architecture", description: "Designing scalable, reusable component systems for large applications." },
];

export default function Services() {
  return (
    <section className="page">
      <h2>Services</h2>
      <p className="page-sub">What I can do for you</p>
      <div className="cards-grid">
        {services.map(s => <Card key={s.title} {...s} />)}
      </div>
    </section>
  );
}
