import { useState } from "react";

const emptyForm = { name: "", email: "", message: "" };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  // returns an error message, or "" when everything is valid
  function validate() {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return "Please fill in your name, email, and message.";
    }
    if (!emailPattern.test(form.email.trim())) {
      return "Please enter a valid email address.";
    }
    return "";
  }

  function handleSubmit(e) {
    e.preventDefault(); // stop the page from reloading
    setSuccess("");
    const problem = validate();
    if (problem) {
      setError(problem);
      return;
    }
    setError("");
    setSuccess("Demo enquiry completed. No message has been sent.");
    setForm(emptyForm);
  }

  return (
    <section id="contact" className="section contact">
      <div>
        <h2>Contact Us</h2>
        <p>Email: hello@shieldup.example</p>
        <p>Phone: +234 800 000 0000 (sample number)</p>
        <p>Mon to Fri, 9am to 5pm</p>
        <p className="note">This form is a demonstration. No message will be sent.</p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={form.name} onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} />

        {error && <p className="error" role="alert">{error}</p>}
        {success && <p className="success" role="status">{success}</p>}

        <button type="submit" className="btn btn-primary">Send enquiry</button>
      </form>
    </section>
  );
}
