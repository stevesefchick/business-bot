//Class that returns a randomly generated business greeting!

//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



module.exports = {
 getBusinessGreeting: function() {
    var bizgreeting="";
    
    var possiblegreeting= [
        "Hey",
        "Hello",
        "Greetings",
        "Good morning",
        "Good afternoon",
        "Good evening",
        "Salutations",
        "Hi"
    ];
    
    bizgreeting = possiblegreeting[randomnumber(possiblegreeting.length)];
    
    return bizgreeting;
    }
};