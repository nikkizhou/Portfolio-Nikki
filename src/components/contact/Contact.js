/* eslint-disable no-unused-vars */
import React from "react";
import { useRef } from "react";
import { Container, TextField } from "@mui/material";
import Swal from 'sweetalert2';

import emailjs from '@emailjs/browser';

import './Contact.css';

const styles = {
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "3em",
  },
  form: {
    width: '100%',
  },
  formfield: {
    width: '100%',
    marginBottom: '2rem',
  },
}



export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8bezxog', 'template_jmsk313', form.current, 'knwNTK4YU4K30HYMd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'You have sent an email!',
      showConfirmButton: false,
      timer: 1500
    })
    e.target.reset()
  };



    return (
      <section id="contact">
        <Container component="main" style={styles.main} maxWidth="md">
          <div className="contact">
            <h1>Contact Me</h1>
            <div className="_form_wrapper">
              <form ref={form} onSubmit={sendEmail} style={styles.form}>
                <TextField
                  id="outlined-name-input"
                  label="Name"
                  type="text"
                  size="small"
                  variant="filled"
                  name="name"
                  style={styles.formfield}
                />
                <TextField
                  id="outlined-password-input"
                  label="Email"
                  type="email"
                  size="small"
                  variant="filled"
                  name="email"
                  style={styles.formfield}
                />
                <TextField
                  id="outlined-password-input"
                  label="Message"
                  type="textarea"
                  size="small"
                  multiline
                  minRows={5}
                  variant="filled"
                  name="message"
                  style={styles.formfield}
                />
                <button type="submit" value="Send" className="submit-btn">
                <i className="fa fa-terminal"></i>
                  <p> Send Message</p>
                </button>
              </form>
            </div>
    
          </div>
        </Container>
      </section>
  );
};
