// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
// 1. Melissa McCoy
// 2. Antonio Dangond


// 0. "YOU SIGNED... WHO?!"
//var client1 = {name: ___; age: __; quote:__;};

// 1. "Here they Come!"
var client1 = {
  name: "Adam Sandler",  
  age: 47,
  quote: "That's your home! Are you too good for your home?!",
  showQuote: function() {
   alert(this.quote); }
};

var client2 = {
	name: "Kristen Bell",
	age: 33,
	quote: "Do you wanna build a snowman?",
};

var client3 = {
	name: "Jim Carrey",
	age: 52,
	quote: "...So you're telling me there's a chance? YEAH!",
};

// 2. "TIME IS MONEY!"
function Client(name, age, quote) {
    this.name = name;
    this.age = age;
    this.quote = quote;
};

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
console.log(shooterMcGavin.constructor);
console.log(shooterMcGavin.age);
console.log(shooterMcGavin.quote);

// 3. "SHOW 'EM OFF!"
function stringClient (clientObj)
{
  return 'The celebrity\'s name is ' + clientObj.name + '.\nThe celebrity\'s age is ' + clientObj.age + '.\n' + 'The celebrity\'s quote is "' + clientObj.quote +'"';
}

var clientArray = [client1,client2,client3];

function loopClient (list) {
  var clientString = "";
  for (i=0;i<list.length;i++) {
    clientString = clientString + stringClient(list[i]) + "\n\n";
  }
  alert(clientString);
}

var clientArray = [client1,client2,client3];
loopClient(clientArray);


// 4. "But wait, there's more!"



// 5.  ** BONUS **


//  6.  Your Reflection: This was a great experience working through the challenge and debugging with Antonio. We both filled in each other's knowledge gaps and it felt like a productive and constructive experience. 
