import { useEffect, useRef, useState } from "react"

export default function TypedText({
	text,
	minTime = 100,
	timeRange = 200,
	font = "Consolas",
	width = "auto",
	height = "auto",
	fontSize = "1rem",
	setDone = (e) => {},
	color = "black",
}) {
	const textRef = useRef("")
	const [currentText, setCurrentText] = useState("")

	useEffect(() => {
		const timers = new Array(text.length).fill(0)
		for (let i = 0; i < timers.length; ++i)
			timers[i] =
				Math.floor(Math.random() * timeRange + minTime) +
				(i !== 0 ? timers[i - 1] : 0)

		for (const time of timers) {
			setTimeout(() => {
				textRef.current =
					text.slice(0, textRef.current.length) + "_"
				setCurrentText(textRef.current)
			}, time)
		}

		setTimeout(() => {
			textRef.current = text
			setCurrentText(text)
			setDone(true)
		}, timers[timers.length - 1] + Math.floor(Math.random() * timeRange + minTime))
	}, [])

	return (
		<div
			style={{
				fontFamily: font,
				height: height,
				width: width,
				fontSize: fontSize,
				color: color,
			}}
		>
			{currentText}
		</div>
	)
}
