const db = require('../models/index')
const {GenreDTO} = require('../dto/genre.dto');


const genreService = {
    getAll : async () => {
        // récupération des genres, tels qu'il sont en db
        console.log(db);
        const genres = await db.Genre.findAll();


        // transformation DTO--> dossier dto; préparer le fichier
        // Ensuite transformation en genre DTO
        return genres.map(genre => new GenreDTO(genre));
    },

    getByID : async (id) => {
        // async car on va faire une recherche en db
        // const genre = await db.Genre.findOne({name :'Pop' })// ON MET LA REQUETTE DANS LES {}: recherche via where
        // autre méthode:
        const genre = await db.Genre.findByPk(id) // ici il n'attend que la clé primaire

        // vérifier si genre a bien une valeur --> si null renvoie 404
        return genre ? new GenreDTO(genre) : null;

    },
    create : async (genreToAdd) => {
        const genre = await db.Genre.create(genreToAdd);
        // Si le créate réussi il renvoie le genre qu'il a créer
    //  On regarde si un genre a été crée ---> Si oui DTO, si non NUll
        return genre ? new GenreDTO(genre) : null;
    },
    update : async (id, genreToUpdate) => {
        const updatedRow= await db.Genre.update(genreToUpdate,{
            where : {id}
        });
        // updateRow est un tableau qui contient:
            // * dans la première case le nombre de lignes affectés
            // * dans la 2e case, les lignes affectées
            // Et on va renvoyer un booléen de la réussite ou l'échec de la demande(=de l'update)
        return updatedRow(0) === 1 ;

    },
    delete : async(id) => {
        const nbDeletedRow = await db.Genre.destroy({
            where : {id} // il n'ya pas destroy pk donc il faut lui dire ou 
        })
        // en retour, il envoie juste un nombre qui correspond au nombre de ligne détruite
        return nbDeletedRow === 1; // si égale a 1 supprimé sinon delete raté
        
    }
}

module.exports = genreService;