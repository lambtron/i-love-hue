
/**
 * Main game logic.
 */

/**
 * Module dependencies.
 */

var Obstacle = require('./obstacles/index');
var Screen = require('./screens/index');

/**
 * Static variables.
 */

var loader;
var gameCanvas;
var stage, renderer;
var gameWidth, gameHeight;
var background_texture, background, background_sprite;
var mainContainer;

// Score
var level = 1;
var start_time = moment();
var timer = 0; // measured in seconds

// Text
var text;

// Obstacles
var obstaclesArray = [];

// Screens
var screensArray = [];

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

}

/**
 * Progress to next level.
 */

function nextLevel() {
  // var obstacle = new Obstacle();
}

/**
 * Draw.
 */

function draw() {

  // Check collisions, aka screens match.
}
