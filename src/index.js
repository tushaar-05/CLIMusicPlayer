const { getSongs } = require("./songManager");
const { startKeyboardInput } = require("./input");
const {
    getSelectedIndex,
    moveUp,
    moveDown,
    setPlayback,
    updatePlayback,
    getPlaybackState
} = require("./state");
const { renderSongs } = require("./ui");
const player = require("./player");

const songs = getSongs();

if (songs.length === 0) {
    console.log("No MP3 songs found.");
    process.exit(0);
}

function render() {
    renderSongs(
        songs,
        getSelectedIndex(),
        getPlaybackState()
    );
}

async function playSelectedSong() {
    const song = songs[getSelectedIndex()];

    setPlayback(song, "loading", 0, 0);
    render();

    try {
        const result = await player.play(song, {
            onUpdate: (currentTime, duration) => {
                updatePlayback(currentTime, duration);
                render();
            },

            onEnd: () => {
                setPlayback(song, "stopped", 0, result.duration);
                render();
            }
        });

        setPlayback(song, "playing", 0, result.duration);
        render();
    } catch (error) {
        setPlayback(song, "stopped", 0, 0);
        render();
        console.error("\nUnable to play song:", error.message);
    }
}

function togglePauseResume() {
    const playback = getPlaybackState();

    if (playback.playbackState === "playing") {
        player.pause();

        setPlayback(
            playback.currentSong,
            "paused",
            playback.currentTime,
            playback.duration
        );

        render();
    } else if (playback.playbackState === "paused") {
        player.resume();

        setPlayback(
            playback.currentSong,
            "playing",
            playback.currentTime,
            playback.duration
        );

        render();
    }
}

function handleKey(key) {
    if (key === "UP") {
        moveUp();
        render();
    }

    if (key === "DOWN") {
        moveDown(songs);
        render();
    }

    if (key === "ENTER") {
        playSelectedSong();
    }

    if (key === "SPACE") {
        togglePauseResume();
    }
}

render();

startKeyboardInput(handleKey);