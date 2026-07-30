import { useEffect } from "react";
import Confetti from "react-confetti";
import FriendsRain from "./FriendsRain";

import loveSound from "../assets/sounds/love.mp3";
import marriageSound from "../assets/sounds/marriage.mp3";
import friendsSound from "../assets/sounds/friends.mp3";
import enemiesSound from "../assets/sounds/enemies.mp3";
import affectionSound from "../assets/sounds/affection.mp3";
import siblingsSound from "../assets/sounds/siblings.mp3";

import vinyl from "../assets/images/vinyl.png";

import { playSound } from "../utils/sound";

export default function ResultCard({
    result,
    firstName,
    secondName,
    onTryAgain
}) {

    const isFriend = result.title.includes("FRIENDS");

    const showConfetti =
        result.title.includes("LOVE") ||
        result.title.includes("MARRIAGE");

    const isEnemy = result.title.includes("ENEMIES");

    useEffect(() => {

        if (result.title.includes("LOVE"))
            playSound(loveSound);

        else if (result.title.includes("MARRIAGE"))
            playSound(marriageSound);

        else if (result.title.includes("FRIENDS"))
            playSound(friendsSound);

        else if (result.title.includes("ENEMIES"))
            playSound(enemiesSound);

        else if (result.title.includes("AFFECTION"))
            playSound(affectionSound);

        else
            playSound(siblingsSound);

    }, [result]);

    const playlistHeading = (() => {

        if (result.title.includes("LOVE"))
            return "💖 Our Song";

        if (result.title.includes("MARRIAGE"))
            return "💍 Wedding Playlist";

        if (result.title.includes("FRIENDS"))
            return "🎵 Bestie Anthem";

        if (result.title.includes("AFFECTION"))
            return "🌸 Situationship Playlist";

        if (result.title.includes("ENEMIES"))
            return "💀 Hate Playlist";

        return "🎉 Family Function DJ";

    })();

    const playlistCaption = (() => {

        if (result.title.includes("LOVE"))
            return "✨ Certified couple anthem.";

        if (result.title.includes("MARRIAGE"))
            return "💍 Save this for the wedding dance.";

        if (result.title.includes("FRIENDS"))
            return "✨ Because this is giving bestie energy.";

        if (result.title.includes("AFFECTION"))
            return "🌸 This one belongs in your late-night playlist.";

        if (result.title.includes("ENEMIES"))
            return "😮‍💨 Play this while pretending you don't care.";

        return "🎉 Family function DJ approved.";

    })();

    return (
        <>
            {showConfetti && (
                <Confetti
                    recycle={false}
                    numberOfPieces={250}
                />
            )}

            {isFriend && <FriendsRain />}

            <div className={`card ${isEnemy ? "shake" : ""}`}>

                <div className="logo">
                    {result.title.split(" ")[0]}
                </div>

                <div className="couple-name">

                    <span className="person-name">
                        {firstName}
                    </span>

                    <span className="heart-divider">
                        ❤️
                    </span>

                    <span className="person-name">
                        {secondName}
                    </span>

                </div>

                <h1>{result.title}</h1>

                <p className="result-message">
                    {result.message}
                </p>

                {/* Playlist Recommendation */}

                <div className="playlist-card">

                    <p className="playlist-heading">

                        {playlistHeading}

                    </p>

                    <div className="record-player">

                        <img
                            src={vinyl}
                            alt="Vinyl Record"
                            className="record-img"
                        />

                    </div>

                    <h2 className="song-title">

                        {result.song.title}

                    </h2>

                    <p className="artist">

                        {result.song.artist}

                    </p>

                    <p className="playlist-caption">

                        {playlistCaption}

                    </p>

                </div>
{/* Nyesha Certified */}

<div className="certification-card">

    <h3>💅 Nyesha Certified</h3>

    <p>{result.certification}</p>

</div>

{/* Hot Take */}

<div className="hot-take-card">

    <h3>💋 Nyesha's Hot Take</h3>

    <p>{result.hotTake}</p>

</div>

{/* Marriage Suggestions */}
<div className="marriage-card">

    <h3>💍 Nyesha's Shaadi Shortlist</h3>

    <div className="name-list">

        {result.marryNames.map((name, index) => (

            <span
                key={name}
                className="marry-chip"
                style={{
                    animationDelay: `${index * 100}ms`
                }}
            >
                {name}
            </span>

        ))}

    </div>

</div>

{/* Red Flags */}
<div className="avoid-card">

    <h3>🚩 Today's Danger Zone</h3>

    <div className="name-list">

        {result.avoidNames.map((name, index) => (

            <span
                key={name}
                className="avoid-chip"
                style={{
                    animationDelay: `${index * 100}ms`
                }}
            >
                {name}
            </span>

        ))}

    </div>

</div>

                {/* Nyesha Says */}

                <div className="nyesha-box">

                    <div className="nyesha-header">

                        <span className="nyesha-avatar">
                            💀
                        </span>

                        <div>

                            <h3>Nyesha Says...</h3>

                            <small>@nyesha.official</small>

                        </div>

                    </div>

                    <div className="nyesha-message">

                        {result.roast}

                    </div>

                </div>

                <button onClick={onTryAgain}>

                    🔄 Try Another Pair

                </button>

            </div>
        </>
    );
}