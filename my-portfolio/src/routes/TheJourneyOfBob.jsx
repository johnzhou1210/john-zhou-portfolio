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
						<h1 className="display-4">The Journey of Bob</h1>
						<p className="lead">
							Play as Bob as you save the world from destruction by securing the
							golden potato!
						</p>
					</div>
					<div className="col-12 mt-3">
						<div className="ratio" style={{ "--bs-aspect-ratio": "58%" }}>
							<iframe
								src="https://www.youtube.com/embed/lGVz23EbTHI?si=FFmUuJPm2Horjp0s"
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
										<strong>Technologies:</strong> Unity, Audacity, Microsoft
										Paint, Visual Studio
									</p>
								</div>
								<div className="col-md-6">
									<p>
										<strong>Development Duration:</strong> ~1 month
									</p>
									<p>
										<strong>My Contributions:</strong>
									</p>
									<ul>
										<li>Designed and implemented game look and feel.</li>
										<li>
											Created all art and voice sounds in addition to code.
										</li>
										<li>
											Created all music except for that one insert track from
											Jojo's Bizzare Adventure.
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
							<span className="badge badge-primary mr-2">1</span> How I made
							cutscenes work
						</h3>
						<p>
							From my prior knowledge of making games on Roblox, I found using
							coroutines (IEnumerator) to be much more intuitive than using
							Unity's Monobehavior Update function. I simply added all my
							cutscene images into a serialized field and played them off a
							coroutine.
						</p>
					</div>

					{/* Contribution 2 */}
					<div className="mb-4">
						<h3>
							<span className="badge badge-primary mr-2">2</span> More of a
							creative than technical project
						</h3>
						<p>
							I honestly had a blast making this. Although not technically
							impressive, this game showcases my creativity and imagination
							rather than technical expertise.
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
							Won 1st place in one of my game programming projects from high
							school (Bronx Science)!
						</li>
						<li className="list-group-item">
							Currently is my most viewed game on itch.io!
						</li>
					</ul>
				</div>
			</div>

			{/* Call to Action Buttons */}
			<div className="row mb-5">
				<div className="col-12 text-center">
					<a
						href="https://johnzhou.itch.io/the-journey-of-bob"
						className="btn btn-primary btn-lg mx-2"
						role="button"
					>
						Play Now
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectWireframe;
