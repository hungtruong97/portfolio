import React from "react";
import "../../styles/Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <div className="row">
        <div className="item">
          <span>Email Me</span>
          <FontAwesomeIcon icon={faArrowRightLong} />
        </div>
        <div className="item">
          <span>LinkedIn</span>
          <FontAwesomeIcon icon={faArrowRightLong} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
