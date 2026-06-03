import { useState } from "react";
import Button from "../components/Button";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="page">
      <h2>Contact</h2>
      <p className="page-sub">Let's work together</p>
      {sent && <p className="success-msg">✅ Message sent! I'll get back to you soon.</p>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          name="name" placeholder="Your Name" value={form.name}
          onChange={handleChange} required
        />
        <input
          name="email" type="email" placeholder="Your Email" value={form.email}
          onChange={handleChange} required
        />
        <textarea
          name="message" placeholder="Your Message" rows={5} value={form.message}
          onChange={handleChange} required
        />
        <Button type="submit">Send Message</Button>
      </form>
    </section>
  );
}
