import option1URL from './Overlays/option1.svg'
import option2URL from './Overlays/option2.svg'
import option3URL from './Overlays/option3.svg'
import petal1URL from './Overlays/petal1.svg'
import petal2URL from './Overlays/petal2.svg'
import bubble1URL from './Overlays/bubble1.svg'
import bubble2URL from './Overlays/bubble2.svg'
import leaf1URL from './Overlays/leaf1.svg'
import leaf2URL from './Overlays/leaf2.svg'
import crabURL from './Overlays/crab.svg'
import pigURL from './Overlays/pig.svg'
import pigeonURL from './Overlays/pigeon.svg'
import seaweedURL from './Overlays/seaweed.svg'

function Script () {

const boundary = document.getElementById('boundary')
const wrapper = document.getElementById('wrapper')


const deviceWidth = boundary.offsetWidth
const deviceHeight = boundary.offsetHeight


const option1Button = document.getElementById('option1button')
const option2Button = document.getElementById('option2button')
const option3Button = document.getElementById('option3button')

let tracking = window.tracking

// const characterfield = document.getElementById('character')
// const characterfieldcontext = characterfield.getContext('2d')
// const foreground = document.getElementById('foreground')
// const foregroundcontext = foreground.getContext('2d')
// const particlefield = document.getElementById('particlefield')
// const particlefieldcontext = particlefield.getContext('2d')
// const canvas = document.getElementById('canvas')
// const context = canvas.getContext('2d')

	var v = document.getElementById('video');

	  var background = document.createElement("canvas");
	  var bgcontext = background.getContext("2d");
	  background.width = deviceWidth;
	  background.height = deviceHeight;
	  wrapper.appendChild(background);

      var canvas = document.createElement("canvas");
      var context = canvas.getContext("2d");
      canvas.width = deviceWidth;
      canvas.height = deviceHeight;
      wrapper.appendChild(canvas);


      var characterfield = document.createElement("canvas");
      var characterfieldcontext = characterfield.getContext("2d");
      characterfield.width = deviceWidth;
      characterfield.height = deviceHeight;
      wrapper.appendChild(characterfield);

      var foreground = document.createElement("canvas");
      var foregroundcontext = foreground.getContext("2d");
      foreground.width = deviceWidth;
      foreground.height = deviceHeight;
      wrapper.appendChild(foreground);


      var particlefield = document.createElement("canvas");
      particlefield.id='particlefield';
      var particlefieldcontext = particlefield.getContext("2d");
      particlefield.width = deviceWidth;
      particlefield.height = deviceHeight;
      wrapper.appendChild(particlefield);   

var cw,ch

v.addEventListener('play', function(){
    cw = v.clientWidth;
    ch = v.clientHeight;
    // background.width = cw;
    // background.height = ch;
    drawVideo(bgcontext, v,cw,ch);
},false);

function drawVideo(context, video, width, height) {       
context.drawImage(video, 0, 0, width, height); // draws current video frame to canvas     
var delay = 100; // milliseconds delay for slowing framerate
setTimeout(drawVideo, delay, context, video, width, height); // recursively calls drawVideo() again after delay
}


const tracker = new tracking.ObjectTracker('face')

const img = new Image()
let filterX = 0
let filterY = 0
let filterWidth = 0
let filterHeight = 0

function changePic (x, y, width, height, src) {
  img.src = src
  filterX = x
  filterY = y
  filterWidth = width
  filterHeight = height

}

// function particles(src) {
// 	var min = .1;
//    	var max = .3;
// 	particle.src = src
// 	particleWidth = min + (Math.random() * (max-min))
// 	particleHeight = particleWidth
// }

var particleImg = new Image();

var seaweedImg = new Image();
seaweedImg.src = seaweedURL;

var crabImg = new Image();
crabImg.src = crabURL;

var pigImg = new Image();
pigImg.src = pigURL;

var pigeonImg = new Image();
pigeonImg.src = pigeonURL;

function changeParticles(src1, src2, dir, startX, startY, scale) {

	
      // Inital starting position
      var posX = 20,
          posY = particlefield.height / 2;


      // No longer setting velocites as they will be random
      // Set up object to contain particles and set some default values
      var particles = {},
          particleIndex = 0,
          settings = {
            density: 1,
            startingX: startX,
            startingY: startY,
            gravity: dir
          };

      var particles2 = {};         

      particlefieldcontext.clearRect(0, 0, particlefield.width, particlefield.height)


      // Set up a function to create multiple particles
      function Particle1() {
        // Establish starting positions and velocities
        this.x = settings.startingX;
        this.y = settings.startingY;

        // Determine original X-axis speed based on setting limitation
        this.vx = Math.random() * 20 - 10;
        this.vy = Math.random() * 20 - 5;

        // Add new particle to the index
        // Object used as it's simpler to manage that an array
        particleIndex ++;
        particles[particleIndex] = this;
        this.id = particleIndex;
        this.life = 0;
        this.maxLife = 100;
      }

      // Some prototype methods for the particle's "draw" function
      Particle1.prototype.draw = function() {         
      	particleImg.src = src1;
        this.x += this.vx;
        this.y += this.vy;

        // Adjust for gravity
        this.vy += settings.gravity;

        // Age the particle
        this.life++;

        // If Particle is old, it goes in the chamber for renewal
        if (this.life >= this.maxLife) {
          delete particles[this.id];
        }

        // Create the shapes
        var min = (deviceWidth/6) * 1;
	    var max = (deviceWidth/6) * 1.2;
	    var pSize = min + (Math.random() * (max-min))
        particlefieldcontext.clearRect(settings.leftWall, settings.groundLevel, particlefield.width, particlefield.height);
        particlefieldcontext.drawImage(particleImg, this.x, this.y, pSize, pSize)

      }


      // Set up a function to create multiple particles
      function Particle2() {
        // Establish starting positions and velocities
        this.x = settings.startingX;
        this.y = settings.startingY;

        // Determine original X-axis speed based on setting limitation
        this.vx = Math.random() * 20 - 10;
        this.vy = Math.random() * 20 - 5;

        // Add new particle to the index
        // Object used as it's simpler to manage that an array
        particleIndex ++;
        particles[particleIndex] = this;
        this.id = particleIndex;
        this.life = 0;
        this.maxLife = 100;
      }

      // Some prototype methods for the particle's "draw" function

      Particle2.prototype.draw = function() {         
      	particleImg.src = src2;
        this.x += this.vx;
        this.y += this.vy;

        // Adjust for gravity
        this.vy += settings.gravity;

        // Age the particle
        this.life++;

        // If Particle is old, it goes in the chamber for renewal
        if (this.life >= this.maxLife) {
          delete particles[this.id];
        }

        // Create the shapes
        var min = (deviceWidth/6) * 1;
	    var max = (deviceWidth/6) * 1.2;
	    var pSize = min + (Math.random() * (max-min))
        particlefieldcontext.clearRect(settings.leftWall, settings.groundLevel, particlefield.width, particlefield.height);
        particlefieldcontext.beginPath()
        particlefieldcontext.drawImage(particleImg, this.x, this.y, pSize, pSize)
        particlefieldcontext.closePath()

      }


      setInterval(function() {
      	particlefieldcontext.clearRect(0, 0, canvas.width, canvas.height)
        // Draw the particles

        for (var i = 0; i < settings.density; i++) {
          if (Math.random() > 0.97) {
            // Introducing a random chance of creating a particle
            // corresponding to an chance of 1 per second,
            // per "density" value
            new Particle1();
          }
        }

        for (var i in particles) {
          particles[i].draw();
        }
        // Draw the particles
        for (var i = 0; i < settings.density; i++) {
          if (Math.random() > 0.97) {
            // Introducing a random chance of creating a particle
            // corresponding to an chance of 1 per second,
            // per "density" value
            new Particle2();
          }
        }

        for (var i in particles2) {
          particles2[i].draw();
        }

      }, 30);



  }



function option1 () {
	  
  characterfieldcontext.clearRect(0, 0, deviceWidth, deviceHeight)
  foregroundcontext.clearRect(0, 0, deviceWidth, deviceHeight)
  particlefieldcontext.clearRect(0, 0, deviceWidth, deviceHeight)

  changePic(-0.25, -0.6, 1.45, 1.45, option1URL)

  characterfieldcontext.drawImage(pigImg, (deviceWidth - (deviceWidth/3)) + 20, 20, deviceWidth/2, deviceWidth/2)
  changeParticles(petal1URL, petal2URL, 0.5, deviceWidth / 2, -deviceHeight, 1)


}

function option2 () {
  characterfieldcontext.clearRect(0, 0, deviceWidth, deviceHeight)
  foregroundcontext.clearRect(0, 0, deviceWidth, deviceHeight)
  particlefieldcontext.clearRect(0, 0, deviceWidth, deviceHeight)
  changePic(-0.25, -0.56, 1.45, 1.45, option2URL)
  
  characterfieldcontext.drawImage(crabImg, 20, (deviceHeight - (deviceWidth/3)) - 20, deviceWidth/3, deviceWidth/3)
  foregroundcontext.drawImage(seaweedImg, 0, deviceHeight/5, deviceWidth, deviceHeight)


		  changeParticles(bubble1URL, bubble2URL, -0.5, deviceWidth / 2, deviceHeight, 1)

}

function option3 () {
	  
  characterfieldcontext.clearRect(0, 0, deviceWidth, deviceHeight)
  foregroundcontext.clearRect(0, 0,  deviceWidth, deviceHeight)
  particlefieldcontext.clearRect(0, 0, deviceWidth, deviceHeight)
  characterfieldcontext.drawImage(pigeonImg, (characterfield.width - (characterfield.width/3)) - 20, (characterfield.height - (characterfield.width/3)) - 20, characterfield.width/3, characterfield.width/3)
  changePic(-0.25, -0.58, 1.45, 1.45, option3URL)
  changeParticles(leaf1URL, leaf2URL, 0.5, particlefield.width / 2, -particlefield.height, 2)



}

option1Button.addEventListener('click', option1)
option2Button.addEventListener('click', option2)
option3Button.addEventListener('click', option3)

tracker.setInitialScale(4)
tracker.setStepSize(2)
tracker.setEdgesDensity(0)

tracking.track('#video', tracker, { camera: true, fps:2 })

tracker.on('track', event => {
  context.clearRect(0, 0, canvas.width, canvas.height)
  event.data.forEach(rect => {
    context.drawImage(img, rect.x + (filterX * rect.width),
    rect.y + (filterY * rect.height),
    rect.width * filterWidth,
    rect.height * filterHeight
  		)
  })


})

}

export default Script