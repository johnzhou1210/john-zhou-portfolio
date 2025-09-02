import React from "react";
import CarouselCard from "./CarouselCard";

function MiscProjects() {
  return (
    <div className="misc-projects-section bg-dark text-light py-5">
      <div className="container">
        <h1 className="text-center mb-5">More Projects</h1>

        <div className="row g-4">
          {/* Project 1 */}
          <CarouselCard
            id="chairsCarousel"
            title="Chairs & Chairs"
            body="A 2D boss rush game in which you climb the corporate ladder to
                  ultimately confront the source of your company's corruption!"
            media={[
				{
                type: "image",
                src: "/game-thumbnails/chairs/chairs0.png",
                alt: "Chairs & Chairs Gameplay 0",
              },
              {
                type: "image",
                src: "/game-thumbnails/chairs/chairs1.png",
                alt: "Chairs & Chairs Gameplay 1",
              },
              {
                type: "image",
                src: "/game-thumbnails/chairs/chairs2.png",
                alt: "Chairs & Chairs Gameplay 2",
              },
              {
                type: "image",
                src: "/game-thumbnails/chairs/chairs3.png",
                alt: "Chairs & Chairs Gameplay 3",
              },

			  {
				type: "video",
				src: "https://www.youtube.com/embed/m1A0eKlJ-R0?si=PZx8xvSItXLDjJFY&autoplay=1&mute=1",
				alt: "Chairs & Chairs Trailer",
			  },

			  {
                type: "image",
                src: "/game-thumbnails/chairs/chairs4.png",
                alt: "Chairs & Chairs Gameplay 4",
              },
			  {
                type: "image",
                src: "/game-thumbnails/chairs/chairs5.png",
                alt: "Chairs & Chairs Gameplay 5",
              },
            ]}
            tech={"Unity / C#"}
          />

          {/* Project 2 */}
		   <CarouselCard
            id="bobCarousel"
            title="The Journey of Bob"
            body="A whimsical 2D platformer in which you play as Bob to save the
                  world from destruction by securing the golden potato! Features
                  all-original voice acting and music (with one insert track as
                  an exception)."
            media={[
				{
                type: "image",
                src: "/game-thumbnails/bob/bob0.png",
                alt: "The Journey of Bob Gameplay 0",
              },
              {
                type: "image",
                src: "/game-thumbnails/bob/bob1.png",
                alt: "The Journey of Bob Gameplay 1",
              },
              {
                type: "image",
                src: "/game-thumbnails/bob/bob2.png",
                alt: "The Journey of Bob Gameplay 2",
              },
              {
                type: "image",
                src: "/game-thumbnails/bob/bob3.png",
                alt: "The Journey of Bob Gameplay 3",
              },
			  {
                type: "image",
                src: "/game-thumbnails/bob/bob4.png",
                alt: "The Journey of Bob Gameplay 4",
              },
			  {
                type: "image",
                src: "/game-thumbnails/bob/bob5.png",
                alt: "The Journey of Bob Gameplay 5",
              },
			  {
                type: "image",
                src: "/game-thumbnails/bob/bob4.png",
                alt: "The Journey of Bob Gameplay 6",
              },
			  {
                type: "image",
                src: "/game-thumbnails/bob/bob5.png",
                alt: "The Journey of Bob Gameplay 7",
              },
			  {
                type: "image",
                src: "/game-thumbnails/bob/bob4.png",
                alt: "The Journey of Bob Gameplay 8",
              },
			  {
                type: "image",
                src: "/game-thumbnails/bob/bob5.png",
                alt: "The Journey of Bob Gameplay 9",
              },
			  {
                type: "image",
                src: "/game-thumbnails/bob/bob10.png",
                alt: "The Journey of Bob Gameplay 10",
              },
			  {
                type: "image",
                src: "/game-thumbnails/bob/bob11.png",
                alt: "The Journey of Bob Gameplay 11",
              },
			  {
                type: "image",
                src: "/game-thumbnails/bob/bob12.png",
                alt: "The Journey of Bob Gameplay 12",
              },
			  {
                type: "image",
                src: "/game-thumbnails/bob/bob13.png",
                alt: "The Journey of Bob Gameplay 13",
              },
			  {
                type: "image",
                src: "/game-thumbnails/bob/bob14.png",
                alt: "The Journey of Bob Gameplay 14",
              },
			  {
                type: "image",
                src: "/game-thumbnails/bob/bob15.png",
                alt: "The Journey of Bob Gameplay 15",
              },
			  {
                type: "image",
                src: "/game-thumbnails/bob/bob16.png",
                alt: "The Journey of Bob Gameplay 16",
              },
			  {
                type: "image",
                src: "/game-thumbnails/bob/bob17.png",
                alt: "The Journey of Bob Gameplay 17",
              },
            ]}
            tech={"Unity / C#"}
          />


          {/* Project 3 */}
<CarouselCard
            id="aeternumCarousel"
            title="Aeternum Rift"
            body="A turn-based combat prototype featuring speed-based turn
                  mechanics, buffs and debuffs, status effects, and the ability
                  for strategic planning."
            media={[
				{
                type: "image",
                src: "/game-thumbnails/aeternum/aeternum1.png",
                alt: "Aeternum Rift Gameplay 1",
              },
              {
                type: "image",
                src: "/game-thumbnails/aeternum/aeternum2.png",
                alt: "Aeternum Rift Gameplay 2",
              },
              {
                type: "image",
                src: "/game-thumbnails/aeternum/aeternum3.png",
                alt: "Aeternum Rift Gameplay 3",
              },
              {
                type: "image",
                src: "/game-thumbnails/aeternum/aeternum4.png",
                alt: "Aeternum Rift Gameplay 4",
              },
			  {
                type: "image",
                src: "/game-thumbnails/aeternum/aeternum5.png",
                alt: "Aeternum Rift Gameplay 5",
              },
			  {
                type: "image",
                src: "/game-thumbnails/aeternum/aeternum6.png",
                alt: "Aeternum Rift Gameplay 6",
              },
			  {
                type: "image",
                src: "/game-thumbnails/aeternum/aeternum7.png",
                alt: "Aeternum Rift Gameplay 7",
              },
			  {
                type: "image",
                src: "/game-thumbnails/aeternum/aeternum8.png",
                alt: "Aeternum Rift Gameplay 8",
              },
            ]}
            tech={"Roblox Studio / Lua"}
          />


         
        </div>
      </div>
    </div>
  );
}

export default MiscProjects;
