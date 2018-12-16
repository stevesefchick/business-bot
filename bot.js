var twit = require('twit');
var config = require('./config.js');


var Twitter = new twit(config);

//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

//function returns a randomly generated business name
var getBusinessNames = function() {
var name="";

var possiblenames= [
    "Randal",
    "Janet",
    "Mitch",
    "Chris",
    "Michael",
    "Stephanie",
    "Stephen",
    "John"
];

name = possiblenames[randomnumber(possiblenames.length)];

return name;
}

//function that returns a random duration of time
var getBusinessTime = function() {
    var biztime="";
    
    var possibletime= [
        "2 minutes",
        "a few minutes",
        "15 minutes",
        "an hour",
        "4 hours",
        "a few hours"
    ];
    
    biztime = possibletime[randomnumber(possibletime.length)];
    
    return biztime;
}


//function that gets a business related thing
var getBusinessThing = function() {
    var bizthing="";
    
    var possiblething= [
        "synergy",
        "business",
        "ROI",
        "time card"
    ];
    
    bizthing = possiblething[randomnumber(possiblething.length)];
    
    return bizthing;
}

//function that gets a business related verb
var getBusinessVerb = function() {
    var bizverb="";
    
    var possibleverb= [
        "synergize",
        "circle back",
        "delay"
    ];
    
    bizverb = possibleverb[randomnumber(possibleverb.length)];
    
    return bizverb;
}


//function that gets a business related verb
var getBusinessGreeting = function() {
    var bizgreeting="";
    
    var possiblegreeting= [
        "Hey",
        "Hello",
        "Greetings",
        "Good morning",
        "Good afternoon",
        "Good evening"
    ];
    
    bizgreeting = possiblegreeting[randomnumber(possiblegreeting.length)];
    
    return bizgreeting;
}

var generatePost = function()
{
    var corePost = "";
    var corePostVersion=randomnumber(3);

    // Hey [name], I'm on the road but I'm going to be [time duration] late to our [thing] meeting, can you start it without me?
    if (corePostVersion == 0)
    {
        corePost= getBusinessGreeting() + " " + getBusinessNames() + ", I'm on the road but I'm going to be " + getBusinessTime() + " late to our " + getBusinessThing() + " meeting. Can you start without me?";
    }
    else if (corePostVersion == 1)
    {
        corePost= "It's " + getBusinessNames() + " from the " + getBusinessThing() + " team over here. Who else is on the call?";
    }
    else if (corePostVersion == 2)
    {
        corePost= getBusinessGreeting() + " team, can we " + getBusinessVerb() + " on that " + getBusinessThing() + " email you sent " + getBusinessTime() + " ago?";
    }
    return corePost;
}


var postSomeBusiness = function()
{
    var post = generatePost();

    console.log('Posting--> ' + post);
    /*
    // comment this for now, we know this works!
    Twitter.post('statuses/update', {status: post}, function(err, data, response) {
        console.log(data)
    })
    */
}

postSomeBusiness();
setInterval(postSomeBusiness, 300);
//was 3000000
