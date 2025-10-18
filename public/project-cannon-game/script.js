document.addEventListener("DOMContentLoaded", () => {
  // canvas setup
  var canvas = document.querySelector("canvas");
  // calculate width of canvas
  canvas.width = window.innerWidth - 25;
  // calculate height of canvas 
  canvas.height = window.innerHeight - 25;
  // set the drawing surface 
  var drawingSurface = canvas.getContext("2d");

  // Cannon parts
  var cannon_part = { 
    x: 0, 
    y: 0,
  };
  var Xspeed = 0;
  var Yspeed = 0;

  // Movement flags to keep track
  var moveLeft = false;
  var moveRight = false;
  var moveUp = false;
  var moveDown = false;

  // Carriage 
  var carriage = Object.create(cannon_part);
  carriage.x = 300;
  carriage.y = canvas.height - 150; // 150px
  var carriage_img = new Image();
  carriage_img.addEventListener("load", loadHandler, false);
  carriage_img.src = "spr_carriage.png";

  // Turret
  var turret = Object.create(cannon_part);
  turret.x = carriage.x + 50;
  turret.y = carriage.y;
  turret.angle = -25;
  var turret_img = new Image();
  turret_img.src = "spr_turret.png";

  // Wheel
  var wheelRotation = 0;
  var wheel_img = new Image();
  wheel_img.src = "spr_wheel.png";

  // Balloon setup
  var balloon_img = new Image();
  balloon_img.src = "spr_balloon.png";

  // explosion gif
  var explosion_img = new Image();
  explosion_img.src = "explosion.gif";

  // explosion sound
  var explosionSound = new Audio("explosion.m4a");

  var balloon = {
    x: 0,
    y: 0,
    width: 225,
    height: 225,
    speed: 2, // 2 pixels per 10 ms
    active: false,
    exploded: false
  };

  // variables to hold score and lives
  var score = 0;
  var lives = 5;

  function startNewBalloon() 
  {
    // ensure balloon drops from a position that the cannon can hit
    // keep it reachable by the left-most cannon
    balloon.x = Math.random() * (canvas.width - balloon.width - 300) + 300; 
    balloon.y = 0;
    balloon.active = true;
    balloon.exploded = false;
  }

  // function to display and play explosion GIF
  function startExplosion(x, y) 
  {
    const explosionElement = document.createElement("img");
    explosionElement.src = "explosion.gif";
    explosionElement.style.position = "absolute";
    explosionElement.style.left = x + "px";
    explosionElement.style.top = y + "px";
    explosionElement.style.width = balloon.width + "px";
    explosionElement.style.height = balloon.height + "px";
    document.body.appendChild(explosionElement);

    setTimeout(() => {
      document.body.removeChild(explosionElement); // Remove the GIF after 1 second
    }, 1000);
  }

  function checkBalloonCollision() 
  {
    if (
      balloon.active &&
      ball.active &&
      ball.x > balloon.x &&
      ball.x < balloon.x + balloon.width &&
      ball.y > balloon.y &&
      ball.y < balloon.y + balloon.height
    ) 
    {
      balloon.exploded = true;
      // play explosion sound
      explosionSound.play();
      // increment score 
      score++;
      // set cannon ball to false once hit 
      ball.active = false;

      // trigger explosion animation
      startExplosion(balloon.x, balloon.y);
      setTimeout(startNewBalloon, 1000); 
    }
  }

  function checkBalloonBottomCollision() 
  {
    if (balloon.y + balloon.height >= canvas.height) {
      balloon.exploded = true;
      startExplosion(balloon.x, balloon.y); // trigger explosion gif
      explosionSound.play();
      // decrement lives
      lives--;
      if (lives > 0) {
        setTimeout(startNewBalloon, 1000); 
      } else {
        balloon.active = false;
      }
    }
  }

  // cannon ball setup
  var ball = { 
    x: 0, 
    y: 0, 
    radius: 15, 
    speed: 10, 
    active: false, 
    angle: 0, 
    velocityX: 0, 
    velocityY: 0 
  };

  var ball_img = new Image();
  ball_img.src = "spr_ball.png"; 

  // sound setup
  var shotSound = new Audio("shot.mp3");

  // slider setup 
  var speedSlider = document.getElementById("speed");
  var speedValueDisplay = document.getElementById("speedValue");
  speedValueDisplay.textContent = speedSlider.value;
  var speedMultiplier = parseInt(speedSlider.value);

  speedSlider.addEventListener("input", function() {
      speedMultiplier = parseInt(speedSlider.value);
      speedValueDisplay.textContent = speedMultiplier;
  });

  // Keydown event
  window.addEventListener("keydown", function(e) {
    switch (e.key) {
      case "ArrowLeft":
        moveLeft = true;
        break;
      case "ArrowRight":
        moveRight = true;
        break;
      case "ArrowUp":
        moveUp = true;
        turret.angle = Math.max(turret.angle - 5, -35);
        break;
      case "ArrowDown":
        moveDown = true;
        turret.angle = Math.min(turret.angle + 5, 20);
        break;
      case " ":
        if (!ball.active) {
            ball.x = turret.x + (turret_img.width / 2);
            ball.y = turret.y + (turret_img.height / 2);
            ball.angle = turret.angle;
            ball.velocityX = Math.cos(ball.angle * Math.PI / 180) * ball.speed;
            ball.velocityY = Math.sin(ball.angle * Math.PI / 180) * ball.speed;
            ball.active = true;
            shotSound.currentTime = 0;
            shotSound.play();
        }
        break;
    }
  }, false);

  // Keyup event
  window.addEventListener("keyup", function(e) {
    switch (e.key) {
      case "ArrowLeft":
        moveLeft = false;
        break;
      case "ArrowRight":
        moveRight = false;
        break;
      case "ArrowUp":
        moveUp = false;
        break;
      case "ArrowDown":
        moveDown = false;
        break;
    }
  }, false);

  // resize event listener
  window.addEventListener("resize", () => {
      canvas.width = window.innerWidth - 25;
      canvas.height = window.innerHeight - 25;

      carriage.y = canvas.height - carriage_img.height - 5;
      turret.x = carriage.x;
      turret.y = carriage.y - 40;

      if (balloon.active) {
          balloon.x = Math.min(balloon.x, canvas.width - balloon.width);
          balloon.y = Math.min(balloon.y, canvas.height - balloon.height);
      }
  });

  function loadHandler() {
    startNewBalloon();
    update();
  }

  function update() {
    window.requestAnimationFrame(update);
    if (moveLeft && !moveRight) {
      Xspeed = -speedMultiplier;
      wheelRotation -= 5;
    } else if (moveRight && !moveLeft) {
      Xspeed = speedMultiplier;
      wheelRotation += 5;
    } else {
      Xspeed = 0; 
    }

    carriage.x += Xspeed;
    turret.x = carriage.x;
    carriage.y = canvas.height - carriage_img.height - 5;
    turret.y = carriage.y - 40;

    const turretWidth = turret_img.width;

    if (carriage.x < 0) {
      carriage.x = 0;
    } else if (carriage.x + carriage_img.width > canvas.width - turretWidth) {
      carriage.x = canvas.width - carriage_img.width - turretWidth;
    }
  
    // now set the turret position after updating the carriage
    // update turret's x based on the carriage's position
    turret.x = carriage.x + 25;  

    if (ball.active) {
      ball.x += ball.velocityX;
      ball.y += ball.velocityY;
      if (ball.y < 0 || ball.x < 0 || ball.x > canvas.width) {
        ball.active = false;
        shotSound.pause();
        shotSound.currentTime = 0;
      }
    }

    if (balloon.active && !balloon.exploded) {
      balloon.y += balloon.speed;
      checkBalloonCollision();
      checkBalloonBottomCollision();
    }
    render();
  }

  function render() 
  {
    drawingSurface.clearRect(0, 0, canvas.width, canvas.height);
  
    // Draw the cannon and turret
    drawingSurface.drawImage(carriage_img, Math.floor(carriage.x), Math.floor(carriage.y), carriage_img.width, carriage_img.height);
    drawingSurface.save();
    drawingSurface.translate(carriage.x + 150, carriage.y + carriage_img.height - 65);
    drawingSurface.rotate(wheelRotation * Math.PI / 180); 
    drawingSurface.drawImage(wheel_img, -wheel_img.width / 2, -wheel_img.height / 2, wheel_img.width, wheel_img.height);
    drawingSurface.restore();
  
    // Draw the ball if active
    if (ball.active) {
      drawingSurface.drawImage(ball_img, ball.x - ball.radius, ball.y - ball.radius, ball.radius * 2, ball.radius * 2);
    }
  
    // Draw the turret
    drawingSurface.save();
    drawingSurface.translate(turret.x + turret_img.width / 2, turret.y + turret_img.height / 2);
    drawingSurface.rotate(turret.angle * Math.PI / 180); 
    drawingSurface.drawImage(turret_img, -turret_img.width / 2, -turret_img.height / 2, turret_img.width, turret_img.height);
    drawingSurface.restore();
  
    // draw the balloon if active
    if (balloon.active) {
      drawingSurface.drawImage(balloon_img, balloon.x, balloon.y, balloon.width, balloon.height);
    }
  
    // draw the score background rectangle
    drawingSurface.fillStyle = "white";
    drawingSurface.fillRect(10, 120, 120, 30);  // score background rectangle
  
    // display the score
    drawingSurface.fillStyle = "black";
    drawingSurface.font = "20px Arial";
    drawingSurface.fillText("Score: " + score, 15, 140);
  
    // replace "Lives: " text with "game over" when no lives are left
    drawingSurface.fillStyle = "white";
    if (lives <= 0) {
      drawingSurface.fillRect(10, 150, 120, 30);  // background for game over
      drawingSurface.fillStyle = "black";
      drawingSurface.fillText("game over", 15, 170);
    } else {
      // draw the background for "Lives: "
      drawingSurface.fillRect(10, 150, 120, 30);  // lives background rectangle
      drawingSurface.fillStyle = "black";
      drawingSurface.fillText("Lives: " + lives, 15, 170);
    }
  }
});