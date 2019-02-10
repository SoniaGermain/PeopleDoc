# PeopleDoc readme

## Installation

Si on respecte l'arborescence décrite dans le lien windows
de l'installation nightwatch du mail. Pour exécuter mes tests il faut :

1. Créer un répertoire qui se nomme "TestPeopleDoc" dans : C:\dev\nightwatch\node_modules\nightwatch

2. Copier les répertoires "objectPage" et "tests"

3. Modifier le fichier de conf nightwatch.json :

Il faut modifier les lignes suivantes :

* "src_folders" : ["../examples/tests", "../examples/mocha","../examples/unittests"],       
par : "src_folders" : ["../examples/tests","../examples/mocha","../examples/unittests","../TestPeopleDoc/tests"],

* "page_objects_path" : "../examples/pages",        
par "page_objects_path" : ["../TestPeopleDoc/objectPage", "../examples/pages"],

* "filter" : "../examples/unittests/*",        
par "filter": ["../examples/tests","../TestPeopleDoc/tests"],


**Note** Si vous ne souhaitez pas modifier le fichier de config. Il faut copier tous les fichiers du répertoire "tests" dans le dossier "examples/tests" et le fichier du répertoire "objectPage" dans le dossier "examples/pages"

## Exécution

### XKCD
* _Commande_ : node .\nightwatch -e chrome -g xkcd

* _SCENARIO_ :    
    En tant qu'utilisateur, je me rends sur l'adresse 'https://xkcd.com/';    
    En tant qu'utilisateur, je vérifie que la page d'accueil est bien affichée en m'assurant que l'url est 'https://xkcd.com/';    
    En tant qu'utilisateur, je clique sur le bouton "Random";    
    En tant qu'utilisateur, je vérifie que la planche affichée est bien modifiée;    
    En tant qu'utilisateur, Je clique sur ma planche préférée ;    
    En tant qu'utilisateur, je vérifie que ma planche préférée est bien affichée.    

### BOULETCORP :
* _Commande_ : node .\nightwatch -e chrome -g bouletcorp

* _SCENARIO_ :    
    En tant qu'utilisateur, je me rends sur l'adresse 'http://www.bouletcorp.com/';    
    En tant qu'utilisateur, je clique sur le bouton "Aléatoire";    
    En tant qu'utilisateur, je vérifie que la planche affichée est bien modifiée;    
    En tant qu'utilisateur, je vérifie que le widget Facebook est bien affiché.    
    En tant qu'utilisateur, je vérifie que le widget Twitter est bien affiché.    
    En tant qu'utilisateur, je vérifie que le widget Trumbl est bien affiché.    

### OUISNCF :
* _Commande_ : node .\nightwatch -e chrome -g ouisncf

* _SCENARIO_ :    
    En tant qu'utilisateur, je me rends sur l'adresse 'https://www.oui.sncf/';    
    En tant qu'utilisateur, je saisie une ville de départ dans la recherche;    
    En tant qu'utilisateur, je saisie une ville d'arrivée dans la recherche;    
    En tant qu'utilisateur, je saisie une date et heure dans la recherche.   
    En tant qu'utilisateur, je vérifie que le train de 16H30 est bien affiché. 
    
## Infos tests

* Le tests Ouisncf qui vérifie la présence d'un train à 16h30 échoue car il n'ya pas de train Paris - Angers à 16h30 le 24/07
* Dans le cas du test ouisncf, il m'est arrivé une fois lors de l'exécution d'un test auto d'avoir une popup pubicitaire empêchant l'exécution correct du test. 
