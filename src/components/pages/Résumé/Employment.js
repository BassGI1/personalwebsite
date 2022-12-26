import React, {useState} from "react";
import Data from './ResumeData.js'
import Job from "./Job.js";

function getResume() {
    fetch('Resume.pdf')
    .then(res => {
        res.blob().then(b => {
            const fileURL = window.URL.createObjectURL(b);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Bassam El-Naggar - Resume.pdf';
            alink.click();
        })
    })
}

export default function Employment() {

    const [animate, setAnimate] = useState(false)
    const [check, setCheck] = useState(false)

    return (
        <div className="employ">
            <div onClick={() => {
                setAnimate(true)
                setTimeout(() => setCheck(true), 1000)
                // setTimeout(() => {
                //     setAnimate(false)
                //     setCheck(false)
                // }, 10000)
                getResume()
            }} style={{width: "100%", alignItems: "center", justifyContent: "center", display: "flex", marginTop: "2vh", height: "60px", overflow: "hidden"}}>
                <h2 className={`${animate ? "downloadPDF" : ''}`} style={{backgroundColor: "#2968d0", borderRadius: "1vh", width: "200px", justifyContent: "center", alignItems: "center", display: "flex", height: "100%", cursor: "pointer"}}>{!animate ? "Download PDF" : ""}</h2>
                {check &&
                <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" style={{height: "100%", overflow: "visible"}}>
                    <path class="checkmark__check" fill="none" stroke="green" d="M62.5,30 l25,20 l50,-45"/>
                </svg>
                }
            </div>
            {Data.map(x => x.type === 'job' ? <Job {...x} key={x.company}/> : '')}
        </div>
    )

}