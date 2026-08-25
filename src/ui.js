function renderSongs(songs, selectedIndex) {
    const lines = songs.length + 2;

    process.stdout.write(`\x1b[${lines}A`);

    for (let i = 0; i < lines; i++) {
        process.stdout.write("\x1b[2K");
        process.stdout.write("\x1b[1B");
    }

    process.stdout.write(`\x1b[${lines}A`);

    process.stdout.write("Songs:\n\n");

    songs.forEach((song, index) => {
        const pointer = index === selectedIndex ? ">" : " ";
        process.stdout.write(`${pointer} ${index + 1}. ${song.name}\n`);
    });
}

module.exports = {
    renderSongs
};