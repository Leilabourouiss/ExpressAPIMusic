const albumRouter = require('express').Router();
const albumController = require('../controllers/album.controllers');

albumRouter.route('/')
    .get(albumController.getAll)
    .post(albumController.create)

albumRouter.route('/:id')
    .get(albumController.getByID)
    .put(albumController.update)
    .delete(albumController.delete)

module.exports = albumRouter;