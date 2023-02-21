Récap étape

Initialisation du projet
------------------------
- créer un fichier app.js
- npm init --> créer le package.json avec les infos projet + dépendances

Ajouter les première dépendance
-------------------------------
    -Outils de dev
    ................
        Nodemon : npm install --save--dev nodemon
    - Webserver Express : pour installer tout le reste d'un coup npm i express express-async-errors dotenv sequelize tedious
    .....................
        Express
        Express-async-error : Pour catch erreur et afficher 
    - Gestion des variables d'env
    .............................
        dotenv
    - DB(sql Server)
    ---------------
        Sequelize
        Tedious
______________
NEXT STEP /!\  
______________
- créer le ficher git ignore
----------------------------
    ignorer module + fichier d'env
    Si extension gitignore installée -> Ctrkl + Maj + P (F1) -> add gitignore --> node 

1er étape:Création de l'arborésence
___________________________________
.env et .env.example

ajouter dans du scripts dans package json
-------------------------------------------
-"dev"= "nodemon app.js"

créer l'architecture de base
-----------------------------
nomProjet
    ├──controllers/
    ├──dto/
    ├──Middlewares/
    ├──models/
    ├──routes/
    ├──services/
    ├──.env
    ├──gitignore
    ├──app.js
    ├──package-lock.json
    ├──package.json