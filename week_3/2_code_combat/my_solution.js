// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
//RESCUE MISSION
//Move Down 2x
//Move Right 1x
//Move Up 2x
//MoveRight 2x
//Move Down 1x
//Attack Enemy

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

//GRAB THE MUSHROOM
//Move up 1x
//Move left 1x
//Move right 1x
//Move up 1x
//Attack Eneemy

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEneemy();

//DRINK ME
//Move right 1x
//Attack Enemy
//Move right 1x
//Move down 1x
//Move up 1x
//Move right 1x
//Attack Enemy 

this.moveRight()
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

//TAUNT THE GUARDS
//Pseudocode for escaping
//Move Right 2x
//Move Up 1x
//Move Right 1x
//Say Over here!
//Move Down 1x
//Move Right 1x
//Move Up 1x
//Move Right 1x

this.moveRight();
this.bustDownDoor();

// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");

// Now escape to the right
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Over here!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

//IT'S A TRAP
//Pseudocode
//Move Down 2x
//Say Over here!
//Move Up 2x

this.moveDown();
this.moveDown();
this.say("Over here!");
this.moveUp();
this.moveUp();

//Taunt
//Pseudocode
//Say something 4x
this.say("Why you so blue Ogre?");
this.say("Hey there muffin top!");
this.say("this mission seems a bit pointless...");
this.say("but I guess it's good practice");

//COWARDLY TAUNT
//Run to xy(50,16)
//Say You had me at hello.
//Run to xy(63,20) then xy(70,10)

this.moveXY(50, 16);
this.say("You had me at hello.");
this.moveXY(63, 20);
this.moveXY(70, 10);

//COMMANDING FOLLOWERS
//Go to (49,66) then (60,63) then (75,63)
//Say Follow me!
//Go toward ogres at (66,44)
//Say Attack!
//Run to 66,66 then 50,66 to hide 

this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Follow me!");
this.moveXY(66, 44);
this.say("Attack!");
this.moveXY(66,66);
this.moveXY(50,66);


//MOBILE ARTILLERY
//Go to 48,38
//Attack at 70,55 then at 65,50 the at 48,65 then at 47,50 
this.moveXY(48,38);
this.attackXY(70,55);
this.attackXY(65,50);
this.attackXY(48,65);
this.attackXY(47,50);

 
 
 //Questions
//What is this referring to? Think programming-wise rather than in the terms of the game.
//		Answer: It refers to the object that the function/method applies to.
//What does the () do in JavaScript?
//		Answer: When calling a function, you type it's variable's name and it's necessary to add () to let the JS interpreter know that the variable is referencing to a function. If not, it looks for a tentacle with the variable's name to another data type.
//What is the point of the semicolons?
//		Answer: It tells the JS interpreter that the statement or line of code is completed and it should act upon whatever's it's just read if the code tells it to. Like this code: if(1==0); alert("Hi"); would always return Hi because it broke the logic.


// Reflection: 
//I felt that this activity wasn't a very effective way of learning JS nor a great use of my time. The exercise taught me a little bit about some JS methods and objects but using the hour to read an Intro to JS would have been much more educational. I felt like I spent a lot of time trying to figure out what they wanted exactly, listening to animations, and changing coordinates rather than learning JS. 