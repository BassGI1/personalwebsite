import React from "react";
import Data from "./ResumeData.js";

export default function Sidebar() {

    let info = Data[0].info
    let quals = Data[0].qualifications
    let techs = ["https://i.ibb.co/ZN6L4KK/C-Icon.png", "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png", "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png", "https://www.djangoproject.com/m/img/logos/django-logo-negative.png", "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"]

    return (

        <div>
            
            <div className="resside">

                <h5 className="ressideelem">{`${info.term} Computer Engineering at the University of Waterloo`}</h5>
                <h5 className="ressideelem" style={{marginTop: "-1vh"}}>{info.email}<span style={{marginLeft: "2vh"}}>{info.phone}</span><span style={{marginLeft: "2vh"}}>{"ID: " + info.id}</span></h5>
                <h3 className="ressideelem" style={{marginTop: "-1vh"}}>Working knowledge of the following technologies:</h3>
                <div style={{height: "25vh", display: "flex", flexWrap: "wrap", marginBottom: "0vh", width: "100%"}}>
                    {techs.map(x => <img src={x} alt="Language Logo" style={{height: "8vh", marginLeft: "2vw", maxWidth: "8vw"}} key={x}/>)}
                </div>
                <ul style={{marginLeft: "2vw", marginRight: "2vw"}}>
                    {quals.map(x => <li key={x} style={{fontSize: "2vh"}}>• {x}</li>)}
                </ul>

            </div>

        </div>

    )

}