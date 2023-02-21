// configuration des variables d'environnement
require('dotenv').config();

// Import d'express
const express = require ('express');
    // il faut importer le middleware pour qu'il fonctionne dans le porjet 
// Import di middleware express async errors
require('express-async-errors')
// création du serveur
const app = express();

// Import db
const db = require('./models')
// Connection à la db 
db.sequelize.authenticate() // info déjà fourni dans index.js de model --> promesse donc try et catch
    .then(() => console.log(('connection DB sucessfull')))
    .catch((err) => console.log('connexion DB failed:', err))
    // Synchro db
    // à faire que si on est en dev
    if(process.env.NODE_ENV === 'development'){
        // db.sequelize.sync({force : true});
        // force comn bourrin, supprime les tables et recréer tout à chaque sync
        // db.sequelize.sync({alter: {drop: false}});
        // regarde l'état actuel de la db, ajoute ce qui peut être ajouté, modifie les colonnes, suppression de colonnes et/ou tables interdites
    }

    // Middleware app-lvl

    // Router
    const router = require('./routes');
    app.use('/api' ,router);
    // lacement serveur
    app.listen(process.env.PORT, () => {
        console.log(`Server API started on port:${process.env.PORT}`);
    });
