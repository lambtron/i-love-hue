
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
 * Setup.
 */

function setup() {
  gameCanvas = document.getElementById('myCanvas');
  gameWidth = window.innerWidth;
  gameHeight = window.innerHeight;
  stage = new PIXI.Stage(0x000000);
  renderer = PIXI.autoDetectRenderer(gameWidth, gameHeight, gameCanvas);
  mainContainer = new PIXI.DisplayObjectContainer();
  stage.addChild(mainContainer);
  obstaclesContainer = new PIXI.DisplayObjectContainer();
  mainContainer.addChild(obstaclesContainer);
  screensContainer = new PIXI.DisplayObjectContainer();
  mainContainer.addChild(screensContainer);
  draw();
}

/**
 * Draw.
 */

function draw() {
  // Move all obstacles up.
  // Check collisions, aka screens match.
  // - if collision, then show some juice.
}
