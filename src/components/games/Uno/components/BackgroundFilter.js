const gradientPositions = ["circle at bottom", "circle at right", "circle at top", "circle at left"]

export default function BackgroundFilter({ currentColour, currentPlayer }) {
	return (
		<div
			className="uno-background-filter"
			style={{
				backgroundImage: `radial-gradient(${gradientPositions[currentPlayer]}, ${currentColour}, transparent)`,
			}}
		/>
	)
}
