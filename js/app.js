
// Constants used across the application
const MAX_ROWS = 6;
const MAX_COLS = 5;
const CELL_WIDTH = 101;
const CELL_HEIGHT = 83;
const MIN_ROW_BOUNDARY = 0;
const MAX_ROW_BOUNDARY = (MAX_COLS - 1) * CELL_WIDTH;
const MIN_COL_BOUNDARY = 0;
const MAX_COL_BOUNDARY = (MAX_ROWS - 1) * CELL_HEIGHT - 10;

/**
 * @description Enemy defines an enemy sprite and controls its movement on the
 * game board. The game engine requires it to contain `render` and `update`
 * methods.
 * @class Enemy
 */
class Enemy {

  /**
   * @description Creates an instance of the Enemy class and establishes the
   * required object variables.
   * @param {Number} row Number of the game board row this enemy is constrained
   * to.
   * @memberof Enemy
   */
  constructor(row) {
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    this.rowConstraint = row;
    this.x = MIN_ROW_BOUNDARY;
    this.y = (this.rowConstraint * CELL_HEIGHT) - 20;
    this.startRow = 1;
    this.endRow = 3;
  }

  /**
   * @description Retrieve the current position of the enemy avatar
   * @returns {Object} An object containing the x and y coordinates of the
   * player avatar. 
   * @memberof Enemy
   */
  getPosition() {
    return {
      x: this.x,
      y: this.y
    };
  }

  /**
   * @description Update the enemy's position. This method is required by the
   * game engine.
   * @param {Number} dt a time delta between ticks of the game clock
   * @memberof Enemy
   */
  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x >= MAX_ROW_BOUNDARY ? MIN_ROW_BOUNDARY : this.x;
    this.x = this.x + ((50 * dt) * this.rowConstraint);
  }

  /**
   * @description Draw this enemy on the screen. This method is required by the
   * game engine.
   * @memberof Enemy
   */
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

/**
 * @description Player defines the player sprite and controls its movement
 * game board
 * @class Player
 */
class Player {
  /**
   * @description Creates an instance of Player and creates and initializes
   * object variables. The game engine requires it to contain `render` and
   * `update` methods.
   * @memberof Player
   */
  constructor() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
    this.startingRow = MAX_ROWS - 1;
    this.startingCol = this.getRandomInt(MAX_ROWS);
    this.x = this.startingCol * CELL_WIDTH;
    this.y = (this.startingRow * CELL_HEIGHT) - 10;
  }

  /**
   * @description Retrieve the current position of the player avatar
   * @returns {Object} An object containing the x and y coordinates of the
   * player avatar. 
   * @memberof Player
   */
  getPosition() {
    return {
      x: this.x,
      y: this.y
    };
  }

  /**
   * @description Calculate a random number between 0 and the specified
   * maximum integer. This function was copied from the example at
   * [MDN Javascript Math builtin object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
   * @param {Number} max
   * @returns {Number} A number in the range 0-`max`
   */
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  /**
   * @description Update the player's position. This method is required by the
   * game engine.
   * @param {Number} dt a time delta between ticks of the game clock
   * @memberof Player
   */
  update() {

  }

  /**
   * @description Draw the player on the screen. This method is required by the
   * game engine.
   * @memberof Player
   */
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  /**
   * @description Process a request to move the player avatar one cell on the
   * game board. Attempts to move past the left, right, top, or bottom
   * boundaries are ignored.
   * @param {String} keyCode Direction to move the player avatar. Acceptable
   * values are `left`, `right`, `up`, or `down`.
   * @memberof Player
   */
  handleInput(keyCode) {
    switch (keyCode) {
      case 'left':
        this.x = this.x <= MIN_ROW_BOUNDARY ? this.x : this.x - CELL_WIDTH;
        break;
      case 'up':
        this.y = this.y <= MIN_COL_BOUNDARY ? this.y : this.y - CELL_HEIGHT;
        break;
      case 'right':
        this.x = this.x >= MAX_ROW_BOUNDARY ? this.x : this.x + CELL_WIDTH;
        break;
      case 'down':
        this.y = this.y >= MAX_COL_BOUNDARY ? this.y : this.y + CELL_HEIGHT;
        break;
      default:
        throw new Error(`Invalid key code encountered - ${keyCode}`);
    }
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies = [];
for (let i = 1; i <= 3; ++i) {
	allEnemies.push(new Enemy(i));
}

// Place the player object in a variable called player
let player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
	var allowedKeys = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down'
	};

	player.handleInput(allowedKeys[e.keyCode]);
});