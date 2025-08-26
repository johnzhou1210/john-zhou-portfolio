import { useState } from "react";
import "./App.css";
import Homepage from "./routes/Homepage";
import { useRef } from "react";

import { Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import GameDev from "./components/GameDev";
import WebDev from "./components/WebDev";
import MiscProjects from "./components/MiscProjects";
import Contacts from "./components/Contacts";
import Skills from "./components/Skills";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const headerRef = useRef(null);
	const gameDevRef = useRef(null);
	const webDevRef = useRef(null);
	const miscProjectsRef = useRef(null);
	const contactsRef = useRef(null);
	const skillsRef = useRef(null);

	return (
		<div>
			{/* <TopBar
				headerRef={headerRef}
				gameDevRef={gameDevRef}
				webDevRef={webDevRef}
				resumeRef={resumeRef}
				contactsRef={contactsRef}
			/> */}

			<div className="section-container">
				<Header ref={headerRef} />
				<Skills ref={skillsRef} />
				<GameDev ref={gameDevRef} />
				<WebDev ref={webDevRef} />
				<MiscProjects ref={miscProjectsRef} />
				<Contacts ref={contactsRef} />
			</div>
		</div>
	);
}

export default App;
