const trackRouter = require('express').Router();
const trackController = require('../controllers/track.controllers')

trackRouter.route('/')
    .get(trackController.getAll)
    .post(trackController.create)

trackRouter.route('/:id')
    .get(trackController.getByID)
    .put(trackController.update)
    .delete(trackController.delete)

module.exports = trackRouter;