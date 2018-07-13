// Constants used across the application
const MAX_ROWS = 6;
const MAX_COLS = 5;
const WIN_ROW = 0;
const CELL_WIDTH = 101;
const CELL_HEIGHT = 83;
const MIN_ROW_BOUNDARY = 0 - CELL_WIDTH;
const MAX_ROW_BOUNDARY = ((MAX_COLS - 1) * CELL_WIDTH) + CELL_WIDTH;
const MIN_COL_BOUNDARY = 0;
const MAX_COL_BOUNDARY = (MAX_ROWS - 1) * CELL_HEIGHT - 10;

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

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', (event) => {
	var allowedKeys = {
		27: 'esc',
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down'
	};

	player.handleInput(allowedKeys[event.keyCode]);
});