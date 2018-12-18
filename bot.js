//REALLY BAD BUSINESS TWITTER BOT
//CREATED BY STEVE SEFCHICK

//TODO - random business pics

var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);


const express = require('express');
const app = express();
const port = process.env.PORT;

app.all("/" + process.env.BOT_ENDPOINT, function (req, res) {
    /* The example below tweets out "Hello world!". */
    Twitter.post('statuses/update', { status: generatePost() }, function(err, data, response) {
      if (err){
        console.log('error!', err);
        res.sendStatus(500);
      }
      else{
        res.sendStatus(200);
      }
    });
  });

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Listening on port ${port}!`));

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
    "John",
    "Barb",
    "Carla",
    "Russ",
    "Jim",
    "Cathy"
];

name = possiblenames[randomnumber(possiblenames.length)];

return name;
}

//function that returns a random duration of time
var getBusinessTime = function() {
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


//function that returns a random meeting
var getBusinessMeeting = function() {
    var meetingtime="";
    
    var possiblemeeting= [
        "corporate onboarding",
        "board meeting",
        "daily standup",
        "morning standup",
        "evening standup",
        "lessons learned meeting",
        "sprint showcase",
        "end of year review",
        "vendor onsite meeting",
        "interview"
    ];
    
    meetingtime = possiblemeeting[randomnumber(possiblemeeting.length)];
    
    return meetingtime;
}



//function that gets a business related thing
var getBusinessThing = function() {
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
        "coffee"
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
        "delay",
        "reach out",
        "scope out",
        "ping",
        "touch base",
        "park",
        "drill into",
        "take offline",
        "re-invent"
    ];
    
    bizverb = possibleverb[randomnumber(possibleverb.length)];
    
    return bizverb;
}


//function that gets a business related greeting
var getBusinessGreeting = function() {
    var bizgreeting="";
    
    var possiblegreeting= [
        "Hey",
        "Hello",
        "Greetings",
        "Good morning",
        "Good afternoon",
        "Good evening",
        "Salutations"
    ];
    
    bizgreeting = possiblegreeting[randomnumber(possiblegreeting.length)];
    
    return bizgreeting;
}



//function that gets a business exclamation
var getBusinessExclamation = function() {
    var bizwoah="";
    
    var possiblewoah= [
        "Synergy!",
        "Agile Methodology!",
        "Digital Transformation!",
        "Holy crap!",
        "Aw, shoot!",
        "Son of a...!",
        "AAARGH!",
        "Holy cow!"
    ];
    
    bizwoah = possiblewoah[randomnumber(possiblewoah.length)];
    
    return bizwoah;
}




var generatePost = function()
{
    var corePost = "";
    var corePostVersion=randomnumber(5);

    // Hey [name], I'm on the road but I'm going to be [time duration] late to our [thing] meeting, can you start it without me?
    if (corePostVersion == 0)
    {
        corePost= getBusinessGreeting() + " " + getBusinessNames() + ", I'm on the road but I'm going to be " + getBusinessTime() + " late to our " +getBusinessMeeting() +". Can you start without me?";
    }
    else if (corePostVersion == 1)
    {
        corePost= "It's " + getBusinessNames() + " from the " + getBusinessThing() + " team over here. Who else is on the call?";
    }
    else if (corePostVersion == 2)
    {
        corePost= getBusinessGreeting() + " team, can we " + getBusinessVerb() + " that " + getBusinessThing() + " email you sent " + getBusinessTime() + " ago?";
    }
    else if (corePostVersion == 3)
    {
        corePost= getBusinessExclamation() + " I spilled coffee all over my " + getBusinessThing() + " again!";
    }
    else if (corePostVersion == 4)
    {
        corePost= "Did you see " + getBusinessNames() + " run the " + getBusinessMeeting() + "? " + getBusinessExclamation();
    }
    return corePost;
}


var postSomeBusiness = function()
{
    var post = generatePost();

    console.log('Posting--> ' + post);
    
    // comment this out when testing!
    //Twitter.post('statuses/update', {status: post}, function(err, data, response) {
     //   console.log(data)
    //})
    
}

postSomeBusiness();
setInterval(postSomeBusiness, 30000000);
//3000000 is safe (50 minutes)
//300 is rapid fire
