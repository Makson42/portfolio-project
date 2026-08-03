import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Firstlook} from "./layout/sections/main/Firstlook.tsx";
import {Quote} from "./layout/sections/main/Quote.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";


function App() {
    return (
        <div className="App">
            <Header/>
            <Firstlook/>
            <Quote/>
            <Projects/>
            <Skills/>
        </div>
    )
}

export default App

