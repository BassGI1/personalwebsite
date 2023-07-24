import React, {useState} from "react";
import Box from './Box.js'
import Courses from "./Courses.js";

export default function CourseEvals(props) {

    //when term == '', it means that no term is selected which tells the app to render the boxes

    const [term, setTerm] = useState('')

    let color = props.dark ? "white" : "#21222A"
    let terms = ['1A', 'Co-op 1', '1B', 'Co-op 2', '2A']

    return(

        <div style={{color: props.dark ? "white" : "#282D35", backgroundColor : props.dark ? "#282D35" : "white"}} className="completepage">

            {term === '' && <h2 style={{color: color}} className="evalstitle">This is just an archive of the experiences that I've had during my time at the University of Waterloo.</h2>}

            {term === '' && terms.map(x => <Box dark={props.dark} id={x} setTerm={setTerm} key={x}/>)}

            {term !== '' && <Courses back={setTerm} id={term} />}

            {/*term === '' && terms.length < 14 && <h2 className="soon">...Coming Soon</h2>*/}

        </div>

    )

}