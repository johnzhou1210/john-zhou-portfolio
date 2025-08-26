import React from "react";

function MiscProjects() {
	return (
		<div className="misc-projects-section bg-dark text-light py-5">
			<div className="container">
				<h1 className="text-center mb-5">More Projects</h1>

				<div className="row g-4">
					{/* Project 1 */}
					<div className="col-md-6 col-lg-4">
						<div className="card h-100 shadow-sm">
							<img
								src="/images/kablammo-tanks.gif"
								className="card-img-top"
								alt="Chairs & Chairs Gameplay"
							/>
							<div className="card-body">
								<h5 className="card-title">Chairs & Chairs</h5>
								<p className="card-text">
									A 2D boss rush game in which you climb the corporate ladder to
									ultimately confront the source of your company's corruption!
								</p>
								<p className="text-muted">Unity / C#</p>
							</div>
						</div>
					</div>

					{/* Project 2 */}
					<div className="col-md-6 col-lg-4">
						<div className="card h-100 shadow-sm">
							<img
								src="/images/shroomies.gif"
								className="card-img-top"
								alt="The Journey of Bob Gameplay"
							/>
							<div className="card-body">
								<h5 className="card-title">The Journey of Bob</h5>
								<p className="card-text">
									A whimsical 2D platformer in which you play as Bob to save the
									world from destruction by securing the golden potato! Features
									all-original voice acting and music (with one insert track as
									an exception).
								</p>
								<p className="text-muted">Unity / C#</p>
							</div>
						</div>
					</div>

					{/* Project 3 */}
					<div className="col-md-6 col-lg-4">
						<div className="card h-100 shadow-sm">
							<img
								src="/images/konbini-no-kage.gif"
								className="card-img-top"
								alt="Aeternum Rift Gameplay"
							/>
							<div className="card-body">
								<h5 className="card-title">Aeternum Rift</h5>
								<p className="card-text">
									A turn-based combat prototype featuring speed-based turn
									mechanics, buffs and debuffs, status effects, and the ability
									for strategic planning.
								</p>
								<p className="text-muted">Roblox Studio / Lua</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MiscProjects;
