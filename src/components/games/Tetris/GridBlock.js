import TetrisConstants from "./Tetris.constants"

export default function GridBlock({ colour }) {
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
