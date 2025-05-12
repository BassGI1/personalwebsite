import { useEffect } from "react"

import "./AboutMe.css"

import Space from "../../components/Space.js"
import Football from "../../components/Football.js"
import TypedText from "../../components/TypedText.js"
import Basketball from "../../components/Basketball.js"

import Tracking from "../../utils/Tracking.js"

export default function AboutMe() {

	useEffect(() => {
		Tracking.addEvent("AboutMe Page Viewed")
	}, [])

	return (
		<div className="main-wrapper">
			<div className="aboutme-left-section">
				<TypedText
					text="Hi, my name is Bassam!"
					fontSize="2.5rem"
					color="white"
					font="Graphik"
					timeRange={50}
					minTime={50}
				/>
				<TypedText
					text="I'm an aspiring software engineer, basketball and soccer fanatic, and amateur astronomer."
					color="white"
					font="Graphik"
					fontSize="1.1rem"
					timeRange={50}
					minTime={10}
				/>
				<TypedText
					text="I have completed 5 internships with a focus on full stack software engineering. I've built systems of all types of all levels; from a RISC-V processor to this website, I've been exposed to all kinds of software development. When I'm not writing code, you'll probably find me on a court or a field somewhere, playing a sport or stargazing."
					color="white"
					timeRange={10}
					minTime={5}
				/>
			</div>
			<div className="aboutme-right-section">
				<h2 className="aboutme-game-title">Fancy a Game?</h2>
				<div className="aboutme-games-container">
					<Basketball />
					<Space />
					<Football />
				</div>
			</div>
		</div>
	)
}
