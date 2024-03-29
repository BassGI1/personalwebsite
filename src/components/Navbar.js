import React, {useState} from "react";
import logo from "../images/Logo.png"
import Sec from "./Sec.js"

export default function Navbar(props) {

    const [rotate, setRotate] = useState(false)

    const rotation = () => {
        setRotate(true)
        setTimeout(() => setRotate(false), 2000)
    }

    return (
        <nav style={{backgroundColor: props.dark ? "#21222A" : "#eeeeee", display: "flex", justifyContent: "space-evenly"}}>

            <img src={logo} alt="no" className={`logo ${rotate ? "rotate" : ""}`} onClick={rotation}/>

            <button className="toggle" style={{backgroundColor: props.dark ? "white" : "#21222A"}} onClick={() => props.toggleDark(props.dark)}>{props.dark ? "Light" : "Dark"}</button>

            {props.pages.map(x => <Sec page={x} dark={props.dark} change={props.change} key={x}/>)}

        </nav>
    )
}