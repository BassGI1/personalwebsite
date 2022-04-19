import React from "react";
import Data from './ResumeData.js'
import Job from "./Job.js";

export default function Employment() {

    return (
        <div className="employ">
            {Data.map(x => x.type === 'job' ? <Job {...x} key={x.company}/> : '')}
        </div>
    )

}