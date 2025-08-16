import { useEffect, useState } from "react"

import Board from "../../assets/tictactoe/TicTacToe.png"
import Confetti from "./Confetti"
import Tracking from "../../utils/Tracking"

const DRAW_DURATION = 500
const X_COLOR = "rgb(248, 65, 65)"
const O_COLOR = "rgb(44, 192, 255)"

// this is so ugly
// i hope i never have to touch this file again
const checkBoardState = (state) => {
	const boardState = state.map((c) => c?.type?.name)

	if (boardState[0] && boardState[0] === boardState[1] && boardState[0] === boardState[2])
		return [0, 2]
	if (boardState[3] && boardState[3] === boardState[4] && boardState[3] === boardState[5])
		return [3, 5]
	if (boardState[6] && boardState[6] === boardState[7] && boardState[6] === boardState[8])
		return [6, 8]
	if (boardState[0] && boardState[0] === boardState[3] && boardState[0] === boardState[6])
		return [0, 6]
	if (boardState[1] && boardState[1] === boardState[4] && boardState[1] === boardState[7])
		return [1, 7]
	if (boardState[2] && boardState[2] === boardState[5] && boardState[2] === boardState[8])
		return [2, 8]
	if (boardState[0] && boardState[0] === boardState[4] && boardState[0] === boardState[8])
		return [0, 8]
	if (boardState[2] && boardState[2] === boardState[4] && boardState[2] === boardState[6])
		return [2, 6]

	return false
}

const CheckLine = ({ startIndex, endIndex, colour }) => {
	let x1 = (startIndex % 3) * 50
	let y1 = Math.floor(startIndex / 3) * 50

	let x2 = (endIndex % 3) * 50
	let y2 = Math.floor(endIndex / 3) * 50

	if (x1 === x2 && x1 === 100) {
		x1 = 85
		x2 = 85
	} else if (x1 === x2 && x1 === 0) {
		x1 = 15
		x2 = 15
	}

	if (y1 === y2 && y1 === 100) {
		y1 = 85
		y2 = 85
	} else if (y1 === y2 && y1 === 0) {
		y1 = 15
		y2 = 15
	}

	return (
		<svg version="1.1" x="0px" y="0px" viewBox="0 0 100 100" className="tic-tac-toe-win-line">
			<line
				fill="none"
				stroke={colour}
				strokeWidth="6"
				x1={x1}
				y1={y1}
				x2={x2}
				y2={y2}
				strokeLinecap="round"
			>
				<animate attributeName="x2" values={`${x1};${x2}`} dur={`${DRAW_DURATION}ms`} />
				<animate attributeName="y2" values={`${y1};${y2}`} dur={`${DRAW_DURATION}ms`} />
			</line>
		</svg>
	)
}

const O = () => (
	<svg version="1.1" x="0px" y="0px" viewBox="0 0 100 100">
		<circle
			fill="none"
			stroke={O_COLOR}
			strokeWidth="15"
			cx="50"
			cy="50"
			r="35"
			strokeDasharray="360"
			strokeLinecap="round"
			transform="rotate(-90 ) translate(-100 0)"
		>
			<animate
				attributeName="stroke-dashoffset"
				values="360;0"
				dur={`${DRAW_DURATION}ms`}
			/>
		</circle>
	</svg>
)

const X = () => (
	<svg version="1.1" x="0px" y="0px" viewBox="0 0 100 100">
		<line
			fill="none"
			stroke={X_COLOR}
			strokeWidth="15"
			x1="15"
			y1="15"
			x2="85"
			y2="85"
			strokeLinecap="round"
		>
			<animate attributeName="x2" values="15;85" dur={`${DRAW_DURATION}ms`} />
			<animate attributeName="y2" values="15;85" dur={`${DRAW_DURATION}ms`} />
		</line>
		<line
			fill="none"
			stroke={X_COLOR}
			strokeWidth="15"
			x1="85"
			y1="15"
			x2="15"
			y2="85"
			strokeLinecap="round"
		>
			<animate attributeName="x2" values="85;15" dur={`${DRAW_DURATION}ms`} />
			<animate attributeName="y2" values="15;85" dur={`${DRAW_DURATION}ms`} />
		</line>
	</svg>
)

