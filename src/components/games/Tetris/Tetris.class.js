export class Piece {
	constructor(type, colour) {
		this.type = type
		this.colour = colour
		this.orientation = true

		switch (type) {
			case "straight":
				this.blocks = [
					new Block(2, 0, colour, true),
					new Block(3, 0, colour, true),
					new Block(4, 0, colour, true),
				]
				break

			case "square":
				this.blocks = [
					new Block(2, 0, colour, true),
					new Block(2, 1, colour, true),
					new Block(3, 0, colour, true),
					new Block(3, 1, colour, true),
				]
				break

			case "leftZ":
				this.blocks = [
					new Block(2, 0, colour, true),
					new Block(3, 0, colour, true),
					new Block(3, 1, colour, true),
					new Block(4, 1, colour, true),
				]
				break

			case "rightZ":
				this.blocks = [
					new Block(3, 0, colour, true),
					new Block(4, 0, colour, true),
					new Block(2, 1, colour, true),
					new Block(3, 1, colour, true),
				]
				break

			case "t":
				this.blocks = [
					new Block(2, 0, colour, true),
					new Block(3, 0, colour, true),
					new Block(4, 0, colour, true),
					new Block(3, 1, colour, true),
				]
				break
			default:
				break
		}
	}

	copy() {
		const newPiece = new Piece(this.type, this.colour)
		newPiece.blocks = this.blocks.map((b) => b.copy())
		newPiece.orientation = this.orientation
		return newPiece
	}

	rotate() {
		const newPiece = this.copy()
		newPiece.orientation = !this.orientation

		switch (this.type) {
			case "straight":
				if (this.orientation) {
					newPiece.blocks[0].changeCoords(
						newPiece.blocks[0].x + 1,
						newPiece.blocks[0].y - 1
					)
					newPiece.blocks[2].changeCoords(
						newPiece.blocks[2].x - 1,
						newPiece.blocks[2].y + 1
					)
				} else {
					newPiece.blocks[0].changeCoords(
						newPiece.blocks[0].x - 1,
						newPiece.blocks[0].y + 1
					)
					newPiece.blocks[2].changeCoords(
						newPiece.blocks[2].x + 1,
						newPiece.blocks[2].y - 1
					)
				}
				break

			case "leftZ":
				if (this.orientation) {
					newPiece.blocks[0].changeCoords(
						newPiece.blocks[0].x + 1,
						newPiece.blocks[0].y - 1
					)
					newPiece.blocks[2].changeCoords(
						newPiece.blocks[2].x - 1,
						newPiece.blocks[2].y - 1
					)
					newPiece.blocks[3].changeCoords(
						newPiece.blocks[3].x - 2,
						newPiece.blocks[3].y
					)
				} else {
					newPiece.blocks[0].changeCoords(
						newPiece.blocks[0].x - 1,
						newPiece.blocks[0].y + 1
					)
					newPiece.blocks[2].changeCoords(
						newPiece.blocks[2].x + 1,
						newPiece.blocks[2].y + 1
					)
					newPiece.blocks[3].changeCoords(
						newPiece.blocks[3].x + 2,
						newPiece.blocks[3].y
					)
				}
				break

			case "rightZ":
				if (this.orientation) {
					newPiece.blocks[1].changeCoords(
						newPiece.blocks[1].x - 1,
						newPiece.blocks[1].y - 1
					)
					newPiece.blocks[2].changeCoords(
						newPiece.blocks[2].x + 2,
						newPiece.blocks[2].y
					)
					newPiece.blocks[3].changeCoords(
						newPiece.blocks[3].x + 1,
						newPiece.blocks[3].y - 1
					)
				} else {
					newPiece.blocks[1].changeCoords(
						newPiece.blocks[1].x + 1,
						newPiece.blocks[1].y + 1
					)
					newPiece.blocks[2].changeCoords(
						newPiece.blocks[2].x - 2,
						newPiece.blocks[2].y
					)
					newPiece.blocks[3].changeCoords(
						newPiece.blocks[3].x - 1,
						newPiece.blocks[3].y + 1
					)
				}
				break
			default:
				break
		}

		return newPiece
	}

	fall() {
		const newPiece = this.copy()
		for (const block of newPiece.blocks) ++block.y
		return newPiece
	}

	moveRight() {
		const newPiece = this.copy()
		for (const block of newPiece.blocks) ++block.x
		return newPiece
	}

	moveLeft() {
		const newPiece = this.copy()
		for (const block of newPiece.blocks) --block.x
		return newPiece
	}
}

export class Block {
	constructor(x, y, colour, active = false) {
		this.x = x
		this.y = y
		this.colour = colour
		this.active = active
	}

	changeCoords(x, y) {
		this.x = x
		this.y = y
	}

	copy() {
		return new Block(this.x, this.y, this.colour, this.active)
	}
}
