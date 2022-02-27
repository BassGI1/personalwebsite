import React from "react";

export default function Sec(props) {

    //whichever "sec" is pressed on, refers to the page that will be passed to setPage()

    return (

        <div className="sec" style={{color: props.dark ? "white" : "#21222A"}} onClick={() => props.change(props.page)}>
            {props.page}
        </div>

    )
} 