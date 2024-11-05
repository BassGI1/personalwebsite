import { useEffect, useRef, useState } from "react"

import Constants from "./utils/Constants.js"
import TypedText from "./components/TypedText.js"
import Waterfall from "./components/Waterfall.js"

export default function App() {
	const background = useRef(null)
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
			<div style={{ width: "100%", height: "100%", zIndex: 1 , position:"relative"}}>
				<TypedText
					text="Bassam El-Naggar"
					fontSize="2rem"
					timeRange={300}
					color={Constants.theme.headerColor}
				/>
			</div>
			<Waterfall />
		</main>
	)
}
