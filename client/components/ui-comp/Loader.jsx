import { useEffect, useState } from "react";

export default function SiteLoader({ onComplete }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (progress >= 100) {
        const timer = setTimeout(onComplete, 500); // short delay before transition
        return () => clearTimeout(timer);
        }

        const interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 10, 100));
        }, 100);

        return () => clearInterval(interval);
    }, [progress, onComplete]);

    return (
        <div className="h-screen w-screen bg-black flex flex-col justify-center items-center text-white text-2xl font-semibold">

            <p>{progress}%</p>
        </div>
    );
}