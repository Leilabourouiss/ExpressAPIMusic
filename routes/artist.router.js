const artistRouter = require('express').Router();
const artistController = require('../controllers/artist.controllers')
artistRouter.route('/')
    .get(artistController.getAll)
    .post(artistController.create)

artistRouter.route('/:id')
    .get(artistController.getByID)
    .put(artistController.update)
    .delete(artistController.delete)

module.exports = artistRouter;