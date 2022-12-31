import { LinkedIn, Mail, PinDrop } from "@material-ui/icons";
import React from "react";
import "./Contact.css";

const Contact = () => {
	return (
		<div className="contact">
			<p className="contact-title-1">Contact Me 📞</p>
			<h1 className="contact-title-2">Get In Touch 🤝</h1>
			<div className="contact-details-list">
				<div className="details">
					<LinkedIn className="contact-icon" fontSize="large" />
					<div className="contact-info">
						<h4>Message Me</h4>
						<p>https://www.linkedin.com/in/sridhar-maskeri-1714001aa/</p>
					</div>
				</div>
				<div className="details">
					<Mail className="contact-icon" fontSize="large" />
					<div className="contact-info">
						<h4>Mail Me</h4>
						<p>shridharmaskeri@gmail.com</p>
					</div>
				</div>
                <div className="details">
					<PinDrop  className="contact-icon" fontSize="large" />
					<div className="contact-info">
						<h4>My Location</h4>
						<p>Goa, India</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
