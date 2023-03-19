const express = require('express');
const moviesBLL = require('../BLL/moviesBLL');

const router = express.Router();

/*Entry Point 'http://localhost:8000/movies */

/*Get All Movies */
router.route('/').get(async (req, res) => {
    try {
        const movies = await moviesBLL.getAllMovies();
        res.json(movies);
    }
    catch (error) {
        res.json(error);
    }
});

/*Get movie by id */
router.route('/:id').get(async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await moviesBLL.getMovieById(id);
        res.json(movie);
    }
    catch (error) {
        res.json(error);
    }
});

/*Add a movie  */
router.route('/').post(async (req, res) => {
    try {
        const obj = req.body;
        const result = await moviesBLL.addMovie(obj);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});

/*Updated movie */
router.route('/:id').put(async (req, res) => {
    try {
        const { id } = req.params;
        const obj = req.body;
        const result = await moviesBLL.updateMovie(id, obj);
        res.json(result);
    }
    catch (error) {
        res.json(error);
    }
});

/*Delete movie */
router.route('/:id').delete(async (req, res) => {
    try {
        const { id } = req.params;
        const result = await moviesBLL.deleteMovie(id);
        res.json(result);
    }
    catch (error) {
        res.json(`The error is: ${error.name}`);
    }
});

module.exports = router;