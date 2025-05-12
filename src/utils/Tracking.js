export default class Tracking {
	static buffer = []
	static ipAddress = ""

	static addEvent(eventName) {
		this.buffer.push(`${eventName} ${new Date().toLocaleTimeString()}`)
	}

	static postSession() {
		const xhr = new XMLHttpRequest()
		xhr.open("POST", `${process.env.REACT_APP_API_URI}/events`, false)
		xhr.send(
			JSON.stringify({
				IP: Tracking.ipAddress,
				events: Tracking.buffer,
			})
		)
	}
}
