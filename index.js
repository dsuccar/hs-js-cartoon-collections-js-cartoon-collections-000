var dwarves = ["Dopey", "Grumpy", "Bashful "];
  var dwarvesArray = []
function dwarfRollCall() {

  for (let i = 0; i < dwarves.length; i++){
    dwarvesArray.push(`${i+1}. ${dwarves[i]}`);

  }
  return dwarvesArray.join(' ');

}



function summonCaptainPlanet(planeteerCalls){
  var result = [];
  for (var i = 0; i < planeteerCalls.length; i++){
     result.push(planeteerCalls[i].toUpperCase() + "!")

  }
  return result
}



// var ele = planeteerCalls.toUpperCase() + "!";

function longPlaneteerCalls(words) {
	for(var i = 0; i < words.length; i++) {
		if(words[i].length > 4) {
			return true;
		}
	}
	return false;
}



function findTheCheese(foods) {

  var cheese = ['swiss', 'cheddar', 'american', 'guda']
var cheeseInCommon = foods.indexOf('cheddar')

if (cheeseInCommon > [-1]) {
  return cheese[cheeseInCommon]
}
else {
  return 'no cheese!'
}
}





  // for(var i = 0; i < foods.length; i++){
  //   for(var j =0; j < cheese.length; j++){
  //
  //     if(foods[i] = cheese[j]){
  //       return cheese[j]





  //  {return 'no cheese!';
  //     }
