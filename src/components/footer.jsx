import React from "react";

export default function Footer() {
	return (
		<footer className="footerMain">
			<img className="footerTopBg" src="/Images/RadialCircle.svg" />
			<img className="footerBottomBg" src="/Images/RadialCircle.svg" />

			<section className="leftSection">
				<div className="topLeftSection">
					<h1 className="footerHead">Contact Us</h1>
					<p>jawaharbhawan@iitr.ac.in</p>
					<br />
					<p>123-456-980</p>
					<br />
					<div className="footerLine" />
					<br />
					<p>Jawahar Bhawan, Jawahar Bhawan Road, <br />
					IIT Roorkee, Roorkee-247667 <br />
					Uttrakhand, IN</p> <br />
				</div>
				<div className="bottomLeftSection">
					<p>Home</p>
					<p>Feedback Form</p>
					<p>Register a Complaint</p>
				</div>
			</section>

			<section className="rightSection">
					<h1 className="footerHead">Find Us here</h1>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.395936062983!2d77.21277351489312!3d28.61789328242347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2b5d155be63%3A0x819d012e224ef827!2sJawahar%20Bhawan%2C%20Raisina%20Road%2C%20Windsor%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1649255362105!5m2!1sen!2sin"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
			</section>
		</footer>
	);
}
