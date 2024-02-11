# Lichess Stockfish

This is a first try (that works) to integrate a current version into an HTML page, and isolate the initialization code from it.

Do the following steps (after having cloned the repository):

1. Do `npm install`, that ensures that `express` is installed to drive then the web server, and the defined version of `stockfish`.
2. Do `npm run copy-lib`, to ensure that the libraries are copied into a known location (here: `lib`).
2. Start the web server by `npm run serve`.
3. Open the page `http://localhost:8080/index-tuned.html` in your preferred browser.
4. Open inside that the console.
5. Try something like: `sf.postMessage('uci')` and look at the result in the console.

## TODOs

It would be nice to have a solution with not so many dependencies. This is the setup that works:

* Have `stockfish.js` loaded as part of the HTML page.
* Ensure that `stockfish-init.js` is loaded and executed after the loading of Stockfish.
* Then you are able to send messages to Stockfish.