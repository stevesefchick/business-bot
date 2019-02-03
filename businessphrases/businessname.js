//Class that returns a randomly generated business name!

//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



module.exports = {
 getBusinessNames: function() {
    var name="";
    
    var possiblenames= [
        "Randal",
        "Janet",
        "Mitch",
        "Chris",
        "Stephanie",
        "Stephen",
        "John",
        "Barb",
        "Carla",
        "Russ",
        "Jim",
        "Cathy",
        "Bob",
        "Nancy",
        "Greg",
        "Samantha",
        "Darlene",
        "Tim",
        "Rick",
        "Richard",
        "Mike",
        "Dave",
        "Mike",
        "Beth",
        "Becky",
        "Don"
    ];
    
    name = possiblenames[randomnumber(possiblenames.length)];
    
    return name;
    }
};