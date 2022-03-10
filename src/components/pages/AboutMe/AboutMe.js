import React from "react";

export default function AboutMe(props) {

    return (

        <div className="completepage" style={{color: props.dark ? "white" : "#282D35", backgroundColor : props.dark ? "#282D35" : "white", background: props.dark ? "url(https://freepngimg.com/convert-png/19262-space-png-clipart)" : ''}}>

            <h2 style={{margin: "6vh auto 6vh auto", width: "45vw"}}>My name is Bassam El-Naggar and I am a software engineer.</h2>

            <h4 style={{marginLeft: "3vw", width: "40vw", lineHeight: "4vh"}}>I love tinkering with all types of software, whether it be web development or game development. In my spare time, I enjoy building projects similar to this website, using a multitude of different technologies. Besides my passion for software (and computers in general), I enjoy spending time with my friends and family. I'm also a big fan of sports, and I'll take any chance I can get to play soccer or basketball. I also have a passion for learning. Software and mathematics are deeply intertwined, and it's only natural that I also have a passion for mathematics as well. I also enjoy learning about astronomical phenomena; I simply find the universe very intriguing! Thank you very much for taking the time to visit my website and learning a little bit more about me!</h4>

            <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Isolated_basketball.png" className="aboutimage" style={{display: "flex", margin: "-40vh 3vw 0vh auto", opacity: props.dark ? "0.35" : "1"}}/>

            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Soccer_ball.svg/1200px-Soccer_ball.svg.png" className="aboutimage" style={{display: "flex", margin: "-30vh 30vw 0vh auto", opacity: props.dark ? "0.35" : "1"}}/>

            <img src={process.env.PUBLIC_URL + "software.png"} className="aboutimage" style={{display: "flex", margin: "3vh 10vw 0vh auto", opacity: props.dark ? "0.35" : "1"}}/>

            <img src={process.env.PUBLIC_URL + "math.png"} className="aboutimage" style={{display: "flex", margin: "-35vh 40vw 0vh auto", opacity: props.dark ? "0.35" : "1"}}/>

        </div>

    )

}