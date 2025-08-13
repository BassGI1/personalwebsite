import Constants from "./Constants"

export default class Tracking {
	static ipAddress = ""

	static addEvent(eventName) {
		if (Tracking.ipAddress.length && Constants.trackingActive)
			fetch(`${process.env.REACT_APP_API_URI}/events`, {
				method: "POST",
				body: JSON.stringify({
					IP: Tracking.ipAddress,
					event: `${eventName} ${new Date().toLocaleTimeString()}`,
				}),
			})
	}
}
