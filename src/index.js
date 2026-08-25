const { getSongs } = require("./songManager");

const songs = getSongs();

if (songs.length === 0) {
    console.log("No MP3 songs found.");
    process.exit(0);
}

console.log("Songs:");

songs.forEach((song, index) => {
    console.log(`${index + 1}. ${song.name}`);
});