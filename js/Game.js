/**
 * @description Game defines the player sprite and controls its movement
 * game board
 * @class Player
 */
class Game {
  /**
   * @description Creates an instance of Game and creates and initializes
   * object variables. The modal dialog code included in this class was
   * adapted from the Udacity Front End Developer Nanodegree [lesson on 
   * ARIA](https://classroom.udacity.com/nanodegrees/nd001/parts/c02fda3b-67bf-48d6-a64f-c6960e2d4d79/modules/d91b4314-da9f-45ea-902e-0b1fb5a06c34/lessons/8311490720/concepts/85569184480923)
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
  
  /**
   * @description Open the modal dialog
   * @param {String} messageText Text to be displayed in the dialogs message area
   * @memberof Game
   */
  openModal(messageText) {
    // Save current focus
    this.focusedElementBeforeModal = document.activeElement;

    // Customize the dialog message
    document.querySelector('#dialog-message').innerHTML = messageText;

    // Listen for and trap keyboard events. Bind the trap function to the
    // context of 'this' object rather than that of the event
    this.trapSpecialKeys = this.trapTheSpecialKeys.bind(this);
    this.modal.addEventListener('keydown', this.trapSpecialKeys);

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
    // Add the focusable tab stops to the document so they can be referenced
    // by the key handler
    document.firstTabStop = firstTabStop;
    document.lastTabStop = lastTabStop;

    // Show the modal and overlay
    this.modal.style.display = 'block';
    this.modalOverlay.style.display = 'block';

    // Focus first child
    firstTabStop.focus();

    document.querySelector('.wrapper').setAttribute('aria-hidden', true);
  }

  /**
   * @description Trap the tab and escape key
   * @param {object} event Instance of an event object
   * @memberof Game
   */
  trapTheSpecialKeys(event) {
    // Check for TAB key press
    if (event.keyCode === 9) {

      // SHIFT + TAB
      if (event.shiftKey) {
        if (document.activeElement === document.firstTabStop) {
          event.preventDefault();
          document.lastTabStop.focus();
        }

      // TAB
      } else {
        if (document.activeElement === document.lastTabStop) {
          event.preventDefault();
          document.firstTabStop.focus();
        }
      }
    }

    // Close the modal if an ESC key is pressed
    if (event.keyCode === 27) {
      this.closeTheModal();
    }
  }

  /**
   * @description Close the open modal dialog
   * @memberof Game
   */
  closeTheModal(event) {
    const continueButton = event.target.closest('#continue-button');
    if (continueButton != null) {
      // Hide the modal and overlay
      this.modal.style.display = 'none';
      this.modalOverlay.style.display = 'none';

      // Set focus back to element that had it before the modal was opened
      this.focusedElementBeforeModal.focus();

      document.querySelector('.wrapper').removeAttribute('aria-hidden');
    }
  }
}