import { useEffect, useState } from "react"

import "./components.css"

import ReactIcon from "../assets/languages/React.png"

export default function Waterfall() {
	const [renderedIcons, setRenderedIcons] = useState([])
	useEffect(() => {
		setRenderedIcons([
			ReactIcon,
			ReactIcon,
			ReactIcon,
			ReactIcon,
			ReactIcon,
		])
	}, [])

	return (
		<div className="waterfall-background-div">
			{renderedIcons.map((icon, i) => (
				<Raindrop src={icon} key={i} />
			))}
		</div>
	)
}

const Raindrop = ({ src }) => {
	return (
		<img
			src={src}
			className="waterfall-raindrop"
			style={{ left: `${Math.random() * 100}vw` }}
		/>
	)
}
