import TetrisConstants from "./TetrisConstants"

export default class TetrisBlocks {
	static Block({ colour }) {
		return (
			<div
				style={{
					backgroundColor: colour,
					height: TetrisConstants.BLOCK_DIM,
					width: TetrisConstants.BLOCK_DIM,
					borderRadius: "2px",
				}}
			/>
		)
	}
}
