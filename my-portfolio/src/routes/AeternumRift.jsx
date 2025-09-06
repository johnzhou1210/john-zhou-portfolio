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
						<h1 className="display-4">Aeternum Rift</h1>
						<p className="lead">
							An ambitious turn-based RPG prototype created in Roblox Studio.
						</p>
					</div>
					<div className="col-12 mt-3">
						<div className="ratio" style={{ "--bs-aspect-ratio": "56%" }}>
							<iframe
								src="https://www.youtube.com/embed/3sZWQZr76Gw?si=oTqyUPKHh4QkXq7T"
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
										<strong>Technologies:</strong> Roblox Studio, Lua, Remote
										Events/Functions, Bindable Events/Functions, Audacity,
										MuseScore, GIMP, Trello
									</p>
								</div>
								<div className="col-md-6">
									<p>
										<strong>Development Duration:</strong> ~9 months
										(on-and-off)
									</p>
									<p>
										<strong>My Contributions:</strong>
									</p>
									<ul>
										<li>Implemented all game logic and mechanics.</li>
										<li>Created and integrated some music into the game.</li>
										<li>Integrated art and SFX assets into the game.</li>
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
							<span className="badge badge-primary mr-2">1</span>Communicating
							between Client and Server
						</h3>
						<p>
							On the client side, I would gather all of the player's commands
							and send them to the server through a RemoteEvent or
							RemoteFunction in an table of primitive data, such as the player
							index that initiated it, the action name, and the targets of the
							action. Once the server calculates the outcome of the player's
							actions, as well as the generated enemy's actions, the server
							sends a custom formatted string with all of the player and enemy
							actions for that turn. See the comment code snippet below.
						</p>
						{/* Image 1 with caption */}
						<div className="col-md-12 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/aeternum/snippet.png"
									alt="CEO Grab Animation Sprite Sheet by Stacy"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2"></figcaption>
							</figure>
						</div>
					</div>

					{/* Contribution 2 */}
					<div className="mb-4">
						<h3>
							<span className="badge badge-primary mr-2">2</span> 3D Models
						</h3>
						<p>
							I built all of the title screen's 3D models from scratch simply
							using Roblox Studio's inbuilt tools.
						</p>
					</div>

					{/* Contribution 3 */}
					<div className="mb-4">
						<h3>
							<span className="badge badge-primary mr-2">2</span> Old-school
							debugging!
						</h3>
						<p>
							I did not use generative AI to help me during the entire process
							of making this game as it was not mainstream back then in mid
							2021-early 2022.
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
							My first turn-based battle prototype that I can say I was proud
							of!
						</li>
					</ul>
				</div>
			</div>

			{/* Media Gallery */}
			<div className="row mb-5">
				<div className="col-lg-8 offset-lg-2">
					<h2 className="mb-4">Gallery</h2>
					<div className="row">
						{/* Image 3 with caption */}
						<div className="col-md-12 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/aeternum/aeternum3.png"
									alt="Aeternum3"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2"></figcaption>
							</figure>
						</div>
						{/* Image 4 with caption */}
						<div className="col-md-12 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/aeternum/aeternum4.png"
									alt="Aeternum4"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2"></figcaption>
							</figure>
						</div>
						{/* Image 5 with caption */}
						<div className="col-md-12 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/aeternum/aeternum5.png"
									alt="Aeternum5"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2"></figcaption>
							</figure>
						</div>
						{/* Image 6 with caption */}
						<div className="col-md-12 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/aeternum/aeternum6.png"
									alt="Aeternum6"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2"></figcaption>
							</figure>
						</div>
						{/* Image 7 with caption */}
						<div className="col-md-12 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/aeternum/aeternum7.png"
									alt="Aeternum7"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2"></figcaption>
							</figure>
						</div>
						{/* Image 8 with caption */}
						<div className="col-md-12 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/aeternum/aeternum8.png"
									alt="Aeternum8"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2"></figcaption>
							</figure>
						</div>

						{/* Image 1 with caption */}
						<div className="col-md-12 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/aeternum/aeternum1.png"
									alt="Aeternum1"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2"></figcaption>
							</figure>
						</div>
						{/* Image 2 with caption */}
						<div className="col-md-12 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/aeternum/aeternum2.png"
									alt="Aeternum2"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2"></figcaption>
							</figure>
						</div>
					</div>
				</div>
			</div>

			{/* Call to Action Buttons */}
			<div className="row mb-5">
				<div className="col-12 text-center">
					<a
						href="https://github.com/johnzhou1210/rblx-turn-based-combat-test"
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
