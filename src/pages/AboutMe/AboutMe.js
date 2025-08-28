import { useEffect } from "react"

import "./AboutMe.css"

import TypedText from "../../components/TypedText.js"

import Space from "../../components/games/Space.js"
import Tetris from "../../components/games/Tetris/Tetris.js"
import Football from "../../components/games/Football.js"
import TicTacToe from "../../components/games/TicTacToe.js"
import Basketball from "../../components/games/Basketball.js"

import Tracking from "../../utils/Tracking.js"
import GameOfLife from "../../components/games/GameOfLife/GameOfLife.js"

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
				<div className="about-me-games-text-container">
					<h2 className="aboutme-game-title">Fancy a Game?</h2>
				</div>

				<div className="aboutme-games-scroll">
					<div className="aboutme-games-container">
						<Tetris />
						<TicTacToe />
						<GameOfLife />
						<Basketball />
						<Space />
						<Football />
					</div>
				</div>
			</div>
		</div>
	)
}
