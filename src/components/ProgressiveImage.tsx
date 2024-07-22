import { useState, useEffect } from "react";

interface Props {
    lowResSrc: string;
    highResSrc: string;
    alt: string;
}

const ProgressiveImage = ({ lowResSrc, highResSrc, alt }: Props) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = highResSrc;
        img.onload = () => {
            setLoaded(true);
        };
        img.onerror = (error) => {
            console.error("Error loading high-res image", error);
        };
    }, [highResSrc]);

    return (
        <div className="relative w-full h-auto">
            <img
                src={lowResSrc}
                alt={alt}
                className={`w-full h-auto transition-opacity duration-500 ${
                    loaded ? "opacity-0" : "opacity-100"
                }`}
            />
            <img
                src={highResSrc}
                alt={alt}
                className={`w-full h-auto absolute top-0 left-0 transition-opacity duration-500 ${
                    loaded ? "opacity-100" : "opacity-0"
                }`}
            />
        </div>
    );
};

export default ProgressiveImage;
