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
						<h1 className="display-4">Shroomies</h1>
						<p className="lead">
							A pixelated floral-themed bullet hell where you blast up a
							botanical barrage!
						</p>
					</div>
					<div className="col-12 mt-3">
						<div className="ratio" style={{ "--bs-aspect-ratio": "100%" }}>
							<iframe
								src="https://www.youtube.com/embed/pjw6vtNG0Vw?si=mK21RJV-TnPY3z1W"
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
										<strong>Role:</strong> Lead Programmer
									</p>
									<p>
										<strong>Team Size:</strong> 4 people
									</p>
									<p>
										<strong>Technologies:</strong> Unity, Audacity, Visual
										Studio, JetBrains Rider, Trello
									</p>
									<p>
										<strong>Teammates:</strong>
										<ul>
											<li>
												<a href="https://tomawash.wixsite.com/website">
													Tomasz Wiercioch (Art, Design, Enemy Design)
												</a>
											</li>
											<li>
												<a href="https://www.linkedin.com/in/anthony-melendez/">
													Anthony Melendez (Production, Design, Level Design)
												</a>
											</li>
											<li>Michael Feliciano (Music, SFX)</li>
										</ul>
									</p>
								</div>
								<div className="col-md-6">
									<p>
										<strong>Development Duration:</strong> ~3 months, with
										occasional future bugfixes
									</p>
									<p>
										<strong>My Contributions:</strong>
									</p>
									<ul>
										<li>
											Implemented the game's core vital components, such as
											stage-by-stage gameplay, player controls, projectile
											motion, upgrades, UI, and enemy behavior, etc.
										</li>
										<li>
											Integrated art, sound, and music assets from teammates
											into the game.
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
							<span className="badge badge-primary mr-2">1</span> Projectile
							Object Pooling
						</h3>
						<p>
							Since Shroomies is a bullet-hell game, ensuring optimal
							performance was critical. Object pooling was one measure I took to
							ensure that the game's performance would take a minimal hit should
							there be many bullets on the screen.
						</p>
					</div>

					{/* Contribution 2 */}
					<div className="mb-4">
						<h3>
							<span className="badge badge-primary mr-2">2</span> Mixing Unity
							Physics and Custom Scripting Logic
						</h3>
						<p>
							This was the main source of projectile-related bugs in our game,
							and also what I spent the most time trying to fix in this game.
						</p>
					</div>

					{/* Contribution 2 */}
					<div className="mb-4">
						<h3>
							<span className="badge badge-primary mr-2">2</span> Known Bugs
						</h3>
						<li>
							The game may not advance to the next stage under certain
							conditions, especially in WebGL builds. It seems like it has to do
							something with animation events not triggering as expected
							sometimes.
						</li>
					</div>
				</div>
			</div>

			{/* Achievements Section */}
			<div className="row mb-5">
				<div className="col-lg-8 offset-lg-2">
					<h2 className="mb-4">Achievements</h2>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							Original game jam version of Shroomies won the grand prize at
							Rensselaer Polytechnic Institute (RPI) Gamefest 2023 and was
							featured at GDC 2023 as 1 or 3 CUNY student games!
						</li>
						<li className="list-group-item">
							Original Shroomies was made for a 10-day game jam and won 2nd
							place! (itch.io BWGJ 2022)
						</li>
						<li className="list-group-item">My first mobile game!</li>
						<li className="list-group-item">
							My first remake game from an existing game jam game!
						</li>
					</ul>
				</div>
			</div>

			{/* Old Shroomies Video */}

			<div className="row mb-5">
				<div className="col-lg-8 offset-lg-2">
					<h2 className="mb-4">
						Original Shroomies Trailer (Game Jam Version)
					</h2>
					<div className="col-12 mt-3">
						<div className="ratio" style={{ "--bs-aspect-ratio": "60%" }}>
							<iframe
								src="https://www.youtube.com/embed/7NgnFG8l1Cw?si=d_iX_C9eXfPp6NF0"
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
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/shroomies/photos/bwgjresults.png"
									alt="BWGJ 2022 Results"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									BWGJ 2022 Results
								</figcaption>
							</figure>
						</div>

						{/* Image 2 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/shroomies/photos/brainstorm.png"
									alt="Shroomies BETA design brainstorm by Tomasz (1/3)"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									Shroomies BETA design brainstorm by Tomasz (1/3)
								</figcaption>
							</figure>
						</div>
						{/* Image 3 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/shroomies/photos/brainstorm2.png"
									alt="Shroomies BETA design brainstorm by Tomasz (2/3)"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									Shroomies BETA design brainstorm by Tomasz (2/3)
								</figcaption>
							</figure>
						</div>
						{/* Image 4 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/shroomies/photos/brainstorm3.png"
									alt="Shroomies BETA design brainstorm by Tomasz (3/3)"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									Shroomies BETA design brainstorm by Tomasz (3/3)
								</figcaption>
							</figure>
						</div>

						{/* Image 5 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/shroomies/photos/harlemshowcase.jpg"
									alt="NYC Harlem Gallery Showcase (1/7)"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									NYC Harlem Gallery Showcase (1/7)
								</figcaption>
							</figure>
						</div>

						{/* Image 6 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/shroomies/photos/harlemshowcase2.jpg"
									alt="NYC Harlem Gallery Showcase (2/7)"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									NYC Harlem Gallery Showcase (2/7)
								</figcaption>
							</figure>
						</div>
						{/* Image 7 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/shroomies/photos/harlemshowcase3.jpg"
									alt="NYC Harlem Gallery Showcase (3/7)"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									NYC Harlem Gallery Showcase (3/7)
								</figcaption>
							</figure>
						</div>
						{/* Image 8 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/shroomies/photos/harlemshowcase4.jpg"
									alt="NYC Harlem Gallery Showcase (4/7)"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									NYC Harlem Gallery Showcase (4/7)
								</figcaption>
							</figure>
						</div>
						{/* Image 9 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/shroomies/photos/harlemshowcase5.jpg"
									alt="NYC Harlem Gallery Showcase (5/7)"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									NYC Harlem Gallery Showcase (5/7)
								</figcaption>
							</figure>
						</div>
						{/* Image 10 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/shroomies/photos/harlemshowcase6.jpg"
									alt="NYC Harlem Gallery Showcase (6/7)"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									NYC Harlem Gallery Showcase (6/7)
								</figcaption>
							</figure>
						</div>

						{/* Image 11 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/shroomies/photos/harlemshowcase7.jpg"
									alt="NYC Harlem Gallery Showcase (7/7)"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									NYC Harlem Gallery Showcase (7/7)
								</figcaption>
							</figure>
						</div>

						{/* Image 12 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/shroomies/photos/og-shroomies-banner.png"
									alt="OG Shroomies"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									OG Shroomies
								</figcaption>
							</figure>
						</div>

						{/* Image 13 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/shroomies/photos/og-shroomies-earliest.png"
									alt="Very early screenshot of OG Shroomies"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									Very early screenshot of OG Shroomies in the works
								</figcaption>
							</figure>
						</div>

						{/* Image 14 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/shroomies/photos/og-shroomies-early.png"
									alt="Early screenshot of OG Shroomies"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									Early screenshot of OG Shroomies in the works
								</figcaption>
							</figure>
						</div>

						{/* Image 15 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/shroomies/photos/ogbrainstorm.png"
									alt="OG Shroomies Brainstorm by Tomasz (1/5)"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									OG Shroomies Brainstorm by Tomasz (1/5)
								</figcaption>
							</figure>
						</div>
						{/* Image 16 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/shroomies/photos/ogbrainstorm2.png"
									alt="OG Shroomies Brainstorm by Tomasz (2/5)"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									OG Shroomies Brainstorm by Tomasz (2/5)
								</figcaption>
							</figure>
						</div>
						{/* Image 17 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/shroomies/photos/ogbrainstorm3.png"
									alt="OG Shroomies Brainstorm by Tomasz (3/5)"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									OG Shroomies Brainstorm by Tomasz (3/5)
								</figcaption>
							</figure>
						</div>
						{/* Image 18 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/shroomies/photos/ogbrainstorm4.png"
									alt="OG Shroomies Brainstorm by Tomasz (4/5)"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									OG Shroomies Brainstorm by Tomasz (4/5)
								</figcaption>
							</figure>
						</div>
						{/* Image 19 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/shroomies/photos/ogbrainstorm5.png"
									alt="OG Shroomies Brainstorm by Tomasz (5/5)"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									OG Shroomies Brainstorm by Tomasz (5/5)
								</figcaption>
							</figure>
						</div>

						{/* Image 20 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/shroomies/photos/bwgjresults.png"
									alt="BWGJ 2022 Results"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									BWGJ 2022 Results
								</figcaption>
							</figure>
						</div>

						{/* Image 21 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/shroomies/photos/shroomies-card.png"
									alt="Shroomies Card at a Playtest"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									Shroomies Card at a Playtest
								</figcaption>
							</figure>
						</div>
						{/* Image 22 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/shroomies/photos/shroomies-card-back.png"
									alt="Shroomies Card (back side) at a Playtest"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									Shroomies Card (back side) at a Playtest
								</figcaption>
							</figure>
						</div>

						{/* Image 23 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/shroomies/photos/stickers.jpg"
									alt="Shroomies Stickers"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									Shroomies Stickers
								</figcaption>
							</figure>
						</div>

						{/* Image 24 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/shroomies/photos/tutorial.png"
									alt="Shroomies Tutorial"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									Shroomies Tutorial
								</figcaption>
							</figure>
						</div>

						{/* Image 25 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="game-thumbnails/shroomies/shroomies-results.jpg"
									alt="Shroomies Results Screen"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									Shroomies Results Screen
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
						href="https://tomawash.itch.io/shroomies-demo"
						className="btn btn-primary btn-lg mx-2"
						role="button"
					>
						Play Now
					</a>
					<a
						href="https://github.com/johnzhou1210/Shroomies"
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
