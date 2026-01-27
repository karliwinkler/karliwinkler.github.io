const skills = [
    "C/C++",
    "Java",
    "JavaScript",
    "TypeScript",
    "SQL",
    "Python",
    "Node.js",
    "HTML/CSS",
    "React",
    "TailwindCSS",
    "Git",
    "Postman"
];

function SkillsDivider() {
    return (
        <div className="w-full bg-dkgreen text-ltgreen py-10 font-fraunces">
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex items-center gap-6">

                    <span className="shrink-0 font-semibold text-lg">
            Skills:
          </span>

                    <div className="relative flex-1 overflow-hidden">
                        <div className="marquee flex w-max items-center hover:[animation-play-state:paused]">

                            <div className="flex items-center">
                                {skills.map((skill) => (
                                    <span key={`a-${skill}`} className="flex items-center whitespace-nowrap">
                    <span className="mx-4">{skill}</span>
                    <span className="inline-block leading-none opacity-50">•</span>
                  </span>
                                ))}
                            </div>

                            <div className="flex items-center" aria-hidden="true">
                                {skills.map((skill) => (
                                    <span key={`b-${skill}`} className="flex items-center whitespace-nowrap">
                    <span className="mx-4">{skill}</span>
                    <span className="inline-block leading-none opacity-50">•</span>
                  </span>
                                ))}
                            </div>
                        </div>

                        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-dkgreen to-transparent" />
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-dkgreen to-transparent" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsDivider;