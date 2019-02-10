/**
 * Aumated test scenario for XKCD
 *
 * 
 SCENARIO :
    En tant qu'utilisateur, je me rends sur l'adresse 'https://xkcd.com/';
    En tant qu'utilisateur, je vérifie que la page d'accueil est bien affichée en m'assurant que l'url est 'https://xkcd.com/';
    En tant qu'utilisateur, je clique sur le bouton "Random";
    En tant qu'utilisateur, je vérifie que la planche affichée est bien modifiée;
    En tant qu'utilisateur, Je clique sur ma planche préférée ;
    En tant qu'utilisateur, je vérifie que ma planche préférée est bien affichée.

 */

 var block_origin_xckd;
 var block_random_xckd;
 var home = null;
// const home;

module.exports = {
  '@disabled': false,


  'check home page' : function (client) {
    //Initialize the ObjectPage homxcdk
    home = client.page.homexckd();

    // Call navigate method ObjectPage. 
      // => la methode navigate() permet d'ouvril l'url déclarée dans la page objet 
    home.navigate();

    //Call method of ObjectPage "homexkcd" to check if home page is correct 
    home.checkHome();
  },

  'check random boards' : function(client) {

    // Take value of the home block 
      // => appel de méthode implémentée dans la page objet
    block_origin_xckd = home.getValuexkcd('@block');

    // CLick on "Random" button to go to a random page
    client.click("html body div#middleContainer.box ul.comicNav li a");
    // check the board of the random page  
    // =>Appel de la méthode dans la page objet qui permet de vérifier 2 planches
    home.verifyblock('@block',block_origin_xckd);
    
  },


  'check favorite board' : function(client) {

    // Take value of the random block
     // => appel de méthode implémentée dans la page objet
    block_random_xckd = home.getValuexkcd('@block');

    // CLick on a block on the page (me favorite block)
    client.click("html body div#bottom.box map#comicmap area");

    // check the oad of the favorite page 
     // =>Appel de la méthode dans la page objet qui permet de vérifier 2 planches
    home.verifyblock('@block',block_origin_xckd); 

  }
};

