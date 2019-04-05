/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for(let i = 0; i < 3; i += 1){
    for(let j = 0; j < 3; j += 1){
      const b = {}
      for(let m = 0; m < 9; m +=1){
        const row = i * 3 + (m - (m % 3)) / 3;
        const col = j * 3 + m % 3;
        const cell = board[row][col]
        if(cell !== '.'){
          if(b[cell]) return false;
          b[cell] = true;
        }
      }
    }
  }
  
  for(let i = 0; i < 9; i += 1){
    const b = {}
    for(let j = 0; j < 9; j += 1){
      const cell = board[i][j]
      if(cell !== '.'){
         if(b[cell]) return false;
         b[cell] = true;
      }
    }
  }
  
  for(let i = 0; i < 9; i += 1){
    const b = {}
    for(let j = 0; j < 9; j += 1){
      const cell = board[j][i]
      if(cell !== '.'){
         if(b[cell]) return false;
         b[cell] = true;
      }
    }
  }
  
  return true;
};
