import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CarouselCard from "./CarouselCard.jsx";
import { Link } from "react-router";

function GameDev() {
	return (
		<div className="game-dev-section bg-dark text-light py-5">
			<div className="container">
				<h1 className="text-center mb-5">Featured Projects – Game Dev</h1>

				<div className="row g-4">
					{/* Project 1 */}

					<CarouselCard
						id="kablammoCarousel"
						title="KaBlammo Tanks"
						body={
							<>
								A multiplayer tank battle mobile game inspired by the game{" "}
								<em>Dragon Quest Heroes: Rocket Slime</em>. Features projectile
								combat, fast-paced gameplay, and chaotic fun. Currently in
								active development!
							</>
						}
						media={[
							{
								type: "image",
								src: "/game-thumbnails/kablammo/kablammo-tanks1.png",
								alt: "Kablammo Tanks Gameplay 1",
							},
							{
								type: "image",
								src: "/game-thumbnails/kablammo/kablammo-tanks2.png",
								alt: "Kablammo Tanks Gameplay 2",
							},
							{
								type: "image",
								src: "/game-thumbnails/kablammo/kablammo-tanks3.png",
								alt: "Kablammo Tanks Gameplay 3",
							},
						]}
						tech={"Unity / C# (2025)"}
						to={"/kablammo-tanks"}
					/>

					{/* Project 2 */}
					<CarouselCard
						id="shroomiesCarousel"
						title="Shroomies"
						body="A floral-themed 2D mobile bullet hell where you play as a grumpy mushroom, laying waste to floral foes. Focused on responsiveness and roguelite gameplay."
						media={[
							{
								type: "image",
								src: "/game-thumbnails/shroomies/shroomies1.png",
								alt: "Shroomies Gameplay 1",
							},
							{
								type: "image",
								src: "/game-thumbnails/shroomies/shroomies2.png",
								alt: "Shroomies Gameplay 2",
							},
							{
								type: "image",
								src: "/game-thumbnails/shroomies/shroomies3.png",
								alt: "Shroomies Gameplay 3",
							},
							{
								type: "image",
								src: "/game-thumbnails/shroomies/shroomies4.png",
								alt: "Shroomies Gameplay 4",
							},

							{
								type: "video",
								src: "https://www.youtube.com/embed/Za_XHCxt_Yw?si=APdwT2D7TF9sNRAF&autoplay=1&mute=1",
								alt: "Shroomies Trailer",
							},
						]}
						tech={"Unity / C# (2023)"}
						to={"/shroomies"}
					/>

					{/* Project 3 */}
					<CarouselCard
						id="konbiniCarousel"
						title="Konbini no Kage"
						body="A 3D psychological horror game set in a Japanese convenience
                  store. Surive four graveyard shifts at the konbini as a
                  stalker lurks for their prey (spoiler alert: you are the
                  prey)."
						media={[
							{
								type: "image",
								src: "/game-thumbnails/konbini/konbini1.png",
								alt: "Konbini No Kage Gameplay 1",
							},
							{
								type: "image",
								src: "/game-thumbnails/konbini/konbini2.png",
								alt: "Konbini No Kage Gameplay 2",
							},
							{
								type: "image",
								src: "/game-thumbnails/konbini/konbini3.png",
								alt: "Konbini No Kage Gameplay 3",
							},
							{
								type: "image",
								src: "/game-thumbnails/konbini/konbini4.png",
								alt: "Konbini No Kage Gameplay 4",
							},
							{
								type: "image",
								src: "/game-thumbnails/konbini/konbini5.png",
								alt: "Konbini No Kage Gameplay 5",
							},
							{
								type: "image",
								src: "/game-thumbnails/konbini/konbini6.png",
								alt: "Konbini No Kage Gameplay 6",
							},
						]}
						tech={"Unity / C# (2025)"}
						to={"/konbini-no-kage"}
					/>
				</div>
			</div>
		</div>
	);
}

export default GameDev;
