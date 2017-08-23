

var Year = 2017
var thisDate;
var thisYear = Year;
var PrevYear = parseInt(thisYear) - 1;
var id = 20;
var newId = id % 12;
console.log(newId);
switch (newId){

    case 0:
        thisDate = '1-Dec-' + PrevYear;
        break;
    case 1:
        thisDate = '1-Jan-' + thisYear;
        break;
    case 2:
        thisDate = '1-Feb-' + thisYear;
        break;
    case 3:
        thisDate = '1-Mar-' + thisYear;
        break;
    case 4:
        thisDate = '1-Apr-' + thisYear;
        break;
    case 5:
        thisDate = '1-May-' + thisYear;
        break;
    case 6:
        thisDate = '1-Jun-' + thisYear;
        break;
    case 7:
        thisDate = '1-Jul-' + thisYear;
        break;
    case 8:
        thisDate = '1-Aug-' + thisYear;
        break;
    case 9:
        thisDate = '1-Sep-' + thisYear;
        break;
    case 10:
        thisDate = '1-Oct-' + thisYear;
        break;
    case 11:
        thisDate = '1-Nov-' + thisYear;
        break;
}

console.log(thisDate);