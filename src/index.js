
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  if (!Array.isArray(matrix)) return [];
  if (matrix.length == 0) return [];

    let resultArr = matrix.map( (item, index) => {
      if (index%2 == 0) {
     
      item = item.sort((a,b) => {return a-b});} else { 
      item = item.sort((a,b) => {return b-a});}
      
      return item;
    });
  
    return  resultArr.flat();
  }
  