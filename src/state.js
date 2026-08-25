let selectedIndex = 0;

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

module.exports = {
    getSelectedIndex,
    moveUp,
    moveDown
};