import "./Home.css"
import Me from "../../assets/images/Me.png"

import Constants from "../../utils/Constants.js"
import TypedText from "../../components/TypedText.js"

export default function Home() {
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
			</div>
			<div className="home-right-divider">
				<img src={Me} />
			</div>
		</div>
	)
}
