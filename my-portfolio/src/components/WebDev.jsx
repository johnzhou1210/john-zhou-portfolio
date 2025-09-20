import React from "react";
import CarouselCard from "./CarouselCard";

function WebDev() {
	return (
		<div className="web-dev-section bg-dark text-light py-5">
			<div className="container">
				<h1 className="text-center mb-5">
					Featured Projects – Web/Software Dev
				</h1>

				<div className="row g-4">
					{/* Project 1 */}
					<CarouselCard
						id="fairnestCarousel"
						title="Tomato, Not Potato"
						body={
							<>
								A simple Pomodoro timer app for Android. Features a timer with
								focus and break sessions, along with a long break at the end of
								each loop. Track your usage patterns and Pomodoro history with a
								streak calendar! Available on Google Play Store soon!
							</>
						}
						media={[
							{
								type: "image",
								src: "web-thumbnails/tomato/tomato.png",
								alt: "Tomato, Not Potato Thumbnail 1",
							},
							{
								type: "image",
								src: "web-thumbnails/tomato/tomato2.png",
								alt: "Tomato, Not Potato Thumbnail 2",
							},
						]}
						tech={"Jetpack Compose / Kotlin (2025)"}
						to={"/tomato-not-potato"}
					/>

					{/* Project 2 */}
					<CarouselCard
						id="fairnestCarousel"
						title="FairNest"
						body={
							<>
								A real estate price analyzer for real estate listings in New
								York City's five boroughs. Data-driven with listings acquired
								through automated web scraping. Marks all listings with a
								fairness score generated through a fairness-scoring algorithm.
							</>
						}
						media={[
							{
								type: "image",
								src: "web-thumbnails/fairnest/home.png",
								alt: "Fairnest Thumbnail 1",
							},
							{
								type: "image",
								src: "web-thumbnails/fairnest/presentation.png",
								alt: "Fairnest Thumbnail 2",
							},
							{
								type: "image",
								src: "web-thumbnails/fairnest/createlisting.gif",
								alt: "Fairnest Thumbnail 3",
							},
							{
								type: "image",
								src: "web-thumbnails/fairnest/favorites.png",
								alt: "Fairnest Thumbnail 4",
							},
							{
								type: "image",
								src: "web-thumbnails/fairnest/list.gif",
								alt: "Fairnest Thumbnail 5",
							},
							{
								type: "image",
								src: "web-thumbnails/fairnest/list2.png",
								alt: "Fairnest Thumbnail 6",
							},
							{
								type: "image",
								src: "web-thumbnails/fairnest/listing.gif",
								alt: "Fairnest Thumbnail 7",
							},
							{
								type: "image",
								src: "web-thumbnails/fairnest/listing2.png",
								alt: "Fairnest Thumbnail 8",
							},
							{
								type: "image",
								src: "web-thumbnails/fairnest/listing3.png",
								alt: "Fairnest Thumbnail 9",
							},
							{
								type: "image",
								src: "web-thumbnails/fairnest/listing4.png",
								alt: "Fairnest Thumbnail 10",
							},
						]}
						tech={"React / TS (2025)"}
						to={"/fairnest"}
					/>

					{/* Project 3 */}
					<CarouselCard
						id="exploreoCarousel"
						title="Exploreo"
						body={
							<>
								A simple mobile travel planner that allows the user to add
								places and tasks to ther itinerary.
							</>
						}
						media={[
							{
								type: "image",
								src: "web-thumbnails/exploreo/wireframe.png",
								alt: "Exploreo Thumbnail 1",
							},
							{
								type: "image",
								src: "web-thumbnails/exploreo/wireframe2.png",
								alt: "Exploreo Thumbnail 2",
							},
							{
								type: "image",
								src: "web-thumbnails/exploreo/wireframe3.png",
								alt: "Exploreo Thumbnail 3",
							},
							{
								type: "image",
								src: "web-thumbnails/exploreo/wireframe4.png",
								alt: "Exploreo Thumbnail 4",
							},
						]}
						tech={"Flutter / Dart (2024)"}
						to={"/exploreo"}
					/>
				</div>
			</div>
		</div>
	);
}

export default WebDev;
