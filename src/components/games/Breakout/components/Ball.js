import { useEffect, useState } from "react"

export default function Ball({
	updator,
	onLose,
	isLeftPressed,
	isRightPressed,
	paddlePosition,
	velocity,
}) {
	const [position, setPosition] = useState([98, 124])

	// holy spaghetti code
	useEffect(() => {
		setPosition((p) => {
			let [x, y] = p

			if (velocity.current[0] > 0) {
				if (x >= 190) {
					velocity.current[0] *= -1
				}
				x += velocity.current[0]
			} else {
				if (x <= 0) {
					velocity.current[0] *= -1
				}
				x += velocity.current[0]
			}

			if (velocity.current[1] > 0) {
				const ballX = x + 6
				if (y >= 295) {
					onLose()
				} else if (
					y >= 276 &&
					ballX >= paddlePosition &&
					ballX <= paddlePosition + 34
				) {
					velocity.current[1] *= -1
					if (isLeftPressed) {
						--velocity.current[0]
					}
					if (isRightPressed) {
						++velocity.current[0]
					}
				}
				y += velocity.current[1]
			} else {
				if (y <= 0) {
					velocity.current[1] *= -1
				}
				y += velocity.current[1]
			}

			return [x, y]
		})
	}, [updator])

	return (
		<div
			id="breakout-ball"
			className="breakout-ball"
			style={{ transform: `translate(${position[0]}px, ${position[1]}px)` }}
		/>
	)
}
