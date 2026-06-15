import { useEffect, useRef, useState } from "react"
import "./Breakout.css"
import Ball from "./components/Ball"
import Paddle from "./components/Paddle"
import useGameloop from "./hooks/useGameloop"
import BreakoutConstants from "./Breakout.constants"
import Target from "./components/Target"

const getTargetColour = (i) => {
	if (i < 6) return "red"
	if (i < 12) return "orange"
	if (i < 18) return "yellow"
	if (i < 24) return "green"
	if (i < 30) return "blue"
	if (i < 36) return "indigo"
	return "violet"
}

export default function Breakout() {
	const ballVelocity = useRef([0, 5])
	const breakoutBallRef = useRef()
	const targets = useRef(
		new Array(BreakoutConstants.numTargets).fill(0).map((_, i) => ({
			active: true,
			onHit: i === 21 ? () => console.log("what") : undefined,
			colour: getTargetColour(i),
		}))
	)
	const pressed = useRef(new Set()).current
	const { startGame, stopGame, update } = useGameloop()
	const [paddlePosition, setPaddlePosition] = useState(81)

	const onKeyDown = (e) => {
		if (e.code === "ArrowLeft" || e.code === "ArrowRight") {
			pressed.add(e.code)
		}
		e.preventDefault()
	}

	const onKeyUp = (e) => {
		if (e.code === "ArrowLeft" || e.code === "ArrowRight") {
			pressed.delete(e.code)
		}
		e.preventDefault()
	}

	useEffect(() => {
		breakoutBallRef.current = document.getElementById("breakout-ball")
		for (let i = 0; i < targets.current.length; ++i) {
			targets.current[i].ref = document.getElementById(`breakout-target-${i}`)
		}
	}, [])

	useEffect(() => {
		const { x, y } = breakoutBallRef.current?.getBoundingClientRect()
		for (const t of targets.current) {
			const {
				x: targetX,
				y: targetY,
				height: targetHeight,
			} = t.ref.getBoundingClientRect()
			if (x >= targetX && y <= targetY + targetHeight && t.active) {
				t.active = false
				ballVelocity.current[1] *= -1
				break
			}
		}
	}, [update])

	useEffect(startGame, [])

	return (
		<div className="breakout-background" onKeyDown={onKeyDown} onKeyUp={onKeyUp} tabIndex="0">
			<div className="breakout-targets-container">
				{targets.current?.map((t, i) => (
					<Target id={`breakout-target-${i}`} colour={t.colour} active={t.active} />
				))}
			</div>
			<Ball
				updator={update}
				onLose={stopGame}
				isLeftPressed={pressed.has("ArrowLeft")}
				isRightPressed={pressed.has("ArrowRight")}
				paddlePosition={paddlePosition}
				velocity={ballVelocity}
			/>
			<Paddle
				isLeftPressed={pressed.has("ArrowLeft")}
				isRightPressed={pressed.has("ArrowRight")}
				updator={update}
				position={paddlePosition}
				setPosition={setPaddlePosition}
			/>
		</div>
	)
}
