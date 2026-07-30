import { useEffect, useRef, useState } from "react";

import {
    FaPlay,
    FaPause
} from "react-icons/fa";

export default function MusicPlayer({ song, emoji }) {

    const audioRef = useRef(null);

    const [playing, setPlaying] = useState(false);

    const [progress, setProgress] = useState(0);

    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {

        const audio = audioRef.current;

        if (!audio) return;

        const updateProgress = () => {

            setCurrentTime(audio.currentTime);

            setProgress(
                (audio.currentTime / audio.duration) * 100 || 0
            );

        };

        audio.addEventListener("timeupdate", updateProgress);

        return () => {

            audio.removeEventListener(
                "timeupdate",
                updateProgress
            );

        };

    }, []);

    function togglePlay() {

        const audio = audioRef.current;

        if (!audio) return;

        if (playing) {

            audio.pause();

        } else {

            audio.play();

        }

        setPlaying(!playing);

    }

    function format(seconds) {

        if (!seconds) return "0:00";

        const min = Math.floor(seconds / 60);

        const sec = Math.floor(seconds % 60);

        return `${min}:${sec.toString().padStart(2, "0")}`;

    }

    return (

        <div className="spotify-card">

            <audio
                ref={audioRef}
                src={song.audio}
            />

            <div className="spotify-glow"></div>

            <div className="spotify-header">

                <span className="playing-text">
                    🎧 NOW PLAYING
                </span>

                <span className="spotify-logo">
                    ♫
                </span>

            </div>

            <div className="album-section">

                <div className={`vinyl ${playing ? "playing" : ""}`}>

                    <div className="vinyl-center"></div>

                </div>

                <div className="album-art">

                    <span className="album-emoji">

                        {emoji}

                    </span>

                </div>

            </div>

            <div className="song-details">

                <h2>{song.title}</h2>

                <p>{song.artist}</p>

            </div>

            <div className="progress">

                <div className="progress-bar">

                    <div
                        className="progress-fill"
                        style={{
                            width: `${progress}%`
                        }}
                    />

                </div>

            </div>

            <div className="time">

                <span>

                    {format(currentTime)}

                </span>

                <span>

                    {song.duration}

                </span>

            </div>

            <button
                className="play-btn"
                onClick={togglePlay}
            >

                {playing ? <FaPause /> : <FaPlay />}

            </button>

        </div>

    );

}