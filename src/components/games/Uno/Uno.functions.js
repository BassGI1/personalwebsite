import { CardClass } from "./Uno.class"
import UnoConstants, { CardTypes, CardWeights } from "./Uno.constants"

import Random from "../../../utils/Random"

export const getNextPlayer = (player, direction) => (player + direction + 4) % 4

export const generateRandomCard = (owner) => {
	const cardId = Random.identifier(7)
	const cardType = Random.weightedChoice(CardTypes, CardWeights)

	switch (cardType) {
		case "0":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "7":
		case "8":
		case "9":
		case "+2":
		case "reverse":
		case "skip":
			const colour = Random.choice(Object.values(UnoConstants.COLORS))
			return new CardClass(
				[
					cardType,
					"#ffffff",
					"uno-card-small-icon uno-card-icon-top-left",
					Random.identifier(7),
				],
				[cardType, colour, "uno-card-large-icon", Random.identifier(7)],
				[
					cardType,
					"#ffffff",
					"uno-card-small-icon uno-card-icon-bottom-right",
					Random.identifier(7),
				],
				colour,
				cardType,
				owner,
				cardId,
				owner !== 0
			)
		case "+4":
			return new CardClass(
				[
					"change",
					"#ffffff",
					"uno-card-small-icon uno-card-icon-top-left",
					Random.identifier(7),
				],
				[cardType, "#000000", "uno-card-large-icon", Random.identifier(7)],
				[
					"change",
					"#ffffff",
					"uno-card-small-icon uno-card-icon-bottom-right",
					Random.identifier(7),
				],
				"black",
				cardType,
				owner,
				cardId,
				owner !== 0
			)
		default:
			return new CardClass(
				[
					"change",
					"#000000",
					"uno-card-small-icon uno-card-icon-top-left",
					Random.identifier(7),
				],
				null,
				[
					"change",
					"#000000",
					"uno-card-small-icon uno-card-icon-bottom-right",
					Random.identifier(7),
				],
				"black",
				cardType,
				owner,
				cardId,
				owner !== 0
			)
	}
}
