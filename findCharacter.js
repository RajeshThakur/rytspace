// Your code here.
function countBs( str ){
      var count = 0;
      for (var i = 0; i < str.length; i++){          
          if (str.charAt(i) == 'B')
            count ++;          
      }
  
      if (count > 0)
         return count;
      else
         return "None found in this string";
}

function countChar( str , alpha ){
      var count = 0;
      for (var i = 0; i < str.length; i++){
          if (str.charAt(i) == alpha)
            count ++;     
      }
  
      if (count > 0)
         return count;
      else
         return "No '"+ alpha +"' found in this string";
}

console.log(countBs("CCC"));
// → 2
console.log(countChar("kakkerlak", "z"));
// → 4
