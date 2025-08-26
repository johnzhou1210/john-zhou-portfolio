function TopBar({ headerRef, gameDevRef, webDevRef, resumeRef, contactsRef }) {
	const scrollToSection = (ref) => {
		if (ref && ref.current) {
			ref.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="top-bar">
			<a onClick={() => scrollToSection(headerRef)}>Header</a>
			<a onClick={() => scrollToSection(gameDevRef)}>Game Dev</a>
			<a onClick={() => scrollToSection(webDevRef)}>Web Dev</a>
			<a onClick={() => scrollToSection(resumeRef)}>Resume</a>
			<a onClick={() => scrollToSection(contactsRef)}>Contacts</a>
		</div>
	);
}

export default TopBar;
