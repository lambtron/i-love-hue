
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

// Player
var playerSettings = {
  y: 40
  // Add more stuff here, like texture and assets.
}

// Obstacles
var obstaclesArray = [];
var obstaclesContainer;

// Screens
var screensArray = [];
var screensContainer;

// Sound

init();
setup();
draw();

/**
 * Initialize game.
 */

function init() {
  var assetsToLoad = ['public/assets/img/player.png'];
  loader = new PIXI.AssetLoader(assetsToLoad);
  loader.onComplete = setup.bind(this);
  loader.load();
}

/**
 * Setup player.
 */

function setupPlayer() {
  var playerTexture = PIXI.Texture.fromImage('public/assets/img/player.png');
  var player = new PIXI.Sprite(playerTexture);
  // var player = new PIXI.Text('#', { font: '30px ariel', fill: 'white' });
  player.position.y = playerSettings.y;
  player.position.x = gameWidth / 2 - 10;
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
  gameWidth = gameCanvas.width;
  gameHeight = gameCanvas.height;
  stage = new PIXI.Stage(0x000000);
  renderer = PIXI.autoDetectRenderer(gameWidth, gameHeight, gameCanvas);
  obstaclesContainer = new PIXI.DisplayObjectContainer();
  screensContainer = new PIXI.DisplayObjectContainer();
  mainContainer = new PIXI.DisplayObjectContainer();
  var screenGraphics = setupScreens([0xCCDDFF]);
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
  for (var i = 0; i < obstaclesArray.length; i++) {
    var obstacle = obstaclesArray[i];
    obstacle.update();
    var y = obstacle.getY();
    // Obstacle reaches top of screen.
    if (y < (-gameHeight - obstacle.getHeight())) {
      obstaclesContainer.removeChild(obstacle.path);
      obstaclesArray.splice(i, 1);
    }

    // Obstacle hits player.


    // Screen equals obstacle.
  }
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
  // Listen when key down movements.2
  var randomOccurance = Math.round(Math.random() * 100);
  if (randomOccurance < 1) {
    var obstacle = new Obstacle(['0xFF0000'], gameWidth, obstaclesContainer); // needs to be one of the colors
    obstaclesArray.push(obstacle);
  }
  detectCollisions();
  renderer.render(stage);
  requestAnimationFrame(draw);
}

/**
 * Game over.
 */


/**
 * Next level!
 */

