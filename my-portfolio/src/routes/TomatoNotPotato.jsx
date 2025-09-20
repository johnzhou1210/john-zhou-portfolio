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
						<h1 className="display-4">Tomato, Not Potato</h1>
						<p className="lead">
							A practical Android Pomodoro timer app designed to boost user
							productivity.
						</p>
					</div>
					<div className="col-12 mt-3">
						<div className="ratio" style={{ "--bs-aspect-ratio": "100%" }}>
							<video
								src="/web-thumbnails/tomato/potato0.mp4"
								controls
								className="rounded"
								style={{ maxWidth: "100%", height: "100%" }}
							/>
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
										<strong>Role:</strong> Solo developer
									</p>
									<p>
										<strong>Team Size:</strong> 1 person
									</p>
									<p>
										<strong>Technologies:</strong> Jetpack Compose, MVVM, Room,
										Android Studio, Generative AI (for tomato and potato icons)
									</p>
								</div>
								<div className="col-md-6">
									<p>
										<strong>Development Period:</strong> 2 weeks
									</p>
									<p>
										<strong>My Contributions:</strong>
									</p>
									<ul>
										<li>Created and maintained Pomodoro timer app.</li>
										<li>
											Utilized Jetpack Compose for UI and state handling,
											integrating MVVM architecture and a Room database with
											DAOs for persistent data storage.
										</li>
										<li>Released to Google Play Store.</li>
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
							<span className="badge badge-primary mr-2">1</span> Model View
							View Model (MVVM)
						</h3>
						<p>
							As someone who is new to Android development, I found the MVVM
							similar to technologies used in web development such as Redux in
							React. The process was surprisingly simple after the initial setup
							with Factories, and ViewModels could be easily passed into child
							Composables through their parameters.
						</p>
					</div>

					{/* Contribution 2 */}
					<div className="mb-4">
						<h3>
							<span className="badge badge-primary mr-2">2</span> Debugging
							State Management with Compose States and Kotlin Flow
						</h3>
						<p>
							This was the most significant challenge for me as I spent a great
							amount of time trying to wrap my head around how state management
							worked in Kotlin + Jetpack Compose.
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
							My first time creating an Android app and uploading it to the Play
							Store!
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
						<div className="col-md-12 mb-4">
							<figure className="figure">
								<img
									src="web-thumbnails/tomato/tomato.png"
									alt="Light mode"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									Light mode
								</figcaption>
							</figure>
						</div>
						{/* Image 2 with caption */}
						<div className="col-md-12 mb-4">
							<figure className="figure">
								<img
									src="web-thumbnails/tomato/tomato2.png"
									alt="Favorites"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									Dark mode
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
						href="https://github.com/johnzhou1210/tomato-not-potato"
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
