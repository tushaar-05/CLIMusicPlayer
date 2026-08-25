const { getSongs } = require("./songManager");
const { startKeyboardInput } = require("./input");
const { renderSongs } = require("./ui");
const {
    getSelectedIndex,
    moveUp,
    moveDown
} = require("./state");

const songs = getSongs();

if (songs.length === 0) {
    console.log("No MP3 songs found.");
    process.exit(0);
}

function render() {
    renderSongs(songs, getSelectedIndex());
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
        const index = getSelectedIndex();
        console.log(`\nSelected: ${songs[index].name}`);
    }
}

render();

startKeyboardInput(handleKey);