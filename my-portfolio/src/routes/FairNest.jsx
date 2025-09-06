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
						<h1 className="display-4">FairNest</h1>
						<p className="lead">
							A tool to help homebuyers and real estate agents analyze NYC's
							most recent housing market prices.
						</p>
					</div>
					<div className="col-12 mt-3">
						<div className="ratio" style={{ "--bs-aspect-ratio": "55%" }}>
							<img src="web-thumbnails/fairnest/list.gif" alt="homepage" />
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
										<strong>Role:</strong> Develop and Automate Web Scraper,
										Fairness Algorithm
									</p>
									<p>
										<strong>Team Size:</strong> 4 people
									</p>
									<p>
										<strong>Technologies:</strong> React, Vite, Playwright,
										Jupyter Notebooks, Supabase, PostgreSQL, VS Code
									</p>
									<p>
										<strong>Teammates:</strong>
										<ul>
											<li>
												<a href="https://github.com/lashazibzibadze">
													Lasha Zibzibadze (Frontend)
												</a>
											</li>
											<li>
												<a href="https://portfolio-ericlam404.vercel.app/">
													Eric Lam (Backend API)
												</a>
											</li>
											<li>
												<a href="https://github.com/stanleychen7">
													Stanley Chen (Database & Fairness Algorithm)
												</a>
											</li>
											<li>
												<a href="https://github.com/Emilianocar">
													Emiliano Carrizosa (Fairness Algorithm)
												</a>
											</li>
										</ul>
									</p>
								</div>
								<div className="col-md-6">
									<p>
										<strong>Development Period:</strong> 4 Months
									</p>
									<p>
										<strong>My Contributions:</strong>
									</p>
									<ul>
										<li>Created and maintained web scraper.</li>
										<li>
											Helped out with Fairness Algorithm by proposing a simpler
											approach.
										</li>
										<li>
											Automated web scraper to streamline the process of JSON
											creation and upsertion into database.
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
							<span className="badge badge-primary mr-2">1</span> Web Scraping
							from a Real Estate Website
						</h3>
						<p>
							This was my main challenge for the project. Web scraping is
							simple, but many websites take measures to prevent their data from
							being scraped. I spent most of my time trying to figure out how to
							outsmart and bypass their bot detection through a long process of
							trial and error.
						</p>
					</div>

					{/* Contribution 2 */}
					<div className="mb-4">
						<h3>
							<span className="badge badge-primary mr-2">2</span> Using
							Selectors to Find Relevant Data
						</h3>
						<p>
							Information necessary for our project include data such as a
							listing's price, address, locality, zip code, number of bathrooms
							and bedrooms, and square footage. I also scraped the link to the
							source of the data so then my teammates working on the frontend
							can use it to show a source link to the listing from its original
							website.
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
							My first time scraping the web, as well as automating the process!
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
									src="web-thumbnails/fairnest/createlisting.gif"
									alt="Create listing"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									Create listing interface
								</figcaption>
							</figure>
						</div>
						{/* Image 2 with caption */}
						<div className="col-md-12 mb-4">
							<figure className="figure">
								<img
									src="web-thumbnails/fairnest/favorites.png"
									alt="Favorites"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									Favorites interface
								</figcaption>
							</figure>
						</div>
						{/* Image 3 with caption */}
						<div className="col-md-12 mb-4">
							<figure className="figure">
								<img
									src="web-thumbnails/fairnest/list2.png"
									alt="Listings"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									Listings page
								</figcaption>
							</figure>
						</div>
						{/* Image 4 with caption */}
						<div className="col-md-12 mb-4">
							<figure className="figure">
								<img
									src="web-thumbnails/fairnest/listing.gif"
									alt="Source"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									Link to original source
								</figcaption>
							</figure>
						</div>

						{/* Image 5 with caption */}
						<div className="col-md-12 mb-4">
							<figure className="figure">
								<img
									src="web-thumbnails/fairnest/listing2.png"
									alt="Listing example 1"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									Listing example 1
								</figcaption>
							</figure>
						</div>
						{/* Image 6 with caption */}
						<div className="col-md-12 mb-4">
							<figure className="figure">
								<img
									src="web-thumbnails/fairnest/listing3.png"
									alt="Listing example 2"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									Listing example 2
								</figcaption>
							</figure>
						</div>
						{/* Image 7 with caption */}
						<div className="col-md-12 mb-4">
							<figure className="figure">
								<img
									src="web-thumbnails/fairnest/listing4.png"
									alt="Listing example 3"
									className="img-fluid rounded"
								/>
								<figcaption className="figure-caption text-center mt-2">
									Listing example 3
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
						href="https://github.com/lashazibzibadze/FairNest"
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
