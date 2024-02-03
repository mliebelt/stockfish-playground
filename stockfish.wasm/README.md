# stockfish.wasm

Located at [stockfish.wams](https://github.com/niklasf/stockfish.wasm), developed by niklasf

Features:

* WebAssembly port of the stockfish engine.
* Published 3 years ago, not developed any more.
* Had a simple example file that really worked.
* Needs special headers set when running.

What is included:

* All files created by having the right steps done on the repo (to simplify the job for others)

## Running

1. Do the usual `npm install` to have `express` setup. The other files are just included as binaries.
1. Start first the express server, that sets the right headers. See [stockfish.wasm requirements](https://www.npmjs.com/package/stockfish.wasm#requirements) why that is needed.
2. Open in your browser the file `index.html`. You will see nothing.
3. Open the console in your browser, and use some of the UCI commands like `localSF.postMessage('go depth 28')`

See the very good documentation how to use messages here: [Stockfish UCI Commands](https://github.com/official-stockfish/Stockfish/wiki/UCI-&-Commands).

## How did I create that example?

From what I remember, this is more or less what I did:

1. Clone the original repository.
2. Try to build it, failed.
3. Install `emsdk`. Found on git clone https://github.com/emscripten-core/emsdk.git
4. Tried to build, failed again. Reason was [ticket 42](https://github.com/lichess-org/stockfish.wasm/issues/43), that the original build was done with 2.0.13. So install/activate 2.0.13 did the job.
5. Build stockfish.wasm
6. Tried to run the example, failed.
7. Asked AI Assistant how to fix the problem with the hint to the needed headers (see requirements above). Hint was, to install `express`. To use it in a real web server, you have to find your own solutions.