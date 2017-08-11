var request = require('request');
var TestArray = [];
var TestArrayOne = [];
var TestArrayTwo = [];
var DataArray = [];
request("http://localhost:3000/plantOneFetch/2017/All", function (error, response, body) {
    TestArray, TestArrayOne, TestArrayTwo, DataArray  = [];

    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    TestArray = body;
    //console.log('body:', body); // Print the HTML for the Google homepage.
    //console.log(TestArray);

    request("http://localhost:3000/plantTwoFetch/2017/All", function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        TestArrayOne = body;
        //console.log('body:', body); // Print the HTML for the Google homepage.
        //console.log(TestArrayOne);

        request("http://localhost:3000/plantThreeFetch/2017/All", function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            TestArrayTwo = body;
            //console.log('body:', body); // Print the HTML for the Google homepage.
            //console.log(TestArrayTwo);
            CombineArrays(TestArray,TestArrayOne, TestArray, false);
            CombineArrays(TestArray, TestArrayTwo, DataArray, true);
            console.log(DataArray);
        });
    });
});

function CombineArrays(BiggerArray, SmallerArray, NewArray, isLast) {
    BiggerArray.forEach(function (BA) {
        var match = false;
        SmallerArray.forEach(function (SA) {
            if(BA.Date === SA.Date){
                match = true;
                BA.EndingBalance += SA.EndingBalance;
                if(isLast){
                    BA.EndingBalance = BA.EndingBalance.toString();
                }
                NewArray.push(BA);
                //console.log(match);
            }

        });
        if(!match) NewArray.push(BA);
    });
}