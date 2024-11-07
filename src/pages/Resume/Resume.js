import LanguageCard from "../../components/LanguageCard.js"

import "./Resume.css"

// languages
import C from "../../assets/technologies/languages/C.png"
import Cpp from "../../assets/technologies/languages/C++.png"
import CSS from "../../assets/technologies/languages/CSS.png"
import Elixir from "../../assets/technologies/languages/Elixir.png"
import HTML from "../../assets/technologies/languages/HTML.png"
import Java from "../../assets/technologies/languages/Java.png"
import JavaScript from "../../assets/technologies/languages/JavaScript.png"
import MongoDB from "../../assets/technologies/languages/MongoDB.png"
import PHP from "../../assets/technologies/languages/PHP.png"
import PostgreSQL from "../../assets/technologies/languages/PostgreSQL.png"
import Python from "../../assets/technologies/languages/Python.png"
import Ruby from "../../assets/technologies/languages/Ruby.png"
import TypeScript from "../../assets/technologies/languages/TypeScript.png"
import MySQL from "../../assets/technologies/languages/MySQL.png"

// frameworks
import Django from "../../assets/technologies/frameworks/Django.png"
import Node from "../../assets/technologies/frameworks/Node.png"
import Phoenix from "../../assets/technologies/frameworks/Phoenix.png"
import ReactNative from "../../assets/technologies/frameworks/React Native.png"
import ReactLogo from "../../assets/technologies/frameworks/React.png"
import Rails from "../../assets/technologies/frameworks/Ruby On Rails.png"
import SocketIO from "../../assets/technologies/frameworks/Socket.io.png"
import Spring from "../../assets/technologies/frameworks/Spring.png"
import Vue from "../../assets/technologies/frameworks/Vue.png"

// tools
import AWS from "../../assets/technologies/tools/AWS.png"
import Datadog from "../../assets/technologies/tools/Datadog.png"
import Docker from "../../assets/technologies/tools/Docker.png"
import GCP from "../../assets/technologies/tools/GCP.png"
import Git from "../../assets/technologies/tools/Git.png"
import Linux from "../../assets/technologies/tools/Linux.png"
import { useEffect, useState } from "react"

const languages = [
	[JavaScript, "JavaScript"],
	[TypeScript, "TypeScript"],
	[Python, "Python"],
	[Ruby, "Ruby"],
	[Java, "Java"],
	[C, "C"],
	[Cpp, "C++"],
	[PHP, "PHP"],
	[Elixir, "Elixir"],
	[MySQL, "MySQL"],
	[PostgreSQL, "PostgreSQL"],
	[MongoDB, "MongoDB"],
	[CSS, "CSS"],
	[HTML, "HTML"],
]

const frameworks = [
	[ReactLogo, "React"],
	[Node, "Node"],
	[Rails, "Ruby On Rails"],
	[Django, "Django"],
	[ReactNative, "React Native"],
	[Vue, "Vue"],
	[Spring, "Spring"],
	[Phoenix, "Phoenix"],
	[SocketIO, "Socket.io"],
]

const tools = [
	[Linux, "Linux"],
	[AWS, "AWS"],
	[GCP, "GCP"],
	[Docker, "Docker"],
	[Git, "Git"],
	[Datadog, "Datadog"],
]

export default function Resume() {
	const [fadeJobs, SetFadeJobs] = useState(false)

	useEffect(() => {
		document
			.getElementById("resume-wrapper")
			.addEventListener("scroll", (e) => {
				if (
					e.target.scrollTop + e.target.offsetHeight >=
					[
						...document.getElementsByClassName(
							"resume-technology-div"
						),
					]
						.map((x) => x.scrollHeight)
						.reduce((a, b) => a + b)
				)
					SetFadeJobs(true)
			})
	}, [])

	return (
		<div
			className="main-wrapper"
			id="resume-wrapper"
			style={{
				justifyContent: "flex-start",
				alignItems: "flex-start",
				padding: "0.5rem",
			}}
		>
			<div className="resume-technology-div">
				<h2>Languages I've Used</h2>
				{languages.map((l) => (
					<LanguageCard src={l[0]} text={l[1]} key={l[1]} />
				))}
			</div>
			<div className="resume-technology-div">
				<h2>Frameworks I've Used</h2>
				{frameworks.map((l) => (
					<LanguageCard src={l[0]} text={l[1]} key={l[1]} />
				))}
			</div>
			<div className="resume-technology-div">
				<h2>Developer Tools I've Used</h2>
				{tools.map((l) => (
					<LanguageCard src={l[0]} text={l[1]} key={l[1]} />
				))}
			</div>
			<div
				className={`resume-jobs-background-wrapper ${
					fadeJobs ? "resume-jobs-background-fadein" : ""
				}`}
			></div>
		</div>
	)
}
