import { Cell } from "./GameOfLifeClasses"
import GameOfLifeConstants from "./GameOfLifeConstants"

export const createGrid = () => {
	const g = []
	for (let y = 0; y < GameOfLifeConstants.NUM_ROWS; ++y) {
		for (let x = 0; x < GameOfLifeConstants.NUM_COLS; ++x) {
			g.push(new Cell(x, y, Math.random() < GameOfLifeConstants.RANDOM_LIFE_PROBABILITY))
		}
	}
	return g
}

export const getGridIndex = (x, y) => GameOfLifeConstants.NUM_COLS * y + x

export const countLivingNeighbours = (grid, x, y) => {
	const topLeft = x - 1 >= 0 && y - 1 >= 0 ? grid[getGridIndex(x - 1, y - 1)] : 0
	const topMiddle = y - 1 >= 0 ? grid[getGridIndex(x, y - 1)] : 0
	const topRight =
		x < GameOfLifeConstants.NUM_COLS - 1 && y - 1 >= 0 ? grid[getGridIndex(x + 1, y - 1)] : 0

	const left = x - 1 >= 0 ? grid[getGridIndex(x - 1, y)] : 0
	const right = x < GameOfLifeConstants.NUM_COLS - 1 ? grid[getGridIndex(x + 1, y)] : 0

	const bottomLeft =
		x - 1 >= 0 && y < GameOfLifeConstants.NUM_ROWS - 1 ? grid[getGridIndex(x - 1, y + 1)] : 0
	const bottomMiddle = y < GameOfLifeConstants.NUM_ROWS - 1 ? grid[getGridIndex(x, y + 1)] : 0
	const bottomRight =
		x < GameOfLifeConstants.NUM_COLS - 1 && y < GameOfLifeConstants.NUM_ROWS - 1
			? grid[getGridIndex(x + 1, y + 1)]
			: 0

	return topLeft + topMiddle + topRight + left + right + bottomLeft + bottomMiddle + bottomRight
}
