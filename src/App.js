import { useEffect, useRef, useState } from "react"

import Constants from "./utils/Constants.js"
import TypedText from "./components/TypedText.js"
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
			<div
				style={{
					width: "100%",
					height: "100%",
					zIndex: 1,
					position: "relative",
				}}
			>
				<TypedText
					text="Bassam El-Naggar"
					fontSize="2rem"
					timeRange={300}
					color={Constants.theme.headerColor}
				/>
			</div>
			<CommandLine page={page} setPage={setPage} />
		</main>
	)
}
