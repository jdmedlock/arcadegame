// Constants used across the application
const MAX_ROWS = 6;
const MAX_COLS = 5;
const WIN_ROW = 0;
const CELL_WIDTH = 101;
const CELL_HEIGHT = 83;
const MIN_ROW_BOUNDARY = 0;
const MAX_ROW_BOUNDARY = (MAX_COLS - 1) * CELL_WIDTH;
const MIN_COL_BOUNDARY = 0;
const MAX_COL_BOUNDARY = (MAX_ROWS - 1) * CELL_HEIGHT - 10;
const MAX_GEMS = 3;

// Now instantiate your objects.

// Create an instance of Game to hold player metrics
const game = new Game();

// Place all enemy objects in an array called allEnemies
let allEnemies = [];
for (let i = 1; i <= 3; ++i) {
	allEnemies.push(new Enemy(i));
}

// Place the player object in a variable called player
const player = new Player();
