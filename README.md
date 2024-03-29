# stockfish-playground

Try out different stockfish versions, and describe exactly what the pre-requisits are to use those versions. The goals here are:

* Understand what the different stockfish versions give you.
* Describe exactly from a user perspective (that means, the developer that wants to use stockfish in his application), what is necessary to use which version.
* Provide (if possible) at least one example, that shows how to integrate that version:
  * Create an HTML file with some Javascript in it to run stockfish.
  * Try to isolate the stockfish code, so that only one file is loaded in HTML.

## What to do?

* Collect different versions of stockfish.
* Describe each version with its relevant properties: features included, how active developed/maintained/...
* Setup for each version its own directory.
* Collect for each implementation all relevant "things". May be, some binary file, or including something as npm package, ...
* Have a `package.json` file that is sufficient to create a runnable version.
* Have a `README.md` file, that summarizes what is essential.
* (optional) Try to isolate the installation and integration from using stockfish (because that is what everyone has to do at the end).

## Candidates

* stockfish.wasm: version created by niklasf. See [stockfish.wasm repository](https://github.com/lichess-org/stockfish.wasm) for details. See [directory stockfish.wasm](stockfish.wasm) how to use it.
* lichess-stockfish: version used in lichess (perhaps an older one), including some code how to integrate it. The [`README.md`](lichess-stockfish/README.md) file explains how to use it.
* stockfish16: the current version of Stockfish, with all features, finally able to run. The [`README.md`](stockfish16/README.md) explains what is essential for using it.

Not yet tried

* [Web GUI for Stockfish](https://github.com/LabinatorSolutions/stockfish-chess-web-gui) Seems to use an older version of stockfish (version 10), but maybe I can learn something from the UI.
