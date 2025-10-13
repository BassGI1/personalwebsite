const UnoConstants = {
	COLORS: {
		YELLOW: "#f4f485",
		GREEN: "#6aa84f",
		BLUE: "#4a86e8",
		RED: "#ff0000",
	},
	playerIndex: 0,
	directionClockwise: 1,
	directionCounterClockwise: -1,
	numStarters: 7,
}

export const CardTypes = [
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"+2",
	"+4",
	"reverse",
	"skip",
	"change",
]

export const CardWeights = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 4, 4, 1]

export const PossibleStarters = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"])

export default UnoConstants
