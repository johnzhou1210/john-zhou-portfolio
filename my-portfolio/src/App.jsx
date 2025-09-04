import "./App.css";
import Homepage from "./routes/Homepage";

import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import KablammoTanks from "./routes/KablammoTanks";
import Shroomies from "./routes/Shroomies";
import KonbiniNoKage from "./routes/KonbiniNoKage";

function App() {
	return (
		<div>
			{/* <TopBar
				headerRef={headerRef}
				gameDevRef={gameDevRef}
				webDevRef={webDevRef}
				resumeRef={resumeRef}
				contactsRef={contactsRef}
			/> */}

			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/kablammo-tanks" element={<KablammoTanks />} />
				<Route path="/shroomies" element={<Shroomies />} />
				<Route path="/konbini-no-kage" element={<KonbiniNoKage />} />
				{/*<Route path="/fairnest" element={<FairNest />} />
				<Route path="/exploreo" element={<Exploreo />} />
				<Route path="/chairs-and-chairs" element={<ChairsAndChairs />} />
				<Route path="/journey-of-bob" element={<JourneyOfBob />} />
				<Route path="/aeternum-rift" element={<AeternumRift />} /> */}
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
