// This is a solo challenge

// Your mission description:
// Move baseball player around all four based
// to make a home run!

// Pseudocode
// Move Baseball player to home base at xy(25,30)
// Move Baseball player to first base at xy(25,30)
// Move Baseball player to second base at xy(25,30)
// Move Baseball player to third base at xy(25,30)
// Move Baseball player to home base at xy(25,30)
// Have him yell "Home Run!" through popup

// Initial Code

var bbPlayer = {
	xCord: 100,
	yCord: 100,
}

bbPlayer.moveRightUp = function() {
		this.xCord = this.xCord + 10;
		this.yCord = this.yCord + 10;}

bbPlayer.moveLeftUp =  function() {
		this.xCord = this.xCord - 10;
		this.yCord = this.yCord + 10; }

bbPlayer.moveRightDown = function() {
		this.xCord = this.xCord + 10;
		this.yCord = this.yCord - 10; }

bbPlayer.moveLeftDown = function() {
		this.xCord = this.xCord - 10;
		this.yCord = this.yCord - 10;
	}

bbPlayer.moveRightUp();
bbPlayer.moveRightUp();
bbPlayer.moveRightUp();
bbPlayer.moveRightUp();

bbPlayer.moveLeftUp();
bbPlayer.moveLeftUp();
bbPlayer.moveLeftUp();
bbPlayer.moveLeftUp();

bbPlayer.moveLeftDown();
bbPlayer.moveLeftDown();
bbPlayer.moveLeftDown();
bbPlayer.moveLeftDown();

bbPlayer.moveRightDown();
bbPlayer.moveRightDown();
bbPlayer.moveRightDown();
bbPlayer.moveRightDown();

// Refactored Code
// No refactoring done.

// Reflection
// I tried to make this work with arrow keys on a webpage (see my_solution.html) but couldn't get it to work.
// This works in node. I definitely need to find a review a resource on working with the DOM and interfacing with HTML/CSS.
// I had a lot of aspirations for this project but ran out of time at the end of the week.
// 
// 
// 
// 
// 