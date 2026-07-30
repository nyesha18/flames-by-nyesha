import "./index.css";
import { useState } from "react";
import FlamesSlot from "./components/FlamesSlot";
import Loading from "./components/Loading";
import FloatingHearts from "./components/FloatingHearts";
import ResultCard from "./components/ResultCard";
import hotTakes from "./data/hotTakes";
import certified from "./data/certified";
import results from "./data/results";
import marriageNames from "./data/marriageNames";
import redFlags from "./data/redFlags";
import themeSongs from "./data/themeSongs";
import roasts from "./data/roasts";

import { calculateFlames } from "./utils/flames";
import { playSound } from "./utils/sound";

import clickSound from "./assets/sounds/click.mp3";

function App() {

    const [loading, setLoading] = useState(false);
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [result, setResult] = useState(null);
    const [wheel, setWheel] = useState(false);
    const [finalLetter, setFinalLetter] = useState("");
const [preference, setPreference] = useState("surprise");
  function handleTryAgain() {

    setResult(null);
    setWheel(false);
    setFinalLetter("");

    setName1("");
    setName2("");

    setPreference("surprise");

}  
    function handleSubmit() {

        if (name1.trim() === "" || name2.trim() === "") {

            alert("Please enter both names ❤️");
            return;

        }

        setLoading(true);

        setTimeout(() => {

            const answer = calculateFlames(name1, name2);

            const data = results[answer.letter];

            // Pick a random roast
            const randomRoast =
                roasts[answer.letter][
                    Math.floor(Math.random() * roasts[answer.letter].length)
                ];

            // Pick a random song recommendation
            // Pick a random song recommendation
const songPool = themeSongs[answer.letter];

const randomSong =
    songPool[
        Math.floor(Math.random() * songPool.length)
    ];

// Pick a random hot take
const randomHotTake =
    hotTakes[
        Math.floor(Math.random() * hotTakes.length)
    ];

// Pick a random certification
const randomCertification =
    certified[
        Math.floor(Math.random() * certified.length)
    ];

// Marriage & Red Flag names
let marryPool;
let avoidPool;

if (preference === "guys") {

    marryPool = marriageNames.guys;
    avoidPool = redFlags.guys;

} else if (preference === "girls") {

    marryPool = marriageNames.girls;
    avoidPool = redFlags.girls;

} else {

    const randomChoice = Math.random() > 0.5 ? "guys" : "girls";

    marryPool = marriageNames[randomChoice];
    avoidPool = redFlags[randomChoice];

}

const marryNames = [...marryPool]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

const avoidNames = [...avoidPool]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

setFinalLetter(answer.letter);

setResult({

    ...data,

    roast: randomRoast,

    song: randomSong,

    hotTake: randomHotTake,

    certification: randomCertification,

    marryNames,

    avoidNames

});

            setLoading(false);

            setWheel(true);

        }, 3000);

    }

    if (loading) {

        return (

            <div className="app">

                <FloatingHearts />

                <div className="bg-circle one"></div>
                <div className="bg-circle two"></div>
                <div className="bg-circle three"></div>

                <Loading />

            </div>

        );

    }

    if (wheel) {

        return (

            <div className="app">

                <FloatingHearts />

                <div className="bg-circle one"></div>
                <div className="bg-circle two"></div>
                <div className="bg-circle three"></div>

                <FlamesSlot
                    finalLetter={finalLetter}
                    onComplete={() => setWheel(false)}
                />

            </div>

        );

    }

    if (result) {

        return (

            <div className="app">

                <FloatingHearts />

                <div className="bg-circle one"></div>
                <div className="bg-circle two"></div>
                <div className="bg-circle three"></div>

                <ResultCard
                    result={result}
                    firstName={name1}
                    secondName={name2}
                    onTryAgain={handleTryAgain}
                />

            </div>

        );

    }

    return (

        <div className="app">

            <FloatingHearts />

            <div className="bg-circle one"></div>
            <div className="bg-circle two"></div>
            <div className="bg-circle three"></div>

            <div className="card">

                <div className="logo">
                    ❤️
                </div>

                <h1>FLAMES</h1>

                <p className="brand">
                    by Nyesha ✨
                </p>
<p className="subtitle">
    Remember the game that decided everyone's fate during school? 🤭
</p>

<p className="tagline">
    🤫 Karo karo... kisiko nahi bataungi kiska naam likha hai.
    <br />
    <span>Pinky promise! 💖</span>
</p>
              
                <input
                    value={name1}
                    onChange={(e) => setName1(e.target.value)}
                    type="text"
                    placeholder="Your name 💕"
                />

                <input
                    value={name2}
                    onChange={(e) => setName2(e.target.value)}
                    type="text"
                    placeholder="Their name 👀"
                />
<div className="preference-section">

    <p className="preference-title">

        💖 Manifesting...

    </p>

    <label>

        <input
            type="radio"
            value="guys"
            checked={preference === "guys"}
            onChange={(e) => setPreference(e.target.value)}
        />

        👦 Husband Material

    </label>

    <label>

        <input
            type="radio"
            value="girls"
            checked={preference === "girls"}
            onChange={(e) => setPreference(e.target.value)}
        />

        👧 Wife Material

    </label>

    <label>

        <input
            type="radio"
            value="surprise"
            checked={preference === "surprise"}
            onChange={(e) => setPreference(e.target.value)}
        />

        🎲 Let Nyesha Decide

    </label>

</div>
                <button
                    onClick={() => {

                        playSound(clickSound);

                        handleSubmit();

                    }}
                >
                    Reveal Our Fate
                </button>

            </div>

        </div>

    );

}

export default App;