import React from "react";
import {
	FaEnvelope,
	FaGithub,
	FaItchIo,
	FaLinkedin,
	FaMailBulk,
} from "react-icons/fa";

function Header() {
	return (
		<div className="hero-section text-center bg-light py-5">
			<div className="container">
				<h1 className="display-3 fw-bold mb-3">John Zhou</h1>
				<h2 className="h4 text-muted mb-3">Software & Game Developer</h2>
				<h3 className="h5 mb-4">Building interactive games and web apps.</h3>

				{/* Social Icons Row */}
				<div className="d-flex justify-content-center gap-4">
					<a
						href="https://github.com/johnzhou1210"
						target="_blank"
						rel="noreferrer"
					>
						<FaGithub size={36} className="text-dark" />
					</a>
					<a
						href="https://www.linkedin.com/in/john-zh/"
						target="_blank"
						rel="noreferrer"
					>
						<FaLinkedin size={36} className="text-primary" />
					</a>
					<a href="mailto:johnzhou256@gmail.com">
						<FaEnvelope size={36} className="text-danger" />
					</a>
					<a href="https://zhouj6.itch.io/" target="_blank" rel="noreferrer">
						<FaItchIo size={36} className="text-secondary" />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Header;
