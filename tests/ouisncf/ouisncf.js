/**
 * Aumated test scenario for ouisncf
 *
 * 
 SCENARIO : 
    En tant qu'utilisateur, je me rends sur l'adresse 'https://www.oui.sncf/';
    En tant qu'utilisateur, je saisie une ville de départ dans la recherche;
    En tant qu'utilisateur, je saisie une ville d'arrivée dans la recherche;
    En tant qu'utilisateur, je saisie une date et heure dans la recherche.
    En tant qu'utilisateur, je vérifie que le train de 16H03 est bien affiché.
 */


module.exports = {
  '@disabled': false,


    // Search tickets functions.
  'search ticket' : function (client) {
    // load website "ouisncf"
    client.url('https://www.oui.sncf/');

    //Input fields "départ" and "destination"
    //=> sélection du css #vsb-origin-train-home qui correspond à la case de saisie de la ville de départ etsaisie de "Paris"
    client.setValue('#vsb-origin-train-home','Paris');
    client.pause(2000);
      // => Validation du premier élément de la liste de résultats
    client.click('#vsb-booking-train > div.booking-content-block-second > fieldset > div > div.vsb-autocomplete.origin.vsb-input-wrapper');
    client.keys(client.Keys.ENTER);

    // => attente de la prise en compte de la sélection
    client.pause(1000);
  

    //=> sélection du css #vsb-destination-train-home qui correspond à la case de saisie de la ville d'arrivée et saisie de "Angers"
    client.setValue('#vsb-destination-train-home','Angers');
    client.pause(5000);
    // => Validation du premier élément de la liste de résultats
    client.click('#vsb-booking-train > div.booking-content-block-second > fieldset > div > div.vsb-autocomplete.destination.vsb-input-wrapper');
    client.keys(client.Keys.ENTER);
    // => attente de la prise en compte de la sélection
    client.pause(1000);


//=> Exéction d'une fonction en Javascript natif car cet élément 'vsb-departure-train-home-date-time' n'était pas trouvé sur la page
    client.execute(function() {
      //Input departure date and time  
      document.getElementById('vsb-departure-train-home-date-time').innerHTML='24/07/19 - Départ à 16h';

      return true;
    }, [], function(result) {

      //=> On attend que la popup calendrier soit bien ouvert
      client.waitForElementVisible('#vsb-departure-train-home-date-time',10000,'Element %s was not in the page for %d ms');
      // Submit departure date and time
      client.click('#vsb-departure-train-home-date-time');
   
      //=> On attend que la case 24/07 soit présente
      client.waitForElementVisible('#train-home-d-24-07-2019 > div',50000,'Element %s was not in the page for %d ms');

      // => Appel du javascript car le client.click() ne trouvais pas l'élément sur la page
      client.execute(function () {
        document.getElementById('train-home-d-24-07-2019').click();
  
      });

      //=> On attend que l'élément de validation de la date soit bien afficher. Permet d'être sûr qu'on essaie pas de cliquer sur un élément non chargé
      client.waitForElementVisible('#vsb-departure-train-home-modal-submit > span',50000,'Element %s was not in the page for %d ms');

        // => Appel a du javascript car le client.click() ne trouvais pas l'élément sur la page
      client.execute(function () {
        document.getElementById('vsb-departure-train-home-modal-submit').click();
  
      });
       //=> On attend que l'élément de validation de la recherche des billets soit bien afficher. Permet d'être sûr qu'on essaie pas de cliquer sur un élément non chargé
      client.waitForElementVisible('#vsb-booking-train-home-submit',10000,'Element %s was not in the page for %d ms');

    // => Appel a du javascript car le client.click() ne trouvais pas l'élément sur la page
      client.execute(function () {
      document.getElementById('vsb-booking-train-home-submit').click();

    });

      return true;
  
    });


    client.waitForElementVisible('#result-container',10000,'Element %s was not in the page for %d ms');
   
    // => Screenshot pour vérifier que le résultat de la recherche est bien celui attendu
    client.saveScreenshot('C:/dev/nightwatch/node_modules/nightwatch/TestPeopleDoc/tests/ouisncf/recherche.png');

  },

  // Function to verify if the train of 4:30 pm is present
  'verify time' : function(client) {

    //=> déclaration de la variable dans laquelle je vais mettre les résultats du tableau
    var elements;
   
 
    // => Exécution d'une fonction javascript pour parcourir le tableau de résultats
    client.execute(function() {
      // => On met toues les éléments du tableau dans une variable "elements"
      elements = document.querySelectorAll('div > div > div:nth-child(1) > p.time-col.col.valign-b > time');
      // => variable dans laquelle je vas mettre l'item du tableau correspond à ma recherche
      var value;
      elements.forEach(function(item) { 

        if (item.innerHTML == '16h30') 
        {value = item.innerHTML;}; 

     // => fonction de test pour vérifier que la méthode marche avec un horaire que je sais présent sur la page
      //  if (item.innerHTML == '07h40') 
      //  {value = item.innerHTML;}; 

      });


      return value;
      
    }, [], function(result) {

      client.assert.equal("16h30",result.value);
      // => Commande de test pour vérifier que la fonction assert.equal fonctionne; Test avec un horaire que je savais présent sur la page
     // client.assert.equal("07h40",result.value);

    }
    );
   


  },

};

