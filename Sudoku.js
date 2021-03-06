var board = [
    ['.', '9', '.', '.', '4', '2', '1', '3', '6'],
    ['.', '.', '.', '9', '6', '.', '4', '8', '5'],
    ['.', '.', '.', '5', '8', '1', '.', '.', '.'],
    ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
    ['5', '1', '7', '2', '.', '.', '9', '.', '.'],
    ['6', '.', '2', '.', '.', '.', '3', '7', '.'],
    ['1', '.', '.', '8', '.', '4', '.', '2', '.'],
    ['7', '.', '6', '.', '.', '.', '8', '1', '.'],
    ['3', '.', '.', '.', '9', '.', '.', '.', '.']
]

var board1=[ 
            ['1','2','3','4','5','6','7','8','9'],
            ['1','2','3','4','5','6','7','8','9'],
            ['1','2','3','4','5','6','7','8','9'],
            ['1','2','3','4','5','6','7','8','9'],
            ['1','2','3','4','5','6','7','8','9'],
            ['1','2','3','4','5','6','7','8','9'],
            ['1','2','3','4','5','6','7','8','9'],
            ['1','2','3','4','5','6','7','8','9'],
            ['1','2','3','4','5','6','7','8','9'],
]

var board2 = [
    ['3','.','.','2','4','.','.','6','.'], 
    ['.','4','.','.','.','.','.','5','3'],
    ['1','8','9','6','3','5','4','.','.'],
    ['.','.','.','.','8','.','2','.','.'],
    ['.','.','7','4','9','6','8','.','1'],
    ['8','9','3','1','5','.','6','.','4'],
    ['.','.','1','9','2','.','5','.','.'],
    ['.','.','.','3','.','.','7','4','.'],
    ['.','.','.','.','.','.','.','.','.']
]

var board3 = [
    ['1','.','.','.','.','.','.','.','3'],
    ['.','.','.','.','.','.','.','.','.'],
    ['.','.','.','.','8','.','.','.','.'],
    ['.','.','.','.','.','.','.','.','.'],
    ['.','.','.','.','.','.','.','.','.'],
    ['.','.','.','.','.','.','4','.','.'],
    ['.','.','.','.','.','.','.','.','.'],
    ['.','3','.','.','.','.','.','.','.'],
    ['.','.','.','.','.','.','.','.','9']
]

var board4 = [
    ['1','2','3','4','5','6','7','8','.'],
    ['.','.','.','.','.','.','.','.','2'],
    ['.','.','.','.','.','.','.','.','3'],
    ['.','.','.','.','.','.','.','.','4'],
    ['.','.','.','.','.','.','.','.','5'],
    ['.','.','.','.','.','.','.','.','6'],
    ['.','.','.','.','.','.','.','.','7'],
    ['.','.','.','.','.','.','.','.','8'],
    ['.','.','.','.','.','.','.','.','9']
]


function valid(board,row,col,k) {
    for (let i=0; i<9; i++) {
        const x=3*Math.floor(row/3) + Math.floor(i/3);
        const y=3*Math.floor(col/3) + i%3;
        if (board[row][i]==k, board[i][col]==k, board[x][y]==k) {
          return false;
        }
    }
    return true;
}


function solve(sudoku) {
  for (let i=0; i<9; i++) {
    for (let j=0; j<9; j++) {
      if (sudoku[i][j]=='.') {
        for (let k=1; k<=9; k++) {
          if (valid(sudoku,i,j,k)) {
            sudoku[i][j]=`${k}`;
          if (solve(sudoku)) {
           return true;
          } else {
           sudoku[i][j]='.';
          }
         }
       }
       return false;
     }
   }
 }
 return true;
}

solve(board);
console.log(board);
