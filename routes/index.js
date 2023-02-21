const albumRouter = require('./album.router');
const artistRouter = require('./artist.router');
const genreRouter = require('./genre.router');
const trackRouter = require('./track.router');

const router =  require('express').Router();


// définition des routes
router.use('/genre', genreRouter);
router.use('/artist', artistRouter);
router.use('/track', trackRouter);
router.use('/album', albumRouter);

module.exports = router;