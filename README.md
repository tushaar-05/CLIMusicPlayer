<div align="center">

# CLI Music Player

**A simple, lightweight command-line music player built with Node.js — navigate, play, and control your local MP3 library without leaving the terminal.**

[![Node.js](https://img.shields.io/badge/Node.js-v14%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Platform](https://img.shields.io/badge/Platform-CLI-lightgrey.svg)](#usage)

</div>

<br>

<div align="center">

**[Features](#features)** &nbsp;·&nbsp;
**[Installation](#installation)** &nbsp;·&nbsp;
**[Usage](#usage)** &nbsp;·&nbsp;
**[Controls](#controls)** &nbsp;·&nbsp;
**[Project Structure](#project-structure)** &nbsp;·&nbsp;

</div>

---

## Features

| | |
|---|---|
| **Navigation** | Move through your song list with Up/Down arrow keys |
| **Live List** | In-place, live-updating song list |
| **Playback** | Play the selected song on Enter |
| **Pause/Resume** | Toggle playback with a single key |
| **Duration** | See the current song's length at a glance |
| **Progress Bar** | Real-time visual playback progress |
| **Switching** | Move seamlessly between tracks |
| **Clean Exit** | Quit gracefully, no leftover processes |

---

## Technologies Used

| Technology | Purpose |
|---|---|
| [Node.js](https://nodejs.org/) | Runtime environment |
| [JavaScript](https://www.w3schools.com/js/) | Core application logic |
| [`audio`](https://www.npmjs.com/package/audio) | Audio playback engine |

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** — v14 or higher recommended
- **npm** — comes bundled with Node.js

---

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/cli-music-player.git
cd CLIMusicPlayer
npm install
```

---

## Usage

Add your MP3 files to the `songs/` directory, then start the player:

```bash
npm start
```

Your songs will be detected and listed automatically on launch.

**Example:**

```text
songs/
├── song1.mp3
├── song2.mp3
└── song3.mp3
```

---

## Controls

<div align="center">

| Key     | Action              |
|:-------:|:--------------------|
| `↑` `↓` | Navigate song list   |
| `Enter` | Play selected song   |
| `Space` | Pause / Resume       |
| `q`     | Quit                 |

</div>

---

## Project Structure

```text
cli-music-player/
├── songs/                 # Your MP3 files go here
└── src/
    ├── index.js            # Entry point — wires up all modules
    ├── songManager.js      # Discovers MP3 files in songs/
    ├── input.js            # Handles keyboard input
    ├── player.js           # Handles audio playback
    ├── ui.js               # Renders the terminal UI
    └── state.js            # Manages application state
```

| File | Responsibility |
|---|---|
| `index.js` | Main application; connects all modules |
| `songManager.js` | Finds MP3 files in the `songs/` directory |
| `input.js` | Handles keyboard input |
| `player.js` | Handles audio playback |
| `ui.js` | Displays the music player in the terminal |
| `state.js` | Stores the current application state |

---

<div align="center">

*If you find this project useful, consider giving it a star.*

</div>
