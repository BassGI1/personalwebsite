import React from "react";

export default function Job(props) {

    return (

        <div style={{width: "68vw", marginTop: "2vh", paddingBottom: "2vh"}}>

            <h2>{props.company}</h2>
            <h3>{props.title}</h3>
            <h4>{props.start} - {props.end}</h4>
            <ul>
                {props.description.map(x => <li key={x}>• {x}</li>)}
            </ul>
            <hr style={{marginTop: "4vh"}}/>

        </div>

    )

}