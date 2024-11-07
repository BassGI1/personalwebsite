import Back from "../assets/images/back.png"

export default function TextFile({ text, close }) {
	return (
		<div className="textfile-background-div">
			<div className="textfile-close">
				<img src={Back} alt="back" onClick={close}/>
			</div>
			{text}
		</div>
	)
}
