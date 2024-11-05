import { useRef, useState } from "react"

import "./components.css"

const commands = {
	help: `ls — list directory contents
cd — change the working directory (use this to view different pages)
clear — clear the terminal screen
pwd — print name of current/working directory
whoami — print effective userid
exit — end the application`,
	ls: `/AboutMe
/Resume
/Projects`,
	clear: " ",
	pwd: "C:/Desktop/bassamelnaggar",
	whoami: "Bassam El-Naggar",
}

const cdRegex = /cd\s/g
const pages = new Set()
pages.add("AboutMe")
pages.add("Resume")
pages.add("Projects")
pages.add("/AboutMe")
pages.add("/Resume")
pages.add("/Projects")

export default function CommandLine({ page, setPage }) {
	const [showTop, setShowTop] = useState(false)

	const commandHistoryIndex = useRef(null)
	const [commandHistory, setCommandHistory] = useState([])
	const [currentCommand, setCurrentCommand] = useState("")

	const [currentOutput, setCurrentOutput] = useState("")

	return (
		<div
			className="commandline-background-div"
			style={{ height: showTop ? "12.5rem" : "2rem" }}
			onPointerEnter={(e) => {
				setShowTop(true)
				document.getElementById("terminal-input").focus()
			}}
			onPointerLeave={(e) => setShowTop(false)}
		>
			{showTop ? (
				<div className="commandline-top-div">
					<h5>{currentOutput}</h5>
				</div>
			) : (
				""
			)}
			<div className="commandline-bottom-div">
				<h5>{`C:/Desktop/bassamelnaggar${
					page.length ? "/" + page : ""
				}$`}</h5>
				<input
					type="text"
					id="terminal-input"
					placeholder="type 'help' for a full list of commands"
					value={currentCommand}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							setCommandHistory((a) => {
								const x = [...a]
								x.push(currentCommand)
								return x
							})
							setCurrentCommand("")
							commandHistoryIndex.current = null
							setShowTop(true)
							if (currentCommand === "exit")
								window.location.assign(
									"https://google.com"
								)
							else if (currentCommand.match(cdRegex)) {
								const temp = currentCommand.replace(
									currentCommand.match(cdRegex)[0],
									""
								)
								if (temp === ".." || temp === "../") {
									setPage("")
									setCurrentOutput("")
								} else if (pages.has(temp)) {
									setPage(
										temp[0] === "/"
											? temp.slice(
													1,
													temp.length
											  )
											: temp
									)
									setCurrentOutput("")
								} else
									setCurrentOutput(
										`Command '${currentCommand}' not found`
									)
							} else
								setCurrentOutput(
									commands[currentCommand]
										? commands[currentCommand]
										: `Command '${currentCommand}' not found`
								)
						} else if (
							e.key === "ArrowUp" &&
							commandHistory.length
						) {
							if (commandHistoryIndex.current === null)
								commandHistoryIndex.current =
									commandHistory.length - 1
							else if (commandHistoryIndex.current > 0)
								--commandHistoryIndex.current
							setCurrentCommand(
								commandHistory[
									commandHistoryIndex.current
								]
							)
						} else if (
							e.key === "ArrowDown" &&
							commandHistoryIndex !== null
						) {
							if (
								commandHistoryIndex.current >= 0 &&
								commandHistoryIndex.current <
									commandHistory.length - 1
							)
								++commandHistoryIndex.current
							setCurrentCommand(
								commandHistory[
									commandHistoryIndex.current
								]
							)
						}
					}}
					onChange={(e) => {
						setCurrentCommand(e.target.value)
					}}
				/>
			</div>
		</div>
	)
}
