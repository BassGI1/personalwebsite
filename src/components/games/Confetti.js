import { useEffect, useState } from "react"

import Random from "../../utils/Random"

const Confet = ({ colour, id, width, height, left, speed, containerHeight, onAnimationFinish }) => {
	useEffect(() => {
		const div = document.getElementById(id)
		setTimeout(() => {
			div.style.transform = `translateY(${containerHeight}) rotate3d(${Math.random()}, ${Math.random()}, ${Math.random()}, ${
				Math.random() * 5 + 5
			}turn)`
		}, Math.random() * 900 + 100)
	}, [])

	return (
		<div
			style={{
				position: "absolute",
				left: `${left}%`,
				top: `-${height + 4}px`,
				backgroundColor: colour,
				width: `${width}px`,
				height: `${height}px`,
				transform: `translateY(0px) rotate3d(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()}turn)`,
				transition: `transform ${speed}ms linear`,
			}}
			onTransitionEndCapture={() => onAnimationFinish(id)}
			id={id}
		/>
	)
}

export default function Confetti({
	numConfets,
	minWidth,
	maxWidth,
	minHeight,
	maxHeight,
	minSpeed,
	maxSpeed,
	containerHeight,
}) {
	const [confettiArray, setConfettiArray] = useState([])

	const onConfettiFall = (identifier) => {
		setConfettiArray((c) => {
			const currentConfets = [...c].filter((x) => x[1] !== identifier)
			const id = Random.identifier(5)
			const width = Random.numberInRange(minWidth, maxWidth)
			const height = Random.numberInRange(minHeight, maxHeight)
			const left = Random.numberInRange(0, 100)
			const colour = Random.colour()
			const speed = Random.numberInRange(minSpeed, maxSpeed)

			currentConfets.push([
				<Confet
					colour={colour}
					left={left}
					height={height}
					width={width}
					id={id}
					speed={speed}
					containerHeight={containerHeight}
					onAnimationFinish={onConfettiFall}
					key={id}
				/>,
				id,
			])

			return currentConfets
		})
	}

	useEffect(() => {
		const tempArr = []
		for (let _ = 0; _ < numConfets; ++_) {
			const id = Random.identifier(5)
			const width = Random.numberInRange(minWidth, maxWidth)
			const height = Random.numberInRange(minHeight, maxHeight)
			const left = Random.numberInRange(0, 100)
			const colour = Random.colour()
			const speed = Random.numberInRange(minSpeed, maxSpeed)

			tempArr.push([
				<Confet
					colour={colour}
					left={left}
					height={height}
					width={width}
					id={id}
					speed={speed}
					containerHeight={containerHeight}
					onAnimationFinish={onConfettiFall}
					key={id}
				/>,
				id,
			])
		}
		setConfettiArray(tempArr)
	}, [])

	return confettiArray.map((c) => c[0])
}
