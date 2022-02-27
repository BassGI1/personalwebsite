import React from "react";
import Data from './ProjectsData.js'
import Project from "./Project.js";

export default function Projects(props) {

    return (

        <div className="completepage" style={{color: props.dark ? "white" : "#282D35", backgroundColor : props.dark ? "#282D35" : "white"}} >
            <h4 style={{display: "block", margin: "3vh auto 1.5vh 40vw"}}>My github: <a href="https://github.com/BassGI1"> https://github.com/BassGI1</a></h4>
            <h4 style={{display: "block", margin: "1.5vh auto 3vh 40vw"}}>My replit: <a href="https://replit.com/@BelNagg"> https://replit.com/@BelNagg</a></h4>
            {Data.map(x => <Project {...x} key={x.title}/>)}
        </div>

    )

}