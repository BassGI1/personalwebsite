import React from "react";

export default function Box(props) {

    return (

        <button className="boxes" style={{borderColor : !props.dark ? "#282D35" : "white", color: props.dark ? "white" : "#282D35", backgroundColor: "#2968D0"}} onClick={() => props.setTerm(props.id)}>

            {props.id}

        </button>

    )

}