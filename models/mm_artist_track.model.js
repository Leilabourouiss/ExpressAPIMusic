const { Sequelize, ModelStatic, DataTypes } = require("sequelize");


/**
 * consrructeur du Model MM_Artist_Track
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>} 
 */

module.exports= (sequelize) => {
    const MM_Artist_Track = sequelize.define( 'MM_Artist_Track',{
        // id pas besoin car se fait seul et auto incrémenter
        feat: {

            type : DataTypes.BOOLEAN,
            allowNull : false,
            defaultValue : false
        }
    }, {
      
        tableName :  'MM_Artist_Track',
     
    });


    return MM_Artist_Track;
}