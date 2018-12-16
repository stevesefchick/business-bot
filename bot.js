var twit = require('twit');
var config = require('./config.js');


var Twitter = new twit(config);

var postSomeBusiness = function()
{
    var randomnumber = Math.floor(Math.random()*90000000);
    var post = "test #" + randomnumber;

    console.log('Posting ' + post);
    /*
    // comment this for now, we know this works!
    Twitter.post('statuses/update', {status: post}, function(err, data, response) {
        console.log(data)
    })
    */
}

postSomeBusiness();
setInterval(postSomeBusiness, 3000000);





/*
var retweet = function() {
    var params = {
      q: '#nodejs, #Nodejs',
      result_type: 'recent',
      lang: 'en'    
    } 


    Twitter.get('search/tweets', params, function(err, data) {
        // if there no errors

        var randomnumber = Math.floor(Math.random()*90000000);
        var post = "test #" + randomnumber;

          if (!err) {
            // grab ID of tweet to retweet
              //var retweetId = data.statuses[0].id_str;
              // Tell TWITTER to retweet
              Twitter.post(post,
              //Twitter.post('statuses/retweet/:id', {
              //    id: retweetId
              //}, 
              function(err, response) {
                  if (response) {
                      console.log('Attempting to tweet ' + post);
                  }
                  // if there was an error while tweeting
                  if (err) {
                      console.log(err);
                  }
              });
          }
          // if unable to Search a tweet
          else {
            console.log('Something went wrong while SEARCHING...');
          }
      });
}


retweet();
// retweet in every 50 minutes
setInterval(retweet, 3000000);




*/