import { useEffect, useRef, useState } from "react"

import GridBlock from "./GridBlock"
import TetrisConstants from "./Tetris.constants"
import { Block, Piece } from "./Tetris.class"

import Random from "../../../utils/Random"
import LocalStorage from "../../../utils/Storage"
import { useGameOver, useKeyboardInputHandler } from "./Tetris.hooks"
import Tracking from "../../../utils/Tracking"

const TopBar = ({ currentScore }) => {
	const [highScore, setHighScore] = useState(
		LocalStorage.getValue(TetrisConstants.HIGH_SCORE_KEY)
	)

	useEffect(() => {
		if (!highScore || currentScore > highScore) {
			setHighScore(currentScore)
			LocalStorage.setValue(TetrisConstants.HIGH_SCORE_KEY, currentScore)
		}
	}, [currentScore])

	return (
		<div className="tetris-top-bar" style={{ color: "white" }}>
			HI:{highScore} CUR:{currentScore}
		</div>
	)
}

const GameGrid = ({ grid }) => {
	return (
		<div className="tetris-game-grid">
			{grid?.map((g, i) => (
				<GridBlock colour={g.colour} key={i} />
			))}
		</div>
	)
}

const GameSetup = ({ setDifficulty }) => {
	const onDifficultySelect = (diff) => {
		Tracking.addEvent(`Tetris '${diff}' started`)
		setDifficulty(diff)
	}

	return (
		<div className="tetris-game-setup-background">
			<h3>Select a Difficulty</h3>
			{Object.keys(TetrisConstants.DIFFICULTY_VALS).map((diff, i) => (
				<button onClick={() => onDifficultySelect(diff)} key={i}>
					{diff}
				</button>
			))}
		</div>
	)
}

const GameOverScreen = () => {
	return <div className="tetris-game-over-background">GAME OVER!</div>
}

