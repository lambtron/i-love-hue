
/**
 * Main game logic.
 */

/**
 * Static variables.
 */

var loader;
var gameCanvas;
var stage, renderer;
var gameWidth, gameHeight;
var mainContainer;

// Score
var level = 1;

// Text
var text;

// Obstacles
var obstaclesArray = [];
var obstaclesContainer;

// Screens
var screensArray = [];
var screensContainer;

// Sound

setup();
draw();

/**
 * Initialize game.
 */

function init() {
  var assetsToLoad = [];
  loader = new PIXI.AssetLoader(assetsToLoad);
  loader.onComplete = setup.bind(this);
  loader.load();
}

/**
 * Setup player.
 */

function setupPlayer() {
  var player = new PIXI.Text('#', { font: '50px', fill: 'black' });
  player.position.y = 30;
  player.position.x = 40;
  return player;
}

/**
 * Setup screens.
 *
 * @param {Array} colors
 */

function setupScreens(colors) {
  var screenGraphics = [];
  for (var i = 0; i < colors.length; i++) {
    var screenGraphic = new PIXI.Graphics();
    screenGraphic.beginFill(colors[i]);
    screenGraphic.drawRect(0, 0, gameWidth, gameHeight);
    screenGraphics.push(screenGraphic);
  }
  return screenGraphics;
}

/**
 * Setup.
 */

function setup() {
  gameCanvas = document.getElementById('myCanvas');
  gameWidth = window.innerWidth;
  gameHeight = window.innerHeight;
  stage = new PIXI.Stage(0x000000);
  renderer = PIXI.autoDetectRenderer(gameWidth, gameHeight, gameCanvas);
  obstaclesContainer = new PIXI.DisplayObjectContainer();
  screensContainer = new PIXI.DisplayObjectContainer();
  mainContainer = new PIXI.DisplayObjectContainer();
  var screenGraphics = setupScreens([0x0000FF]);
  screensContainer.addChild(screenGraphics[0]);
  mainContainer.addChild(screensContainer);
  mainContainer.addChild(obstaclesContainer);
  var player = setupPlayer();
  mainContainer.addChild(player);
  stage.addChild(mainContainer);
}

/**
 * Detect collisions.
 */

function detectCollisions() {
  // Go through all obstacles, go through current filter
  // if any exist, .remove(obstacle)
  //
}

/**
 * Draw.
 */

function draw() {
  // Move all obstacles up.
  // Check collisions, aka screens match.
  // - if collision, then show some juice.

  // Add stuff to obstacles container
  // Add stuff to screens container
  // Listen when key down movements.
  var randomOccurance = Math.round(Math.random() * 100);
  if (randomOccurance < 1) {
    var randomObstacle = Math.round(Math.random() * (gameWidth));
    var obstacle = new Obstacle([0xFFFF00], gameWidth, 20); // needs to be one of the colors
    obstaclesArray.push(obstacle);
  }
  for (var i = 0; i < obstaclesArray.length; i++) {
    obstaclesArray[i].update();
  }
  detectCollisions();
  renderer.render(stage);
  requestAnimationFrame(draw);
}
