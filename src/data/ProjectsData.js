import Harmonise from "../assets/projects/harmonise.gif"
import Huco from "../assets/projects/Huco.png"
import Notes from "../assets/projects/notes.png"
import AtoO from "../assets/projects/applestooranges.png"
import Abstract from "../assets/projects/abstract.png"
import Tic from "../assets/projects/tic.png"

const ProjectsData = [
	{
		title: "Harmonise",
		img: Harmonise,
		url: "https://harmonise.netlify.app",
		text: "A social media application that doubles as a music sharing app! Users set their 'theme' songs and others can check it out! This project was built using Node.js and Express.js for the backend. The frontend uses React.js with React Router. All data storage is done using MongoDB and an AWS S3 bucket is used for image storage. The project is also hosted on AWS EC2.",
	},
	{
		title: "Huco",
		img: Huco,
		url: "https://github.com/BassGI1/Huco",
		text: "A Python translator that allows the user to write Python code in different spoken languages. The example listed is a solution to the famous leetcode problem 'Twosum' written in Python, in Arabic. Funnily enough, the translator itself is also written in Python!",
	},
	{
		title: "Notes",
		img: Notes,
		url: "https://bassamsnotesapp.netlify.app/",
		text: "A notes application written in React.js. I use it very frequently.",
	},
	{
		title: "Tic Tac Toe",
		img: Tic,
		url: "https://github.com/BassGI1/TicTacToe",
		text: "A tic-tac-toe application that I made a few years back, entirely in C++.",
	},
	{
		title: "Abstract Art Generator",
		img: Abstract,
		url: "https://github.com/BassGI1/abstract_generator",
		text: "An abstract art generator that was made using Python and OpenCV.",
	},
	{
		title: "Apples to Oranges",
		img: AtoO,
		url: "https://applestooranges.netlify.app/",
		text: "A silly game that I made using React.js.",
	},
]

export default ProjectsData
