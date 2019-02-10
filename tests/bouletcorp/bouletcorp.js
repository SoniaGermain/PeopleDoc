/**
 * Aumated test scenario for bouletcorp
 *
 * 
 * 
 SCENARIO :
    En tant qu'utilisateur, je me rends sur l'adresse 'http://www.bouletcorp.com/';
    En tant qu'utilisateur, je clique sur le bouton "Aléatoire";
    En tant qu'utilisateur, je vérifie que la planche affichée est bien modifiée;
    En tant qu'utilisateur, je vérifie que le widget Facebook est bien affiché.
    En tant qu'utilisateur, je vérifie que le widget Twitter est bien affiché.
    En tant qu'utilisateur, je vérifie que le widget Trumbl est bien affiché.


 */

 var block_origin;

module.exports = {
  '@disabled': false,

/*Function to verify random board 
 *
*/
  'verify random page' : function (client) {
    // load website "bouletcorp"
    client.url('http://www.bouletcorp.com/');

    // Take value of the home block
      // => inspection de l'élément jspath (qui est unique) qui correspond à la planche principale de la page. Le chemin css n'est pas unique
    client.getValue('#notes > div.storycontent > p > img:nth-child(1)', function (result) {
      block_origin=result;
    });

    /* Go to random block */
    client.click("html body div#page-wrap div#page div#main div#tabvanilla.widget div#note_browser div#centered_nav a");
    
    // Check random block is load 
    // => inspection de l'éléments jspath (qui est unique) qui correspond à la planche principale de la page. Le chemin css n'est pas unique
    client.expect.element('#notes > div.storycontent > p > img:nth-child(1)')
    .to.have.attribute('src')
    .not.equals(block_origin,'Chek if the home board is present');

  },

  'verify socials widgets' : function(client) {

    // => Pour chacun des widget :
    // => inspection de l'éléments jspath (qui est unique) qui correspond à l'image du widget. Le chemin css n'est pas unique
    // => et inspection de l'éléments jspath (qui est unique) qui correspond au lien du widget. Le chemin css n'est pas unique
    // => Ainsi on vérifie que chaque widget est présent et fonctionnel

    /** Verify twitter widget **/
    /* 1 - verify Twitter picture  */
     // => inspection de l'éléments jspath (qui est unique) qui correspond à l'image du widget Twitter'. Le chemin css n'est pas unique
    client.expect.element('#network_social > ul > li:nth-child(1) > a > img')
    .to.have.attribute('src')
    .equals('http://www.bouletcorp.com/wp-content/plugins/socialize-this/widgets/alteredicons/twitter.png', 'check if the twitter picture is present');

    /* verify Twitter link */
    client.expect.element('#network_social > ul > li:nth-child(1) > a')
    .to.have.attribute('href')
    .contains('http://twitter','check if the twitter link is present'); 

    /* Verify Facebook widget */
    /* 1 - Verify Facebook picture */
    client.expect.element('#social_network > ul > li:nth-child(3) > a > img')
    .to.have.attribute('src')
    .equals('http://www.bouletcorp.com/wp-content/themes/bouletcorp_versionned/images/icons/facebook.png','check if the Facebook picture is present');

     /* 2 - Verify Facebook link */
     client.expect.element('#social_network > ul > li:nth-child(3) > a')
    .to.have.attribute('href')
    .contains('http://www.facebook.com/','check if the Facebook link is present');

    /* Verify Tumblr widget  */
    /* 1 - Verify Tumblr picture */
    client.expect.element('#network_social > ul > li:nth-child(4) > a > img')
    .to.have.attribute('src')
    .equals('http://www.bouletcorp.com/wp-content/themes/bouletcorp_versionned/images/icons/Tumblr.png', 'check if the Trumbl picture is present');

     /* 2 - Verify Tumblr link */
     client.expect.element('#network_social > ul > li:nth-child(4) > a')
    .to.have.attribute('href')
    .contains('http://bouletcorp.tumblr.com/', 'check if the twitter link is present');

  },

};

