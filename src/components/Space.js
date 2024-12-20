import "./components.css"
import { useState } from "react"

import Back from "../assets/images/back.png"

import Mercury from "../assets/planets/Mercury.png"
import Venus from "../assets/planets/Venus.png"
import Earth from "../assets/planets/Earth.png"
import Mars from "../assets/planets/Mars.png"
import Jupiter from "../assets/planets/Jupiter.png"
import Saturn from "../assets/planets/Saturn.png"
import Uranus from "../assets/planets/Uranus.png"
import Neptune from "../assets/planets/Neptune.png"
import Sun from "../assets/planets/Sun.png"

const planets = [
	["Mercury", Mercury, 2, Math.random() * 360],
	["Venus", Venus, 2, Math.random() * 360],
	["Earth", Earth, 5, Math.random() * 360],
	["Mars", Mars, 4, Math.random() * 360],
	["Jupiter", Jupiter, 10, Math.random() * 360],
	["Saturn", Saturn, 8, Math.random() * 360],
	["Uranus", Uranus, 6, Math.random() * 360],
	["Neptune", Neptune, 6, Math.random() * 360],
]

const planetInfo = {
	Sun: [
		"The Sun",
		Sun,
		"The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as light and infrared radiation.",
	],
	Mercury: [
		"Mercury",
		Mercury,
		"Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the planets in the Solar System.",
	],
	Venus: [
		"Venus",
		Venus,
		"Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. Venus is the second-brightest natural object in the night sky after the Moon.",
	],
	Earth: [
		"Earth",
		Earth,
		"Earth is the third planet from the Sun and the only astronomical object known to harbor and support life. About 29.2% of Earth's surface is land consisting of continents and islands.",
	],
	Mars: [
		"Mars",
		Mars,
		"Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. Mars is a terrestrial planet with a thin atmosphere.",
	],
	Jupiter: [
		"Jupiter",
		Jupiter,
		"Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined.",
	],
	Saturn: [
		"Saturn",
		Saturn,
		"Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth.",
	],
	Uranus: [
		"Uranus",
		Uranus,
		"Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
	],
	Neptune: [
		"Neptune",
		Neptune,
		"Neptune is the eighth and farthest known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.",
	],
}

export default function Space() {
	const [info, setInfo] = useState(null)
	const [animate, setAnimate] = useState(false)
	const [hoverTarget, setHoverTarget] = useState(null)

	return (
		<div className="space-background">
			<div
				className="space-planet-section"
				onClick={() => {
					setAnimate(true)
					setInfo(planetInfo[hoverTarget])
				}}
				style={{ top: animate ? "0px" : "calc(50% - 6.5rem)" }}
			>
				{planets.map((planet, i) => (
					<div
						className={`space-orbit space-orbit-${
							planet[0]
						} ${
							hoverTarget === planet[0]
								? "space-orbit-active"
								: ""
						}`}
						key={planet[0]}
						style={{
							height: `${1.1 * (i + 4)}rem`,
							width: `${1.1 * (i + 4)}rem`,
							left: `calc(50% - calc(${
								(1.1 * (i + 4)) / 2
							}rem + 1px))`,
							top: `calc(50% - calc(${
								(1.1 * (i + 4)) / 2
							}rem + 1px))`,
							rotate: `${planet[3]}deg`,
							zIndex: 15 - i,
						}}
						onMouseEnter={(e) => setHoverTarget(planet[0])}
						onMouseLeave={(e) => {
							if (i === planets.length - 1)
								setHoverTarget(null)
						}}
					>
						<img
							alt={planet[0]}
							src={planet[1]}
							style={{
								height: `${planet[2]}px`,
								top: `calc(50% - ${planet[2] / 2}px)`,
								left:
									planet[0] !== "Saturn"
										? `calc(-1px - ${
												planet[2] / 2
										  }px)`
										: `-10px`,
							}}
							className={`space-planet`}
						/>
					</div>
				))}
				<div
					className="space-sun"
					onMouseEnter={(e) => setHoverTarget("Sun")}
				></div>
			</div>
			{animate ? (
				<div className="space-info-section">
					<img
						alt="back"
						src={Back}
						className="space-info-back"
						onClick={() => setAnimate(false)}
					/>
					<div className="space-info-left-section">
						<span className="space-info-left-title">
							{info[0]}
						</span>
						<span className="space-info-left-text">
							{info[2]}
						</span>
					</div>
					<img
						alt={info[0]}
						src={info[1]}
						style={{ width: "30%" }}
					/>
				</div>
			) : (
				""
			)}
		</div>
	)
}
