import Constants from "../utils/Constants.js"

import "./components.css"

const pageMap = {
	Home: "",
	"About Me": "AboutMe",
	Resume: "Resume",
	Projects: "Projects",
	Videos: "Videos",
}

export default function Navbar({ setPage }) {
	return (
		<div className="navbar-nav">
			<div className="navbar-selector-wrapper">
				{["Home", "About Me", "Resume", "Projects", "Videos"].map(
					(p) => (
						<div
							className="navbar-page"
							key={p}
							onClick={(e) => {
								setPage(pageMap[p])
							}}
						>
							{p}
						</div>
					)
				)}
			</div>
		</div>
	)
}
