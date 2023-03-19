const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect('mongodb://localhost:27017/moviesDB').then(() =>
        console.log('Connected to moviesDB!')).catch((error) => console.log(error));
};

module.exports = connectDB;

