import React from "react";

export default function Vid(props) {

    return (

        <div style={{color: props.dark ? "white" : "#282D35", backgroundColor : props.dark ? "#282D35" : "white"}} className="vid">

            <h3 style={{margin: "5% auto 5% 45%"}}>{props.term}</h3>

            <iframe width="668" height="375.75" src={props.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{borderRadius: "2.5vw"}}></iframe>

        </div>

    )

}