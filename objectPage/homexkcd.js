/*
Page objet permettant de gérer les éléments de la page d'accueil xkcd
*/



module.exports = {
  url: 'https://xkcd.com/',

  commands: [
    {
      //Function to check if we are on Home page
      checkHome: function() {

      // Check url is ok
    this.assert.urlEquals("https://xkcd.com/");

    return this; 
    },

    //Function to check if we are on Home page
    getValuexkcd: function(el) {

      //Get the value of a field in the page
    this.getValue(el, function (result) {
       return result; 
      });

    return this; 
    },

     //Function to check if we are on Home page
     verifyblock: function(block_toverify,block_verify_with) {

        // Verify the element 'block_toverify is equal to another 'block_verify_with
      this.expect.element(block_toverify)
      .to.have.attribute('src')
      .not.equals(block_verify_with);
  
      return this; 
      }

  }
  ],

  elements: {
    // Declaration of the block element. Can be used in pages tests.
    block: 'html body div#middleContainer.box div#comic img',
  }
};