const readline = require("readline");

function startKeyboardInput(onKeyPress) {
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    process.stdin.resume();

    process.stdin.on("keypress", (str, key) => {
        if (key.name === "up") {
            onKeyPress("UP");
        }

        if (key.name === "down") {
            onKeyPress("DOWN");
        }

        if (key.name === "return") {
            onKeyPress("ENTER");
        }

        if (key.name === "space") {
            onKeyPress("SPACE");
        }

        if (key.name === "q") {
            process.stdin.setRawMode(false);
            process.stdin.pause();
            process.exit(0);
        }
    });
}

module.exports = {
    startKeyboardInput
};