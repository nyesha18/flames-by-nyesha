import { useEffect, useState } from "react";
import loadingSound from "../assets/sounds/loading.mp3";
import { playSound } from "../utils/sound";

export default function Loading() {

    const messages = [
        "✨ Reading your destiny...",
        "💌 Crossing common letters...",
        "🔮 Consulting the FLAMES gods...",
        "💖 Asking Cupid...",
        "🌸 Finalizing your fate..."
    ];

    const [index, setIndex] = useState(0);
useEffect(() => {
    playSound(loadingSound);
}, []);
    useEffect(() => {

        const interval = setInterval(() => {

            setIndex((prev) => (prev + 1) % messages.length);

        }, 600);

        return () => clearInterval(interval);

    }, []);

    return (

        <div className="card">

            <div className="logo">✨</div>

            <h1>Finding Your Fate</h1>

            <p className="loading-text">
                {messages[index]}
            </p>

            <div className="loader"></div>

        </div>

    );

}