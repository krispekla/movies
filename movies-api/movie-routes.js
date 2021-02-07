const express = require('express');
const moviesRouter = express.Router();
const movieController = require('./movie-controller');
const routeName = '/movies';

moviesRouter.get(`${routeName}`, movieController.getList);
moviesRouter.get(`${routeName}/:id`, movieController.get);
moviesRouter.post(`${routeName}`, movieController.add);
moviesRouter.put(`${routeName}/:id`, movieController.update);
moviesRouter.delete(`${routeName}/:id`, movieController.delete);

module.exports = moviesRouter;
