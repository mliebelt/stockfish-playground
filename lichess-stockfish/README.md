# Lichess Stockfish

This is a first try (that works) to integrate a current version into an HTML page, and isolate the initialization code from it.

Do the following steps (after having cloned the repository):

1. Do `npm install`, that ensures that `express` is installed to drive then the web server.
2. Start the web server by `npm run serve`.
3. Open the page `http://localhost:8080/index-tuned.html` in your preferred browser.
4. Open inside that the console.
5. Try something like: `sf.postMessage('uci')` and look at the result in the console.