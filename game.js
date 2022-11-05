
// declare variable of the game
const gameBody = document.getElementById("game-body");
const life = document.getElementById("lives");

var allfruits = 0;
var score=0; 
var points= document.getElementById("score");
const img = [
"img.1.png",
"img.2.webp",
"img.3.png",
"img.4.png",
"img.5.png",
"img.6.png",
"img.7.png",
];
// life count
const maxlives = 8;
var lives = 8;
// slice sound
const expAudio = new Audio("./assets/audio_slicefruit.mp3");
expAudio.volume = 0.2;
gameBody.onclick = () => {
  expAudio.pause();
  expAudio.currentTime = 0;
  expAudio.play();
};


  
    //Add background sound
const backgroundSound = new Audio("./assets/bgmusic.mp3");
backgroundSound.play();
backgroundSound.loop = true;

var timer = setInterval(function () {
    

    let fruit = document.getElementById("fruit" + allfruits);
    if (checkCollision(fruit) == true) {
      fruitChop(fruit);
      if (lives == 0) {
        
        location.href = "./game over.html";
      }
    }
},5000)

//  Write a function to make a fruits

function makefruit() {
    randomImage = img[getRandomInt(0, img.length)];
    gameBody.innerHTML += `<img src="./assets/${randomImage}" class="fruit-image" id="fruit${allfruits}">`;
    let fruit = document.getElementById("fruit" + allfruits);
    fruit.style.transform = `translateX(${getRandomInt(20, 80)}vw)`;
    fruit.style.animationDuration = `${getRandomInt(2,7)}s`;
    fruit.onclick = () => {
      fruitChop(fruit);
    };
  }
  function count(){
    score++;
  }
  //function to chop the fruits
  function fruitChop(fruit) {
    
   if(fruit.style.display ="none"){
    points.textContent = count();
    
   }
    allfruits++;
    makefruit();
  }
  
  //code to start the game by calling the first fruit

  makefruit(allfruits);
// function to check lives count
function checkCollision(fruit) {
    if (fruit.getBoundingClientRect().bottom <= 0) {
      lives--;
      return true;
      
    }
    return false;
  }
  //function to get random integer
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  // to update score
  localStorage.setItem(points,score);