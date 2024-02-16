import React from "react";
import Data from './ProjectsData.js'
import Project from "./Project.js";

export default function Projects(props) {

    return (

        <div className="completepage" style={{color: props.dark ? "white" : "#282D35", backgroundColor : props.dark ? "#282D35" : "white"}} >
            <h4 style={{margin: "3vh auto 1.5vh auto", display: "flex", justifyContent: "center"}}><a href="https://github.com/BassGI1"> My Github</a></h4>
            <h4 style={{margin: "1.5vh auto 3vh auto", display: "flex", justifyContent: "center"}}><a href="https://www.linkedin.com/in/bassam-el-naggar-543884221/"> My LinkedIn</a></h4>
            {Data.map(x => <Project {...x} key={x.title}/>)}
        </div>

    )

}