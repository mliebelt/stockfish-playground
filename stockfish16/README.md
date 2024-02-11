# Stockfish 16

This is the official port of stockfish with all current features. I will try to understand how it is integrated then in a web page, by trying out some examples.

It should work like that:

1. Do `npm install` to have all files locally.
2. Do `npm run copy-lib` to copy the relevant library files to the directory `lib`.
3. Start a web server by running `npm run serve`.
4. Go to URL `http://localhost:8080/index.html` and see if the example is running.

## Hints

### How to find NNUE?

From the start, you get errors when starting the example. The reason is, that the NNUE data file is not available. I found the following to be helpful:

* Start your example, and look at the console.
* Search there for `Reply: option name EvalFile type string default nn-5af11540bbfe.nnue`
* Go to `https://tests.stockfishchess.org/api/nn/` and append the last word (here: `nn-5af11540bbfe.nnue`)
* Save the file in the same directory where you have located the symbolic links (in my example this directory), so that the NNUE file can be found.