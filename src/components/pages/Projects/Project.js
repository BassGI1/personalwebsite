import React from "react";

export default function Project(props) {

    return (

        <div className="project">

            <h1 style={{margin: "2vh 3vw 0px 3vw"}}>{props.title}</h1>
            <span style={{gridColumnStart: "1", margin: "2vh 3vw 0px 3vw"}}>{props.codedin.map(x => <img alt="pic" src={process.env.PUBLIC_URL + `/languages/${x}.png`} style={{height: "5vh", marginRight: "2vw"}} key={x}/>)}</span>
            <h4 style={{gridColumnStart: "1", margin: "2vh 3vw 0px 3vw"}}>{props.description}</h4>
            <a href={props.link} style={{gridColumnStart: "1", margin: "2vh 3vw 0px 3vw", cursor: props.link === '#' ? "default" : "pointer"}}>{props.link === '#' ? '' : props.link}</a>
            <img src={process.env.PUBLIC_URL + `/projectImages/${props.src}`} alt="pic" style={{display: "flex", height: "40vh", margin: "auto auto 3vh auto", border: "solid 2.5px #003ec5", borderRadius: "3vh"}}/>
            
        </div>

    )

}