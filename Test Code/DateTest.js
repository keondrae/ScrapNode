/*
//Test Vars
var dd = 9;
var mm = 11 + 1; //January is 0!
var yyyy = 2020;
*/
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
var prvYear = yyyy - 1;
var prvTwoYr = yyyy - 2;
var currentDate;
var lastYear;
var twoYearsAgo;

if(dd < 10){
    dd = '0' + dd
}

if(mm < 10){
    mm = '0' + mm
}
currentDate = mm + '/' + '01' + '/' + yyyy;
lastYear = mm + '/' + '01' + '/' + prvYear;
twoYearsAgo = '01/01' + '/' + prvTwoYr;


numberOfYearsAgo = 5;
intv = numberOfYearsAgo - 1;
prvYrs = yyyy - numberOfYearsAgo;

currentDate = mm + '/' + '01' + '/' + yyyy;
lastYear = mm + '/' + '01' + '/' + prvYear;
YearsAgo = '01/01' + '/' + prvYrs;


//console.log(dd);
//console.log(mm);
//console.log(yyyy);
//console.log(currentDate);
//console.log(lastYear);
//console.log(twoYearsAgo);

var MinDate = currentDate;
var MaxDate = lastYear;
var MinValueRange = YearsAgo;

console.log(dd);
console.log(mm);
console.log(yyyy);
console.log(currentDate);
console.log(lastYear);
console.log(twoYearsAgo);
console.log(MinDate);
console.log(MaxDate);
console.log(MinValueRange);
console.log(intv);