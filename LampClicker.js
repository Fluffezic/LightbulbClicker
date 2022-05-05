var Clicks =  parseInt("0");
setInterval(Clickupdate, 1000);
setInterval(multibonus, 30000);
var clicktext = document.getElementById("counterid")
var standardincrease = 1.25;
var tenth = 0.1;
const devcode = "Starlove";
let devmodeactive = false;
var multi = parseInt("1");
var rebirth = parseInt("0");
var upgrade1count = parseInt("0");
var upgrade2count = parseInt("0");
var upgrade3count = parseInt("0");
var upgrade4count = parseInt("0");
var upgrade5count = parseInt("0");
var upgrade1value = parseInt(0.1);
var upgrade2value = parseInt("1");
var upgrade3value = parseInt("8");
var upgrade4value = parseInt("47");
var upgrade5value = parseInt("260");
var upgrade1cost = parseInt("15");
var upgrade2cost = parseInt("100");
var upgrade3cost = parseInt("1100");
var upgrade4cost = parseInt("12000");
var upgrade5cost = parseInt("130000");
function manualclick() {		
Clicks = Clicks + multi;
	clicktext.innerHTML= Math.floor(Clicks);
	upgradevisible()
	textsize()	
}
function Clickupdate() {
	Clicks = Clicks +(((upgrade1count * 0.1) + (upgrade2count * upgrade2value) + (upgrade3count * upgrade3value) + (upgrade4count * upgrade4value) + (upgrade5count * upgrade5value)) * multi);
	clicktext.innerHTML= Math.floor(Clicks);
	upgradevisible()
	textsize()
}
function upgrade1(){
	if (upgrade1cost <= Clicks) {
		upgrade1count = upgrade1count + 1;
		document.getElementById("upgrade1count").innerHTML = "Your Lightswitches: " + upgrade1count;
		Clicks = Clicks - upgrade1cost;
			clicktext.innerHTML= Math.floor(Clicks);
			upgrade1cost = Math.round(upgrade1cost * standardincrease);
			document.getElementById("upgrade1cost").innerHTML = "Buy this upgrade for: " + upgrade1cost + " Clicks";
}
}
function upgrade2(){
	if (upgrade2cost <= Clicks) {
		upgrade2count = upgrade2count + 1;
		document.getElementById("upgrade2count").innerHTML = "Your Breakerboxess: " + upgrade2count;
		Clicks = Clicks - upgrade2cost;
			clicktext.innerHTML= Math.floor(Clicks);
			upgrade2cost = Math.round(upgrade2cost * standardincrease);
			document.getElementById("upgrade2cost").innerHTML = "Buy this upgrade for: " + upgrade2cost + " Clicks";
		}
		
		
		
		
	
}
function upgrade3(){
	if (upgrade3cost <= Clicks) {
		upgrade3count = upgrade3count + 1;
		document.getElementById("upgrade3count").innerHTML = "Your Pylons: " + upgrade3count;
		Clicks = Clicks - upgrade3cost;
			clicktext.innerHTML= Math.floor(Clicks)
			upgrade3cost = Math.round(upgrade3cost * standardincrease);
			document.getElementById("upgrade3cost").innerHTML = "Buy this upgrade for: " + upgrade3cost + " Clicks";
		}
		
		
		
		
	
}
function upgrade4(){
	if (upgrade4cost <= Clicks) {
		upgrade4count = upgrade4count + 1;
		document.getElementById("upgrade4count").innerHTML = "Your Powerplants: " + upgrade4count;
		Clicks = Clicks - upgrade4cost;
			clicktext.innerHTML= Math.floor(Clicks)
			upgrade4cost = Math.round(upgrade4cost * standardincrease);
			document.getElementById("upgrade4cost").innerHTML = "Buy this upgrade for: " + upgrade4cost + " Clicks";
		}
		
		
		
		
	
}
function upgrade5(){
	if (upgrade5cost <= Clicks) {
		upgrade5count = upgrade5count + 1;
		document.getElementById("upgrade5count").innerHTML = "Your Suns: " + upgrade5count;
		Clicks = Clicks - upgrade5cost;
			clicktext.innerHTML= Math.floor(Clicks)
			upgrade5cost = Math.round(upgrade5cost * standardincrease);
			document.getElementById("upgrade5cost").innerHTML = "Buy this upgrade for: " + upgrade5cost + " Clicks";
		}
		
		
		
		
	
}
function upgradevisible() {
	if (Clicks >= 50) {
	document.getElementById("upgrade2div").style.display = "block"
	document.getElementById("upgrade2pre").style.display = "none"
	}
		if (Clicks >= 550) {
	document.getElementById("upgrade3div").style.display = "block"
		document.getElementById("upgrade3pre").style.display = "none"
	}
		if (Clicks >= 6000) {
	document.getElementById("upgrade4div").style.display = "block"
		document.getElementById("upgrade4pre").style.display = "none"
	}
			if (Clicks >= 75000) {
	document.getElementById("upgrade5div").style.display = "block"
		document.getElementById("upgrade5pre").style.display = "none"
	}
	
	
	
	
}
function gainclicks(variable) {
	if (devmodeactive == true) {
	Clicks = Clicks + variable;
	console.log("Given " + variable + " clicks")
	}
	else {
				console.log("You dont have access to this function")
	}
	
	
}
function devunlock(variable) {
	if (devcode == variable) {
		devmodeactive = true;
		console.log("Devmode unlocked")
		
		
	}
	else {
		console.log("Wrong Code")
		
	}
	
	
	
}
function textsize() {
	if (Clicks < 1000) {
			clicktext.style.fontSize = "50px";
		
		
	}
		if (Clicks < 10000 && Clicks > 1000) {
			clicktext.style.fontSize = "45px";
		
		
	}
			if (Clicks < 100000 && Clicks > 10000) {
			clicktext.style.fontSize = "40px";
		
		
	}
				if (Clicks < 1000000 && Clicks > 100000) {
			clicktext.style.fontSize = "35px";
		
		
	}
	
	
	
	
}
function multibonus() {
	var chance = Math.floor((Math.random() * 5) + 1);
	var toprnd = Math.floor((Math.random() * 701) + 100);
	var leftrnd = Math.floor((Math.random() * 401) + 100);
	if (chance == 5) {	
		document.getElementById("switchbonus").style.left = leftrnd + "px";
		document.getElementById("switchbonus").style.top = toprnd + "px";
		document.getElementById("switchbonus").style.display = "block";
		setTimeout(RemoveBonus, 5000);

	}
	
	
	
	
}
function RemoveBonus() {
			document.getElementById("switchbonus").style.display = "none";

				
	
	
	
}
function multiplier() {
	RemoveBonus()
		document.getElementById("switchbonusmessage").style.display = "block";
		setTimeout(removemessage, 3000);
		setTimeout(multipliernormal, 60000)
	multi = multi * 2;
	
	
	
	
}
function removemessage() {
			document.getElementById("switchbonusmessage").style.display = "none";
	
}
function multipliernormal() {
	multi = multi / 2;
}