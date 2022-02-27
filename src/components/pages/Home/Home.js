import React from "react";

export default function Home(props) {

    let colour = props.dark ? "white" : "#21222A"

    return (

        <div style={{backgroundColor: props.dark ? "#282D35" : "white"}} className="completepage home">
            
            <h1 style={{color: colour, fontSize: "3.25rem"}} className="welcome">Welcome to my personal website!</h1>

            <p style={{color: colour}} className="intro">If you're here, it means you've probably received an application from me. This website acts as an extended resume which allows me to 1. show off my web development skills, 2. convince you to hire me (hopefully!) , and 3. have fun showing off my projects! Feel free to have a look around and check out all of the pages! Below you'll find my most recent co-op video, underneath will be a way to access all of my previous co-op videos, in case you want to see what I was like in the past.</p>

            <iframe width="600" height="350" src="https://www.youtube.com/embed/ExHA_JmflF0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="video"></iframe>

            <p className="routetovids" style={{color: colour}} onClick={() => props.setPage('Vids')}>Click me to view all co-op videos</p>

        </div>

    )

}