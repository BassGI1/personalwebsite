import React from "react";
import Data from "./ResumeData.js";

export default function Sidebar() {

    let info = Data[0].info
    const languages = "JavaScript, TypeScript, Python, C, C Sharp, C++, Java, SQL, MongoDB, HTML, CSS, MATLAB, ARM Assembly, VHDL".split(", ")
    const frameworks = "React, React Native, Vue, Node, Express, Socket.io, Django, Spring Boot".split(", ")
    const tools = "Git, Docker, AWS, Google Cloud, Linux, Apache, Nginx".split(", ")

    return (

        <div>
            <div className="resside">
                <h5 className="ressideelem">{`${info.term} Computer Engineering at the University of Waterloo`}</h5>
                <h5 className="ressideelem" style={{marginTop: "-1vh"}}>{info.email}<span style={{marginLeft: "2vh"}}>{info.phone}</span><span style={{marginLeft: "2vh"}}>{"ID: " + info.id}</span></h5>
                <div style={{height: "80%", display: "flex", flexWrap: "wrap", marginBottom: "0vh", width: "100%", flexDirection: "column"}}>
                    <div className="hidescrollbar" style={{display: "flex", justifyContent: "center", flexWrap: "wrap", height: "100%"}}>
                        <h2 style={{width: "100%", textAlign: "center"}}>Languages</h2>
                        {languages.map(l => <TechView name={l} key={l}/>)}
                        <h2 style={{width: "100%", textAlign: "center"}}>Frameworks</h2>
                        {frameworks.map(f => <TechView name={f} key={f}/>)}
                        <h2 style={{width: "100%", textAlign: "center"}}>Developer Tools</h2>
                        {tools.map(t => <TechView name={t} key={t}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

const TechView = ({ name }) => {
    return (
        <div style={{height: "12.5%", display: "flex", alignItems: "center", flexDirection: "column", fontSize: "small"}}>
            <img src={process.env.PUBLIC_URL + `/languages/${name}.png`} style={{height: "100%"}} alt={name}/>
            {name}
        </div>
    )
}