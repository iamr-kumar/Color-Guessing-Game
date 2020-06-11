var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");
var easy = document.getElementById("easyBtn");
var hard = document.getElementById("hardBtn");


easy.addEventListener("click",function(){
  hard.classList.remove("selected");
  easy.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  document.getElementById("rgb").innerHTML = pickedColor;
  h1.style.backgroundColor = "steelblue";
  for(var i =0; i<squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    }
    else{
      squares[i].style.display = "none";
    }
  }
});

hard.addEventListener("click",function(){
  numSquares = 6;
  hard.classList.add("selected");
  easy.classList.remove("selected");
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  document.getElementById("rgb").innerHTML = pickedColor;
  h1.style.backgroundColor = "steelblue";
  for(var i =0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "initial";
  }
});

resetButton.addEventListener("click",function(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  messageDisplay.innerHTML = "";
  this.innerHTML = "New Colors";
  document.getElementById("rgb").innerHTML=pickedColor;
  for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
});

document.getElementById("rgb").innerHTML=pickedColor;

for(var i=0;i<squares.length; i++){
  squares[i].style.backgroundColor = colors[i];

  //Add click listeners to squares

  squares[i].addEventListener("click",function(){
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){
      messageDisplay.innerHTML = "Correct";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
      resetButton.innerHTML = "Play Again?";
    }
    else{
      this.style.backgroundColor = "#232323";
      messageDisplay.innerHTML= "Try Again";
    }
  });
}

function changeColors(color){
  for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random()*colors.length);
  return colors[random];
}

function generateRandomColors(num){
  var arr = [];
  for(var i=0; i<num; i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  //pick three numbers between 0 to 255
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
