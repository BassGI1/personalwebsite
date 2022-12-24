import React from "react";
import Data from "./ResumeData.js";

export default function Sidebar() {

    let info = Data[0].info
    let quals = Data[0].qualifications
    const techs = ["C++", "C", "Csharp", "JavaScript", "ReactNative", "Vue", "Node", "HTML", "CSS", "Python", "PHP", "Django"]

    return (

        <div>
            
            <div className="resside">

                <h5 className="ressideelem">{`${info.term} Computer Engineering at the University of Waterloo`}</h5>
                <h5 className="ressideelem" style={{marginTop: "-1vh"}}>{info.email}<span style={{marginLeft: "2vh"}}>{info.phone}</span><span style={{marginLeft: "2vh"}}>{"ID: " + info.id}</span></h5>
                <h3 className="ressideelem" style={{marginTop: "-1vh"}}>Working knowledge of the following technologies:</h3>
                <div style={{height: "25vh", display: "flex", flexWrap: "wrap", marginBottom: "0vh", width: "100%"}}>
                    {techs.map(x => <img src={require(`.//assets/${x}.png`)} alt="Language Logo" style={{height: "8vh", marginLeft: "2vw", maxWidth: "8vw"}} key={x}/>)}
                </div>
                <ul style={{marginLeft: "2vw", marginRight: "2vw"}}>
                    {quals.map(x => <li key={x} style={{fontSize: "2vh"}}>• {x}</li>)}
                </ul>

            </div>

        </div>

    )

}