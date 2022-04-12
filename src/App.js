import React, {useState} from "react";
import Navbar from "./components/Navbar";
import CourseEvals from "./components/pages/CourseEvals/CourseEvals.js";
import Home from "./components/pages/Home/Home.js";
import Videos from "./components/pages/Home/Videos.js";
import Resume from "./components/pages/Résumé/Resume.js";
import Projects from "./components/pages/Projects/Projects.js";
import AboutMe from "./components/pages/AboutMe/AboutMe.js";

export default function App() {

    const [dark, setDark] = useState(() => true)
    const pages = ['Home', 'Resume', 'Projects', 'About Me', 'University Experience']
    const [page, setPage] = useState('Home')

    //dark is used to determine whether the page should be rendered in dark mode or not
    //pages contains all the possible pages listed in the navbar
    //page is used to tell the app which page should currently be rendered

    function toggleDark() {
        setDark(x => !x)
    }

    return (

        <div>

            <Navbar toggleDark={toggleDark} dark={dark} pages={pages} page={page} change={setPage}/>

            {page === 'University Experience' && <CourseEvals dark={dark}/>}

            {page === 'Home' && <Home dark={dark} setPage={setPage}/>}

            {page === 'Vids' && <Videos dark={dark} />}

            {page === 'Resume' && <Resume dark={dark} />}

            {page === 'Projects' && <Projects dark={dark} />}

            {page === 'About Me' && <AboutMe dark={dark} />}

        </div>

    )
  
}