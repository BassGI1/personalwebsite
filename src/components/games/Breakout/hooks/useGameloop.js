import { useRef, useState } from "react"
import BreakoutConstants from "../Breakout.constants"

export default function useGameloop() {
	const gameloopRef = useRef()
	const [update, setUpdate] = useState(false)

	const startGame = () => {
		gameloopRef.current = setInterval(
			() => setUpdate((u) => !u),
			BreakoutConstants.gameloopInterval
		)
	}

	const stopGame = () => {
		clearInterval(gameloopRef.current)
		gameloopRef.current = 0
	}

	return { startGame, stopGame, update }
}
