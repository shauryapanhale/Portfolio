import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-main">
      <div className="section-spacer" />
      <h1>Contact Me</h1>
      <p>Send a message and you’ll get a reply by email.</p>

      <div className="contact-card">
        <form
          name="contact"
          method="POST"
          className="contact-form"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div>
            <label className="contact-label" htmlFor="email">Your Email</label>
            <input
              id="email"
              className="contact-input"
              type="email"
              name="email"
              placeholder="name@example.com"
              required
            />
          </div>

          <div>
            <label className="contact-label" htmlFor="message">Your Message</label>
            <textarea
              id="message"
              className="contact-textarea"
              name="message"
              placeholder="Write your message..."
              rows="6"
              required
            />
          </div>

          <button type="submit" className="contact-button">Send</button>
        </form>
      </div>
    </section>
  );
}
