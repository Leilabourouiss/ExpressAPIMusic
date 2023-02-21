const { Sequelize, ModelStatic, DataTypes } = require("sequelize");


/**
 * consrructeur du Model Artist
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>} 
 */

module.exports= (sequelize) => {
    const Artist = sequelize.define( 'Artist',{
        // id pas besoin car se fait seul et auto incrémenter
        firstname: {

            type : DataTypes.STRING(100),
            allowNull : false
        },
        lastname : {
             // nullable si la personne à un pseudo
             type: DataTypes.STRING(50),
             allowNull : true
        },
        birthdate : {
            type: DataTypes.DATE,
            allowNull: true
        },
        deathdate : {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
      
        tableName :  'Artist',
     
    });


    return Artist;
}