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
      <div className="page-header">
        <h2>Get In <span>Touch</span></h2>
        <div className="divider" />
        <p>Let's work together</p>
      </div>
      <div className="contact-wrap">
        <div className="contact-info">
          <h3>Let's talk about your project</h3>
          <p>
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your vision. Feel free to reach out!
          </p>
          <div className="contact-detail">
            <span><strong>Name:</strong> Elyas Yenealem</span>
            <span><strong>Role:</strong> Frontend Developer</span>
            <span><strong>Location:</strong> Ethiopia</span>
            <span><strong>Available:</strong> Open to work</span>
          </div>
        </div>
        <div>
          {sent && <p className="success-msg">Message sent! I'll get back to you soon.</p>}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" rows={6} value={form.message} onChange={handleChange} required />
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
