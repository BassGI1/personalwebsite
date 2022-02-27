import React from "react";
import Data from "./ResumeData.js";

export default function Sidebar() {

    let info = Data[0].info
    let quals = Data[0].qualifications
    let techs = ["https://i.ibb.co/ZN6L4KK/C-Icon.png", "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png", "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png", "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"]

    return (

        <div>
            
            <div className="resside">

                <h3 className="ressideelem">{`${info.term} Computer Engineering at the University of Waterloo`}</h3>
                <h3 className="ressideelem" style={{marginTop: "-5vh"}}>{info.email}      {info.phone}      {info.id}</h3>
                <h3 className="ressideelem" style={{marginTop: "-5vh"}}>Working knowledge of the following technologies:</h3>
                {techs.map(x => <img src={x} style={{height: "10vh", marginLeft: "2vw", marginTop: "-3vh"}} key={x}/>)}
                <ul style={{marginLeft: "2vw", marginRight: "2vw"}}>
                    {quals.map(x => <li key={x}>• {x}</li>)}
                </ul>

            </div>

        </div>

    )

}