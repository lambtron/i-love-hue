
/**
 * `Obstacle` factory. Create an obstacle.
 */

function Obstacle(screens, path) {
  if (!(this instanceof Obstacle)) return new Obstacle(screens, path);
  this.screens = screens || []; // Array of screen objects.
  this.path = new PIXI.Graphics();
  // this.path.beginFill(this.screens[i]);
  // this.path.moveTo(0,0);
  // this.path.lineTo(50,100);
  // this.path.endFill();
}

/**
 * Draw.
 */

Obstacle.prototype.draw = function draw() {
  // Draw path but with screens.
};

/**
 * Add object to stage.
 */

Obstacle.prototype.add = function add(stage) {
  stage.addChild(this.path);
}

/**
 * Expose `Obstacle`.
 */

module.exports = Obstacle;
