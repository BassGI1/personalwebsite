import React from "react";
import Data from "./CourseEvalsData";

export default function Courses(props) {

    let info

    for (let r = 0; r < Data.length; ++r){
        if (Data[r][0] == props.id){
            info = Data [r]
            break
        }
    }

    return(

        <div>

            <h1 style={{paddingTop: "2vh"}}><span><button onClick={() => props.back('')} className="return">Return</button></span><span style={{marginLeft: "40vw"}}>{props.id}</span></h1>

            <h3 style={{margin: "auto 2vw 1.5vh 2vw"}}>{info [1]}</h3>

            {info.map(x => typeof x == 'object' ? <div className="course" key={x.title}> 

                    <hr/>

                    <h4 style={{marginTop: "3vh", marginLeft: "2vw"}}>{`Rating: ${x.rating*100}/100`}</h4>

                    <h4 style={{marginTop: "1.5vh", marginLeft: "2vw"}}>{`Title: ${x.title}`}</h4>

                    <h5 style={{marginTop: "1.5vh", marginLeft: "2vw", marginRight: "2vw"}}>{x.about}</h5>

                    <p style={{marginTop: "1.5vh", marginLeft: "2vw", marginBottom: "1.5vh", marginRight: "2vw"}}>{x.experience}</p>

                    <br/>

                </div> : '')}

        </div>

    )

}