
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
    this.resetPosition();
  }

  /**
   * @description Reset the player avatar to its starting position on the
   * game board
   * @memberof Player
   */
  resetPosition() {
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
   * @description Convert a y coordinate value in the canvas to a row number in
   * the game grid.
   * @param {Number} y Value of the y coordinate in the canvas
   * @returns {Number} Row number within the game grid
   * @memberof Player
   */
  convertToRowNo(y) {
    return Math.ceil(this.y / CELL_HEIGHT);
  }

  /**
   * @description Update the player's position. This method is required by the
   * game engine.
   * @param {Number} dt a time delta between ticks of the game clock
   * @memberof Player
   */
  update() {
    // Updates to the player position are made in handleInput(), which updates
    // the x and y coordinates of the player avatar.
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
   * boundaries are ignored. The x and y coordinates of the players avatar
   * are calculated here rather than in the update() function to eliminate the
   * dependency on a saved direction state in update().
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

  /**
   * @description Check to see if the player has won the current game
   * @returns {Boolean} `true` if the game has been won
   * @memberof Player
   */
  hasWon() {
    if (this.convertToRowNo(this.y) === WIN_ROW) {
      this.resetPosition();
      return true;
    }
    return false;
  }
}