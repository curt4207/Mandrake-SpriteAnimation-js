window.addEventListener("load", function () {
  const canvas = this.document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");

  canvas.width = 950;
  canvas.height = 650;

  let mySound;
  // console.log( "ctx", ctx);

  class Mandrake {
    constructor(canvasWidth, canvasHeight) {
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.image = document.getElementById("mandrake");
      this.spriteWidth = 256;
      this.spriteHeight = 256;
      this.width = this.spriteWidth;
      this.height = this.spriteHeight;
      this.scale = 1;
      this.x = this.canvasWidth / 2 - (this.width * this.scale) / 2;
      this.y = this.canvasHeight / 2 - (this.height * this.scale) / 2;
      this.minFrame = 0;
      this.maxFrame = 355;
      this.frame = 0;

      this.frameX = 0;
      this.frameY = 0;
    }

    draw(context) {
      context.drawImage(
        this.image,
        this.frameX * this.spriteWidth,
        this.frameY * this.spriteHeight,
        this.spriteWidth,
        this.spriteHeight,
        this.x,
        this.y,
        this.width * this.scale,
        this.height * this.scale,
      );
    }

    update() {
      if (this.frame < this.maxFrame) this.frame++;
      else this.frame = this.minFrame;
      this.frameX = this.frame % 18;
      this.frameY = Math.floor(this.frame / 18);
    }

    setAnimation(newMinFrame, newMaxFrame) {
      this.minFrame = newMinFrame;
      this.maxFrame = newMaxFrame;
      this.frame = this.minFrame;
    }
  }

  const mandrake = new Mandrake(canvas.width, canvas.height);
  const mandrake2 = new Mandrake(canvas.width * 1.5, canvas.height/1.2);
  const mandrake3 = new Mandrake(canvas.width / 1.58, canvas.height/ 1.3);
  // console.log( "mandrake", mandrake);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    mandrake.draw(ctx);
    mandrake2.draw(ctx);
    mandrake3.draw(ctx);

    // Note: Update
    mandrake.update();
    mandrake2.update();
    mandrake3.update();

    requestAnimationFrame(animate);
  }

  animate();

  // Note: the sprite sheet grow animation are from image frame(113, 262)
  const stop = document.getElementById("stop");
  stop.addEventListener("click", function () {
    mandrake.setAnimation(1);
    mandrake2.setAnimation(1);
    mandrake3.setAnimation(1);
  });

  const all = document.getElementById("all");
  all.addEventListener("click", function () {
    mandrake.setAnimation(0, 355);
    mandrake2.setAnimation(0, 355);
    mandrake3.setAnimation(0, 355);
  });

  // Note: the sprite sheet grow animation are from image frame(0,75)
  const grow = document.getElementById("grow");
  grow.addEventListener("click", function () {
    mandrake.setAnimation(0, 75);
    mandrake2.setAnimation(0, 75);
    mandrake3.setAnimation(0, 75);
  });

  // Note: the sprite sheet grow animation are from image frame(76, 112)
  const wink = document.getElementById("wink");
  wink.addEventListener("click", function () {
    mandrake.setAnimation(76, 112);
    mandrake2.setAnimation(76, 112);
    mandrake3.setAnimation(76, 112);
  });

  // Note: the sprite sheet grow animation are from image frame(113, 262)
  const float = document.getElementById("float");
  float.addEventListener("click", function () {
    mandrake.setAnimation(113, 262);
    mandrake2.setAnimation(113, 262);
    mandrake3.setAnimation(113, 262);
  });

  // Note: the sprite sheet grow animation are from image frame(113, 262)
  const hide = document.getElementById("hide");
  hide.addEventListener("click", function () {
    mandrake.setAnimation(263, 355);
    mandrake2.setAnimation(263, 355);
    mandrake3.setAnimation(263, 355);
  });


//   const inputs = this.document.getElementById("controls");

//   inputs.addEventListener('click', function onClick(event) {
//     // 👇️ Change text color for clicked element only
//     event.target.style.color = "purple";
//   });
});
