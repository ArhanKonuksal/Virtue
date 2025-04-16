"use client";

import { useState } from "react";
import "./ContactUsSection1.css";
import Swal from "sweetalert2";

function ContactUsSection1() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [updatesChecked, setUpdatesChecked] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      Swal.fire({
        title: "Invalid Email!",
        text: "Please enter a valid email address.",
        icon: "error",
      });
      return;
    }

    if (!email) {
      Swal.fire({
        title: "Email Required!",
        text: "Please enter your email address.",
        icon: "error",
      });
      return;
    }

    if (!message) {
      Swal.fire({
        title: "Message Required!",
        text: "Please enter your message.",
        icon: "error",
      });
      return;
    }

    if (!privacyChecked) {
      Swal.fire({
        title: "Privacy Policy!",
        text: "You must agree to the privacy policy.",
        icon: "error",
      });
      return;
    }

    const formData = new FormData(event.target);
    formData.append("access_key", "6cf44a39-1901-4dbb-85f5-1c03c7cfc77b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    console.log("Form Data:", object); // Log form data for debugging

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await res.json();

      if (result.success) {
        Swal.fire({
          title: "Successful!",
          text: "Your message has been sent successfully!",
          icon: "success",
        });
        setEmail("");
        setMessage("");
        setPrivacyChecked(false);
        setUpdatesChecked(false);
      } else {
        Swal.fire({
          title: "Error!",
          text: "There was an error sending your message!",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Error!",
        text: "There was an error sending your message!",
        icon: "error",
      });
    }
  };

  return (
    <>
      <div className="contact-form-container">
        <form onSubmit={onSubmit} className="contact-form">
          <h1 className="form-title">Send a Message</h1>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={6}
              className="form-textarea"
            />
          </div>

          <div className="checkbox-section">
            <div className="checkbox-group">
              <div className="checkbox-container">
                <input
                  id="privacy"
                  type="checkbox"
                  checked={privacyChecked}
                  onChange={() => setPrivacyChecked(!privacyChecked)}
                  required
                  className="checkbox-input"
                />
              </div>
              <label htmlFor="privacy" className="checkbox-label">
                I have read and understood the Basic Information and I have been
                able to consult the Privacy Policy.*
              </label>
            </div>

            <div className="privacy-text">
              <p>Basic information on personal data protection</p>
              <p>
                In accordance with the provisions in Regulation (EU) 2016/679 on
                the processing of personal data (GDPR), with the Organic Law
                3/2018, of December 5, Protection of Personal Data and Guarantee
                of Digital Rights and with the Law 34/2002, of 11 July, on
                information society services and electronic commerce, the
                personal information provided by you through this form will be
                processed by us as the data controller in order to manage the
                contact request you have made through this form.
              </p>
              <p>
                Processing your personal data is legitimized by the need to
                manage your request for a medical evaluation or consultation.
                This data will not be transferred to any recipient other than
                those expressly authorized by you or required by law. You can
                exercise your rights in the terms foreseen in our additional
                information, which you can consult here:{" "}
                <a
                  href="http://examplesite.com/privacy_policy"
                  className="privacy-link"
                >
                  http://examplesite.com/privacy_policy
                </a>
                . Additionally, if ever you would like to revoke your
                Newsletter, you can give your consent in the box above.
              </p>
            </div>

            <div className="checkbox-group">
              <input
                id="updates"
                type="checkbox"
                checked={updatesChecked}
                onChange={() => setUpdatesChecked(!updatesChecked)}
                className="checkbox-input"
              />
              <label htmlFor="updates" className="checkbox-label">
                Send exclusive updates to my inbox
              </label>
            </div>
          </div>

          <div className="button-container">
            <button type="submit" className="submit-button">
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="divider-line"></div>
    </>
  );
}

export default ContactUsSection1;
