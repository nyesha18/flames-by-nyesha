import { useEffect, useRef } from "react";
import slotSound from "../assets/sounds/slot.mp3";
import { playSound } from "../utils/sound";
const items = [
    { letter: "F", text: "👯 FRIENDS" },
    { letter: "L", text: "❤️ LOVE" },
    { letter: "A", text: "🥰 AFFECTION" },
    { letter: "M", text: "💍 MARRIAGE" },
    { letter: "E", text: "😤 ENEMIES" },
    { letter: "S", text: "👨‍👩‍👧 SIBLINGS" },
];

export default function FlamesSlot({ finalLetter, onComplete }) {

    const reelRef = useRef(null);

    useEffect(() => {
playSound(slotSound);
        const repeated = [...items, ...items, ...items];

        const finalIndex =
            repeated.findIndex(
                (item, index) =>
                    index >= 12 &&
                    item.letter === finalLetter
            );

        const itemHeight = 90;
setTimeout(() => {

    reelRef.current.style.transform =
        `translateY(-${finalIndex * itemHeight}px)`;

}, 350);

        const timer = setTimeout(() => {

            onComplete();

        }, 3200);

        return () => clearTimeout(timer);

    }, []);

    return (

        <div className="slot-card">

            <h2 className="slot-title">
                🎰 Destiny is Choosing...
            </h2>

            <div className="slot-window">
<div className="slot-marker"></div>
                <div
                    className="slot-reel"
                    ref={reelRef}
                >

                    {[...items, ...items, ...items].map((item, index) => (

                        <div
                            key={index}
                            className="slot-item"
                        >

                            {item.text}

                        </div>

                    ))}

                </div>

            </div>

        </div>

    );

}