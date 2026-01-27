import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="fixed top-0 z-50 w-full py-5 bg-ltpink text-burgundy font-fraunces">
            <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">

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
                    <a href="#projects" className="relative after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all">
                        Projects
                    </a>
                    <a href="#about" className="relative after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-0 after:bg-current hover:after:w-full after:transition-all">
                        About
                    </a>
                </div>

            </div>
        </nav>
);
}

export default Navbar;