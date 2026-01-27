import Container from "./Container.tsx";
import flower4Url from "../assets/Flower-4.svg";

function About() {
    return (
        <section className="w-screen min-h-screen bg-burgundy py-24" id="about">
            <Container>
                <div className="relative pt-12 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

                    <div className="max-w-lg text-sm text-ltpink leading-relaxed">
                        <h2 className="text-5xl font-semibold mb-6 font-fraunces">About me</h2>
                        <p>
                            Hi! I'm a computer science student from North Vancouver, BC,
                            with experience working across both frontend and backend development.
                        </p>
                        <br/>
                        <p>
                            I'm currently working as a Junior Solutions Consultant Co-op at Trulioo, supporting both
                            technical and non-technical teams with the delivery of SaaS verification solutions.
                            Previously, I taught programming and Web Development as a Coding Tutor
                            and worked with a UBC professor to build an educational game website.
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
                        className="absolute -bottom-30 -left-28 w-40 z-0"
                    />

                    {/* Right: photo trio */}
                    <div className="pt-5 md:flex-1 md:flex md:justify-end md:items-start translate-x-20">
                        <div className="relative flex items-center gap-2">
                            {/* Left photo */}
                            <div className="-rotate-6 z-20 translate-y-25">
                                <div className="bg-white p-2 shadow-lg">
                                    <img
                                        src="images/ski-2.JPG"
                                        alt="About photo 1"
                                        className="block max-w-[210px] h-auto"
                                    />
                                </div>
                            </div>

                            {/* Middle photo (on top, overlapping) */}
                            <div className="relative z-10 -mx-20">
                                <div className="bg-white p-2 shadow-xl">
                                    <img
                                        src="images/hiking-2.jpeg"
                                        alt="About photo 2"
                                        className="block max-w-[280px] h-auto"
                                    />
                                </div>
                            </div>

                            {/* Right photo */}
                            <div className="rotate-5 ">
                                <div className="bg-white p-2 shadow-lg">
                                    <img
                                        src="images/cannonbeach-2.jpeg"
                                        alt="About photo 3"
                                        className="block max-w-[220px] h-auto"
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
