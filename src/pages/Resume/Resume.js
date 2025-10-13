import { useState, useEffect, useRef } from "react"

import TypedText from "../../components/TypedText.js"
import LanguageCard from "../../components/LanguageCard.js"
import FilledCircle from "../../components/FilledCircle.js"

import Constants from "../../utils/Constants.js"
import ResumeData from "../../data/ResumeData.js"

import "./Resume.css"

import ResumePDF from "../../assets/Resume.pdf"
import Email from "../../assets/images/Email.png"
import PDF from "../../assets/images/ResumePDF.png"

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
import Tracking from "../../utils/Tracking.js"

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
	const [jobShowingArr, setJobShowingArr] = useState(new Array(ResumeData.length).fill(false))
	const showThresholds = useRef([])

	useEffect(() => {
		Tracking.addEvent("Resume Page Viewed")
	}, [])

	useEffect(() => {
		showThresholds.current.push(
			[...document.getElementsByClassName("resume-technology-div")]
				.map((x) => x.scrollHeight)
				.reduce((a, b) => a + b) + 100
		)
		for (let i = 1; i < ResumeData.length; ++i)
			showThresholds.current.push(
				showThresholds.current[showThresholds.current.length - 1] +
					document.getElementById(ResumeData[i][3]).scrollHeight +
					100
			)

		document.getElementById("resume-wrapper").addEventListener("scroll", (e) => {
			const temp = [...jobShowingArr]
			for (let i = 0; i < temp.length; ++i) {
				if (e.target.scrollTop + e.target.offsetHeight >= showThresholds.current[i])
					temp[i] = true
			}
			setJobShowingArr(temp)
		})
		// eslint-disable-next-line
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
			<div
				className="resume-technology-div"
				style={{
					backgroundColor: "transparent",
					width: "100%",
					justifyContent: "space-evenly",
					overflow: "visible",
				}}
			>
				<div className="resume-bordering-div">
					<img src={Email} alt="Email" />
					<a href="mailto:basmaym148@gmail.com">basmaym148@gmail.com</a>
				</div>
				<div className="resume-bordering-div">
					<img src={PDF} alt="Resume" />
					<a
						href={ResumePDF}
						without
						rel="noopener noreferrer"
						target="_blank"
						onClick={() => Tracking.addEvent("Resume Viewed")}
					>
						Resume (PDF)
					</a>
				</div>
			</div>
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
			<div className="resume-jobs-background-wrapper">
				{ResumeData.map((emp, i) => (
					<Employment
						companyName={emp[0]}
						companyImage={emp[1]}
						jobTitle={emp[2]}
						startDate={emp[3]}
						endDate={emp[4]}
						location={emp[5]}
						query={emp[6]}
						points={emp[7]}
						key={emp[3]}
						index={i}
						fadeIn={jobShowingArr[i]}
					/>
				))}
				{jobShowingArr[jobShowingArr.length - 1] ? (
					<FilledCircle
						diameter="3rem"
						className="resume-employment-filled-circle-end"
						outlineWidth="0.25rem"
						innerColour={Constants.theme.secondaryColour}
						outerColour={Constants.theme.secondaryColour}
					/>
				) : (
					""
				)}
			</div>
		</div>
	)
}

function Employment({
	companyName,
	companyImage,
	jobTitle,
	startDate,
	endDate,
	location,
	query,
	points,
	index,
	fadeIn,
}) {
	return index % 2 ? (
		<div
			className="resume-employment-wrapper"
			id={startDate}
			style={{ opacity: !fadeIn ? 0 : 1 }}
		>
			{fadeIn ? <Line /> : ""}
			{fadeIn ? (
				<FilledCircle
					diameter="3rem"
					className="resume-employment-filled-circle"
					outlineWidth="0.25rem"
					innerColour={Constants.theme.secondaryColour}
					outerColour={Constants.theme.secondaryColour}
				/>
			) : (
				""
			)}
			<div
				className="resume-employment-section"
				style={{
					padding: "1rem",
					backgroundColor: "rgba(0, 0, 0, 0.6)",
				}}
			>
				<h2 className="resume-employment-job-title">{jobTitle}</h2>
				<h3 className="resume-employment-job-title">{companyName}</h3>
				<h4 className="resume-employment-job-title">
					{startDate} — {endDate}
				</h4>
				<h4 className="resume-employment-job-title">{location}</h4>
				{points.map((p, i) => (
					<p className="resume-employment-job-title" key={i}>
						{p}
					</p>
				))}
			</div>
			<div className="resume-employment-section">
				<img src={companyImage} alt={companyName} />
				{fadeIn ? (
					<TypedText
						text={query.replaceAll("+", " ").split(",").join(", ")}
						font="Graphik"
						color="white"
						timeRange={50}
						minTime={0}
					/>
				) : (
					""
				)}
				<iframe
					referrerPolicy="no-referrer-when-downgrade"
					src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${query}`}
					allowFullScreen
					title={index}
				/>
			</div>
		</div>
	) : (
		<div
			className="resume-employment-wrapper"
			id={startDate}
			style={{ opacity: !fadeIn ? 0 : 1 }}
		>
			{fadeIn ? <Line /> : ""}
			{fadeIn ? (
				<FilledCircle
					diameter="3rem"
					className="resume-employment-filled-circle"
					outlineWidth="0.25rem"
					innerColour={Constants.theme.secondaryColour}
					outerColour={Constants.theme.secondaryColour}
				/>
			) : (
				""
			)}
			<div className="resume-employment-section">
				<img src={companyImage} alt={companyName} />
				{fadeIn ? (
					<TypedText
						text={query.replaceAll("+", " ").split(",").join(", ")}
						font="Graphik"
						color="white"
						timeRange={50}
						minTime={0}
					/>
				) : (
					""
				)}
				<iframe
					referrerPolicy="no-referrer-when-downgrade"
					src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${query}`}
					allowFullScreen
					title={index}
				/>
			</div>
			<div
				className="resume-employment-section"
				style={{
					padding: "1rem",
					backgroundColor: "rgba(0, 0, 0, 0.6)",
				}}
			>
				<h2 className="resume-employment-job-title">{jobTitle}</h2>
				<h3 className="resume-employment-job-title">{companyName}</h3>
				<h4 className="resume-employment-job-title">
					{startDate} — {endDate}
				</h4>
				<h4 className="resume-employment-job-title">{location}</h4>
				{points.map((p, i) => (
					<p className="resume-employment-job-title" key={i}>
						{p}
					</p>
				))}
			</div>
		</div>
	)
}

const Line = () => {
	return <div className="resume-employment-dropping-line"></div>
}
