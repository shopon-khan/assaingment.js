

// https://github.com/shopon-khan/assaingment.js


// kilometerToMeter
function kilometerToMeter(kilo){
    var met = kilo * 1000
    return met;
}
var nanarMet = kilometerToMeter (10);
console.log(nanarMet);
var naniMet = kilometerToMeter (15);
console.log(naniMet);

// bugetCalculator
function budgetCalculator (watchPrice, mobilePrice, laptopPrice){
    var result = watchPrice + mobilePrice + laptopPrice;
    return result;
}
var sum = budgetCalculator (50, 100, 500);
console.log (sum);


//megaFriend


var friend = [ "amir", "samir", "mahamud", "rayhan", "mehedi", "shoponkhan"];
  var max = friend [0];
 for ( var i= 0; i < friend.length; i++){
      var element = friend[i];
     if ( element> max){
          max = element;
      }
 }
  console.log("the fine name is:", max);