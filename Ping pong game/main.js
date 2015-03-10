
preload: function() {
  // Load the paddle image
  game.load.image('paddle', 'assets/paddle.png');
},

create: function() { 
  // Initialize the physics system of the game
  game.physics.startSystem(Phaser.Physics.ARCADE);

  // Create a variable to handle the arrow keys
  this.cursor = game.input.keyboard.createCursorKeys();

  // Create the paddle at the bottom of the screen
  this.paddle = game.add.sprite(200, 400, 'paddle');

  // Enable the physics system for the paddle
  game.physics.arcade.enable(this.paddle);

  // Make sure the paddle won't move when hit by the ball
  this.paddle.body.immovable = true;
},

update: function() {
  // If the right arrow is pressed, move the paddle to the right
  if (this.cursor.right.isDown) 
    this.paddle.body.velocity.x = 350;

  // If the left arrow if pressed, move left
  else if (this.cursor.left.isDown) 
    this.paddle.body.velocity.x = -350;

  // If no arrow is pressed, stop moving
  else 
    this.paddle.body.velocity.x = 0;  
}

