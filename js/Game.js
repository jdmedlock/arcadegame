/**
 * @description Game defines the player sprite and controls its movement
 * game board
 * @class Player
 */
class Game {
  /**
   * @description Creates an instance of Game and creates and initializes
   * object variables.
   * @memberof Game
   */
  constructor() {
    // Game metrics used to maintain the player's expertise and performance
    // at playing the game.

    // Initialize the game score and number 
    this.noGamesWon = -1;
    this.noGamesPlayed = -1;
  }

  /**
   * @description Retrieve the current game score - games won and games played
   * @returns {Object} An object containing the number of games won and played.
   * @memberof Game
   */
  getScore() {
    return {
      gamesWon: this.noGamesWon,
      gamesPlayed: this.noGamesPlayed
    };
  }

  /**
   * @description Increment the number of games won
   * @memberof Game
   */
  incrementWins() {
    this.noGamesWon += 1;
  }

  /**
   * @description Increment the number of games played
   * @returns {Number} Number of games played
   * @memberof Game
   */
  incrementPlays() {
    return this.noGamesPlayed += 1;
  }
}