
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
  //
  // Need to create rectangles of various colors
  // Size all the same: gameWidth, gameHeight
  // Origin point varies
  //
  // 0, 1, 2
  // 3, 4, 5
  // 6, 7, 8
  //  _ _ _
  // |_|_|_|
  // |_|_|_|
  // |_|_|_|
  //
  // 0:
  // -width, -height, width, height
  //
  // 1:
  // 0, -height, width, height
  //
  // 2:
  // width, -height, width, height
  //
  // 3:
  // -width, 0, width, height
  //
  // 4:
  // 0, 0, width, height
  //
  // 5:
  // width, 0, width, height
  //
  // 6:
  // -width, height, width, height
  //
  // 7:
  // 0, height, width, height
  //
  // 8:
  // width, height, width, height
  //
  // 1, 3, 5, 7, 0, 2, 6, 8
  //
  var w = gameWidth;
  var h = gameHeight;
  var screenPosition = [
    [0, -h, w, h],
    [-w, 0, w, h],
    [w, 0, w, h],
    [0, h, w, h],
    [-w, -h, w, h],
    [w, -h, w, h],
    [-w, h, w, h],
    [w, h, w, h]
  ];
  var screenGraphic = new PIXI.Graphics();
  screenGraphic.alpha = 0.8;
  screenGraphic.blendMode = PIXI.blendModes.ADD;
  screenGraphic.screens = [];
  for (var i = 0; i < colors.length; i++) {
    screenGraphic.beginFill(colors[i]);
    screenGraphic.drawRect(screenPosition[i][0], screenPosition[i][1],
      screenPosition[i][2], screenPosition[i][3]);
    var screen = {
      color: colors[i],
      position: {
        x: screenPosition[i][0],
        y: screenPosition[i][1]
      }
    };
    screenGraphic.screens.push(screen);
  }
  return screenGraphic;
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
  mainContainer.setInteractive(true);
  var screenGraphic = setupScreens(['0xCCDDFF', '0x00FFFF', '0xFF00FF']);
  screensContainer.addChild(screenGraphic);
  mainContainer.addChild(screensContainer);
  mainContainer.addChild(obstaclesContainer);
  var player = setupPlayer();
  mainContainer.addChild(player);
  stage.addChild(mainContainer);
  mainContainer.mousemove = getMouse;
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
    if (y < (-gameHeight - obstacle.getHeight()))
      removeObstacle(i);

    // Obstacle hits player.


    // Screen equals obstacle.
    var sx = screensContainer.position.x;
    var sy = screensContainer.position.y;
    var screens = screensContainer.children[0].screens;
    for (var j = 0; j < screens.length; j++) {
      var screen = screens[j];
      console.log(screen);
      if (sx < screen.position.x + 10 &&
          sx > screen.position.x - 10 &&
          sy < screen.position.y + 10 &&
          sy > screen.position.y - 10) {
        console.log(obstacle.color);
        console.log(screen.color);
        if (screen.color === obstacle.color)
          removeObstacle(i);
      }
    }
    // What is the screenContainer position?
    // What is that screen color?
    // For all obstacles that match that screen color, remove.

  }
}

/**
 * Remove `obstacle`.
 *
 * @param {Integer} i, index in array
 */

function removeObstacle(i) {
  obstaclesContainer.removeChild(obstaclesArray[i].path);
  obstaclesArray.splice(i, 1);
}

/**
 * Get input.
 */

function getMouse(mouseData) {
  var mouse = mouseData.getLocalPosition(mainContainer);
  screensContainer.position.x = 2.2 * (mouse.x - gameWidth / 2);
  screensContainer.position.y = 2.2 * (mouse.y - gameHeight / 2);
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
    var obstacle = new Obstacle('0xCCDDFF', gameWidth, obstaclesContainer); // needs to be one of the colors
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

