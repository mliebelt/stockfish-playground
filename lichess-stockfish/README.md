# Overview

Uses the repository https://github.com/hi-ogawa/Stockfish, that is used by Lichess in the web browser.
Tried to use Emscripten 2.0.26 (as in the vercel example), but failed. 
Issue https://github.com/emscripten-core/emsdk/issues/862 says that some errors are fixed in 2.0.30, so upgraded.

The goal is to have a similar / the same engine running as Lichess. The build with the above versions ran successful, so let us see, if Stockfish can be loaded.
