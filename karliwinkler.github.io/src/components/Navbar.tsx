import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";


export function useActiveSection(sectionIds: string[]) {
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-50% 0px -50% 0px",
                threshold: 0,
            }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sectionIds]);

    return activeId;
}


function Navbar() {
    const activeSection = useActiveSection(["hero", "projects", "about"]);

    return (
        <nav className="fixed top-0 z-50 w-full py-5 bg-ltpink text-burgundy font-fraunces">
            <div className="mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/karliwinkler"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="
                            text-4xl
                            transition-transform
                            duration-200
                            hover:scale-110
                            hover:-rotate-3"
                    >
                        <FaGithub/>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/karli-winkler"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="
                            text-4xl
                            transition-transform
                            duration-200
                            hover:scale-110
                            hover:-rotate-3"
                    >
                        <FaLinkedin/>
                    </a>
                </div>

                <div className="flex items-center gap-8 text-xl">
                    <a href="#projects" className={`relative after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:bg-current hover:after:w-full after:transition-all
                        ${activeSection === "projects" ? "after:w-full" : "after:w-0"}`}
                    >
                        Projects
                    </a>
                    <a href="#about" className={`relative after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:bg-current hover:after:w-full after:transition-all
                        ${activeSection === "about" ? "after:w-full" : "after:w-0"}`}
                    >
                        About
                    </a>
                </div>

            </div>
        </nav>
);
}

export default Navbar;