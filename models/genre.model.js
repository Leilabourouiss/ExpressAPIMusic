const { Sequelize, ModelStatic, DataTypes } = require("sequelize");


/**
 * consrructeur du Model Genre
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>} 
 */

module.exports= (sequelize) => {
    const Genre = sequelize.define('Genre',{
        // id pas besoin car se fait seul et auto incrémenter
        name : {
            type : DataTypes.STRING(50), // si on précise rien SQL server met à 250 --> pour un name il vaut mieux préciser
            allowNull : false,
            unique : 'UK_GENRE_NAME'
            // unique: soit booléen ( vrai ou faux, mais faux pas utile et vrai va mettre un nom de clé horrible), ou un chaine de caractère, qui sera le nom que portera la clé et ça sera unique car Unique ets précisé
            
        }
    }, {
        //  LAISSE TOUT EN SINGULIER CAR UNE ENTITE DONC SING + EN DEB SEQUELIZE MET AUTOMATIQUEMENT AU PLURIEL
        // Préciser soit-meme --> 
        tableName : 'Genre',
        timestamps : false,// par défaut à true, crée deux colonne created_at et updated_at pour stocker date de création et date de modification
        // updatedAt : false, // pas d'update mais création ok
        // createdAt : false, //pas de création mais update ok

    });


    return Genre;
}