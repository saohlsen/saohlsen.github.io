
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  var outcome = ' ';
  // for loop to cycle throught a triangles
  for(let i = '#'; i.length <= num; i += '#') {
    outcome = i;
    console.log(outcome);
  }

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
  
  //need to pass start and end as parameters
  // use for loop and conditional to print outcome as per instructuins
  
     for (var i = start; i <= end; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
      console.log("fizzbuzz");

    } else if (i % 3 == 0) {
      console.log("fizz");
      
    } else if (i % 5 == 0) {
      console.log("buzz");
    
    } else {
      console.log(i);
    } 
      
    }
  
}
  


////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(chess) {

  var grid = "";
  
  // cykle by raw and by column, if raw and column % 2 == 0
  // add to grid "# " else  add " #"
  // use \n new line seperator to 
   
    for (let raw = 0; raw < chess; raw++) {
      for (let column = 0; column < chess; column++) {
           if ((raw + column) % 2 === 0) {
        	   grid+= " ";
             } else {
        	      grid += "#";
               }
      }
      
      grid += "\n";
    }  
    console.log(grid);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
