function stockfishInit(options) {
    let engine = typeof STOCKFISH === "function" ? STOCKFISH() : new Worker(options.stockfishjs || 'stockfish.js#stockfish.wasm')
    engine.onmessage = function (event) {
        console.log("Engine event: "  + event.data)
    }
    return engine
}
