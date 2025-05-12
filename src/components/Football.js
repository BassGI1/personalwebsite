import "./components.css"
import { useState, useEffect, useRef } from "react"
import Ball from "../assets/images/Football.png"
import Tracking from "../utils/Tracking"

export default function Football() {
	const vector = useRef([0, 0])
	const prevCoords = useRef(null)
	const ballData = useRef(null)
	const [score, setScore] = useState([0, 0])
	const [golaso, setGolaso] = useState(false)
	const [ballMoving, setBallMoving] = useState(false)

	useEffect(() => {
		const x = {
			ball: document.getElementById("football"),
			fieldDimensions: document
				.getElementsByClassName("football-outer-field")[0]
				.getBoundingClientRect(),
			x: 0,
			y: 0,
			topGoalCoords: document.getElementById("top-goal").getBoundingClientRect(),
			bottomGoalCoords: document.getElementById("bottom-goal").getBoundingClientRect(),
		}
		ballData.current = x
	}, [])

	const animateBall = (e) => {
		if (!ballMoving && !golaso) {
			const possX = vector.current[0] + ballData.current.x
			const possY = vector.current[1] + ballData.current.y
			setBallMoving(true)
			setTimeout(() => {
				setBallMoving(false)
			}, 500)

			if (possX < -(ballData.current.fieldDimensions.width / 2))
				ballData.current.x = -(ballData.current.fieldDimensions.width / 2) + 8
			else if (possX > ballData.current.fieldDimensions.width / 2)
				ballData.current.x = ballData.current.fieldDimensions.width / 2 - 8
			else ballData.current.x = possX

			if (possY < -(ballData.current.fieldDimensions.height / 2))
				ballData.current.y = -(ballData.current.fieldDimensions.height / 2) + 8
			else if (possY > ballData.current.fieldDimensions.height / 2)
				ballData.current.y = ballData.current.fieldDimensions.height / 2 - 8
			else ballData.current.y = possY

			ballData.current.ball.style.transform = `translate(${ballData.current.x}px, ${
				ballData.current.y
			}px) rotate(${Math.random() * 3}turn)`
		}
	}

	const checkGoal = (e) => {
		if (ballData.current.x >= -10 && ballData.current.x <= 10) {
			if (ballData.current.y <= -155) {
				ballData.current.ball.style.transform = "translate(0px, 0px)"
				ballData.current.x = 0
				ballData.current.y = 0

				Tracking.addEvent("Football Played")

				setGolaso(true)
				setTimeout(() => setGolaso(false), 1500)
				setScore([score[0] + 1, score[1]])
			} else if (ballData.current.y >= 155) {
				ballData.current.ball.style.transform = "translate(0px, 0px)"
				ballData.current.x = 0
				ballData.current.y = 0

				Tracking.addEvent("Football Played")

				setGolaso(true)
				setTimeout(() => setGolaso(false), 1500)
				setScore([score[0], score[1] + 1])
			}
		}
	}

	return (
		<div
			className="football-outer-field"
			onMouseMove={(e) => {
				if (prevCoords.current) {
					vector.current = [
						(e.clientX - prevCoords.current.x) * 10,
						(e.clientY - prevCoords.current.y) * 10,
					]
				}
				prevCoords.current = { x: e.clientX, y: e.clientY }
			}}
		>
			<img
				alt="ball"
				src={Ball}
				className="football-ball"
				id="football"
				onMouseEnter={(e) => animateBall(e)}
				onTransitionEnd={(e) => checkGoal(e)}
			/>
			<div className="football-center-circle"></div>
			<div className="football-center-line"></div>
			<div
				className="football-18yard"
				style={{ top: "0px", borderBottom: "4px solid white" }}
			></div>
			<div
				className="football-18yard"
				style={{ bottom: "0px", borderTop: "4px solid white" }}
			></div>
			<div
				className="football-scoreboard"
				style={{
					top: "calc(20% - 1.25rem)",
					opacity: golaso ? "1" : "0",
				}}
			>
				{score[0]}
			</div>
			<div
				className="football-scoreboard"
				style={{
					bottom: "calc(20% - 1.25rem)",
					opacity: golaso ? "1" : "0",
				}}
			>
				{score[1]}
			</div>
			<div className="football-goal-hitbox" style={{ top: "-4px" }} id="top-goal"></div>
			<div
				className="football-goal-hitbox"
				style={{ bottom: "-4px" }}
				id="bottom-goal"
			></div>
		</div>
	)
}
