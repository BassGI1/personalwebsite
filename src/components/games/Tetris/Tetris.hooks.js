import { useEffect, useState } from "react"
import TetrisConstants from "./Tetris.constants"

export const useKeyboardInputHandler = ({ onLeftPress, onRightPress, onUpPress, active }) => {
	useEffect(() => {
		const game = document.getElementById(TetrisConstants.GAME_ID)
		game.addEventListener("keydown", (e) => {
			if (active) {
				switch (e.key) {
					case "ArrowRight":
						onRightPress(e)
						break
					case "ArrowLeft":
						onLeftPress(e)
						break
					case "ArrowUp":
						onUpPress(e)
						break
				}
			}
		})
	}, [])
}

export const useGameOver = () => {
	const [showGameOverScreen, setShowGameOverScreen] = useState(false)
	return {
		showGameOverScreen,
		showScreen: (onReturnFromGameOver) => {
			setShowGameOverScreen(true)
			setTimeout(() => {
				onReturnFromGameOver?.()
				setShowGameOverScreen(false)
			}, 5000)
		},
	}
}
