import "./AboutMe.css"
import Space from "../../components/Space.js"
import Football from "../../components/Football.js"
import TypedText from "../../components/TypedText.js"

export default function AboutMe() {
	return (
		<div className="main-wrapper">
			<div className="aboutme-left-section">
				<TypedText
					text="About Me"
					fontSize="3rem"
					color="white"
					font="Graphik"
				/>
				<TypedText
					text="Bassam El-Naggar"
					fontSize="2rem"
					color="white"
					font="Graphik"
					timeRange={100}
				/>
				<TypedText
					text="My name is Bassam El-Naggar and I am a 4th year Computer Engineering student at the University of Waterloo. I've completed 4 internships with a focus on full stack software engineering. I am currently completing a 5th internship at Babylist in California."
					fontSize="1.5rem"
					color="white"
					font="Graphik"
					minTime={10}
					timeRange={10}
				/>
			</div>
			<div className="aboutme-right-section">
				<h2>My Hobbies</h2>
				<h6>
					I have many hobbies, but a few are my love for sports
					(specifically soccer) and my fascination with
					astronomy. I love all kinds of technology, and I try to
					be knowledgable in every area of it. I've built
					frontend projects, backend projects, mobile apps,
					network apps, firmware, even a RISC-V CPU. I'm always
					looking for new things to learn and new projects to
					work on!
				</h6>
				<div className="aboutme-right-section-games">
					<Football />
					<Space />
				</div>
			</div>
		</div>
	)
}
