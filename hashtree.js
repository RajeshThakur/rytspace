var hsh1 = " #",hsh2 = "# ",l = 0, line1="",line2="";
var limit = Number(prompt("Enter grid size"));
//alert(typeof(limit));
//if(typeof(limit) != 'number'){
 // alert("Please enter a valid number!");
 // limit = Number(prompt("Enter grid size"));  
//}

for (var i=0; i<limit; i++){ //Rows
  if(l==0){
    for(var k=0; k<limit; k++){   //Columns even
      line1 += hsh1;    
    } 
    console.log(line1); 
    l++;
  } else{
     for(var k=0; k<limit; k++){     //Columns odd
      line2 += hsh2;    
    } 
    console.log(line2); 
    l--;
  }
  line1 = "";
  line2 ="";
}
