import React, { Component } from "react";
import "./Contact.css";
//Transitions
import Roll from "react-reveal/Roll";

class Contact extends Component {
  state = {
    email: {
      name: "",
      recipient: "donZarrillo@gmail.com",
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

  sendEmail = (e) => {
    const { email } = this.state;
    this.setState({
      dialogMsg: "Thank you for your response - Don Zarrillo Jr.",
    });
    console.log(`Email-Rec: ${email.recipient} Email-Sender: ${email.sender}`);
    console.log(`Email-Subject: ${email.subject} Email-text: ${email.text}`);

    fetch(`/send-email?recipient=
      ${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`).catch(
      (err) => {
        console.error(err);
        this.setState({ dialogMsg: "Error sending email!" });
        // this.handleClickOpen();
      }
    );

    this.handleClickOpen();
    e.target.reset();
  };

  handleOnChange = (e) => {
    e.preventDefault();
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
    // this.sendEmail(e);
  };

  render() {
    return (
      <Roll left>
        <div className="form-container">
          <form id="form_contact" action="">
            <fieldset>
              <legend>Contact Me</legend>
              <div className="row">
                {/* <label htmlFor="name">Name</label> */}
                <input
                  type="text"
                  className="contact-field inputBgOpaque"
                  name="firstname"
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
            </fieldset>
          </form>
        </div>
      </Roll>
    );
  }
}

export default Contact;
