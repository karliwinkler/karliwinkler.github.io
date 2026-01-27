import Container from "./Container.tsx";
import flowerUrl from "../assets/Flower-1.svg";

function Hero() {
    return (
        <section className="w-full min-h-screen bg-ltpink flex items-center">
            <Container>
                <div className="flex  items-center justify-center gap-8">
                    <div className="max-w-lg text-left">
                        <h1 className="text-5xl font-semibold mb-4 font-fraunces">
                            Hi, I’m Karli Winkler
                        </h1>
                        <p>
                            I'm a third year Computer Science student at UBC interested in web and full-stack
                            development.
                            Scroll to see some of my projects!
                        </p>
                    </div>

                    <div className="relative inline-block">
                        <img
                            src={flowerUrl}
                            alt=""
                            className="absolute -bottom-20 -right-25 w-64 z-0"
                        />

                        <div className="h-64 w-64 rounded-full overflow-hidden">
                            <img
                                src="/images/IMG_0070.JPG"
                                alt="Profile"
                                className="relative h-full w-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}

export default Hero
