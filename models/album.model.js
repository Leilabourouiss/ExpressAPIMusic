const { Sequelize, ModelStatic, DataTypes } = require("sequelize");


/**
 * consrructeur du Model Album
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>} 
 */

module.exports= (sequelize) => {
    const Album = sequelize.define('Album',{
        // id pas besoin car se fait seul et auto incrémenter
        title : {
            type : DataTypes.STRING(50), // si on précise rien SQL server met à 250 --> pour un name il vaut mieux préciser
            allowNull: false
        },
        cover : {
            type : DataTypes.STRING(),
            allowNull : true
        }
    }, {
      
        tableName : 'Album',
     
    });


    return Album;
}