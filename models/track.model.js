const { Sequelize, ModelStatic, DataTypes } = require("sequelize");


/**
 * consrructeur du Model Album
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>} 
 */

module.exports= (sequelize) => {
    const Track = sequelize.define( 'Track',{
        // id pas besoin car se fait seul et auto incrémenter
        title: {

            type : DataTypes.STRING(100),
            allowNull : false
        },
        duration : {
            // on la laisse en seconde pour avoir qu'un seul chiffre dans la DB, puis en front on convertira les sec en minutes ou heures
             type: DataTypes.INTEGER,
             allowNull : false
        }
    }, {
      
        tableName :  'Track',
     
    });


    return Track;
}