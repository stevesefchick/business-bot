//Class that returns a randomly generated business verb!
//Can return a current tense of past tense verb

//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



module.exports = {
 getBusinessVerb: function() {
    var bizverb="";
    
    var possibleverb= [
        "synergize",
        "circle back",
        "delay",
        "reach out",
        "scope out",
        "ping",
        "touch base",
        "park",
        "drill into",
        "take offline",
        "re-invent",
        "ideate",
        "innovate",
        "crunch",
        "outsource",
        "crowdsource",
        "drive"
    ];
    
    bizverb = possibleverb[randomnumber(possibleverb.length)];
    
    return bizverb;
    },
getBusinessVerbPast: function() {
    var bizverbpast="";
    
    var bizverbpastpossible= [
        "synergized",
        "circled back",
        "delayed",
        "reached out",
        "scoped out",
        "pinged",
        "touched base",
        "re-invented",
        "ideated",
        "innovated",
        "crunched",
        "outsourced",
        "passed the buck",
        "delegated"
    ];
    
    bizverbpast = bizverbpastpossible[randomnumber(bizverbpastpossible.length)];
    
    return bizverbpast;
}

};