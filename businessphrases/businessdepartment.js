//Class that returns a randomly generated business department!

//function returns a random number
var randomnumber = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



module.exports = {
 getBusinessDepartment: function() {
    var bizdept="";
    
    var possibledept= [
        "IT",
        "Marketing",
        "Accounting",
        "Sales",
        "Accounts Receivable",
        "Legal",
        "HR"
    ];
    
    bizdept = possibledept[randomnumber(possibledept.length)];
    
    return bizdept;
    }
};