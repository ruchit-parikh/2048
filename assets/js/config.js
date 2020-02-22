//grid for game matrix 4 x 4 = 16cells
const grid = 4;

//spot values are values which can be generated at each move
const spotValues = [2, 4];
const emptyCellValue = '';

//compute const height and width of cells in the beginning to avoid computation at each move
const cellMargin = 3;
const cellWidth = ((100 / grid) - cellMargin);
const cellHeight = document.querySelector('#game-grid').getBoundingClientRect().width / grid;

//intial numbers of tiles generated
const startTilesCount = 2;

//minimum drag difference required for touch inputs and mouse drags
const drag = 25;

//possible input values
const inputs = {
  LEFT: 37, 
  UP: 38, 
  RIGHT: 39,
  DOWN: 40,
  W: 87,
  S: 83,
  A: 65,
  D: 68
}
