import React from "react";
import Vid from "./Vid.js";

export default function Videos(props) {

    //add terms to the start of the videos array

    let videos = [{term: "Fall 2022", src: "https://www.youtube.com/embed/ewkrrM4R33A"}, {term: 'Winter 2022', src: "https://www.youtube.com/embed/ExHA_JmflF0"}]

    return (

        <div style={{color: props.dark ? "white" : "#282D35", backgroundColor : props.dark ? "#282D35" : "white"}} className="completepage videos">
        
            {videos.map(x => <Vid term={x.term} src={x.src} dark={props.dark} key={x}/>)}

            {videos.length < 6 && <h2 className="soon" style={{marginTop: "25vh"}}>...Coming Soon</h2>}
        
        </div>

    )

}