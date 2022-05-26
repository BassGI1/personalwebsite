import React from "react";
import Data from "./CourseEvalsData";
//import pexhouse from "./images/pexhouse.png"

export default function Courses(props) {

    let info = []

    for (let r = 0; r < Data.length; ++r){
        if (Data[r][0] === props.id){
            info = Data[r]
            break
        }
    }

    if (info[0].substring(0, 5) === "Co-op"){

        return (

            <div>

                <h1 style={{paddingTop: "2vh"}}><span><button onClick={() => props.back('')} className="return">Return</button></span><span style={{marginLeft: "40vw"}}>{props.id}</span></h1>

                <h3 style={{marginTop: "1.5vh", marginLeft: "2vw", marginBottom: "2.5vh", marginRight: "2vw", fontWeight: "bold"}}>{info[1]}</h3>

                <div style={{display: "flex", width: "100%", justifyContent: "center"}}>

                    <img src={require(`./assets/${info[0]}/${info[2]}.png`)} alt='Logo' style={{height: "25vh"}}/>

                </div>

                <p style={{marginTop: "2.5vh", marginLeft: "2vw", marginBottom: "1.5vh", marginRight: "2vw"}}>{info[3]}</p>

                <div style={{display: "flex", width: "100%", justifyContent: "center", margin: "5vh 0vh 5vh 0vh"}}>
                    <h1>Technologies used on the job:</h1>
                </div>

                <div style={{display: "flex", marginLeft: "2vw", marginRight: "2vw", width: "90%", paddingBottom: "3vh", justifyContent: "center", flexWrap: "wrap"}}>

                    {info[4].map(x => <Tech term={info[0]} name={x.name} description={x.description} key={x.name} />)}

                </div>

            </div>

        )
        
    }

    return (

        <div>

            <h1 style={{paddingTop: "2vh"}}><span><button onClick={() => props.back('')} className="return">Return</button></span><span style={{marginLeft: "40vw"}}>{props.id}</span></h1>

            <h3 style={{margin: "auto 2vw 1.5vh 2vw"}}>{info[1]}</h3>

            {info.map(x => x.title ? <div className="course" key={x.title}> 

                    <hr/>

                    <h4 style={{marginTop: "3vh", marginLeft: "2vw"}}>{`Rating: ${x.rating*10}/10`}</h4>

                    <h4 style={{marginTop: "1.5vh", marginLeft: "2vw"}}>{`Title: ${x.title}`}</h4>

                    <h5 style={{marginTop: "1.5vh", marginLeft: "2vw", marginRight: "2vw"}}>{x.about}</h5>

                    <p style={{marginTop: "1.5vh", marginLeft: "2vw", marginBottom: "2.5vh", marginRight: "2vw"}}>{x.experience}</p>

                    <br/>

                </div> : '')}

                {info[info.length - 1].extras}

        </div>

    )

}

const Tech = ({term, name, description}) => {

    return (

        <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap", width: "25vh", margin: "0vh 2vw"}}>
            
            <img src={require(`./assets/${term}/${name}.png`)} style={{height: "25vh"}} alt={name}/>

            <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
                <h2 style={{margin: "2vh 0vh 2vh 0vh"}}>{name}</h2>
            </div>

            <p>{description}</p>

        </div>

    )

}