//Class that returns a randomly generated business timeframe!

//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



module.exports = {
 getBusinessTime: function() {
    var biztime="";
    
    var possibletime= [
        "15 to 30 seconds",
        "2 minutes",
        "37 minutes",
        "a few minutes",
        "15 minutes",
        "an hour",
        "4 hours",
        "a few hours",
        "a day",
        "at least a day",
        "a week",
        "a weekend",
        "a fiscal year"
    ];
    
    biztime = possibletime[randomnumber(possibletime.length)];
    
    return biztime;
    }
};