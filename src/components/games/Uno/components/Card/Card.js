import "./Card.css"
import CardIcon from "./CardIcon"

const Circle = ({ colour, dimension }) => (
	<div
		style={{ backgroundColor: colour, width: dimension, height: dimension }}
		className="uno-card-circle"
	/>
)

export default function Card({
	cardId,
	width,
	flipped = true,
	onClick,
	colour,
	left,
	middle,
	right,
	className,
}) {
	return (
		<div
			className={`uno-card ${flipped ? "uno-card-flipped" : ""} ${
				className ? className : ""
			}`}
			style={{
				width: width,
				height: `calc(1.25 * ${width})`,
				minWidth: width,
				minHeight: `calc(1.25 * ${width})`,
			}}
			id={cardId}
			onClick={() => onClick?.(cardId)}
		>
			<div className="uno-card-inner">
				<div className="uno-card-front">
					<div
						className="uno-card-face-container"
						style={{ backgroundColor: colour }}
					>
						<Circle colour="white" dimension={width} />
						{left && (
							<CardIcon
								iconType={left[0]}
								cardColour={left[1]}
								className={left[2]}
								iconId={left[3]}
							/>
						)}
						{middle && (
							<CardIcon
								iconType={middle[0]}
								cardColour={middle[1]}
								className={middle[2]}
								iconId={middle[3]}
							/>
						)}
						{right && (
							<CardIcon
								iconType={right[0]}
								cardColour={right[1]}
								className={right[2]}
								iconId={right[3]}
							/>
						)}
					</div>
				</div>
				<div className="uno-card-back">
					<div className="uno-card-back-wrapper">
						<div className="uno-card-back-container">
							<Circle colour="rgb(255, 70, 70)" dimension={width} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
