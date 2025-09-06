import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const ProjectWireframe = () => {
	const navigate = useNavigate();

	return (
		<div>
			<nav className="navbar navbar-light bg-light fixed-top">
				<div className="container">
					<button
						className="navbar-brand btn btn-link p-0"
						onClick={() => navigate(-1)}
					>
						← Back to Portfolio
					</button>
				</div>
			</nav>
			<div className="hero container mt-5">
				{/* Hero Section */}
				<div className="row mb-5">
					<div className="col-12 text-center">
						<h1 className="display-4">KaBlammo Tanks</h1>
						<p className="lead">
							Invite your friends to meet up and play a fast and chaotic
							tug-of-war!
						</p>
					</div>
					<div className="col-12 mt-3">
						<div className="ratio" style={{ "--bs-aspect-ratio": "30%" }}>
							<iframe
								src="https://www.youtube.com/embed/VQdGXn3Sw8k?si=IXPlc_am18t-TUfi"
								title="YouTube video player"
								frameBorder="0"
								allowFullScreen
							></iframe>
						</div>
					</div>
				</div>
			</div>

			{/* Key Details & Role */}
			<div className="row mb-5">
				<div className="col-lg-8 offset-lg-2">
					<div className="card shadow-sm">
						<div className="card-body">
							<h2 className="card-title">My Role & Contributions</h2>
							<div className="row">
								<div className="col-md-6">
									<p>
										<strong>Role:</strong> Solo Developer
									</p>
									<p>
										<strong>Team Size:</strong> 1 person
									</p>
									<p>
										<strong>Technologies:</strong> Unity, Netcode, Audacity,
										GIMP, Generative AI (Art), JetBrains Rider
									</p>
								</div>
								<div className="col-md-6">
									<p>
										<strong>My Contributions:</strong>
									</p>
									<ul>
										<li>Designed and implemented game look and feel.</li>
										<li>
											Integrated Unity Netcode for GameObjects into the game.
										</li>
										<li>Created and managed codebase and assets.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Technical Details Section */}
			<div className="row mb-5">
				<div className="col-lg-8 offset-lg-2">
					<h2 className="mb-4">Technical Details</h2>

					{/* Contribution 1 */}
					<div className="mb-4">
						<h3>
							<span className="badge badge-primary mr-2">1</span> Unity Netcode
							for GameObjects
						</h3>
						<p>
							This was the main challenge of the project. As someone who has not
							worked with Netcode before working on this project, it was
							challenging yet rewarding. However, I had previously made a simple
							rock-paper-scissors game using Photon in Unity 4 years ago, which
							was my first exposure to using server and client RPCs. Multiplayer
							was also not a new topic for me; I have also been familiar with
							the idea of server-client replication and ownership thanks to
							making games on Roblox Studio in the past. As a result, I was able
							to learn this new technology surprisingly quickly. Since this game
							is LAN only, I have yet to explore more of what Unity Netcode has
							to offer!
						</p>
					</div>

					{/* Contribution 2 */}
					<div className="mb-4">
						<h3>
							<span className="badge badge-primary mr-2">2</span> Simulated
							Projectile Motion
						</h3>
						<p>
							For more control over projectiles, I utilized the mathematics
							behind bezier curves to simulate projectile motion. While it took
							me a while to figure it out, it worked flawlessly when I did. For
							ammo collision, Unity's in-built Rigidbody and Collider physics
							were reliable enough for my use case.
						</p>
					</div>

					{/* Contribution 2 */}
					<div className="mb-4">
						<h3>
							<span className="badge badge-primary mr-2">2</span> Beware of
							Bugs!
						</h3>
						<p>
							This game is far from being polished, but I just wanted to share
							this cool prototype as I continue working on it.
						</p>
					</div>
				</div>
			</div>

			{/* Achievements Section */}
			<div className="row mb-5">
				<div className="col-lg-8 offset-lg-2">
					<h2 className="mb-4">Achievements</h2>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							My first complex Unity multiplayer game (yay!)
						</li>
						<li className="list-group-item">
							My first time trying LAN multiplayer out!
						</li>
					</ul>
				</div>
			</div>

			{/* Media Gallery */}
			<div className="row mb-5">
				<div className="col-lg-8 offset-lg-2">
					<h2 className="mb-4">Gallery</h2>
					<div className="row">
						{/* Image 1 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/kablammo/quick-mockup.jpg"
									alt="Game UI mockup"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									Early UI mockup showing the tank and projectile.
								</figcaption>
							</figure>
						</div>
						{/* Image 2 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/kablammo/lan-join.jpeg"
									alt="LAN multiplayer demonstration"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									Lan multiplayer!
								</figcaption>
							</figure>
						</div>
						{/* Image 3 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/kablammo/ragequit.jpeg"
									alt="'Rage quit'"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									When a player leaves or disconnects from an ongoing game...
								</figcaption>
							</figure>
						</div>
					</div>
				</div>
			</div>

			{/* Call to Action Buttons */}
			<div className="row mb-5">
				<div className="col-12 text-center">
					<a
						href="https://johnzhou.itch.io/kablammo-tanks"
						className="btn btn-primary btn-lg mx-2"
						role="button"
					>
						Play Now
					</a>
					<a
						href="https://github.com/johnzhou1210/KaBlammoTanks"
						className="btn btn-secondary btn-lg mx-2"
						role="button"
					>
						View on GitHub
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectWireframe;
