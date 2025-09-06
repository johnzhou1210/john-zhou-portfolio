import React from "react";
import { Link } from "react-router-dom";

const CarouselCard = ({ id, title, body, media, tech, to }) => {
	return (
		<div className="col-md-6 col-lg-4">
			<div className="card h-100 shadow-sm carousel-card position-relative">
				{/* Bootstrap Carousel */}
				<div
					id={id}
					className="carousel slide"
					data-bs-ride="carousel"
					data-bs-interval="3000"
					data-bs-pause="hover"
				>
					{/* Indicators */}
					<div className="carousel-indicators">
						{media.map((_, index) => (
							<button
								key={index}
								type="button"
								data-bs-target={`#${id}`}
								data-bs-slide-to={index}
								className={index === 0 ? "active" : ""}
								aria-current={index === 0 ? "true" : undefined}
								aria-label={`Slide ${index + 1}`}
							></button>
						))}
					</div>

					{/* Slides */}
					<div className="carousel-inner">
						{media.map((item, index) => (
							<div
								key={index}
								className={`carousel-item ${index === 0 ? "active" : ""}`}
								data-bs-interval={item.type === "video" ? 100000 : 3000}
							>
								{item.type === "image" ? (
									<img
										src={item.src}
										className="d-block w-100"
										alt={item.alt || `${title} Slide ${index + 1}`}
									/>
								) : (
									<div className="ratio ratio-16x9">
										<iframe
											src={item.src}
											title={item.alt || `${title} Video ${index + 1}`}
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
										></iframe>
									</div>
								)}
							</div>
						))}
					</div>

					{/* Controls */}
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target={`#${id}`}
						data-bs-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target={`#${id}`}
						data-bs-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>

				{/* Card Body (linked area) */}
				<div className="card-body position-relative">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{body}</p>
					{tech && <p className="text-muted">{tech}</p>}

					{/* Only this area becomes clickable */}
					{to && (
						<Link
							to={to}
							className="stretched-link"
							onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default CarouselCard;
