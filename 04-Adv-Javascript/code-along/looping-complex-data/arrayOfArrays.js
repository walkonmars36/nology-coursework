// array inside an array = matrix or multi-dimensional array

// can mimic / used for  table - grid - co-ordinates - graphs

// rows - X
// columns - Y

// const table = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let row = 0; row < table.length; row++) {
//   //   console.log(table[row]);

//   for (let column = 0; column < table.length; column++) {
//     // console.log(table[row][column]); // row by row
//     console.log(table[column][row]); // column by column
//   }
// }

const grid = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["O", "X", "X"],
];

for (let row = 0; row < grid.length; row++) {
  const rowString = grid[row].join(""); // 'XOX'
  let columnString = "";

  for (let column = 0; column < grid.length; column++) {
    columnString += grid[column][row]; // starting with 'XXO'
  }
  console.log(row, rowString, columnString);

  // check for all X's
  if (rowString === "XXX" || columnString === "XXX") {
    console.log("X wins");
    break;
  }
}
