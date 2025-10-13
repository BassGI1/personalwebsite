import { useEffect, useRef, useState } from "react"

import "./Uno.css"
import Card from "./components/Card/Card"
import { CardClass, HandClass } from "./Uno.class"
import BackgroundFilter from "./components/BackgroundFilter"
import UnoConstants, { PossibleStarters } from "./Uno.constants"
import ChangeColour from "./components/ChangeColour/ChangeColour"
import { generateRandomCard, getNextPlayer } from "./Uno.functions"

import CallUno from "../../../assets/uno/Uno.png"

import Random from "../../../utils/Random"
import Tracking from "../../../utils/Tracking"

const CardWrapper = ({ card, className, onClick }) => (
	<Card
		cardId={card.cardId}
		colour={card.colour}
		width="100px"
		flipped={card.flipped}
		left={card.front.left}
		middle={card.front.middle}
		right={card.front.right}
		className={className}
		onClick={onClick}
	/>
)

const GameSummary = ({ victory }) => (
	<div className="uno-summary-container" style={{ color: victory ? "green" : "red" }}>
		{victory ? "You Win!" : "You Lost!"}
	</div>
)

const drawCardActionCardData = new CardClass(null, null, null, null, null, 0, null, true)

export default function Uno() {
	const [hands, setHands] = useState()
	const [currentCard, setCurrentCard] = useState()

	const [currentPlayer, setCurrentPlayer] = useState(UnoConstants.playerIndex)
	const [currentDirection, setCurrentDirection] = useState(UnoConstants.directionClockwise)

	const [renderGameSummary, setRenderGameSummary] = useState()
	const [renderChangeColour, setRenderChangeColour] = useState(false)

	const readyToPlayRef = useRef()
	const [readyToPlay, setReadyToPlay] = useState(true)

	const [unoCalled, setUnoCalled] = useState(false)
	const [eventTracked, setEventTracked] = useState(false)

	const initGame = () => {
		let startingCard = generateRandomCard(0)
		while (!PossibleStarters.has(startingCard.cardType)) {
			startingCard = generateRandomCard(0)
		}
		setCurrentCard(startingCard)
		setRenderGameSummary(undefined)
		setCurrentPlayer(UnoConstants.playerIndex)
		setCurrentDirection(UnoConstants.directionClockwise)
		setRenderChangeColour(false)
		setEventTracked(false)
		setReadyToPlay(true)
		setHands([
			new HandClass(0, UnoConstants.numStarters),
			new HandClass(1, UnoConstants.numStarters),
			new HandClass(2, UnoConstants.numStarters),
			new HandClass(3, UnoConstants.numStarters),
		])
	}

	useEffect(initGame, [])

	const drawCard = (player) => {
		hands[player].drawCard(setHands)
	}

	const playCard = (cardId) => {
		const card = hands[currentPlayer].playCard(setHands, cardId)
		card.flipped = false
		setReadyToPlay(false)
		setCurrentCard(card)
		setEventTracked(true)

		if (hands[currentPlayer].cards.length === 1) {
			setRenderGameSummary(currentPlayer)
			setTimeout(initGame, 5000)
			return
		}

		if (
			currentPlayer === UnoConstants.playerIndex &&
			hands[currentPlayer].cards.length === 2 &&
			!unoCalled
		) {
			drawCard(UnoConstants.playerIndex)
			drawCard(UnoConstants.playerIndex)
			setUnoCalled(false)
		}

		if (card.cardType === "+4") {
			const nextPlayer = getNextPlayer(currentPlayer, currentDirection)
			for (let _ = 0; _ < 4; ++_) {
				drawCard(nextPlayer)
			}
			if (currentPlayer !== UnoConstants.playerIndex) {
				setCurrentCard((c) => {
					const card = { ...c }
					card.colour = Random.choice(Object.values(UnoConstants.COLORS))
					return card
				})
				setCurrentPlayer(getNextPlayer(currentPlayer, currentDirection))
				readyToPlayRef.current = setTimeout(() => setReadyToPlay(true), 2000)
				return
			}
			setRenderChangeColour(true)
			return
		} else if (card.cardType === "change") {
			if (currentPlayer !== UnoConstants.playerIndex) {
				setCurrentCard((c) => {
					const card = { ...c }
					card.colour = Random.choice(Object.values(UnoConstants.COLORS))
					return card
				})
				setCurrentPlayer(getNextPlayer(currentPlayer, currentDirection))
				readyToPlayRef.current = setTimeout(() => setReadyToPlay(true), 2000)
				return
			}
			setRenderChangeColour(true)
			return
		} else if (card.cardType === "reverse") {
			const newDirection =
				currentDirection === UnoConstants.directionClockwise
					? UnoConstants.directionCounterClockwise
					: UnoConstants.directionClockwise
			setCurrentDirection(newDirection)
			setCurrentPlayer((c) => getNextPlayer(c, newDirection))
		} else if (card.cardType === "skip") {
			const nextPlayer = getNextPlayer(currentPlayer, currentDirection)
			setCurrentPlayer(getNextPlayer(nextPlayer, currentDirection))
		} else if (card.cardType === "+2") {
			const nextPlayer = getNextPlayer(currentPlayer, currentDirection)
			for (let _ = 0; _ < 2; ++_) {
				drawCard(nextPlayer)
			}
			setCurrentPlayer(getNextPlayer(nextPlayer, currentDirection))
		} else {
			setCurrentPlayer(getNextPlayer(currentPlayer, currentDirection))
		}

		readyToPlayRef.current = setTimeout(() => setReadyToPlay(true), 2000)
	}

	useEffect(() => {
		if (readyToPlay && currentPlayer !== UnoConstants.playerIndex) {
			const cardId = hands[currentPlayer].chooseCard(currentCard)
			if (cardId) {
				playCard(cardId)
			} else {
				drawCard(currentPlayer)
				setReadyToPlay(false)
				readyToPlayRef.current = setTimeout(() => setReadyToPlay(true), 2000)
				setCurrentPlayer(getNextPlayer(currentPlayer, currentDirection))
			}
		} else if (currentPlayer === UnoConstants.playerIndex) {
			clearTimeout(readyToPlayRef.current)
			readyToPlayRef.current = undefined
		}
	}, [readyToPlay])

	useEffect(() => {
		if (eventTracked) {
			Tracking.addEvent("Uno Played")
		}
	}, [eventTracked])

	const changeColour = (colour) => {
		readyToPlayRef.current = setTimeout(() => setReadyToPlay(true), 2000)
		setCurrentCard((c) => {
			const card = { ...c }
			card.colour = colour
			return card
		})
		setCurrentPlayer(getNextPlayer(currentPlayer, currentDirection))
		setRenderChangeColour(false)
	}

	return (
		<div className="uno-background">
			{currentCard && (
				<BackgroundFilter
					currentColour={currentCard.colour}
					currentPlayer={currentPlayer}
				/>
			)}
			{currentCard && (
				<div className="uno-current-card-div">
					<CardWrapper card={currentCard} className="uno-current-card" />
					<div className="uno-current-card-actions-container">
						<CardWrapper
							card={drawCardActionCardData}
							className="uno-draw-card-action-card"
							onClick={
								currentPlayer === UnoConstants.playerIndex &&
								(() => {
									drawCard(0)
									setCurrentPlayer(getNextPlayer(0, currentDirection))
									setReadyToPlay(false)
									readyToPlayRef.current = setTimeout(
										() => setReadyToPlay(true),
										2000
									)
								})
							}
						/>
						<img
							alt="call uno!"
							src={CallUno}
							className={`uno-current-card-actions-container-call-uno ${
								currentPlayer === 0 && hands[0].cards.length === 2
									? "uno-current-card-actions-container-call-uno-active"
									: ""
							}`}
							onClick={() => {
								if (currentPlayer === 0 && hands[0].cards.length === 2) {
									setUnoCalled(true)
								}
							}}
						/>
					</div>
				</div>
			)}
			{hands && (
				<>
					<div
						className="uno-hands-background-wrapper-1"
						style={{
							transform: `scale(${Math.min(
								2 / hands[1].cards.length,
								0.4
							)}) rotate(90deg) translateX(${
								hands[1].cards.length > 3
									? 15 * hands[1].cards.length + 100
									: 333
							}px) translateY(-${
								hands[1].cards.length > 4 ? 50 * hands[1].cards.length : 250
							}px)`,
						}}
					>
						{hands[1].cards.map((card) => (
							<CardWrapper card={card} />
						))}
					</div>
					<div
						className="uno-hands-background-wrapper-2"
						style={{
							transform: `scale(${
								2 / Math.max(4, hands[2].cards.length)
							}) rotate(180deg)`,
						}}
					>
						{hands[2].cards.map((card) => (
							<CardWrapper card={card} />
						))}
					</div>
					<div
						className="uno-hands-background-wrapper-3"
						style={{
							transform: `scale(${Math.min(
								2 / hands[3].cards.length,
								0.4
							)}) rotate(270deg) translateX(-${
								hands[3].cards.length > 3
									? 118 * hands[3].cards.length - 104
									: 333
							}px) translateY(-${
								hands[3].cards.length > 4 ? 50 * hands[3].cards.length : 250
							}px)`,
						}}
					>
						{hands[3].cards.map((card) => (
							<CardWrapper card={card} />
						))}
					</div>
					<div
						className="uno-hands-background-wrapper-0"
						style={{
							transform: `scale(${2 / Math.max(4, hands[0].cards.length)})`,
						}}
					>
						{hands[0].cards.map((card) => (
							<CardWrapper
								card={card}
								className={
									card.canPlay(currentCard) && currentPlayer === 0
										? "uno-card-playable"
										: ""
								}
								onClick={currentPlayer === 0 && playCard}
							/>
						))}
					</div>
				</>
			)}
			{renderChangeColour && <ChangeColour onClick={changeColour} />}
			{renderGameSummary !== undefined && (
				<GameSummary victory={renderGameSummary === 0} />
			)}
		</div>
	)
}
