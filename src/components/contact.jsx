import React from "react";
import { Element } from "react-scroll";
import emailjs from "emailjs-com";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_628o2dr",
        "template_jlhsmf9",
        e.target,
        "HSVaLlQxl7h_ip3Ue"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send the message. Please try again later.");
        }
      );

    e.target.reset(); // Reset the form after submission
  };
  return (
    <Element name="contact">
      <section className="hero-text">
        <div className="bg" id="contact"></div>
        <div className="contact-content">
          <h1 className="hero-text title">STAY IN TOUCH!</h1>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows="5"
                required></textarea>
            </div>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
          <div className="contact-info">
            <p>Email: vasusingla44@example.com</p>
            <p>Phone: +91 9056316104</p>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
