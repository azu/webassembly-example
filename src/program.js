// program.js
const path = require("path");
require("webassembly")
    .load(path.join(__dirname, "./program.wasm"))
    .then(module => {
        console.log("1 + 2 = " + module.exports.add(1, 2));
    });