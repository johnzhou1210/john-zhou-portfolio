import React from "react";

function Skills() {
	return (
		<div className="portfolio-section bg-light py-5">
			<div className="container">
				<h1 className="text-center mb-5">Skills</h1>

				<div className="row g-4">
					{/* Programming */}
					<div className="col-md-6 col-lg-3">
						<div className="card h-100 shadow-sm">
							<div className="card-body text-center">
								<h5 className="card-title fw-bold mb-3">Programming</h5>
								<p className="card-text">
									C#, Python, Lua, JavaScript, TypeScript, Java, C++
								</p>
							</div>
						</div>
					</div>

					{/* Game Dev */}
					<div className="col-md-6 col-lg-3">
						<div className="card h-100 shadow-sm">
							<div className="card-body text-center">
								<h5 className="card-title fw-bold mb-3">Game Dev</h5>
								<p className="card-text">
									Unity, NavMesh, Multiplayer, Data Persistence
								</p>
							</div>
						</div>
					</div>

					{/* Web/Software */}
					<div className="col-md-6 col-lg-3">
						<div className="card h-100 shadow-sm">
							<div className="card-body text-center">
								<h5 className="card-title fw-bold mb-3">Web / Software</h5>
								<p className="card-text">React, HTML, CSS, Supabase, APIs</p>
							</div>
						</div>
					</div>

					{/* Tools */}
					<div className="col-md-6 col-lg-3">
						<div className="card h-100 shadow-sm">
							<div className="card-body text-center">
								<h5 className="card-title fw-bold mb-3">Tools</h5>
								<p className="card-text">
									Git, Postman, VS Code, Rider, Figma, Trello
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
