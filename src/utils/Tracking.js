export default class Tracking {
	static buffer = []
	static ipAddress = ""

	static addEvent(eventName) {
		this.buffer.push(`${eventName} ${new Date().toLocaleTimeString()}`)
	}

	static postSession() {
		navigator.sendBeacon(
			`${process.env.REACT_APP_API_URI}/events`,
			JSON.stringify({
				IP: Tracking.ipAddress,
				events: Tracking.buffer,
			})
		)
	}
}
