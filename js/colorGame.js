(function(){
	"use strict";

	function _id(id){
		return document.getElementById(id);
	}
	function _class(names){
		return document.getElementsByClassName(names);
	}
	function _QueSelAll(selectors){
		return document.querySelectorAll(selectors);
	}
	function _QueSel(selectors){
		return document.querySelector(selectors);
	}

	var numSquares = 6;
	var colors = [];
	var squares = _QueSelAll(".squares");
	var pickedColor;
	var colorDisplay = _id('colorDisplay');
	var messageDisplay = _QueSel("#message");
	var h1 = _QueSel("h1");
	var resetButton = _QueSel("#reset");
	var modeButtons = _QueSelAll(".mode");

	init();

function init(){

	setupModeButtons();
	setupSquares();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener('click', function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			
			this.textContent === "Easy"? numSquares = 3: numSquares = 6;
			/*if(this.textContent === "Easy"){
				numSquares = 3; 
			}
			else{
				numSquares = 6;
			}*/

			reset(); 
		},false);
	}	
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		// squares[i].style.background = colors[i];
	
		squares[i].addEventListener('click', function(){
		
		//grab color of clicked square
		var clickedColor=(this.style.background);
		console.log('Clicked Color', clickedColor);
		console.log('Picked Color',pickedColor);
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?"
		}

		else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		
		}, false);
	};
	reset(); //defines color so now the var changes from generateRandomColors(numSquares); to empty array and pickedColors are just defined in var. 
}

function reset(){
	//generate all new colors
		colors = generateRandomColors(numSquares); 
		//pick a new random color from array
		pickedColor = pickColor();
		//change color dispaly to match picked color
		colorDisplay.textContent = pickedColor;
		messageDisplay.textContent = "";
		resetButton.textContent = "New Colors";
		//change colors of squares
		for(var i = 0; i < squares.length; i++){

		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
			
		}
		h1.style.background = "steelBlue";
}

	/*easyBtn.addEventListener('click', function(){
		hardBtn.classList.remove("selected");
		easyBtn.classList.add("selected");
		numSquares = 3;
		colors = generateRandomColors(numSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		for(var i = 0; i < squares.length; i++){
			if(colors[i]){
				squares[i].style.background = colors[i];
			}
			else{
				squares[i].style.display = "none";
			}
		}

	}, false);


	hardBtn.addEventListener('click', function(){
		hardBtn.classList.add("selected");
		easyBtn.classList.remove("selected");
		colors = generateRandomColors(numSquares);
		pickedColor = pickColor();
		numSquares = 6;
		colorDisplay.textContent = pickedColor;
		for(var i = 0; i < squares.length; i++){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		
		}

	}, false);*/


	resetButton.addEventListener('click', function(){
		reset();
	}, false)

	// colorDisplay.textContent = pickedColor;


function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
	//change each color to match given color
	squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function getRandomColor(){
	return  Math.floor(Math.random() * 256);
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
	//get random clor and push into arr
	arr.push(randomColor());

	}
	//return that array
	return arr;
}

function randomColor(){
	
	// var r = getRandomColor(),//pick a 'red' from 0-255;
	// 	g = getRandomColor(),//pick a 'green' from 0-255;
	// 	b = getRandomColor();//pic a 'blue' from 0-255;
	
	return "rgb(" + getRandomColor() + ", " + getRandomColor() + ", " + getRandomColor()  +")";

}


})();