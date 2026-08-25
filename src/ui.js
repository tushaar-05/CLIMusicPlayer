let renderedLines = 0;

function formatTime(seconds) {
    if (!Number.isFinite(seconds)) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
}

function createProgressBar(currentTime, duration) {
    if (!duration) {
        return "░".repeat(20) + " 0%";
    }

    const percentage = Math.min(
        100,
        Math.max(0, (currentTime / duration) * 100)
    );

    const filled = Math.round(percentage / 5);
    const empty = 20 - filled;

    return `${"█".repeat(filled)}${"░".repeat(empty)} ${Math.floor(percentage)}%`;
}

function renderSongs(songs, selectedIndex, playback) {
    const lines = [];

    lines.push("Songs:");
    lines.push("");

    songs.forEach((song, index) => {
        const pointer = index === selectedIndex ? ">" : " ";
        lines.push(`${pointer} ${index + 1}. ${song.name}`);
    });

    lines.push("");

    if (playback.currentSong) {
        lines.push(`Playing: ${playback.currentSong.name}`);
        lines.push(`State: ${playback.playbackState}`);
        lines.push(
            `${formatTime(playback.currentTime)} / ${formatTime(playback.duration)}`
        );
        lines.push(
            createProgressBar(
                playback.currentTime,
                playback.duration
            )
        );
    } else {
        lines.push("Playing: None");
        lines.push("State: stopped");
        lines.push("00:00 / 00:00");
        lines.push(`${"░".repeat(20)} 0%`);
    }

    lines.push("");
    lines.push("↑/↓ Navigate   Enter Play   Space Pause/Resume   q Quit");

    if (renderedLines === 0) {
        process.stdout.write("\x1b[2J");
        process.stdout.write("\x1b[H");
    } else {
        process.stdout.write(`\x1b[${renderedLines}A`);

        for (let i = 0; i < renderedLines; i++) {
            process.stdout.write("\x1b[2K");

            if (i < renderedLines - 1) {
                process.stdout.write("\x1b[1B");
            }
        }

        process.stdout.write(`\x1b[${renderedLines - 1}A`);
    }

    process.stdout.write(lines.join("\n") + "\n");

    renderedLines = lines.length;
}

module.exports = {
    renderSongs
};