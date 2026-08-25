const fs = require("fs");
const path = require("path");

const songsDirectory = path.join(__dirname, "..", "songs");

function getSongs() {
    if (!fs.existsSync(songsDirectory)) {
        return [];
    }

    const files = fs.readdirSync(songsDirectory);

    const songs = files
        .filter(file => path.extname(file).toLowerCase() === ".mp3")
        .map(file => ({
            name: path.basename(file, ".mp3"),
            filename: file,
            path: path.join(songsDirectory, file)
        }));

    return songs;
}

module.exports = {
    getSongs
};