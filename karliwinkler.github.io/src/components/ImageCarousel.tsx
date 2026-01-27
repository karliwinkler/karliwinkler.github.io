import { useState } from "react";

type ImageCarouselProps = {
    images: { src: string; alt?: string }[];
    className?: string;
};

export function ImageCarousel({ images, className }: ImageCarouselProps) {
    const [index, setIndex] = useState(0);

    const hasImages = images && images.length > 0;
    const safeIndex = ((index % images.length) + images.length) % images.length;

    const prev = () => setIndex((i) => i - 1);
    const next = () => setIndex((i) => i + 1);

    if (!hasImages) {
        return (
            <div className={`bg-gray-200 rounded ${className ?? ""}`}>
                {/* fallback / placeholder */}
            </div>
        );
    }

    return (
        <div className={`relative ${className ?? ""}`}>
            {/* Image box (controls sizing) */}
            <div className="overflow-hidden ">
                {/* Use aspect ratio so all cards are consistent */}
                <img
                    src={images[safeIndex].src}
                    alt={images[safeIndex].alt ?? "Project screenshot"}
                    className="h-full w-full object-contain"
                    loading="lazy"
                />
            </div>

            {/* Arrows */}
            {images.length > 1 && (
                <>
                    <button
                        type="button"
                        onClick={prev}
                        className="absolute -left-3 top-1/2 -translate-y-1/2 px-2 py-1 text-3xl hover:font-extrabold"
                        aria-label="Previous image"
                    >
                        ‹
                    </button>
                    <button
                        type="button"
                        onClick={next}
                        className="absolute -right-3 top-1/2 -translate-y-1/2 px-2 py-1 text-3xl hover:font-extrabold"
                        aria-label="Next image"
                    >
                        ›
                    </button>

                    {/* Dots */}
                    <div className="mt-2 flex justify-center gap-2">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                onClick={() => setIndex(i)}
                                className={`h-1.5 w-1.5 rounded-full ${
                                    i === safeIndex ? "bg-burgundy" : "bg-gray-400"
                                }`}
                                aria-label={`Go to image ${i + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default ImageCarousel