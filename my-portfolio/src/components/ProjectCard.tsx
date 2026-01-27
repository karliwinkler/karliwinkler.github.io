import ImageCarousel from "./ImageCarousel.tsx";

type ProjectImage = {
    src: string;
    alt: string;
};

type ProjectCardProps = {
    name: string;
    images: ProjectImage[];
    description: string[];
    date: string;
    icons: React.ReactNode[];
};

function ProjectCard({ name, images, description, date, icons }: ProjectCardProps) {

    return (
        <div className="relative">

            <div className="absolute inset-0 bg-dkgreen -translate-x-3 translate-y-3 rounded-2xl"/>

            <div className="relative z-10 bg-ltgreen rounded-2xl p-6 border-dkgreen border-2">
                <div className="flex gap-6 items-stretch">

                    <div className="flex-1 flex flex-col self-stretch">
                        <div className="flex justify-between mb-4">
                            <h3 className="font-semibold text-xl font-fraunces">{name}</h3>
                        </div>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                            {description.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                        <div className="mt-auto flex gap-4 text-5xl p-5 ">
                            {icons.map((icon, index) => (
                                <span key={index} className="transition transform hover:scale-110">{icon}</span>
                            ))}
                        </div>

                    </div>

                    <div className="flex flex-col text-right">
                        <span className="text-sm font-fraunces italic">{date}</span>
                        <div className="w-lg shrink-0">
                            <ImageCarousel images={images}/>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default ProjectCard
