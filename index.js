const express = require('express')

const PORT = 3006

const bookRouter = require('./routes/books');

const app = express();

app.use('/books', bookRouter);

app.listen(PORT, () => {
    console.log(`Running on ${PORT}!`);
});