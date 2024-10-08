import { useState, useEffect } from "react"
import Me from "../../../images/Me.png"

const starColours = [
	"#BCFFFFFF",
	"#EBD9A5",
	"#FFFBCB",
	"#E7837D",
	"#FFFFFF",
	"#8AB7DC",
	"#D2E1A1",
]

const Star = ({ colour, top, left, dimensions }) => {
	return (
		<div
			className="star"
			style={{
				backgroundImage: `radial-gradient(75% 75% at 50% 50%, ${colour} 0%, #073AFF00 55%)`,
				height: dimensions,
				width: dimensions,
				left: left,
				top: top,
				animation: `glow ${Math.random() * 0.75 + 0.25}s infinite`,
			}}
		></div>
	)
}

export default function AboutMe({ dark }) {
	const [stars, setStars] = useState([])

	useEffect(() => {
		const div = document.getElementsByClassName("aboutme")[0]
		for (
			let i = 0;
			i < (div.scrollHeight * div.clientWidth) / 1600;
			++i
		) {
			setStars((x) => [
				...x,
				<Star
					colour={
						starColours[
							Math.floor(
								Math.random() * starColours.length
							)
						]
					}
					top={`${Math.random() * div.scrollHeight}px`}
					left={`${Math.random() * div.clientWidth}px`}
					dimensions={`${Math.random() * 15 + 5}px`}
				/>,
			])
		}
	}, [])

	return (
		<div className="completepage aboutme">
			{stars}
			<h1 className="name-card">Bassam El-Naggar</h1>
			<h2 className="info-card">
				I love tinkering with all types of software, whether it be
				web development or game development. In my spare time, I
				enjoy building projects similar to this website, using a
				multitude of different technologies. Besides my passion for
				software (and computers in general), I enjoy spending time
				with my friends and family. I'm also a big fan of sports,
				and I'll take any chance I can get to play soccer or
				basketball. I also have a passion for learning. Software and
				mathematics are deeply intertwined, and it's only natural
				that I also have a passion for mathematics as well. I also
				enjoy learning about astronomical phenomena; I simply find
				the universe very intriguing! Thank you very much for taking
				the time to visit my website and learning a little bit more
				about me!
			</h2>
			<img src={Me} className="image-of-me" />
		</div>
	)
}
