import { useEffect } from "react"

import "./Home.css"

import Me from "../../assets/images/Me.png"
import Github from "../../assets/images/Github.png"
import LinkedIn from "../../assets/images/LinkedIn.png"

import Constants from "../../utils/Constants.js"
import TypedText from "../../components/TypedText.js"

import Tracking from "../../utils/Tracking.js"

export default function Home() {
	useEffect(() => {
		Tracking.addEvent("Home Page Viewed")
	}, [])

	return (
		<div className="main-wrapper">
			<div className="home-left-divider">
				<TypedText
					text="Bassam El-Naggar"
					fontSize="3rem"
					timeRange={300}
					color={Constants.theme.headerColor}
				/>
				<TypedText
					text="My name is Bassam El-Naggar and I am a software engineer."
					fontSize="1rem"
					minTime={0}
					timeRange={50}
					color={Constants.theme.headerColor}
				/>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-evenly",
						width: "20%",
						overflow: "visible",
					}}
				>
					<img
						src={LinkedIn}
						alt="LinkedIn"
						onClick={() => {
							Tracking.addEvent("LinkedIn Visited")
							window
								.open("https://www.linkedin.com/in/bassam-el-naggar/")
								.focus()
						}}
					/>
					<img
						src={Github}
						alt="Github"
						onClick={() => {
							Tracking.addEvent("Github Visited")
							window.open("https://www.github.com/BassGI1/").focus()
						}}
					/>
				</div>
			</div>
			<div className="home-right-divider">
				<img src={Me} alt="c'est moi" />
			</div>
		</div>
	)
}
