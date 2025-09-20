import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const skillCategories = [
	{
		title: "Programming",
		icon: "bi-code-slash",
		skills: [
			"C#",
			"Python",
			"Kotlin",
			"Lua",
			"JavaScript",
			"TypeScript",
			"Dart",
			"Java",
			"C++",
			"Bash",
		],
	},
	{
		title: "Game Dev",
		icon: "bi-controller",
		skills: [
			"Unity",
			"Roblox Studio",
			"NavMesh",
			"Multiplayer",
			"Data Persistence",
			"GIMP",
			"Audacity",
			"Blender",
		],
	},
	{
		title: "Web / Mobile",
		icon: "bi-phone",
		skills: [
			"React",
			"Jetpack Compose",
			"Flutter",
			"HTML",
			"CSS",
			"XML",
			"Supabase",
			"Firebase",
			"APIs",
		],
	},
	{
		title: "Tools",
		icon: "bi-tools",
		skills: [
			"Git",
			"Postman",
			"VS Code",
			"Rider",
			"Android Studio",
			"Figma",
			"Trello",
		],
	},
];

function Skills() {
	return (
		<div className="portfolio-section bg-light py-5">
			<div className="container">
				<h1 className="text-center mb-5">Skills</h1>

				<div className="row g-4">
					{skillCategories.map((cat, idx) => (
						<div key={idx} className="col-md-6 col-lg-3">
							<div className="card h-100 shadow-sm skill-card">
								<div className="card-body text-center">
									<h5 className="card-title fw-bold mb-3">
										<i className={`${cat.icon} me-2`}></i>
										{cat.title}
									</h5>
									<div>
										{cat.skills.map((skill, i) => (
											<span key={i} className="badge bg-primary me-1 mb-1">
												{skill}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Skills;
