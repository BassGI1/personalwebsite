import React from "react";
import Data from "./ResumeData.js"
import Sidebar from "./Sidebar.js";
import Employment from "./Employment.js";

export default function Resume(props){
    
    return (

        <div className="completepage" style={{color: props.dark ? "white" : "#282D35", backgroundColor : props.dark ? "#282D35" : "white"}}>

            <Sidebar/>
            <Employment/>

        </div>

    )

}