export default class Random {
	static chars = "qwertyuiopasdfghjklzxcvbnm1234567890"

	static colour() {
		return `#${Math.floor(Math.random() * 256).toString(16)}${Math.floor(
			Math.random() * 256
		).toString(16)}${Math.floor(Math.random() * 256).toString(16)}`
	}

	static identifier(size) {
		let s = ""
		for (let _ = 0; _ < size; ++_)
			s = `${s}${this.chars[Math.floor(Math.random() * this.chars.length)]}`
		return s
	}

	static numberInRange(min, max) {
		return Math.random() * (max - min) + min
	}

	static choice(options) {
		return options[Math.floor(Math.random() * options.length)]
	}

	static weightedChoice(options, weights) {
		const weightedArray = []
		for (let i = 0; i < options.length; ++i) {
			for (let _ = 0; _ < weights[i]; ++_) {
				weightedArray.push(options[i])
			}
		}
		return Random.choice(weightedArray)
	}
}
