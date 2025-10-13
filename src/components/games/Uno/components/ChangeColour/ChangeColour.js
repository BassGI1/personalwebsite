import UnoConstants from "../../Uno.constants"
import "./ChangeColour.css"

export default function ChangeColour({ onClick }) {
	return (
		<div className="uno-change-colour-container">
			<div className="uno-change-colour-colours-wrapper">
				<div
					className="uno-change-colour-colour-red"
					onClick={() => onClick(UnoConstants.COLORS.RED)}
				/>
				<div
					className="uno-change-colour-colour-yellow"
					onClick={() => onClick(UnoConstants.COLORS.YELLOW)}
				/>
				<div
					className="uno-change-colour-colour-green"
					onClick={() => onClick(UnoConstants.COLORS.GREEN)}
				/>
				<div
					className="uno-change-colour-colour-blue"
					onClick={() => onClick(UnoConstants.COLORS.BLUE)}
				/>
			</div>
		</div>
	)
}
