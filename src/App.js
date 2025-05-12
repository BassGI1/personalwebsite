import { useEffect, useRef, useState } from "react"

import Home from "./pages/Home/Home.js"
import Resume from "./pages/Resume/Resume.js"
import Videos from "./pages/Videos/Videos.js"
import AboutMe from "./pages/AboutMe/AboutMe.js"
import Projects from "./pages/Projects/Projects.js"

import Navbar from "./components/Navbar.js"
import Constants from "./utils/Constants.js"
import Background from "./components/Background.js"
import CommandLine from "./components/CommandLine.js"
import TextFile from "./components/TextFile.js"

import Tracking from "./utils/Tracking.js"

export default function App() {
	const background = useRef(null)
	const [page, setPage] = useState("")
	const [renderTextFile, setRenderTextFile] = useState("")

	useEffect(() => {
		background.current = document.getElementById("radial-gradient-dragging-main-content")
		window.addEventListener(
			"mousemove",
			(e) =>
				(background.current.style.backgroundImage = `radial-gradient( circle at ${e.clientX}px ${e.clientY}px, ${Constants.theme.backgroundRadial} 1vw, ${Constants.theme.background} 50vw )`)
		)
		document.body.addEventListener(
			"mouseleave",
			(e) => (background.current.style.backgroundImage = "none")
		)
	}, [])

	useEffect(() => {
		;(async function () {
			const a = await (await fetch("https://checkip.amazonaws.com/")).text()
			Tracking.ipAddress = a.replaceAll("\n", "")
		})()
	}, [])

	useEffect(() => {
		window.addEventListener("beforeunload", () => Tracking.postSession())
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
			{page === "Resume" ? <Resume /> : ""}
			{page === "Projects" ? <Projects /> : ""}
			{page === "Videos" ? <Videos /> : ""}
			<CommandLine page={page} setPage={setPage} setRenderTextFile={setRenderTextFile} />
			<Background />
			{renderTextFile.length ? (
				<TextFile text={renderTextFile} close={() => setRenderTextFile("")} />
			) : (
				""
			)}
		</main>
	)
}
