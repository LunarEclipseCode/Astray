# Astray

A WebGL maze game built with Three.js and Box2dWeb. Play it [here](https://play-astray.pages.dev/).

## Improvements/Changes

- Added support for mobile devices
- Added support for WASD keys and gamepad/controller input
- Added game progress saving in browser storage
- Implemented frame-rate independent movement and physics for consistent gameplay across devices with various refresh rates
- Player now spawns at the center of the maze and exit is randomly placed at one of the four corners
- Added red ball obstacles that restart the level on contact. When a level restarts, the maze layout will change, but the exit will remain in the same corner.

## Launching

There are several ways to launch the game. Here is the simplest:

1. Clone or download the repository
2. Navigate to Astray's directory
3. Start 'python -m SimpleHTTPServer' in your shell (for python 3.0 and above type 'python -m http.server' in your shell)
4. Open 'localhost:8000' in your browser
5. Enjoy!
