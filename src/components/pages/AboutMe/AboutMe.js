import { useState, useEffect } from "react"

const starColours = ["#BCFFFFFF", "#EBD9A5", "#FFFBCB", "#E7837D", "#FFFFFF", "#8AB7DC"]

const Star = ({ colour, top, left, dimensions }) => {
    return (
        <div className="star" style={{backgroundImage: `radial-gradient(75% 75% at 50% 50%, ${colour} 0%, #073AFF00 55%)`, height: dimensions, width: dimensions, left: left, top: top, animation: `glow ${Math.random()*0.75 + 0.25}s infinite`}}></div>
    )
}

export default function AboutMe({dark}){

    const [stars, setStars] = useState([])

    useEffect(() => {
        const div = document.getElementsByClassName("aboutme")[0]
        for (let i = 0; i < (div.scrollHeight*div.clientWidth) / 2000; ++i){
            setStars(x => [...x, <Star colour={starColours[Math.floor(Math.random()*starColours.length)]} top={`${Math.random()*(div.scrollHeight)}px`} left={`${Math.random()*div.clientWidth}px`} dimensions={`${Math.random()*15 + 5}px`} />])
        }
    }, [])

    return (
        <div className="completepage aboutme" style={{filter: dark ? "invert(0%)" : "invert(100%)"}} >
            {stars}

        </div>
    )
}

// export default function AboutMe(props) {

//     return (

//         <div className="completepage" style={{color: props.dark ? "white" : "#282D35", backgroundColor : props.dark ? "#282D35" : "white", background: props.dark ? "url(https://freepngimg.com/convert-png/19262-space-png-clipart)" : ''}}>

//             <h2 style={{margin: "6vh auto 6vh auto", width: "45vw"}}>My name is Bassam El-Naggar and I am a software engineer.</h2>

//             <h4 style={{marginLeft: "3vw", width: "40vw", lineHeight: "4vh"}}>I love tinkering with all types of software, whether it be web development or game development. In my spare time, I enjoy building projects similar to this website, using a multitude of different technologies. Besides my passion for software (and computers in general), I enjoy spending time with my friends and family. I'm also a big fan of sports, and I'll take any chance I can get to play soccer or basketball. I also have a passion for learning. Software and mathematics are deeply intertwined, and it's only natural that I also have a passion for mathematics as well. I also enjoy learning about astronomical phenomena; I simply find the universe very intriguing! Thank you very much for taking the time to visit my website and learning a little bit more about me!</h4>

//             <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Isolated_basketball.png" className="aboutimage" alt="basketball" style={{display: "flex", margin: "-40vh 3vw 0vh auto", opacity: props.dark ? "0.35" : "1"}}/>

//             <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Soccer_ball.svg/1200px-Soccer_ball.svg.png" className="aboutimage" alt="soccer" style={{display: "flex", margin: "-30vh 30vw 0vh auto", opacity: props.dark ? "0.35" : "1"}}/>

//             <img src={process.env.PUBLIC_URL + "software.png"} className="aboutimage" alt="software" style={{display: "flex", margin: "3vh 10vw 0vh auto", opacity: props.dark ? "0.35" : "1"}}/>

//             <img src={process.env.PUBLIC_URL + "math.png"} className="aboutimage" alt="math" style={{display: "flex", margin: "-35vh 40vw 0vh auto", opacity: props.dark ? "0.35" : "1"}}/>

//         </div>

//     )

// }