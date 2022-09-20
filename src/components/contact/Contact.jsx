import React, { useRef } from "react";
import "./contact.css";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_67wcjl9",
        "template_rvo720g",
        form.current,
        "sqDHOFIQt60rioLh1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <h4>Email</h4>
            <h5>andres.medina.arg@gmail.com</h5>
            <a href="mailto:andres.medina.arg@gmail.com" target="_blank">
              Send an email
            </a>
          </article>
          <article className="contact__option">
            <h4>WhatsApp</h4>
            <h5>+5493816713512</h5>
            <a href="https://wa.me/5493816713512" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="10"
          ></textarea>
          <button type="submit" className="btn btn/primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
