import { useEffect, useRef, useState } from "react"

import Home from "./pages/Home/Home.js"
import AboutMe from "./pages/AboutMe/AboutMe.js"

import Navbar from "./components/Navbar.js"
import Constants from "./utils/Constants.js"
import Background from "./components/Background.js"
import CommandLine from "./components/CommandLine.js"

export default function App() {
	const background = useRef(null)
	const [page, setPage] = useState("")
	useEffect(() => {
		background.current = document.getElementById(
			"radial-gradient-dragging-main-content"
		)
		window.addEventListener(
			"mousemove",
			(e) =>
				(background.current.style.backgroundImage = `radial-gradient( circle at ${e.clientX}px ${e.clientY}px, ${Constants.theme.backgroundRadial} 1vw, ${Constants.theme.background} 50vw )`)
		)
	}, [])

	return (
		<main
			className="main-content"
			id="radial-gradient-dragging-main-content"
			style={{ backgroundColor: Constants.theme.background }}
		>
			<Navbar setPage={setPage} />
			{page === "" ? <Home /> : ""}
			{page === "AboutMe" ? <AboutMe /> : ""}
			<CommandLine page={page} setPage={setPage} />
			<Background />
		</main>
	)
}
