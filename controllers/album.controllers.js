const {Request, Response} = require('express');

const albumController = {
    /**
     * Get All
     * @param {Request} req 
     * @param {Response} res 
     */
    getAll : (req, res) =>{
        res.sendStatus(501) //erreur = http code pas encore implémenter
    },
       /**
     * Get By Id
     * @param {Request} req 
     * @param {Response} res 
     */
    getByID : (req, res) =>{
        res.sendStatus(501) //erreur = http code pas encore implémenter        
    },
       /**
     * create
     * @param {Request} req 
     * @param {Response} res 
     */
    create : (req, res) =>{
        res.sendStatus(501) //erreur = http code pas encore implémenter
        
    },
       /**
     * update
     * @param {Request} req 
     * @param {Response} res 
     */
    update : (req, res) =>{
        res.sendStatus(501) //erreur = http code pas encore implémenter
        
    },
       /**
     * delete
     * @param {Request} req 
     * @param {Response} res 
     */
    delete : (req, res) =>{
        res.sendStatus(501) //erreur = http code pas encore implémenter
        
    },
    
}

module.exports = albumController;