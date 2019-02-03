//Class that returns a randomly generated business thing!

//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



module.exports = {
 getBusinessThing: function() {
    var bizthing="";
    
    var possiblething= [
        "synergy",
        "business",
        "ROI",
        "time card",
        "low hanging fruit",
        "deep dive",
        "hard stop",
        "report",
        "bandwidth",
        "budget",
        "agile methodology",
        "agile",
        "gamification",
        "stapler",
        "coffee",
        "ideation",
        "bottom line",
        "result",
        "facts and data",
        "big data",
        "machine learning",
        "bitcoin",
        "blockchain",
        "loyalty",
        "customer",
        "labor",
        "email",
        "Slack notification",
        "efficiency",
        "pipeline"
    ];
    
    bizthing = possiblething[randomnumber(possiblething.length)];
    
    return bizthing;
    }
};