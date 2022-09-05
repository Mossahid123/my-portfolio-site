import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4bb3s9d",
        "template_rc9hjlu",
        form.current,
        "qz3o7FzKHSUeKzOZ_"
      )
      .then(
        (result) => {
          e.target.reset();
          console.log(result.text);
          toast.success("Thanks! Message sent successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error("Something wrong! Try again");
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_icon" />
            <h4>Email</h4>
            <h5>mdmahmud484@gmail.com</h5>
            <a
              href="mailto:mdmahmud484@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_icon" />
            <h4>Messanger</h4>
            <h5>Abdullah Al Mahmud</h5>
            <a href="https://m.me/mahmud2640" rel="noreferrer" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_icon" />
            <h4>Whatsapp</h4>
            <h5>017******40</h5>
            <a
              href="https://wa.me/+8801792492640"
              rel="noreferrer"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>

        {/* form section */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          <ToastContainer />
        </form>
      </div>
    </section>
  );
};

export default Contact;
