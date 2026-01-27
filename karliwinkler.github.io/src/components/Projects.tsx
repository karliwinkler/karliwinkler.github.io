import Container from "./Container.tsx";
import ProjectCard from "./ProjectCard.tsx";
import {SiFlask, SiJavascript, SiMysql, SiTypescript} from "react-icons/si";
import {FaCss3Alt, FaHtml5, FaNode, FaPython, FaReact} from "react-icons/fa";
import {RiTailwindCssFill} from "react-icons/ri";
import {GrOracle} from "react-icons/gr";
import flower2Url from "../assets/Flower-2.svg";
import flower3Url from "../assets/Flower-3.svg";


function Projects() {
    return (
        <section className="bg-ltpink py-24" id="projects">
            <Container>
                <h2 className="text-4xl font-semibold mb-8 font-fraunces">Projects</h2>

                <div className="space-y-12">
                    <div className="relative">
                        <img
                            src={flower2Url}
                            alt=""
                            className="absolute -bottom-50 -left-40 w-72 z-0"
                        />

                        <ProjectCard
                            name="InsightUBC"
                            date="Jan – Mar 2025"
                            images={[
                                {src: "images/insightubc-1.png", alt: "InsightUBC dashboard"},
                                {src: "images/insightubc-2.png", alt: "InsightUBC dashboard"},
                                {src: "images/insightubc-3.png", alt: "InsightUBC dashboard"},
                                {src: "images/insightubc-4.png", alt: "InsightUBC dashboard"}
                            ]}
                            description={[
                                "A full-stack web application for searching and viewing data insights on UBC courses",
                                "Upload a course dataset and filter search by department and course",
                                "View insights like Grade Average By Year, Pass vs. Fail Rate, and Top Courses by Grade Average",
                                "Datasets are saved so you can revisit insights in a new session",
                                "Tech stack: TypeScript, Node.js, React, TailwindCSS"
                            ]}
                            icons={[
                                <SiTypescript/>,
                                <FaNode/>,
                                <FaReact/>,
                                <RiTailwindCssFill/>
                            ]}
                        />
                    </div>

                    <ProjectCard
                        name="Sizzlin' Spoons Meal Planner"
                        date="Mar 2025"
                        images={[
                            {src: "images/sizzlinspoons-1.png", alt: "Sizzlin Spoons home"},
                            {src: "images/sizzlinspoons-2.png", alt: "Sizzlin Spoons options"},
                            {src: "images/sizzlinspoons-3.png", alt: "Sizzlin Spoons recipes"}
                        ]}
                        description={[
                            "A meal prep planner and nutrition tracker built during a 24-hour hackathon that allows users to search recipes by cuisine, ingredient, and food category",
                            "Select your favourite recipes and Sizzlin' Spoons automatically organizes them in a weekly meal plan with daily nutritional breakdowns",
                            "Tech stack: Python, Flask, HTML/CSS"

                        ]}
                        icons={[
                            <FaPython/>,
                            <SiFlask/>,
                            <FaHtml5/>,
                            <FaCss3Alt/>
                        ]}
                    />

                    <div className="relative">
                        <img
                            src={flower3Url}
                            alt=""
                            className="absolute -top-15 -right-35 w-56 z-0"
                        />

                        <ProjectCard
                            name="Linguistics Database and Research Tool"
                            date="Jan - Mar 2025"
                            images={[
                                {src: "images/database-1.png", alt: "Database dashboard"},
                                {src: "images/database-2.png", alt: "Database dashboard"},
                                {src: "images/database-3.png", alt: "Database dashboard"},
                                {src: "images/database-4.png", alt: "Database dashboard"}
                            ]}
                            description={[
                                "A tool for linguistics field research to store and access data on languages, dialects, and speakers encountered in the field",
                                "Backed by a relational database, users can insert, update, and delete data on languages and speakers",
                                "View generated insights like Ancient Languages and Countries With the Highest Number of Speakers for each language",
                                "Tech stack: JavaScript, MySQL, Oracle, HTML/CSS"
                            ]}
                            icons={[
                                <SiJavascript/>,
                                <SiMysql/>,
                                <GrOracle/>,
                                <FaHtml5/>,
                                <FaCss3Alt/>
                            ]}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Projects
