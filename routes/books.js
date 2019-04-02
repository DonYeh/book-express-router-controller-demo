const express = require('express');

const Router = express.Router;

const bookRoutes = Router();

const {
    create,
    retrieveAll,
    update, deleteOne
} = require('../controllers/books');


bookRoutes.get('/', retrieveAll);

bookRoutes.get('/')

bookRoutes.post('/', create)

bookRoutes.put('/', update)

bookRoutes.delete('/', deleteOne)

module.exports = bookRoutes;