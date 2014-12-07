
/**
 * `Screen` factory. Create a screen.
 */

function Screen(id, difficulty) {
  if (!(this instanceof Screen)) return new Screen(id, difficulty);
  this.id = id;

  // Randomly generated based on `difficulty`.
  this.pattern = '#FFFFFF';
}

/**
 * Expose `Screen`.
 */

module.exports = Screen;
