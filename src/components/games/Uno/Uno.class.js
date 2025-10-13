import Random from "../../../utils/Random"
import UnoConstants from "./Uno.constants"
import { generateRandomCard } from "./Uno.functions"

export class CardClass {
	constructor(left, middle, right, colour, cardType, owner, cardId, flipped = true) {
		this.front = { left, middle, right }
		this.colour = colour
		this.cardType = cardType
		this.owner = owner
		this.cardId = cardId
		this.flipped = flipped
	}

	canPlay(currentCard) {
		return (
			this.cardType === "+4" ||
			this.cardType === "change" ||
			this.cardType === currentCard.cardType ||
			this.colour === currentCard.colour
		)
	}

	flip(setHand) {
		setHand((h) => {
			const hand = [...h]
			hand[this.owner].flipped = !hand[this.owner].flipped
			return hand
		})
	}
}

export class HandClass {
	constructor(owner, numStarters) {
		this.owner = owner
		this.cards = []
		for (let _ = 0; _ < numStarters; ++_) {
			this.cards.push(generateRandomCard(owner))
		}
		this.sortCards()
	}

	sortCards() {
		if (this.owner === 0) {
			const red = this.cards.filter((c) => c.colour === UnoConstants.COLORS.RED)
			const yellow = this.cards.filter((c) => c.colour === UnoConstants.COLORS.YELLOW)
			const green = this.cards.filter((c) => c.colour === UnoConstants.COLORS.GREEN)
			const blue = this.cards.filter((c) => c.colour === UnoConstants.COLORS.BLUE)
			const black = this.cards.filter((c) => c.colour === "black")
			this.cards = [...red, ...yellow, ...green, ...blue, ...black]
		}
	}

	drawCard(setHands) {
		const newCard = generateRandomCard(this.owner)
		setHands((h) => {
			const hands = [...h]
			hands[this.owner].cards.push(newCard)
			hands[this.owner].sortCards()
			return hands
		})
	}

	playCard(setHands, cardId) {
		const card = this.cards.find((x) => x.cardId === cardId)
		setHands((h) => {
			const hands = [...h]
			hands[this.owner].cards = hands[this.owner].cards.filter((c) => c.cardId !== cardId)
			return hands
		})
		return card
	}

	chooseCard(currentCard) {
		const playableCards = this.cards.filter((c) => c.canPlay(currentCard))
		return playableCards.length ? Random.choice(playableCards).cardId : null
	}
}
