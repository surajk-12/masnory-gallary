function pascalTriangle(numRows) {
    // Handle invalid input
    if (numRows <= 0) return [];
  
    // Initialize the first row
    let result = [[1]];
  
    // Generate the remaining rows
    for (let row = 2; row <= numRows; row++) {
      result.push([]);
  
      // Each entry is sum of the two values above it
      result[row - 1][0] = 1;
      for (let col = 1; col < row; col++) {
        result[row - 1][col] = result[row - 2][col - 1] + result[row - 2][col];
      }
      result[row - 1][row - 1] = 1 ;
    }
  
    return result;
  }
  
  console.log(pascalTriangle(10));
  
  