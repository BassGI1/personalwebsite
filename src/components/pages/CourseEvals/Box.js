import React from "react";

export default function Box(props) {

    return (

        <button className="boxes" style={{backgroundColor : props.dark ? "#282D35" : "white", color: props.dark ? "white" : "#282D35"}} onClick={() => props.setTerm(props.id)}>

            {props.id}

        </button>

    )

}