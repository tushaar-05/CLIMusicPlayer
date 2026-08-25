let selectedIndex = 0;

let currentSong = null;
let playbackState = "stopped";
let currentTime = 0;
let duration = 0;

function getSelectedIndex() {
    return selectedIndex;
}

function moveUp() {
    if (selectedIndex > 0) {
        selectedIndex--;
    }
}

function moveDown(songs) {
    if (selectedIndex < songs.length - 1) {
        selectedIndex++;
    }
}

function setPlayback(song, state, time, songDuration) {
    currentSong = song;
    playbackState = state;
    currentTime = time;
    duration = songDuration;
}

function updatePlayback(time, songDuration) {
    currentTime = time;
    duration = songDuration;
}

function getPlaybackState() {
    return {
        currentSong,
        playbackState,
        currentTime,
        duration
    };
}

module.exports = {
    getSelectedIndex,
    moveUp,
    moveDown,
    setPlayback,
    updatePlayback,
    getPlaybackState
};