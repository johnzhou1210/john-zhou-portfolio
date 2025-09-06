import React from "react";
import Header from "../components/Header";
import Skills from "../components/Skills";
import GameDev from "../components/GameDev";
import WebDev from "../components/WebDev";
import MiscProjects from "../components/MiscProjects";
import Contacts from "../components/Contacts";
import { useRef } from "react";

function Homepage() {
	const headerRef = useRef(null);
	const gameDevRef = useRef(null);
	const webDevRef = useRef(null);
	const miscProjectsRef = useRef(null);
	const contactsRef = useRef(null);
	const skillsRef = useRef(null);
	return (
		<>
			<div className="section-container">
				<Header ref={headerRef} />
				<Skills ref={skillsRef} />
				<GameDev ref={gameDevRef} />
				<MiscProjects ref={miscProjectsRef} />
				<WebDev ref={webDevRef} />
				<Contacts ref={contactsRef} />
			</div>
		</>
	);
}

export default Homepage;
