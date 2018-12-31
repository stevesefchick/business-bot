//BUSINESS BOT DX
//Built by Steve Sefchick - 2018 - 2019
//Tweets to @BusinessbotDX
//built using NodeJS, configured using Heroku

var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);

var businessname = require('./businessphrases/businessname.js');
var businesstime = require('./businessphrases/businesstime.js');
var businessmeeting = require('./businessphrases/businessmeeting.js');
var businessthing = require('./businessphrases/businessthing.js');
var businessverb = require('./businessphrases/businessverb.js');
var businessgreeting = require('./businessphrases/businessgreeting.js');
var businessexclamation = require('./businessphrases/businessexclamation.js');
var businessdepartment = require('./businessphrases/businessdepartment.js');


const express = require('express');
const app = express();
const port = process.env.PORT;



app.listen(port, () => console.log(`Listening on port ${port}!`));

//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

//function that gets a business related question
var getBusinessQuestion = function() {
    var varquestion="";
    
    var possiblequestion= [
        businessname.getBusinessNames() + " really " + businessverb.getBusinessVerbPast() + " during that " + businessmeeting.getBusinessMeeting() + ", huh?",
        "Where is " + businessname.getBusinessNames() + "? He's been on break for " + businesstime.getBusinessTime() + "!",
        "Can we cancel the " + businessmeeting.getBusinessMeeting() + "?",
        "Is it Friday yet?",
        "Did you get that thing I sent you?"
    ];
    
    varquestion = possiblequestion[randomnumber(possiblequestion.length)];
    
    return varquestion;

}

var generatePost = function()
{
    var corePost = "";
    var corePostVersion=randomnumber(9);
    //debug
    //corePostVersion=9;

    // Hey [name], I'm on the road but I'm going to be [time duration] late to our [thing] meeting, can you start it without me?
    if (corePostVersion == 0)
    {
        corePost= businessgreeting.getBusinessGreeting() + " " + businessname.getBusinessNames() + ", I'm on the road but I'm going to be " + businesstime.getBusinessTime() + " late to our " + businessmeeting.getBusinessMeeting() +". Can you start without me?";
    }
    else if (corePostVersion == 1)
    {
        corePost= "It's " + businessname.getBusinessNames() + " from the " + businessthing.getBusinessThing() + " team over here. Who else is on the call?";
    }
    else if (corePostVersion == 2)
    {
        corePost= businessgreeting.getBusinessGreeting() + " team, can we " + businessverb.getBusinessVerb() + " that " + businessthing.getBusinessThing() + " email you sent " + businesstime.getBusinessTime() + " ago?";
    }
    else if (corePostVersion == 3)
    {
        corePost= businessexclamation.getBusinessExclamation() + " I spilled coffee all over my " + businessthing.getBusinessThing() + " again!";
    }
    else if (corePostVersion == 4)
    {
        corePost= "Did you see " + businessname.getBusinessNames() + " run the " + businessmeeting.getBusinessMeeting() + "? " + businessexclamation.getBusinessExclamation();
    }
    else if (corePostVersion == 5)
    {
        corePost= "Hey " + businessname.getBusinessNames() + "? It's " + businessname.getBusinessNames() + " here, sorry I'm late to the " + businessthing.getBusinessThing() + " call. Can you give me a quick recap?";
    }
    else if (corePostVersion == 6)
    {
        corePost= "TO: " + businessname.getBusinessNames() + "\n" +
        "CC: " + businessname.getBusinessNames() + "\n" +
        "BCC: " + businessname.getBusinessNames() + "\n" + 
        "SUBJECT: " + businessexclamation.getBusinessExclamation() + "\n" + 
        "BODY: " + getBusinessQuestion();
    }
    else if (corePostVersion == 7)
    {
        corePost = "Team, we missed budget this month. We need to cut back on our " + businessthing.getBusinessThing() + " spending and really go for those " + businessthing.getBusinessThing() + "-based sales. That's the only way to keep us " + businessverb.getBusinessVerbPast() + ".";
    }
    else if (corePostVersion ==8)
    {
        corePost = "Sorry I'm late to the " + businessmeeting.getBusinessMeeting() + " again. My " + businessthing.getBusinessThing() + " was acting up.";
    }
    else if (corePostVersion == 9)
    {
        corePost = "Hello, is this " + businessname.getBusinessNames() + "? Great! This is " + businessname.getBusinessNames() + " from " + businessdepartment.getBusinessDepartment() + ", I was wondering if you got my " + businessthing.getBusinessThing() + " report from " + businesstime.getBusinessTime() + " ago?";
    }
    return corePost;
}


var postSomeBusiness = function()
{
    var post = generatePost();

    console.log('Posting--> ' + post);
    
    // comment this out when testing!
    Twitter.post('statuses/update', {status: post}, function(err, data, response) {
        console.log(data)
    })
    
}

postSomeBusiness();



//debug - run a whole buttload
//setInterval(postSomeBusiness, 300);