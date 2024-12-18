import { useRef } from "react"

import "./Projects.css"

import ProjectsData from "../../data/ProjectsData.js"

export default function Projects() {
	const hoverTarget = useRef(null)

	return (
		<div className="main-wrapper">
			{ProjectsData.map((project) => (
				<div
					className="projects-project-div"
					key={project.title}
					id={project.title}
					onMouseEnter={() => {
						hoverTarget.current = document.getElementById(
							project.title
						)
					}}
					onMouseLeave={() => {
						hoverTarget.current.style.transform = ""
						hoverTarget.current = null
					}}
					onMouseMove={(e) => {
						const rect =
							hoverTarget.current.getBoundingClientRect()
						const topPercentage =
							0.5 - (e.clientY - rect.top) / rect.height
						const rightPercentage =
							0.5 - (e.clientX - rect.left) / rect.width
						hoverTarget.current.style.transform = `rotateX(${
							topPercentage * -0.025
						}turn) rotateY(${rightPercentage * -0.05}turn)`
					}}
				>
					<img src={project.img} alt={project.title} />
					<div className="projects-project-right-div">
						<h3
							style={{
								width: "100%",
								height: "20%",
								color: "white",
								fontFamily: "Graphik",
							}}
						>
							{project.title}
						</h3>
						<h6
							style={{
								width: "100%",
								color: "white",
								fontFamily: "Graphik",
								fontSize: "0.6rem",
								margin: "0px",
							}}
						>
							{project.text}
						</h6>
						<a
							href={project.url}
							style={{
								height: "15%",
								fontSize: "0.6rem",
								fontFamily: "Graphik",
							}}
							target="_blank"
							rel="noopener noreferrer"
						>
							{project.url}
						</a>
					</div>
				</div>
			))}
		</div>
	)
}
