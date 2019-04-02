const express = require('express');

const Router = express.Router;

const bookRoutes = Router();

const {
    create,
    retrieveAll,
    getByID,
    update,
    deleteOne
} = require('../controllers/books');


bookRoutes.get('/', retrieveAll);

bookRoutes.get('/:id', getByID);

bookRoutes.post('/', create);

bookRoutes.put('/', update);

bookRoutes.delete('/', deleteOne);

module.exports = bookRoutes;