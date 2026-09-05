import Projects from "./components/Projects.tsx";
import About from "./components/About.tsx";
import Hero from "./components/Hero.tsx";
import Navbar from "./components/Navbar.tsx";
import SkillsDivider from "./components/SkillsDivider.tsx";


export default function App() {
    return (
        <div className="min-h-screen w-full overflow-hidden bg-ltpink">
            <Navbar/>
            <Hero/>
            <Projects/>
            <SkillsDivider/>
            <About/>
        </div>

        );
    }


