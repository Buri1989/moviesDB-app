const Movie = require('../models/moviesModel')

/*Get - Get All - Read */
const getAllMovies = () => {
    return Movie.find({})
};

/*Get - Get by ID - Read */
const getMovieById = (id) => {
    return Movie.findById({ _id: id })
};

/*Post - Create  */
const addMovie = async (obj) => {
    const mvi = new Movie(obj);
    await mvi.save()
    return 'Created!'
};

/*PUT - Update */
const updateMovie = async (id, obj) => {
    await Movie.findByIdAndUpdate(id, obj)
    return 'Updated!'
};

/*DELETE - Delete */
const deleteMovie = async (id) => {
    await Movie.findByIdAndDelete(id)
    return 'Deleted!'
};

module.exports = { getAllMovies, getMovieById, addMovie, updateMovie, deleteMovie };