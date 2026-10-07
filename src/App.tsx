import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {AboutMe} from "./layout/sections/aboutme/AboutMe.tsx";
import {Contacts} from "./layout/sections/contacts/contacts.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {Aside} from "./layout/aside/Aside.tsx";


function App() {
    return (
        <div className="App">
            <Aside/>
            <Header/>
            <Main/>
            <Projects/>
            <Skills/>
            <AboutMe/>
            <Contacts/>
            <Footer/>
        </div>
    )
}

export default App

