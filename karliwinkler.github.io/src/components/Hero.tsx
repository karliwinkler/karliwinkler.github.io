import Container from "./Container.tsx";
import flowerUrl from "../assets/Flower-1.svg";
import { useState, useEffect } from "react";

export function useTypewriter(text: string, speed = 50) {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        setDisplayed("");
        let i = 0;
        const interval = setInterval(() => {
            i++;
            setDisplayed(text.slice(0, i));
            if (i >= text.length) clearInterval(interval);
        }, speed);
        return () => clearInterval(interval);
    }, [text, speed]);

    return displayed;
}

function Hero() {
    const title = useTypewriter("Hi, I'm Karli Winkler", 60);
    return (
        <section className="w-full min-h-screen bg-ltpink flex items-center" id="hero">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="max-w-lg text-left">
                        <h1 className="text-4xl md:text-5xl font-semibold mb-4 font-fraunces">
                            {title}
                            <span className="animate-blink font-epilogue font-light">|</span> {/* blinking cursor */}
                        </h1>
                        <p> I'm a fourth year Computer Science student at UBC interested in web and full-stack
                            development. Scroll to see some of my projects!
                        </p>
                    </div>

                    <div className="relative inline-block">
                        <img src={flowerUrl}
                             alt=""
                             className="absolute -bottom-15 -right-18 w-48 md:-bottom-20 md:-right-25 md:w-64 z-0 "
                             style={{ animation: 'spin 30s linear infinite' }}
                        />
                        <div className="h-56 w-56 md:h-64 md:w-64 rounded-full overflow-hidden">
                            <img src="images/IMG_0070.JPG"
                                 alt="Profile"
                                 className="relative h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Container>
    </section>);
}

export default Hero
