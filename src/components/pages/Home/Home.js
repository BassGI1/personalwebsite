import React from "react";

export default function Home(props) {

    let colour = props.dark ? "white" : "#21222A"

    return (

        <div style={{backgroundColor: props.dark ? "#282D35" : "white"}} className="completepage home">
            
            <h1 style={{color: colour, fontSize: "3rem"}} className="welcome">Welcome to my personal website!</h1>

            <iframe width="600" height="350" src="https://www.youtube.com/embed/nOZd_hVjq3c?si=JDpHeyQrXqX81lE_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="video"></iframe>

            <p className="routetovids" style={{color: colour}} onClick={() => props.setPage('Vids')}>Click here to view all co-op videos</p>

        </div>

    )

}
