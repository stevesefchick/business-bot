//Class that returns a randomly generated business meeting! 

//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



module.exports = {
 getBusinessMeeting: function() {
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
        "interview",
        "daily scrum",
        "team touchbase"
    ];
    
    meetingtime = possiblemeeting[randomnumber(possiblemeeting.length)];
    
    return meetingtime;
    }
};