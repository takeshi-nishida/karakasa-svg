/// <binding />
"use strict";

module.exports = {
    entry: "./test/app.js",
    output: {
        filename: "./test/bundle.js"
    },
    module: {
        loaders: [
        ]
    },
    resolve: {
        extensions: ['', '.js']
    }
};