const TetrisConstants = {
	NUM_COLS: 8,
	NUM_ROWS: 10,
	BLOCK_DIM: "24px",
	GAMELOOP_INTERVAL: 333,
	PIECE_COLOURS: [
		"#7FEFBD",
		"#6B5CA5",
		"#CEBEBE",
		"#D0CD94",
		"#594E36",
		"#FAA6FF",
		"#CBC5EA",
		"#D90368",
		"#33658A",
		"#00ABE7",
		"#8C271E",
	],
	GAME_ID: "tetris-game",
	PIECE_TYPES: ["straight", "square", "leftZ", "rightZ"],
	DIFFICULTY_VALS: {
		Easy: [1, 750],
		Medium: [2, 500],
		Hard: [4, 333],
		Impossible: [10, 200],
	},
	HIGH_SCORE_KEY: "tetris-high-score"
}

TetrisConstants.GRID_LAST_INDEX = TetrisConstants.NUM_COLS * TetrisConstants.NUM_ROWS - 1

export default TetrisConstants
