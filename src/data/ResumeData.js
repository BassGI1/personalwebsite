import Babylist from "../assets/companyLogos/babylist.png"
import theScore from "../assets/companyLogos/theScore.png"
import Pexhouse from "../assets/companyLogos/pexhouse.png"
import GrantMatch from "../assets/companyLogos/grantmatch.png"

const ResumeData = [
	[
		"Babylist",
		Babylist,
		"Software Engineer",
		"January 2025",
		"Current",
		"Emeryville, California, United States",
		"Emeryville,California,United+States",
		[
			"Built the registry QR Code feature which led to >500,000 registry visits per month.",
			"Built several affiliate partner integrations, increasing revenue by >$1,000,000 annually.",
			"Optimized registries endpoint to decrease latency across all registry visits by >15%.",
			"Created a Sidekiq worker that automatically matches order numbers to registrant purchases, which results in >60% of incorrect user entries being corrected.",
			"Built the 'add a shower' feature which allowed users to organize their baby showers, driving >10,000 registry visits per week."
		],
	],
	[
		"theScore",
		theScore,
		"Backend Software Developer (Sports API)",
		"January 2024",
		"April 2024",
		"Toronto, Ontario, Canada",
		"Toronto,Ontario,Canada",
		[
			"Investigated and implemented garbage collector tuning for the Ruby On Rails runtime that decreased latency by >10% on >100 M daily requests.",
			"Created an abstraction layer that integrated Google Cloud and allowed instantaneous switching between Google Cloud and AWS.",
			"Rewrote several database queries in MySQL and PostgreSQL that decreased latency by >7% across several important endpoints.",
			"Wrote several GraphQL queries for improved application performance.",
			"Created dashboards on Splunk and Datadog to better monitor important endpoints.",
		],
	],
	[
		"Pexhouse",
		Pexhouse,
		"Full Stack Software Developer",
		"May 2023",
		"August 2023",
		"Remote",
		"Bolton,Ontario,Canada",
		[
			"Designed the hosting, matching and serving of restaurants features on the backend using Node.js and Socket.io deployed the backend to a remote server on an AWS EC2 instance.",
			"Designed and created the UI of the application with React Native, coupled with the socket integration with the backend using Socket.io.",
			"Implemented a restaurant promotion payment system using the Stripe API.",
			"Created a beta release build that was sent to thousands of users on Android and iOS.",
		],
	],
	[
		"GrantMatch",
		GrantMatch,
		"Full Stack Software Developer",
		"September 2022",
		"December 2022",
		"Remote",
		"Oakville,Ontario,Canada",
		[
			"Designed several REST API's, including the grant assessment API, using Python Django, which is used by thousands daily.",
			"Designed multiple frontend pages of the online portal using Vue.js, which are used by all internal and external users daily.",
			"Wrote and deployed multiple web scrapers using Python and Terraform which greatly improved efficiency of the Data team.",
			"Migrated data from previous database to new PostgreSQL database using Python Pandas.",
			"Wrote several unit tests, increasing code coverage by over 20% using Pytest.",
			"Automated several background tasks using Python and Celery, greatly reducing workload of the Data team.",
		],
	],
	[
		"Pexhouse",
		Pexhouse,
		"Full Stack Software Developer",
		"January 2022",
		"April 2022",
		"Remote",
		"Bolton,Ontario,Canada",
		[
			"Used the Yelp API to implement the backend REST API’s of the LetsGo App.",
			"Developed and maintained new features of pexhouse.com website using Node.js and React.",
			"Developed several pages of LetsGo Dining mobile application using React Native."
		]
	]
]

export default ResumeData
