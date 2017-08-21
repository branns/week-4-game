$(document).ready(function(){
	//DEFINING the Variables determining if it needs to be an array, string, etc...
//game gem number
var crysCounter = Math.floor(Math.random() * 102 + 19);
console.log(crysCounter)
//to html
$('#random').html(crysCounter);
//crystal number generator
var diamond = Math.floor(Math.random() * 9 + 1);
var quartz = Math.floor(Math.random() * 9 + 1);
var emerald = Math.floor(Math.random() * 9 + 1);
var fabulous = Math.floor(Math.random() * 9 + 1);
console.log(diamond)
//Holds user crystal total
var userCrysCounter = 0;
var wins = 0;
var losses = 0;

//game start and reset
function reset(){
	crysCounter = Math.floor(Math.random() * 102 + 19);
	$('#random').html(crysCounter);
//crystal random number for game start
	diamond= Math.floor(Math.random() * 9 + 1);
    quartz= Math.floor(Math.random() * 9 + 1);
    emerald= Math.floor(Math.random() * 9 + 1);
	fabulous= Math.floor(Math.random() * 9 + 1);
	userCrysCounter = 0;
	$('#userTotal').html(userCrysCounter);
	console.log(userCrysCounter);
}
/*on click create random number and add to cryscounter, each gem must generate a single number 
during each round until the crysCounter is matched or surpassed*/
//diamond gem number generator and counter for w/l
$('#diamond').on("click", function() {
	userCrysCounter = userCrysCounter + diamond;
	console.log("New userCrysCounter= " + userCrysCounter);
	$('#userTotal').html(userCrysCounter); //
	if (userCrysCounter === crysCounter) {
		wins ++;
		$('#winCount').html(wins);
		reset ();
	} else if (userCrysCounter > crysCounter) {
		losses ++;
		$('#loseCount').html(losses);
		reset ();
	} 
});
//quartz
$('#quartz').on("click", function() {
	userCrysCounter = userCrysCounter + quartz;
	console.log("New userCrysCounter=" + crysCounter);
	$('#userTotal').html(userCrysCounter);
	if (userCrysCounter === crysCounter) {
		wins ++;
		$('#winCount').html(wins);
		reset ();
	} else if (userCrysCounter > crysCounter) {
		losses ++;
		$('#loseCount').html(losses);
		reset ();
	} 
});
//emerald
$('#emerald').on("click", function () {
	userCrysCounter = userCrysCounter + emerald;
	$('#userTotal').html(userCrysCounter);
	if (userCrysCounter === crysCounter) {
		wins ++;
		$('#winCount').html(wins);
		reset ();
	} else if (userCrysCounter > crysCounter){
		losses ++;
		$('#loseCount').html(losses);
		reset ();
	} 
});
//fabulous
$('#fabulous').on("click", function () {
	userCrysCounter = userCrysCounter + fabulous;
	$('#userTotal').html(userCrysCounter);
	if (userCrysCounter === crysCounter) {
		wins ++;
		$('#winCount').html(wins);
		reset ();
	} else if (userCrysCounter > crysCounter){
		losses ++;
		$('#loseCount').html(losses);
		reset ();
	} 
});
});