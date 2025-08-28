import { useEffect, useRef, useState } from "react"

import GameOfLifeConstants from "./GameOfLifeConstants"
import { countLivingNeighbours, createGrid } from "./GameOfLifeFunctions"

import Play from "../../../assets/gameoflife/Play.png"
import Pause from "../../../assets/gameoflife/Pause.png"
import Tracking from "../../../utils/Tracking"

const Block = ({ x, y, isAlive, onClick }) => (
	<div
		className={`game-of-life-block ${isAlive ? "game-of-life-block-alive" : ""}`}
		id={`GameOfLife-${x}-${y}`}
		onClick={onClick}
	/>
)

const TopDrawer = ({ paused, onClick }) => {
	return (
		<div className="game-of-life-top-drawer">
			<img alt={paused ? "play" : "pause"} src={paused ? Play : Pause} onClick={onClick} />
		</div>
	)
}

export default function GameOfLife() {
	const gridRef = useRef()
	const gameloopRef = useRef()
	const [paused, setPaused] = useState(true)
	const [grid, setGrid] = useState(createGrid())
	const [gamePlayed, setGamePlayed] = useState(false)

	useEffect(() => (gridRef.current = grid), [grid])

	useEffect(() => {
		if (paused) clearInterval(gameloopRef.current)
		else
			gameloopRef.current = setInterval(() => {
				const newGrid = [...grid]
				const gridMap = gridRef.current.map((c) => c.isAlive)
				for (const cell of grid) {
					const livingNeighbours = countLivingNeighbours(gridMap, cell.x, cell.y)
					if (cell.isAlive) {
						if (livingNeighbours < 2) cell.isAlive = false
						else if (livingNeighbours === 2 || livingNeighbours === 3)
							cell.isAlive = true
						else cell.isAlive = false
					} else if (!cell.isAlive && livingNeighbours === 3) cell.isAlive = true
				}
				setGrid(newGrid)
			}, GameOfLifeConstants.GAMELOOP_DURATION)
	}, [paused])

	return (
		<div className="game-of-life-background">
			<div className="game-of-life-game-container">
				{grid.map((cell, i) => (
					<Block
						x={cell.x}
						y={cell.y}
						isAlive={cell.isAlive}
						key={i}
						onClick={() => {
							const newGrid = [...grid]
							cell.isAlive = !cell.isAlive
							setGrid(newGrid)
						}}
					/>
				))}
				<TopDrawer
					paused={paused}
					onClick={() => {
						setPaused(!paused)
						if (!gamePlayed) {
							Tracking.addEvent("Game of Life Played")
							setGamePlayed(true)
						}
					}}
				/>
			</div>
		</div>
	)
}
