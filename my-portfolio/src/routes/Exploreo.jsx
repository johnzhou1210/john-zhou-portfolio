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
						<h1 className="display-4">Exploreo</h1>
						<p className="lead">A mobile trip planner created with Flutter.</p>
					</div>
					<div className="col-12 mt-3">
						<div className="ratio" style={{ "--bs-aspect-ratio": "93%" }}>
							<img
								src="web-thumbnails/exploreo/wireframe4.png"
								alt="homepage"
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
										<strong>Role:</strong> Develop frontend & connect frontend
										with backend
									</p>
									<p>
										<strong>Team Size:</strong> 5 people
									</p>
									<p>
										<strong>Technologies:</strong> Flutter, Dart, Figma,
										Postman, PostgreSQL, Google Cloud, Firebase Auth, Android
										Studio
									</p>
									<p>
										<strong>Teammates:</strong>
										<ul>
											<li>
												<a href="https://portfolio-ericlam404.vercel.app/">
													Eric Lam (Backend)
												</a>
											</li>
											<li>
												<a href="https://afebportfolio.netlify.app/">
													Afnan (Backend/Frontend)
												</a>
											</li>
											<li>
												<a href="https://github.com/wangtony4005">
													Tony Wang (Frontend)
												</a>
											</li>
											<li>
												<a href="https://github.com/judyliu40">
													Judy Liu (Frontend)
												</a>
											</li>
										</ul>
									</p>
								</div>
								<div className="col-md-6">
									<p>
										<strong>Development Period:</strong> 2 Months
									</p>
									<p>
										<strong>My Contributions:</strong>
									</p>
									<ul>
										<li>
											Developed all frontend pages related to managing the
											itinerary, which includes creating, updating, and deleting
											trips.
										</li>
										<li>
											Also developed all pages related to managing events within
											trips.
										</li>
										<li>
											Connected backend API developed by teammates to frontend.
										</li>
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
							<span className="badge badge-primary mr-2">1</span> Connecting
							frontend with backend APIs
						</h3>
						<p>
							This was my main challenge for the project. As someone who was
							never used Flutter before, it was a new but welcome challenge. By
							working on this project, I learned the design pattern between
							Flutter and how it differs from other frameworks such as React.
						</p>
					</div>

					{/* Contribution 2 */}
					<div className="mb-4">
						<h3>
							<span className="badge badge-primary mr-2">2</span> Using External
							APIs to decorate trip pages
						</h3>
						<p>
							While I have used them in the past, I never thought of using it to
							enhance a page's visual appeal. By retrieving photos from
							Unsplash's API, I was able to give every trip a unique background.
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
							My first time creating a Flutter app! Now I can see why it is an
							attractive option for cross-platform mobile development.
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
									src="web-thumbnails/exploreo/wireframe.png"
									alt="Wireframe screenshot 1"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									Wireframe screenshot 1
								</figcaption>
							</figure>
						</div>
						{/* Image 2 with caption */}
						<div className="col-md-12 mb-4">
							<figure className="figure">
								<img
									src="web-thumbnails/exploreo/wireframe2.png"
									alt="Wireframe screenshot 2"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									Wireframe screenshot 2
								</figcaption>
							</figure>
						</div>
						{/* Image 3 with caption */}
						<div className="col-md-12 mb-4">
							<figure className="figure">
								<img
									src="web-thumbnails/exploreo/wireframe3.png"
									alt="Wireframe screenshot 3"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									Wireframe screenshot 3
								</figcaption>
							</figure>
						</div>
						{/* Image 4 with caption */}
						<div className="col-md-4 mb-4">
							<figure className="figure">
								<img
									src="web-thumbnails/exploreo/screenshot.png"
									alt="Plan new trip"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									Plan new trip final interface
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
						href="https://github.com/johnzhou1210/Exploreo/tree/dev"
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
