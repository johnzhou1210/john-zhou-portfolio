import React from "react";

function WebDev() {
	return (
		<div className="web-dev-section bg-dark text-light py-5">
			<div className="container">
				<h1 className="text-center mb-5">
					Featured Projects – Web/Software Dev
				</h1>

				<div className="row g-4">
					{/* Project 1 */}
					<div className="col-md-6 col-lg-4">
						<div className="card h-100 shadow-sm">
							<img
								src="/images/kablammo-tanks.gif"
								className="card-img-top"
								alt="FairNest Preview"
							/>
							<div className="card-body">
								<h5 className="card-title">FairNest</h5>
								<p className="card-text">
									A real estate price analyzer for real estate listings in New
									York City's five boroughs. Data-driven with listings acquired
									through automated web scraping. Marks all listings with a
									fairness score generated through a fairness-scoring algorithm.
								</p>
								<p className="text-muted">React / TS</p>
							</div>
						</div>
					</div>

					{/* Project 2 */}
					<div className="col-md-6 col-lg-4">
						<div className="card h-100 shadow-sm">
							<img
								src="/images/shroomies.gif"
								className="card-img-top"
								alt="Exploreo Preview"
							/>
							<div className="card-body">
								<h5 className="card-title">Exploreo</h5>
								<p className="card-text">
									A simple mobile travel planner that allows the user to add
									places and tasks to ther itinerary.
								</p>
								<p className="text-muted">Flutter / Dart </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WebDev;
