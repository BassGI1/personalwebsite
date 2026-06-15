import { useEffect } from "react"

export default function Paddle({ updator, isLeftPressed, isRightPressed, position, setPosition }) {
	useEffect(() => {
		if (isLeftPressed && position > 3) {
			setPosition((p) => p - 5)
		}
		if (isRightPressed && position < 166) {
			setPosition((p) => p + 5)
		}
	}, [updator])

	return <div className="breakout-paddle" style={{ transform: `translateX(${position}px)` }} />
}
