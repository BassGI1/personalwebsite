export default function Target({ id, active, colour }) {
	return (
		<div
			id={id}
			className="breakout-target"
			style={{ backgroundColor: active ? colour : "transparent" }}
		/>
	)
}
