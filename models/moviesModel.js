const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
    {
        name: String,
        director: String,
        premieredYear: Number
    },
    { versionKey: false }
);

const Movie = mongoose.model('movie', movieSchema)

module.exports = Movie;