import React from "react";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaItchIo, FaLinkedin } from "react-icons/fa";

function Contacts() {
	return (
		<section id="about-contact" className="py-5 bg-light">
			<div className="container">
				{/* Header */}
				<h1 className="text-center mb-4">About Me</h1>

				{/* About Text */}
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<p className="lead text-muted">
							I'm John Zhou, a software and game developer passionate about
							creating interactive and engaging experiences. I work with Unity
							and C# for game development, and I also build web applications
							with React, JS/TS, and Supabase. I particularly enjoy the feeling after solving a tough problem after hours (and sometimes even days) of debugging and scratching my head. Game development has taught me about the neverending process of learning and applying new skills.
						</p>
						<p className="text-muted">
							I'm especially interested in multiplayer game mechanics,
							turn-based RPG systems, and creating intuitive, interactive UI
							experiences. Outside of coding, I enjoy playing other games for
							inspiration and tinkering with my current Linux distribution of
							choice (Fedora). I'm excited to work on projects that challenge
							me, whether in game development, web/software applications, or
							data analysis, and I'm always eager to learn new technologies.
						</p>
					</div>
				</div>

				{/* Contact Form */}
				<div className="row justify-content-center my-5">
					<div className="col-lg-6">
						<h2 className="text-center mb-4">Contact Me</h2>
						<form action="https://formspree.io/f/mpwjzpag" method="POST">
							<div className="mb-3">
								<label htmlFor="name" className="form-label">
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									className="form-control"
									required
								/>
							</div>

							<div className="mb-3">
								<label htmlFor="email" className="form-label">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="_replyto"
									className="form-control"
									required
								/>
							</div>

							<div className="mb-3">
								<label htmlFor="message" className="form-label">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									rows="5"
									className="form-control"
									required
								></textarea>
							</div>

							<button type="submit" className="btn btn-primary w-100">
								Send
							</button>
						</form>
					</div>
				</div>

				{/* Social Links */}
				<div className="text-center">
					<h3 className="mb-3">Find me online</h3>
					<div className="d-flex justify-content-center gap-4">
						<a
							href="https://github.com/johnzhou1210"
							target="_blank"
							rel="noreferrer"
						>
							<FaGithub size={40} className="text-dark" />
						</a>
						<a
							href="https://www.linkedin.com/in/john-zh/"
							target="_blank"
							rel="noreferrer"
						>
							<FaLinkedin size={40} className="text-primary" />
						</a>
						<a href="https://zhouj6.itch.io/" target="_blank" rel="noreferrer">
							<FaItchIo size={40} className="text-danger" />
						</a>
						<a href="mailto:johnzhou256@gmail.com">
							<MdEmail size={40} className="text-secondary" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contacts;
