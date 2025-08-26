import React from "react";

function GameDev() {
	return (
		<div className="game-dev-section bg-dark text-light py-5">
			<div className="container">
				<h1 className="text-center mb-5">Featured Projects – Game Dev</h1>

				<div className="row g-4">
					{/* Project 1 */}
					<div className="col-md-6 col-lg-4">
						<div className="card h-100 shadow-sm">
							<img
								src="/images/kablammo-tanks.gif"
								className="card-img-top"
								alt="Kablammo Tanks Gameplay"
							/>
							<div className="card-body">
								<h5 className="card-title">Kablammo Tanks</h5>
								<p className="card-text">
									A multiplayer tank battle game inspired by the game Dragon
									Quest Heroes: Rocket Slime. Features projectile combat, base
									defense, and chaotic fun.
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
								alt="Shroomies Gameplay"
							/>
							<div className="card-body">
								<h5 className="card-title">Shroomies</h5>
								<p className="card-text">
									A floral-themed 2D bullet hell where a mushroom lays waste to
									floral foes. Focused on fluid controls and fast-paced
									roguelite gameplay.
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
								alt="Konbini No Kage Gameplay"
							/>
							<div className="card-body">
								<h5 className="card-title">Konbini No Kage</h5>
								<p className="card-text">
									A 3D psychological horror game set in a Japanese convenience
									store. Surive four graveyard shifts at the konbini as a
									stalker lurks for their prey (spoiler alert: you are the
									prey).
								</p>
								<p className="text-muted">Unity / C#</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GameDev;
