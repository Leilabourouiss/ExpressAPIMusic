const {Sequelize} = require('sequelize');

// récupération des variable d'environnement
// __________________________________________
const {DB_SERVER, DB_DATABASE, DB_PASSWORD ,DB_USERNAME} = process.env;

// Initialisation Sequelize
// __________________________
// différence entre sequelize et Sequelize --> nouvelle instance de la librairie ( au dessus) --> classe qui permet de créer un objet Sequelise et celui en minuscule c'est juste la variable dans laquelle on stock l'objet Sequelize
const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host : DB_SERVER,
    dialect : 'mssql' //Pour travailler avec Sequelize, à changer si on veut un autre language et installer la libraire correspondante. --> pas tedious mais un autre à la place ( voir doc)
})

// Création de l'objet db
// ______________________
const db = {}
// Ajout de l'instance sequelize créée précédemment sur l'objet db
db.sequelize = sequelize;

// Liaison modèles <--> db
// ________________________
db.Genre = require('./genre.model')(sequelize);
db.Album = require('./album.model')(sequelize);
db.Artist = require('./artist.model')(sequelize);
db.Track = require('./track.model')(sequelize);
db.MM_Artist_Track = require('./mm_artist_track.model')(sequelize);
// définition des relations
// _____________________________
// Voir documentation sequelize.org pour savoir comment faire les associations
    // One to many: Entre track et genre
    // ----------------------------------
    db.Genre.hasMany(db.Track); // il va directement créer les foreigns keys dans tracks et primary keu dans genre
    // A has many B indique une relation entre A et B et le FK sera du coté B
    db.Track.belongsTo(db.Genre); 
    // A belongs to B indique une relation entre A et B et la FK sera du coté A

    // many to many: entre track et album
    // -----------------------------------
    db.Track.belongsToMany(db.Album, {through: 'MM_Album_Track'});
    // through = tableau intermédiaire//il n'y a pas de convention mais souvent on écrit MM pour many to many avec le nom des 2 tables lié
    db.Album.belongsToMany(db.Track, {through : 'MM_Album_Track'});
    // A.belongsTo{B,{through: C}} indique une relation entre A et B via une table intermédiaire où on aura deux FK, renvoyant à A et B


    // many to many avec attribut: entre track et artiste
    // ---------------------------------------------------
    // Comme on a un attribut en plus, on crée un model, on l'associe à db et dans le lien, plutôt que de mettre un nom pour la table intermédiaire, on met notre modèle
    db.Track.belongsToMany(db.Artist, {through: db.MM_Artist_Track}),
    db.Artist.belongsToMany(db.Track,{through: db.MM_Artist_Track})

// export de db
// _________________
module.exports = db;