
/**
 * `Obstacle` factory. Create an obstacle.
 */

function Obstacle(screens, width, container) {
  // if (!(this instanceof Obstacle)) return new Obstacle(screens, width, container);
  var height = Math.round(Math.random() * 15) + 5;
  this.screens = screens || []; // Array of screen objects.
  this.path = new PIXI.Graphics();
  this.path.position.height = height;
  this.path.position.y = 0;
  this.path.blendMode = PIXI.blendModes.ADD;
  this.path.beginFill(screens[0]);
  this.path.drawRect(0, 170, width, height);
  this.path.endFill();
  container.addChild(this.path);
}

/**
 * Get Y position.
 */

Obstacle.prototype.getY = function getY() {
  return this.path.position.y;
};

/**
 * Get height.
 */

Obstacle.prototype.getHeight = function getHeight() {
  return this.path.height;
};

/**
 * Update and draw.
 */

Obstacle.prototype.update = function update() {
  this.path.position.y -= 0.2;
};
