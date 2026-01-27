import Container from "./Container.tsx";
import flower4Url from "../assets/Flower-4.svg";

function About() {
    return (
        <section className="w-screen h-screen bg-burgundy py-24" id="about">
            <Container>
                <div className="text-ltpink pt-8 relative">
                    <h2 className="text-5xl font-semibold mb-6 font-fraunces">About me</h2>
                    <p className="max-w-xl text-sm leading-relaxed">
                        Hey! I am UBC student from North Vancouver, BC. In my free time, I love to read, crochet,
                        and go hiking and camping (when Vancouver weather allows!).
                    </p>

                    <img
                        src={flower4Url}
                        alt=""
                        className="absolute -bottom-100 -left-20 w-48 z-0"
                    />

                </div>

                {/* Right: photo trio */}
                <div className="md:flex-1 md:flex">

                    <div className="relative flex items-center gap-6 -translate-y-15 translate-x-5/6">
                        {/* Left photo */}
                        <div className="-rotate-6 z-20 translate-y-25">
                            <div className="bg-white p-2 shadow-lg">
                                <img
                                    src="/images/ski-2.JPG"
                                    alt="About photo 1"
                                    className="block max-w-[210px] h-auto"
                                />
                            </div>
                        </div>

                        {/* Middle photo (on top, overlapping) */}
                        <div className="relative z-10 -mx-20">
                            <div className="bg-white p-2 shadow-xl">
                                <img
                                    src="/images/hiking-2.jpeg"
                                    alt="About photo 2"
                                    className="block max-w-[280px] h-auto"
                                />
                            </div>
                        </div>

                        {/* Right photo */}
                        <div className="rotate-5 ">
                            <div className="bg-white p-2 shadow-lg">
                                <img
                                    src="/images/cannonbeach-2.jpeg"
                                    alt="About photo 3"
                                    className="block max-w-[220px] h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    );
}

export default About
