// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
var obj = {};

var valH=Math.floor(currency/50);
var valQ=Math.floor((currency-valH*50)/25);
var valD=Math.floor(((currency-valH*50)-25*valQ)/10);
var valN=Math.floor((((currency-valH*50)-25*valQ)-10*valD)/5);
var valP=(((currency-valH*50)-25*valQ)-10*valD)-5*valN;

if (currency>10000) {
obj["error"]="You are rich, my friend! We don't have so much coins for exchange";
} else {
if (valH>0) {
obj["H"]=valH;
}
if (valQ>0) {
obj["Q"]=valQ;
}
if (valD>0) {
obj["D"]=valD;
}
if (valN>0) {
obj["N"]=valN;
}
if (valP>0) {
obj["P"]=valP;
}
}

return obj;
}
