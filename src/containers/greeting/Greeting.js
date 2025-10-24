import React, { useContext, useState } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import ReactDOM from "react-dom";
import emailjs from "@emailjs/browser";
import "./modal.css";




// Modal Component (inline)
function ContactModal({ open, onClose }) {
  const [sending, setSending] = useState(false);
  const [values, setValues] = useState({ from_email: "", message: "" });

  if (!open) return null;

  const onChange = (e) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      setSending(true);
      await emailjs.send(
        "YOUR_SERVICE_ID",    // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID",   // Replace with your EmailJS template ID
        values,
        "YOUR_PUBLIC_KEY"     // Replace with your EmailJS public key
      );
      setSending(false);
      onClose();
      setValues({ from_email: "", message: "" });
      alert("Message sent. Thanks!");
    } catch (err) {
      setSending(false);
      alert("Failed to send. Please try again.");
    }
  };

  return ReactDOM.createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <h3 className="modal-title">Email Me</h3>
        <p className="modal-sub">
          Send a quick message and you'll get a reply by email.
        </p>

        <form className="modal-form" onSubmit={sendEmail}>
          <div>
            <label className="modal-label" htmlFor="from_email">
              Your Email
            </label>
            <input
              id="from_email"
              className="modal-input"
              type="email"
              name="from_email"
              value={values.from_email}
              onChange={onChange}
              placeholder="name@example.com"
              required
            />
          </div>

          <div>
            <label className="modal-label" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              className="modal-textarea"
              name="message"
              value={values.message}
              onChange={onChange}
              placeholder="Write your message..."
              rows="6"
              required
            />
          </div>

          <div className="modal-actions">
            <button
              type="button"
              className="modal-btn cancel"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="modal-btn primary"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  const [open, setOpen] = useState(false);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                {/* Email Me button opens modal */}

                {greeting.resumeLink && (
                  <a
                    href={greeting.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>

      {/* Modal Portal */}
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </Fade>
  );
}
