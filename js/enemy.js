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