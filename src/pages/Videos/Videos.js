import "./Videos.css"
import { useState } from "react"
import Older from "../../assets/images/Older.png"
import Newer from "../../assets/images/Newer.png"
import VideoData from "../../data/VideoData.js"
import TypedText from "../../components/TypedText.js"

export default function Videos() {
	const [vid, setVid] = useState(0)
	const [animate, setAnimate] = useState(0)

	return (
		<div className="main-wrapper">
			<div className="videos-top-div">
				{!animate ? (
					<TypedText
						text={VideoData[vid].term}
						font="Graphik"
						color="white"
						fontSize="1.25rem"
						minTime={50}
						timeRange={100}
					/>
				) : (
					<div
						style={{
							fontSize: "1.25rem",
							visibility: "hidden",
							height: "auto",
						}}
					>
						what
					</div>
				)}
				<iframe
					src={VideoData[vid].src}
					title={VideoData[vid].title}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					className={`${
						animate === 0
							? ""
							: animate === 1
							? "videos-move-left"
							: "videos-move-right"
					}`}
				></iframe>
			</div>
			<div className="videos-bottom-div">
				<img
					src={Newer}
					alt="newer"
					onClick={() => {
						if (!animate) {
							setAnimate(2)
							setTimeout(
								() => setVid(Math.max(vid - 1, 0)),
								500
							)
							setTimeout(() => setAnimate(0), 1500)
						}
					}}
					style={{
						visibility: vid === 0 ? "hidden" : "visible",
						filter: animate ? "grayscale(100%)" : "none",
					}}
				/>
				<img
					src={Older}
					alt="older"
					onClick={() => {
						if (!animate) {
							setAnimate(1)
							setTimeout(
								() =>
									setVid(
										Math.min(
											vid + 1,
											VideoData.length - 1
										)
									),
								500
							)
							setTimeout(() => setAnimate(0), 1500)
						}
					}}
					style={{
						visibility:
							vid === VideoData.length - 1
								? "hidden"
								: "visible",
						filter: animate ? "grayscale(100%)" : "none",
					}}
				/>
			</div>
		</div>
	)
}
