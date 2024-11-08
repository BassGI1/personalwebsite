import Constants from "../utils/Constants.js"

export default function FilledCircle({
	diameter,
	outerColour = Constants.theme.hoverColor,
	innerColour = Constants.theme.hoverColor,
	outlineWidth = "0.5rem",
	className = "",
}) {
	return (
		<div
			className={`filled-circle-outer-circle ${className}`}
			style={{
				width: diameter,
				height: diameter,
				border: `${outlineWidth} solid ${outerColour}`,
			}}
		>
			<div
				className="filled-circle-inner-circle"
				style={{ backgroundColor: innerColour }}
				onAnimationEnd={(e) =>
					(e.target.parentElement.style.backgroundColor =
						innerColour)
				}
			></div>
		</div>
	)
}
