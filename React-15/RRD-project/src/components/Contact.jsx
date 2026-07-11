import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>Contact Us</h1>
        <p>
          Have any questions or suggestions? We'd love to hear from you.
        </p>

        <form className="contact-form">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
          />

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Subject</label>
          <input
            type="text"
            placeholder="Enter subject"
          />

          <label>Message</label>
          <textarea
            rows="6"
            placeholder="Write your message here..."
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;