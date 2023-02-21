// ____________________________________________________________________________________________________________
// INTRODUCTION

// DTO = Data Transformation Object
//  On passe souvent (essayer toujours (si c'est possible)) par un DTO pour
    // -|-sécurité: enlever des données à ne pas transmettre au front(ex: un password hashé)
    // -|-Avoir plusieurs modèles différents à envoyer au front: comme on peut en avoir plusieurs: on peut faire autant de classe que l'on souhaite et après on les export tous dans le module export

 class GenreDTO{
    constructor({id, name}){ //{ colonne car objet avec ID et un name: pour après pouvoir fournir un objet genre sans mettre genre.name}
        this.id = id;
        this.name = name;
    }
 }

 module.exports = {GenreDTO}
 
