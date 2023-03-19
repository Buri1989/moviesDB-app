const express = require('express');
const cors = require('cors');
const connectDB = require('./configs/db');
const moviesRouter = require('./routers/moviesRouter');

const app = express();
const port = 8000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/movies', moviesRouter)

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
})