const useDrawing = () => {
	const [drawing, setDrawing] = useState(false)
	const draw = (onDrawFinish) => {
		setDrawing(true)
		setTimeout(() => {
			setDrawing(false)
			onDrawFinish?.()
		}, DRAW_DURATION)
	}

	return { drawing, draw }
}

export default function TicTacToe() {
	const [board, setBoard] = useState(new Array(9).fill(null))
	const [availableMoves, setAvailableMoves] = useState(new Array(9).fill(0).map((_, i) => i))
	const { draw, drawing } = useDrawing()
	const [winLine, setWinLine] = useState()
	const [win, setWin] = useState()

	const computerMove = (newAvailableMoves) => {
		draw()
		const selectedMove =
			newAvailableMoves[Math.floor(Math.random() * newAvailableMoves.length)]
		setAvailableMoves(newAvailableMoves.filter((a) => a !== selectedMove))
		setBoard((b) => {
			const a = [...b]
			a[selectedMove] = <O />
			const victoryState = checkBoardState(a)
			if (victoryState) {
				setWinLine(victoryState)
				setWin("You Lost!")
			}
			return a
		})
	}

	const onMoveClick = (i) => {
		if (!board[i] && !drawing) {
			const a = [...board]
			a[i] = <X />

			const victoryState = checkBoardState(a)
			if (victoryState) {
				setWinLine(victoryState)
				setWin("You Win!")
			}

			setBoard(a)

			if (!victoryState) {
				const newAvailableMoves = availableMoves.filter((a) => a !== i)
				setAvailableMoves(newAvailableMoves)
				draw(() => computerMove(newAvailableMoves))
			}
		}
	}

	useEffect(() => {
		if (winLine)
			Tracking.addEvent(win === "You Win!" ? "Tic-Tac-Toe Won" : "Tic-Tac-Toe Lost")
		else if (!availableMoves.length) {
			Tracking.addEvent("Tic-Tac-Toe Drawn")
			setWin("It's a Draw!")
		}
	}, [winLine, availableMoves.length])

	const playAgain = () => {
		setBoard(new Array(9).fill(null))
		setAvailableMoves(new Array(9).fill(0).map((_, i) => i))
		setWinLine(null)
		setWin(null)
	}

	return (
		<div className="tic-tac-toe-background">
			<div className="tic-tac-toe-game-container">
				<img src={Board} className="tic-tac-toe-board" alt="board" />
				<div className="tic-tac-toe-main-game-container">
					{board.map((move, i) => (
						<div
							className="tic-tac-toe-move-spot"
							onClick={() => onMoveClick(i)}
							key={i}
						>
							{move}
						</div>
					))}
				</div>
				{winLine && (
					<CheckLine
						colour={win === "You Win!" ? X_COLOR : O_COLOR}
						startIndex={winLine[0]}
						endIndex={winLine[1]}
					/>
				)}
			</div>
			{win && (
				<div className="tic-tac-toe-confetti-container">
					{win === "You Win!" && (
						<Confetti
							numConfets={100}
							minWidth={5}
							maxWidth={10}
							minHeight={5}
							maxHeight={10}
							minSpeed={2000}
							maxSpeed={750}
							containerHeight="20.25rem"
						/>
					)}
					<div className="tic-tac-toe-result-backdrop">
						<h2
							style={{
								color:
									win === "You Win!"
										? "rgb(34, 203, 34)"
										: win === "You Lost!"
										? "red"
										: "rgba(255, 233, 124)",
							}}
						>
							{win}
						</h2>
						<button onClick={playAgain}>Play Again</button>
					</div>
				</div>
			)}
		</div>
	)
}
