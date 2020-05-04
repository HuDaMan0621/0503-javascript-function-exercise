function findBiggestFraction (a,b) {
    var result;
    a>b ? result = ["firstFraction", a ] : result = ["secondFraction", b];
    return result;
}

var firstFraction = 3/4;
var secondFraction = 5/7; 

var fractionResult = findBiggestFraction(firstFraction, secondFraction);

console.log("first fraction result: ", firstFraction);
console.log("second fraction result: ", secondFraction);
console.log("fraction "+ fractionResult[0] + "with a value of " + fractionResult[1]+"is the biggest!")