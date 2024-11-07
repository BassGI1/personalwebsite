import { useState } from "react"

import "./components.css"

export default function LanguageCard({ src, text }) {
	const [hovering, setHovering] = useState(false)

	return (
		<div className="language-card-background">
			<img
				src={src}
				alt={text}
				onMouseEnter={(e) => setHovering(true)}
				onMouseLeave={(e) => setHovering(false)}
			/>
			{hovering ? (
				<div className="language-card-hovering-text">{text}</div>
			) : (
				""
			)}
		</div>
	)
}
