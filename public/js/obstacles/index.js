
/**
 * `Obstacle` factory. Create an obstacle.
 */

function Obstacle(screens, width, height) {
  if (!(this instanceof Obstacle)) return new Obstacle(screens, path);
  this.screens = screens || []; // Array of screen objects.
  this.path = new PIXI.Graphics();
  this.path.position.height = height;
  this.path.position.y = 0;

  this.path.beginFill(screens[0].pattern);
  this.path.drawRect(0, 0, width, height);
  this.path.endFill();
}

/**
 * Get Y position.
 */

Obstacle.prototype.getY = function getY() {
  return this.path.position.y;
};

/**
 * Update and draw.
 */

Obstacle.prototype.update = function update() {
  this.path.position.y -= 1;
};

/**
 * Self-destruct and garbage collect.
 */

Obstacle.prototype.remove = function remove() {

};

/**
 * Add object to stage.
 */

Obstacle.prototype.add = function add(stage) {
  stage.addChild(this.path);
};
