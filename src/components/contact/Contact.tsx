/* eslint-disable no-unused-vars */
import React from "react";
import { useRef } from "react";
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import './Contact.css';

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs.sendForm('service_8bezxog', 'template_jmsk313', form.current, 'knwNTK4YU4K30HYMd')
        .then((result) => console.log(result.text))
        .catch((error:Error) => console.log(error.message))
    }
    
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'You have sent an email!',
      showConfirmButton: false,
      timer: 1500
    })
    //@ts-ignore
    e.target.reset()
  };


    return (
      <section id="contact" className="contact">
        <h1>Contact Me</h1>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" placeholder="Name"/>
          <input type="email" placeholder="Email"/>
          <textarea placeholder="Write your message here..." />
          <button type="submit" value="Send" className="submit-btn"> 
              Send Message
          </button>
        </form>
      </section>
  );
};
