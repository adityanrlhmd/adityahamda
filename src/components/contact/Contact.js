/* eslint-disable no-unused-vars */
import React from "react";
import { useRef } from "react";
import { Container, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import Swal from "sweetalert2";

import emailjs from "@emailjs/browser";

import "./Contact.css";

const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: "100vh",
    maxWidth: "100vw",
    display: "flex",
    alignItems: "center",
  },
  form: {
    width: "100%",
  },
  formfield: {
    width: "100%",
    marginBottom: "2rem",
  },
}));

export const Contact = () => {
  const classes = useStyles();
  const greetings = "Say hello.";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "You have sent an email!",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        },
        (error) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "You have not sent an email!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  };

  return (
    <section id="contact">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="contact">
          <div className="_form_wrapper">
            <form ref={form} onSubmit={sendEmail} className={classes.form}>
              <TextField
                id="outlined-name-input"
                label="Name"
                type="text"
                size="small"
                variant="filled"
                name="name"
                className={classes.formfield}
              />
              <TextField
                id="outlined-password-input"
                label="Email"
                type="email"
                size="small"
                variant="filled"
                name="email"
                className={classes.formfield}
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
                className={classes.formfield}
              />
              <button
                type="submit"
                value="Send"
                className="px-4 py-2 transition-all duration-300 rounded-lg hover:text-white hover:bg-primary"
              >
                <i className="fas fa-terminal"></i>
                <Typography component="span"> Send Message</Typography>
              </button>
            </form>
          </div>
          <h1 className="contact_msg">
            <TextDecrypt text={greetings} />
          </h1>
        </div>
      </Container>
    </section>
  );
};
