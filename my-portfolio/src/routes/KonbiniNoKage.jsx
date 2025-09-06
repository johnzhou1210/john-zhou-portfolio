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
						<h1 className="display-4">Konbini no Kage</h1>
						<p className="lead">
							Survive a 4 graveyard shifts at Rawson! You just need to be
							careful of one particular customer...
						</p>
					</div>
					<div className="col-12 mt-3">
						<div className="ratio" style={{ "--bs-aspect-ratio": "56%" }}>
							<iframe
								src="https://www.youtube.com/embed/nQ_U5XzlnAE?si=fNT8vO_K1zGvuQ6A"
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
										<strong>Technologies:</strong> Unity, NavMesh, RealtimeCSG
										(to create 3D models within Unity), Cinemachine, Blender (to
										decimate/simplify 3d models), Audacity, MuseScore (Stalker's
										chase music loop), PureRef (for image references when
										building 3D models) Generative AI (2D Art & Textures), GIMP
										(to edit Generative AI images), JetBrains Rider
									</p>
								</div>
								<div className="col-md-6">
									<p>
										<strong>Development Duration:</strong> ~45 days
									</p>
									<p>
										<strong>My Contributions:</strong>
									</p>
									<ul>
										<li>
											Created all the visuals for the scene, including
											animations, visual effects, 3D models, excluding textures
											that were generated with AI.
										</li>
										<li>
											Implemented all core mechanics of the game, such as
											navigating security cameras, lining up and checking out
											customers, NPC AI, and interactions with the environment
											(e.g. breaker box, cashier, CCTV)
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
							<span className="badge badge-primary mr-2">1</span>Special Camera
							Manipulation & Visual Effects
						</h3>
						<p>
							The main point of experimentation within this project was the
							process of manipulating Cinemachine and Unity's built in camera
							system to achieve functional security cameras. To achieve a
							'security camera' feel to the in-game CCTV, I utilized Keijiro
							Takahashi's KinoGlitch video effect from his GitHub repository.
							After combining it with Unity's post-processing, I achieved a more
							realistic security-camera feel which worked great for this
							psychological horror game.
						</p>
					</div>

					{/* Contribution 2 */}
					<div className="mb-4">
						<h3>
							<span className="badge badge-primary mr-2">2</span> Building 3D
							Models within Unity
						</h3>
						<p>
							To achieve this, I used LogicalError's RealTimeCSG editor to
							quickly create the convenience store's structure, as well as for
							some small items with tricky shapes. While I know that Unity
							ProBuilder was also another option, I found RealTimeCSG much more
							intuitive and easy to use.
						</p>
					</div>

					{/* Contribution 2 */}
					<div className="mb-4">
						<h3>
							<span className="badge badge-primary mr-2">2</span> Please be
							Aware of Potential Bugs!
						</h3>
						<p>
							As a game created within a time limit, there were serveral bugs
							that still remain. I noticed many players encounter bugs that I
							have never seen before, which highlights the importance of proper
							playtesting before releasing a game.
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
							My most viral game to date! Gained much more attention than
							expected on itch.io with several YouTubers playing my game!
						</li>
						<li className="list-group-item">
							My first horror game with a first-person camera!
						</li>
					</ul>
				</div>
			</div>

			{/* Achievements Section */}
			<div className="row mb-5">
				<div className="col-lg-8 offset-lg-2">
					<h2 className="mb-4">Featured on YouTube</h2>
					<div className="col-12 mt-3">
						<div className="ratio" style={{ "--bs-aspect-ratio": "60%" }}>
							<iframe
								src="https://www.youtube.com/embed/DxJVF8DIQ1c?si=9pMaTgysKww-bm_-"
								title="YouTube video player"
								frameBorder="0"
								allowFullScreen
							></iframe>
						</div>
					</div>

					<div className="col-12 mt-3">
						<div className="ratio" style={{ "--bs-aspect-ratio": "60%" }}>
							<iframe
								src="https://www.youtube.com/embed/-XJZW6QaqD4?si=4vXQTvSM6v8BPadF"
								title="YouTube video player"
								frameBorder="0"
								allowFullScreen
							></iframe>
						</div>
					</div>

					<div className="col-12 mt-3">
						<div className="ratio" style={{ "--bs-aspect-ratio": "60%" }}>
							<iframe
								src="https://www.youtube.com/embed/yJybt_RiwHg?si=xYVH-xuKzPrAy-v9"
								title="YouTube video player"
								frameBorder="0"
								allowFullScreen
							></iframe>
						</div>
					</div>

					<div className="col-12 mt-3">
						<div className="ratio" style={{ "--bs-aspect-ratio": "60%" }}>
							<iframe
								src="https://www.youtube.com/embed/ntHOknmpAUs?si=IorpuYsZglwp4bP_"
								title="YouTube video player"
								frameBorder="0"
								allowFullScreen
							></iframe>
						</div>
					</div>

					<div className="col-12 mt-3">
						<div className="ratio" style={{ "--bs-aspect-ratio": "60%" }}>
							<iframe
								src="https://www.youtube.com/embed/rVZnzQBPU3w?si=XRnIuxcfZGnpLDPO"
								title="YouTube video player"
								frameBorder="0"
								allowFullScreen
							></iframe>
						</div>
					</div>
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
									src="game-thumbnails/konbini/storyboard.png"
									alt="Early storyboard mockup."
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									Early storyboard mockup.
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
						href="https://johnzhou.itch.io/konbini-no-kage"
						className="btn btn-primary btn-lg mx-2"
						role="button"
					>
						Play Now
					</a>
					<a
						href="https://github.com/johnzhou1210/Konbini-no-Kage"
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
