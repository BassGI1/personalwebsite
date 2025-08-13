import { useEffect, useRef, useState } from "react"

import Basket from "../assets/basketball/Basket.png"
import Ball from "../assets/basketball/Basketball.png"
import Tracking from "../utils/Tracking"
import Random from "../utils/Random"

const GREEN_BEAN_MAX = 1050
const GREEN_BEAN_MIN = 850
const BAR_MAX = 1300

const DANCE_TIMING = 250
const DANCE_TIMEOUT = 2000

const SHOT_TIMING = 2000
const MISS_CLASSES = ["basketball-miss-1", "basketball-miss-2"]

const useDance = (timing, timeout) => {
	const [dancing, setDancing] = useState(0)
	const danceInterval = useRef(0)

	const dance = () => {
		setDancing(1)
		danceInterval.current = setInterval(() => setDancing((d) => (d === 1 ? 2 : 1)), timing)
		setTimeout(() => {
			clearInterval(danceInterval.current)
			setDancing(0)
		}, timeout)
	}

	return { dancing, dance }
}

const useShoot = (timing) => {
	const [shotClass, setShotClass] = useState("")
	const shoot = (shot, onSplash) => {
		if (shot >= GREEN_BEAN_MIN && shot <= GREEN_BEAN_MAX) {
			setTimeout(onSplash, timing - 2000)
			setShotClass("basketball-splash")
		} else setShotClass(MISS_CLASSES[Math.floor(Math.random() * MISS_CLASSES.length)])
		setTimeout(() => setShotClass(""), timing)
	}
	return { shotClass, shoot }
}

const Person = ({ colour, className }) => {
	return (
		<div className={`basketball-fan-wrapper ${className}`}>
			<div className="basketball-fan-head" />
			<div className="basketball-fan-body" style={{ backgroundColor: colour }} />
		</div>
	)
}

export default function Basketball() {
	const [row1, setRow1] = useState([])
	const [row2, setRow2] = useState([])
	const [row3, setRow3] = useState([])
	const [row4, setRow4] = useState([])
	const [row5, setRow5] = useState([])

	const [showInfo, setShowInfo] = useState(true)
	const [showShootingBar, setShowShootingBar] = useState(false)

	const pressInTime = useRef(null)
	const [pressOutTime, setPressOutTime] = useState(0)

	const { shotClass, shoot } = useShoot(SHOT_TIMING + 2000)
	const { dancing, dance } = useDance(DANCE_TIMING, DANCE_TIMEOUT)

	useEffect(() => {
		let temp = []
		let numFans = 12 + Math.floor(Math.random() * 10)
		for (let _ = 0; _ < numFans; ++_) temp.push(Random.colour())
		setRow1(temp)

		temp = []
		numFans = 12 + Math.floor(Math.random() * 10)
		for (let _ = 0; _ < numFans; ++_) temp.push(Random.colour())
		setRow2(temp)

		temp = []
		numFans = 12 + Math.floor(Math.random() * 10)
		for (let _ = 0; _ < numFans; ++_) temp.push(Random.colour())
		setRow3(temp)

		temp = []
		numFans = 12 + Math.floor(Math.random() * 10)
		for (let _ = 0; _ < numFans; ++_) temp.push(Random.colour())
		setRow4(temp)

		temp = []
		numFans = 12 + Math.floor(Math.random() * 10)
		for (let _ = 0; _ < numFans; ++_) temp.push(Random.colour())
		setRow5(temp)
	}, [])

	const onShootPressIn = () => {
		Tracking.addEvent("Basketball Played")

		setShowInfo(false)
		setShowShootingBar(true)
		pressInTime.current = Date.now()
		setPressOutTime(0)
	}

	const onShootPressOut = () => {
		const holdTime = Date.now() - pressInTime.current
		pressInTime.current = null
		setPressOutTime(holdTime)
		setTimeout(() => setShowShootingBar(false), SHOT_TIMING)
		shoot(holdTime, dance)
	}

	return (
		<div className="basketball-court">
			<div className="basketball-fan-row" style={{ top: "6.5rem" }}>
				{row5.map((fan, index) => (
					<Person
						colour={fan}
						className={
							dancing
								? dancing === 1
									? "basketball-fan-dance-left"
									: "basketball-fan-dance-right"
								: ""
						}
						key={index}
					/>
				))}
			</div>
			<div className="basketball-fan-row" style={{ top: "7.5rem" }}>
				{row4.map((fan, index) => (
					<Person
						colour={fan}
						className={
							dancing
								? dancing === 1
									? "basketball-fan-dance-right"
									: "basketball-fan-dance-left"
								: ""
						}
						key={index}
					/>
				))}
			</div>
			<div className="basketball-fan-row" style={{ top: "8.5rem" }}>
				{row3.map((fan, index) => (
					<Person
						colour={fan}
						className={
							dancing
								? dancing === 1
									? "basketball-fan-dance-left"
									: "basketball-fan-dance-right"
								: ""
						}
						key={index}
					/>
				))}
			</div>
			<div className="basketball-fan-row" style={{ top: "9.5rem" }}>
				{row2.map((fan, index) => (
					<Person
						colour={fan}
						className={
							dancing
								? dancing === 1
									? "basketball-fan-dance-right"
									: "basketball-fan-dance-left"
								: ""
						}
						key={index}
					/>
				))}
			</div>
			<div className="basketball-fan-row" style={{ top: "10.5rem" }}>
				{row1.map((fan, index) => (
					<Person
						colour={fan}
						className={
							dancing
								? dancing === 1
									? "basketball-fan-dance-left"
									: "basketball-fan-dance-right"
								: ""
						}
						key={index}
					/>
				))}
			</div>
			<img src={Basket} className="basketball-basket" />
			<img
				src={Ball}
				className={`basketball-basketball ${shotClass}`}
				onMouseDown={onShootPressIn}
				onMouseUp={onShootPressOut}
			/>
			{showInfo && (
				<h3 className="basketball-info-text">Click and hold the ball to shoot</h3>
			)}
			{showShootingBar && (
				<div className="basketball-shooting-bar">
					<div className="basketball-shooting-bar-inner">
						<div className="basketball-shooting-bar-green-bean" />
						<div
							className={`basketball-shooting-bar-current-shot ${
								!pressOutTime
									? "basketball-shooting-bar-current-shot-shooting"
									: ""
							}`}
							style={{
								height: `${(100 * pressOutTime) / BAR_MAX}%`,
								backgroundColor:
									pressOutTime >= GREEN_BEAN_MIN &&
									pressOutTime <= GREEN_BEAN_MAX
										? "green"
										: "red",
							}}
						/>
					</div>
				</div>
			)}
		</div>
	)
}
