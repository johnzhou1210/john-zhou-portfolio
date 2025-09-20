import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const ProjectWireframe = () => {
	const navigate = useNavigate();
	return (
		<div className="px-5">
			<nav className="navbar navbar-light bg-light fixed-top">
				<div className="container">
					<button
						className="navbar-brand btn btn-link p-0"
						onClick={() => navigate("/")}
					>
						← Back to Portfolio
					</button>
				</div>
			</nav>
			<div className="hero container mt-5">
				{/* Hero Section */}
				<div className="row mb-5">
					<div className="col-12 text-center">
						<h1 className="display-4">Chairs & Chairs</h1>
						<p className="lead">
							Climb the corporate ladder and unleash your frustration against
							the source of your comapany's corruption!
						</p>
					</div>
					<div className="col-12 mt-3">
						<div className="ratio" style={{ "--bs-aspect-ratio": "56%" }}>
							<iframe
								src="https://www.youtube.com/embed/m1A0eKlJ-R0?si=PZx8xvSItXLDjJFY"
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
										<strong>Role:</strong> Programmer
									</p>
									<p>
										<strong>Team Size:</strong> 3 people
									</p>
									<p>
										<strong>Technologies:</strong> Unity, 2D NavMesh,
										Cinemachine, Audacity, MuseScore (All music in game),
										Aseprite, JetBrains Rider
									</p>
									<p>
										<strong>Teammates:</strong>
										<ul>
											<li>
												<a href="https://stzhoucy.carrd.co/">
													Stacy Zhou (Art, Game Concept)
												</a>
											</li>
											<li>Xu Zhang (SFX)</li>
										</ul>
									</p>
								</div>
								<div className="col-md-6">
									<p>
										<strong>Development Duration:</strong> 30 days
									</p>
									<p>
										<strong>My Contributions:</strong>
									</p>
									<ul>
										<li>Implemented all game logic and mechanics.</li>
										<li>Created and integrated all music into the game.</li>
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
							<span className="badge badge-primary mr-2">1</span>Special UI
							Effects
						</h3>
						<p>
							To achieve a "glow" effect, I utilized mob-sakai's UIEffect
							package with great success. I definitely recommend checking him
							out on GitHub!
						</p>
					</div>

					{/* Contribution 2 */}
					<div className="mb-4">
						<h3>
							<span className="badge badge-primary mr-2">2</span> Using HDR to
							Create Cool Lighting Effects
						</h3>
						<p>
							Giving effect sprites such as fire and explosions some HDR really
							helps create a cinematic effect. Bonus: it is also pure eye candy.
						</p>
					</div>

					{/* Contribution 2 */}
					<div className="mb-4">
						<h3>
							<span className="badge badge-primary mr-2">2</span> Tilemaps for
							Fast Level Creation
						</h3>
						<p>
							I found Unity's 2D tilemaps to be very helpful in the development
							of this game. They were a convenient way to just "brush" tiles
							into a scene to create levels.
						</p>
					</div>

					{/* Contribution 3 */}
					<div className="mb-4">
						<h3>
							<span className="badge badge-primary mr-2">2</span> Cinemachine
						</h3>
						<p>
							A versatile Unity camera package that worked great after tinkering
							and some trial-and-error.
						</p>
					</div>

					{/* Contribution 4 */}
					<div className="mb-4">
						<h3>
							<span className="badge badge-primary mr-2">2</span> Known Bugs
						</h3>
						<p>
							There is currently a bug that allows the player to glitch out of
							the map if they spam the dodge button and move into a corner.
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
							Made for itch.io 2025 Boss Rush Game Jam, playing top 20% overall,
							and top 10% in boss design out of 865+ entries.
						</li>
						<li className="list-group-item">
							My first game with all-original music created by me!
						</li>
					</ul>
				</div>
			</div>

			{/* Playthrough */}
			<div className="row mb-5">
				<div className="col-lg-8 offset-lg-2">
					<h2 className="mb-4">Playthrough</h2>
					<div className="col-12 mt-3">
						<div className="ratio" style={{ "--bs-aspect-ratio": "60%" }}>
							<iframe
								src="https://www.youtube.com/embed/ZVDEbWKFUSg?si=diXvu01uJh0fBiQL"
								title="YouTube video player"
								frameBorder="0"
								allowFullScreen
							></iframe>
						</div>
					</div>
				</div>
			</div>

			{/* Achievements Section */}
			<div className="row mb-5">
				<div className="col-lg-8 offset-lg-2">
					<h2 className="mb-4">Select Original Soundtracks</h2>
					<div className="col-12 mt-3">
						<div className="ratio" style={{ "--bs-aspect-ratio": "60%" }}>
							<iframe
								src="https://www.youtube.com/embed/y2wTTpywXlg?si=ysadaLEr4qRTCmDQ"
								title="YouTube video player"
								frameBorder="0"
								allowFullScreen
							></iframe>
						</div>
					</div>

					<div className="col-12 mt-3">
						<div className="ratio" style={{ "--bs-aspect-ratio": "60%" }}>
							<iframe
								src="https://www.youtube.com/embed/OSav7XWJ0eo?si=yVsVKslbNinHprwt"
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
						{/* Image 1 with caption */}
						<div className="col-md-12 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/chairs/ceograb.png"
									alt="CEO Grab Animation Sprite Sheet by Stacy"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2"></figcaption>
							</figure>
						</div>
						{/* Image 2 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/chairs/ceotransform.png"
									alt="CEO Transform Animation Sprite Sheet by Stacy"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2"></figcaption>
							</figure>
						</div>

						{/* Image 3 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/chairs/ceograbgif.gif"
									alt="CEO Grab Animation Sprite Sheet by Stacy"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2"></figcaption>
							</figure>
						</div>
						{/* Image 3 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/chairs/ceotransformgif.gif"
									alt="CEO Grab Animation Sprite Sheet by Stacy"
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
						href="https://johnzhou.itch.io/chairs-chairs"
						className="btn btn-primary btn-lg mx-2"
						role="button"
					>
						Play Now
					</a>
					<a
						href="https://github.com/johnzhou1210/ChairsAndChairs"
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
