//Class that returns a randomly generated business exclamation! SYNERGY?!

//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



module.exports = {
 getBusinessExclamation: function() {
    var bizwoah="";
    
    var possiblewoah= [
        "Synergy!",
        "Agile Methodology!",
        "Digital Transformation!",
        "Holy crap!",
        "Aw, shoot!",
        "Son of a...!",
        "AAARGH!",
        "Holy cow!",
        "TGIF!",
        "BCC me on the email!",
        "We have to downsize!",
        "Blue ocean strategy!",
        "Let me recommend a book to you!"
    ];
    
    bizwoah = possiblewoah[randomnumber(possiblewoah.length)];
    
    return bizwoah;
    }
};