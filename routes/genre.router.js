const genreRouter = require('express').Router();
const genreController = require('../controllers/genre.controllers')

// genreRouter.get('/', () => {})
// genreRouter.get('/:id', () => {})
// genreRouter.post('/', () => {})
// genreRouter.put('/:id', () => {})
// genreRouter.delete('/:id', () => {})

// --> autre façon plus courte d'écrire: rassembler les route qui se rèpetent pour pouvoir voir plus facilement combien de méthodes sont appliquées à une route

genreRouter.route('/')
    .get(genreController.getAll)
    .post(genreController.create)

genreRouter.route('/:id')
    .get(genreController.getByID)
    .put(genreController.update)
    .delete(genreController.delete)


module.exports = genreRouter;