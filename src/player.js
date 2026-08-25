let audioPackage = null;
let currentAudio = null;
let progressTimer = null;

let onUpdate = null;
let onEnd = null;

async function getAudioPackage() {
    if (!audioPackage) {
        const module = await import("audio");
        audioPackage = module.default;
    }

    return audioPackage;
}

function clearProgressTimer() {
    if (progressTimer) {
        clearInterval(progressTimer);
        progressTimer = null;
    }
}

function startProgressTimer() {
    clearProgressTimer();

    progressTimer = setInterval(() => {
        if (!currentAudio || !currentAudio.playing) {
            return;
        }

        if (onUpdate) {
            onUpdate(
                currentAudio.currentTime,
                currentAudio.duration
            );
        }
    }, 250);
}

async function play(song, callbacks = {}) {
    const audio = await getAudioPackage();

    stop();

    onUpdate = callbacks.onUpdate || null;
    onEnd = callbacks.onEnd || null;

    currentAudio = audio(song.path);

    await currentAudio;

    currentAudio.on("timeupdate", () => {
        if (onUpdate) {
            onUpdate(
                currentAudio.currentTime,
                currentAudio.duration
            );
        }
    });

    currentAudio.on("ended", () => {
        clearProgressTimer();

        if (onEnd) {
            onEnd();
        }
    });

    currentAudio.play();

    startProgressTimer();

    return {
        duration: currentAudio.duration
    };
}

function pause() {
    if (!currentAudio || !currentAudio.playing) {
        return;
    }

    currentAudio.pause();
    clearProgressTimer();

    if (onUpdate) {
        onUpdate(
            currentAudio.currentTime,
            currentAudio.duration
        );
    }
}

function resume() {
    if (!currentAudio || !currentAudio.paused) {
        return;
    }

    currentAudio.resume();
    startProgressTimer();
}

function stop() {
    clearProgressTimer();

    if (currentAudio) {
        currentAudio.stop();
        currentAudio.dispose();
        currentAudio = null;
    }

    onUpdate = null;
    onEnd = null;
}

function isPlaying() {
    return currentAudio ? currentAudio.playing : false;
}

function isPaused() {
    return currentAudio ? currentAudio.paused : false;
}

module.exports = {
    play,
    pause,
    resume,
    stop,
    isPlaying,
    isPaused
};