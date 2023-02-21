const {Request, Response} = require('express');
const genreService = require('../services/genre.service');

const artistController = {
    /**
     * Get All
     * @param {Request} req 
     * @param {Response} res 
     */
    getAll : async (req, res) =>{
        // res.sendStatus(501) //erreur = http code pas encore implémenter
        
        // Si controlleur implémenter
        const genres = await genreService.getAll();
        // On récupére des gens format DTO
        res.status(200).json(genres);


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

module.exports = artistController;