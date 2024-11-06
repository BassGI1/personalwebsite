import { useEffect, useRef, useState } from "react"

import "./components.css"

export default function Background() {
	const [objects, setObjects] = useState([])

	const getDistance = (x1, y1, x2, y2) => {
		return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))
	}

	useEffect(() => {
		const x = []
		for (let i = 0; i < 1000; ++i) {
			x.push({
				left: Math.random() * 98 + 1,
				top: Math.random() * 98 + 1,
				width: Math.random() * 0.2 + 0.2,
				opacity: Math.random() * 0.4 + 0.1,
			})
		}
		setObjects(x)
	}, [])

	useEffect(() => {
		window.addEventListener("mousemove", (e) => {
			if (!objects.length) return

			const temp = [...objects]
			for (const point of temp) {
				if (
					getDistance(
						(point.left * window.innerWidth) / 100,
						(point.top * window.innerHeight) / 100,
						e.clientX,
						e.clientY
					) < 50
				) {
					point.left =
						(100 *
							((point.left * window.innerWidth) / 100 +
								((point.left * window.innerWidth) /
									100 -
									e.clientX))) /
						window.innerWidth
					point.top =
						(100 *
							((point.top * window.innerHeight) / 100 +
								((point.top * window.innerHeight) /
									100 -
									e.clientY))) /
						window.innerHeight
					if (point.left < 1) point.left = 1
					else if (point.left > 99) point.left = 99
					if (point.top < 1) point.top = 1
					else if (point.top > 99) point.top = 99
				}
			}
			setObjects(temp)
		})

		return window.removeEventListener("mousemove", () => {})
	}, [objects.length])

	return (
		<div className="background" id="starry-background">
			{objects.map((o, i) => (
				<RandomObject
					left={o.left}
					top={o.top}
					width={o.width}
					opacity={o.opacity}
					key={i}
				/>
			))}
		</div>
	)
}

const RandomObject = ({ left, top, width, opacity }) => {
	return (
		<div
			className="background-random-object"
			style={{
				left: `${left}vw`,
				top: `${top}vh`,
				width: `${width}rem`,
				height: `${width}rem`,
				opacity: opacity,
			}}
		></div>
	)
}