export default function Tetris() {
	const [grid, setGrid] = useState()
	const [currentPiece, setCurrentPiece] = useState(
		new Piece(
			Random.choice(TetrisConstants.PIECE_TYPES),
			Random.choice(TetrisConstants.PIECE_COLOURS)
		)
	)
	const gridRef = useRef()
	const currentPieceRef = useRef()
	const gameloopInterval = useRef()
	const gameDifficultyValsRef = useRef()

	const difficultyRef = useRef()
	const [difficulty, setDifficulty] = useState(null)
	const [currentScore, setCurrentScore] = useState(0)

	const { showGameOverScreen, showScreen } = useGameOver()

	useKeyboardInputHandler({
		active: difficultyRef.current !== null,
		onRightPress: (e) => {
			e.preventDefault()
			for (const block of currentPieceRef.current.blocks) {
				const besideIndex = block.y * TetrisConstants.NUM_COLS + block.x + 1
				if (
					block.x === TetrisConstants.NUM_COLS - 1 ||
					(gridRef.current[besideIndex].colour !== "black" &&
						gridRef.current[besideIndex].active === false)
				) {
					return
				}
			}
			setCurrentPiece((c) => c.moveRight())
		},
		onLeftPress: (e) => {
			e.preventDefault()
			for (const block of currentPieceRef.current.blocks) {
				const besideIndex = block.y * TetrisConstants.NUM_COLS + block.x - 1
				if (
					block.x === 0 ||
					(gridRef.current[besideIndex].colour !== "black" &&
						gridRef.current[besideIndex].active === false)
				) {
					return
				}
			}
			setCurrentPiece((c) => c.moveLeft())
		},
		onUpPress: (e) => {
			const rotation = currentPieceRef.current.rotate()
			for (const block of rotation.blocks) {
				const index = block.y * TetrisConstants.NUM_COLS + block.x
				if (
					block.x < 0 ||
					block.x >= TetrisConstants.NUM_COLS ||
					block.y > TetrisConstants.NUM_ROWS - 1 ||
					(gridRef.current?.[index]?.colour !== "black" &&
						gridRef.current?.[index]?.active === false)
				)
					return
			}
			setCurrentPiece(rotation)
		},
	})

	const gameStart = (diff) => {
		gameDifficultyValsRef.current = TetrisConstants.DIFFICULTY_VALS[diff]
		setDifficulty(diff)
	}

	const gameOver = () => {
		clearInterval(gameloopInterval.current)
		showScreen(() => {
			setGrid(undefined)
			setCurrentPiece(
				new Piece(
					Random.choice(TetrisConstants.PIECE_TYPES),
					Random.choice(TetrisConstants.PIECE_COLOURS)
				)
			)
			setDifficulty(null)
			setCurrentScore(0)
		})
	}

	const checkRows = (g) => {
		const rowIndices = new Array(TetrisConstants.NUM_ROWS).fill(0).map((_, i) => i)
		let scoreMultiplier = 0

		for (const rowIndex of rowIndices) {
			const row = g.slice(
				rowIndex * TetrisConstants.NUM_COLS,
				(rowIndex + 1) * TetrisConstants.NUM_COLS
			)
			if (row.filter((r) => r.colour === "black").length === 0) {
				scoreMultiplier = scoreMultiplier === 0 ? 1 : scoreMultiplier * 2
				for (const block of row) block.colour = "black"
				for (
					let i = rowIndex * TetrisConstants.NUM_COLS + TetrisConstants.NUM_COLS - 1;
					i >= 0;
					--i
				) {
					const indexAbove = i - TetrisConstants.NUM_COLS
					if (indexAbove >= 0) {
						g[i].colour = g[indexAbove].colour
						g[indexAbove].colour = "black"
					}
				}
			}
		}

		setCurrentScore((s) => s + scoreMultiplier * 10 * gameDifficultyValsRef.current[0])

		return g
	}

	const render = () => {
		if (grid) {
			setGrid((g) => {
				const newGrid = [...g]
				for (const block of newGrid) {
					if (
						!block.active &&
						block.y === 0 &&
						(block.x === 2 || block.x === 3 || block.x === 4) &&
						block.colour !== "black"
					) {
						gameOver()
						Tracking.addEvent(`Tetris score: ${currentScore}`)
					} else if (block.active) {
						block.colour = "black"
						block.active = false
					}
				}
				for (const block of currentPiece.blocks) {
					const index = block.y * TetrisConstants.NUM_COLS + block.x
					if (index >= 0 && index <= TetrisConstants.GRID_LAST_INDEX) {
						newGrid[index].colour = block.colour
						newGrid[index].active = true
					}
				}
				return newGrid
			})
		}
	}

	const freezePiece = (piece) => {
		setGrid((g) => {
			const newGrid = [...g]
			for (const block of piece.blocks) {
				const index = block.y * TetrisConstants.NUM_COLS + block.x
				if (index > 0) {
					newGrid[index].colour = block.colour
					newGrid[index].active = false
				}
			}
			return checkRows(newGrid)
		})

		setCurrentScore((s) => s + currentPieceRef.current.blocks.length)

		return new Piece(
			Random.choice(TetrisConstants.PIECE_TYPES),
			Random.choice(TetrisConstants.PIECE_COLOURS)
		)
	}

	useEffect(() => {
		if (difficulty) {
			const g = []
			for (let y = 0; y < TetrisConstants.NUM_ROWS; ++y) {
				for (let x = 0; x < TetrisConstants.NUM_COLS; ++x) {
					g.push(new Block(x, y, "black"))
				}
			}
			for (const block of currentPiece.blocks) {
				g[block.y * TetrisConstants.NUM_COLS + block.x].colour = block.colour
				g[block.y * TetrisConstants.NUM_COLS + block.x].active = true
			}
			setGrid(g)
		}
	}, [difficulty])

	useEffect(() => {
		if (difficulty) {
			gameloopInterval.current = setInterval(() => {
				setCurrentPiece((c) => {
					for (const block of c.blocks) {
						const blockUnderIndex =
							(block.y + 1) * TetrisConstants.NUM_COLS + block.x
						if (
							blockUnderIndex > TetrisConstants.GRID_LAST_INDEX ||
							(gridRef.current[blockUnderIndex].colour !== "black" &&
								gridRef.current[blockUnderIndex].active === false)
						) {
							return freezePiece(c)
						}
					}
					return c.fall()
				})
			}, gameDifficultyValsRef.current[1])
		}
	}, [difficulty, gameDifficultyValsRef.current])

	useEffect(() => {
		if (difficulty) render()
	}, [currentPiece])
	useEffect(() => (gridRef.current = grid), [grid])
	useEffect(() => (currentPieceRef.current = currentPiece), [currentPiece])
	useEffect(() => (difficultyRef.current = difficulty), [difficulty])

	return (
		<div className="tetris-background" id={TetrisConstants.GAME_ID} tabIndex={0}>
			<TopBar currentScore={currentScore} />
			{difficulty === null ? (
				<GameSetup setDifficulty={gameStart} />
			) : (
				<GameGrid grid={grid} />
			)}
			{showGameOverScreen && <GameOverScreen />}
		</div>
	)
}
