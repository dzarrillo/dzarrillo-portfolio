import React, { Component } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
//Transitions
import Roll from "react-reveal/Roll";

class Contact extends Component {
  state = {
    email: {
      name: "",
      recipient: "",
      sender: "",
      subject: "Resume",
      text: "",
    },
    open: false,
    dialogMsg: "",
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  handleOnChange = (e) => {
    e.preventDefault();
    let emailMsg = document.getElementById("email_msg");
    emailMsg.classList.remove("send_email");
    emailMsg.classList.add("hide_email");

    const { email } = this.state;

    const { name, value } = e.target;
    switch (name) {
      case "name":
        console.log(`Name: ${name}  value: ${value}`);
        email.name = value;
        break;
      case "email":
        console.log(`Name: ${name}  value: ${value}`);
        // this.setState({ email: { sender: value } });
        email.sender = value;
        break;
      case "message":
        console.log(`Name: ${name}  value: ${value}`);
        // this.setState({ email: { text: value } });
        email.text = value;
        break;
      default:
        break;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Button sebmitted");

    emailjs
      .sendForm(
        "service_gmail",
        process.env.REACT_APP_EMAIL_TEMPLATE,
        e.target,
        process.env.REACT_APP_EMAILJS_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          let emailMsg = document.getElementById("email_msg");
          emailMsg.classList.add("send_email");
          emailMsg.classList.remove("hide_email");
          // return (
          //   <div>
          //     <h2>Email was sent successfully!</h2>
          //   </div>
          // );
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  render() {
    return (
      <Roll left>
        <div className="form-container">
          <form id="form_contact" onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Contact Me</legend>
              <div className="row">
                {/* <label htmlFor="name">Name</label> */}
                <input
                  type="text"
                  className="contact-field inputBgOpaque"
                  name="from_name"
                  id="firstname"
                  required
                  placeholder="First Name"
                />
              </div>

              <div className="row">
                {/* <label htmlFor="email">Email</label> */}
                <input
                  type="email"
                  className="contact-field "
                  name="email"
                  id="email"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                  placeholder="Email"
                />
              </div>
              <div className="row">
                {/* <label htmlFor="message">Message</label> */}
                <textarea
                  className="contact-field"
                  name="message"
                  rows="5"
                  required
                  form="form_contact"
                  placeholder="Message"
                  align="center"
                ></textarea>
              </div>

              <div className="row">
                <input type="submit" id="submit" name="submit" value="Send" />
              </div>
              <div className="row">
                <h2 id="email_msg" className="hide_email">
                  Email was sent successfully!
                </h2>
              </div>
            </fieldset>
          </form>
        </div>
      </Roll>
    );
  }
}

export default Contact;
