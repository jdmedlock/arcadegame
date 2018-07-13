/**
 * @description Game defines the player sprite and controls its movement
 * game board
 * @class Player
 */
class Game {
  /**
   * @description Creates an instance of Game and creates and initializes
   * object variables. The modal dialog code included in this class was
   * adapted from the Udacity Front End Developer Nanodegree (lesson on 
   * ARIA)[https://classroom.udacity.com/nanodegrees/nd001/parts/c02fda3b-67bf-48d6-a64f-c6960e2d4d79/modules/d91b4314-da9f-45ea-902e-0b1fb5a06c34/lessons/8311490720/concepts/85569184480923]
   * @memberof Game
   */
  constructor() {
    // Game metrics used to maintain the player's expertise and performance
    // at playing the game.

    // Initialize the game score and number 
    this.noGamesWon = 0;
    this.noGamesPlayed = 0;

    // Will hold previously focused element
    this.focusedElementBeforeModal = null;

    // Find the modal and its overlay
    this.modal = document.querySelector('.modal');
    this.modalOverlay = document.querySelector('.modal-overlay');
    this.closeModal = null;
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
   * @returns {Number} Number of games won
   * @memberof Game
   */
  incrementWins() {
    this.noGamesWon += 1;
    return this.noGamesWon;
  }

  /**
   * @description Increment the number of games played
   * @returns {Number} Number of games played
   * @memberof Game
   */
  incrementPlays() {
    this.noGamesPlayed += 1;
    return this.noGamesPlayed;
  }

  openModal() {
    // Save current focus
    this.focusedElementBeforeModal = document.activeElement;

    // Listen for and trap keyboard events. Bind the trap function to the
    // context of 'this' object rather than that of the event
    this.trapTabKey = this.trapTheTabKey.bind(this);
    this.modal.addEventListener('keydown', this.trapTabKey);

    // Listen for indicators to close the modal. Bind the trap function to the
    // context of 'this' object rather than that of the button
    this.closeModal = this.closeTheModal.bind(this);
    this.modalOverlay.addEventListener('click', this.closeModal);
    const continueButton = this.modal.querySelector('#continue-button');
    continueButton.addEventListener('click', this.closeModal);

    // Find all focusable children
    const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    let focusableElements = this.modal.querySelectorAll(focusableElementsString);
    focusableElements = Array.prototype.slice.call(focusableElements);

    const firstTabStop = focusableElements[0];
    const lastTabStop = focusableElements[focusableElements.length - 1];

    // Show the modal and overlay
    this.modal.style.display = 'block';
    this.modalOverlay.style.display = 'block';

    // Focus first child
    firstTabStop.focus();

    document.querySelector('.wrapper').setAttribute('aria-hidden', true);
  }

  trapTheTabKey(e) {
    if (e.keyCode === 27) { // Escape key
      this.closeTheModal();
    }
  }

  closeTheModal() {
    // Hide the modal and overlay
    this.modal.style.display = 'none';
    this.modalOverlay.style.display = 'none';

    // Set focus back to element that had it before the modal was opened
    this.focusedElementBeforeModal.focus();

    document.querySelector('.wrapper').removeAttribute('aria-hidden');
  }
}