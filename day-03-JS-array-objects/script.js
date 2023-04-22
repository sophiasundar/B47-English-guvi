//for loop
var studentDetails=[{
    "fname":"sophia",
    "lname":"gifta",
    "gender":"female",
    "email":"sophiagifta17@gmail.com"}];


   for(var i = 0; i < studentDetails.length; i++) {
      var obj = studentDetails[i];

     console.log(obj.fname);
     console.log(obj.lname);
     console.log(obj.gender);
     console.log(obj.email);
}

//for in loop
    var studentDetails=[{
        "fname":"sophia",
        "lname":"gifta",
        "gender":"female",
        "email":"sophiagifta17@gmail.com"}];
    
    for(var key in studentDetails){
        console.log(key)
        console.log(studentDetails[key].lname)  //o/p is gifta
    }

//for of loop
    var studentDetails=[{
       "fname":"sophia",
       "lname":"gifta",
       "gender":"female",
       "email":"sophiagifta17@gmail.com"}];  
    
       for(var element of studentDetails){
        console.log(element)   
        }   

//for Each loop
    var studentDetails=[{
       "fname":"sophia",
       "lname":"gifta",
       "gender":"female",
       "email":"sophiagifta17@gmail.com"}];  
       
       studentDetails.forEach(function(obj) {
        console.log(obj.gender); 
       });