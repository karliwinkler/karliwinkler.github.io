import Container from "./Container.tsx";
import flower4Url from "../assets/Flower-4.svg";

function About() {
    return (
            <section className="bg-burgundy py-24 pb-36" id="about">
                <Container>
                    <div className="relative h-full pt-4 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

                        <div className="max-w-lg text-sm text-ltpink leading-relaxed flex-shrink-0">
                            <h2 className="text-5xl font-semibold mb-6 font-fraunces">About me</h2>
                            <p>
                                Hi! I'm a computer science student from North Vancouver, BC,
                                with experience working across both frontend and backend development.
                            </p>
                            <br/>
                            <p>
                                I'm currently working as a Software Engineer Intern at Korotu Technology on their DroneWatch web platform.
                                Some of my past experience includes supporting the delivery of SaaS verification solutions as a Solutions Consultant Co-op at Trulioo, developing an educational game website for a UBC professor,
                                and teaching programming and Web Development as a Coding Tutor.
                            </p>
                            <br/>
                            <p>
                                Outside of work and school, I love to read fiction, crochet, and go hiking and camping when
                                the weather allows 😊
                            </p>
                        </div>

                        <img
                            src={flower4Url}
                            alt=""
                            className="absolute w-24 -bottom-28 right-5 md:-bottom-30 md:-left-28 md:w-40 z-0"
                            style={{ animation: 'spin 30s linear infinite' }}
                        />

                        {/* Right: photo trio */}
                        <div className="pt-5 md:flex-1 md:flex md:justify-end md:items-start md:translate-x-10">
                            <div className="relative flex items-center gap-2">
                                {/* Left photo */}
                                <div className="-rotate-6 z-20 md:translate-y-25 translate-y-15">
                                    <div className="bg-white p-2 shadow-lg">
                                        <img
                                            src="images/ski-2.JPG"
                                            alt="About photo 1"
                                            className="block md:max-w-[210px] max-w-[105px] h-auto"
                                        />
                                    </div>
                                </div>

                                {/* Middle photo (on top, overlapping) */}
                                <div className="relative z-10 md:-mx-20 -mx-10">
                                    <div className="bg-white p-2 shadow-xl">
                                        <img
                                            src="images/hiking-2.jpeg"
                                            alt="About photo 2"
                                            className="block md:max-w-[280px] max-w-[140px] h-auto"
                                        />
                                    </div>
                                </div>

                                {/* Right photo */}
                                <div className="rotate-5 ">
                                    <div className="bg-white p-2 shadow-lg">
                                        <img
                                            src="images/cannonbeach-2.jpeg"
                                            alt="About photo 3"
                                            className="block md:max-w-[220px] max-w-[110px] h-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Container>
            </section>
        );
    }

export default About
