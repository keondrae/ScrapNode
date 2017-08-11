var express = require('express');
var router = express.Router();
var odbc = require('odbc');
var najax = require('najax');
var request = require('request');
var connectionString ="Driver={SQL Server};Server=tf-sql-01;Database=MAS_TFI";
var db = new odbc.Database();
var DataArray = [];
var PlantOneArray = [];
var PlantTwoArray = [];
var PlantThreeArray = [];

/* GET users listing. */
router.get('/:year', function(req, res, next) {
    DataArray = [];
    var Year = req.params.year;

    najax({ // Plant One
        url:'http://localhost:3000/plantOneFetch/' + Year + '/All',
        type:'GET',
        dataType: 'json',
        async: false,
        cache: true,
        timeout: 5000
    }).success(function(data){
        //console.log('Plant One: ' + data.length);


        for(var i = 0; i < data.length; i++){
            var DateOne = data[i].Date;
            var EndBalanceOne = data[i].AllPlantOneEndingBalance;

            PlantOneArray.push({
                Date: DateOne,
                Bal: EndBalanceOne
            })

        }
        najax({ //Plant Two
            url:'http://localhost:3000/plantTwoFetch/' + Year + '/All',
            type:'GET',
            dataType: 'json',
            async: true,
            cache: true,
            timeout: 5000
        }).success(function(data1){
            //console.log('Plant Two: ' + data1.length);

            for(var i = 0; i < data1.length; i++){
                var DateTwo = data1[i].Date;
                var EndBalanceTwo = data1[i].AllEndingBalance;

                PlantTwoArray.push({
                    Date: DateTwo,
                    Bal: EndBalanceTwo
                })

            }

            najax({
                url:'http://localhost:3000/plantThreeFetch/' + Year + '/All',
                type:'GET',
                dataType: 'json',
                async: false,
                cache: true,
                timeout: 5000
            }).success(function(data2){
                //console.log('Plant Three: ' + data2.length);

                for(var i = 0; i < data2.length; i++){
                    var DateThree = data2[i].Date;
                    var EndBalanceThree = data2[i].AllPlantThreeEndingBalance;

                    PlantThreeArray.push({
                        Date: DateThree,
                        Bal: EndBalanceThree
                    })
                }
                //console.log(TestArrayTwo);

                for(var i = 0; i < PlantThreeArray.length; i++){
                    var Date = PlantThreeArray[i].Date;
                    var PlantOne = PlantOneArray[i].Bal;
                    var PlantTwo = PlantTwoArray[i].Bal;
                    var PlantThree = PlantThreeArray[i].Bal;

                    DataArray.push({
                        Date: Date,
                        PlantOneBal: PlantOne,
                        PlantTwoBal: PlantTwo,
                        PlantThreeBal: PlantThree

                    })
                }
                //console.log(DataArray);
                //console.log(DataArray.length);
                res.send(JSON.stringify(DataArray))
            }).error(function(err){
                console.log('Plant Three Error');
                console.log(err);
            });
        }).error(function(err){
            console.log('Plant Two Error');
            console.log(err);
        });
    }).error(function(err){
        console.log('Plant One Error');
        console.log(err);
    });


});

module.exports = router;

function PlantAll(Year, db, connectionString, res) {

    console.log('Plant All');
    DataArray  = [];
    PlantOneArray = [];
    PlantTwoArray = [];
    PlantTwoArray = [];
    PlantThreeArray = [];

    najax({ //Plant Two
        url:'http://localhost:3000/plantTwoFetch/' + Year + '/All',
        type:'GET',
        dataType: 'json',
        async: true,
        cache: true,
        timeout: 5000
    }).success(function(data1){
        console.log('Plant Two: ' + data1.length);
        // for(var i = 0; i < data.length; i++){
        //     var DateTwo = data[i].Date;
        //     var EndBalanceTwo = data[i].AllEndingBalance;
        //
        //     TestArrayOne.push({
        //         Date: DateTwo,
        //         Bal: EndBalanceTwo
        //     })
        //
        // }
        //console.log(data1);
        res.send(JSON.stringify(data1));
    }).error(function(err){
        console.log(err)
    });

    /*
    request("http://localhost:3000/plantOneFetch/2017/All", function (error, response, body) {

        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        response.headers['Content-type']
        for(var i = 0; i < body.length; i++){
            var PlantOneDate = body[i].Date;
            var PlantOneEndingBalance = body[i].AllPlantOneEndingBalance;

            PlantOneArray.push({
                PlantOneDate: PlantOneDate,
                PlantOne: PlantOneEndingBalance
            });
        }


        request("http://localhost:3000/plantTwoFetch/2017/All", function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            PlantTwoArray = body;

            request("http://localhost:3000/plantThreeFetch/2017/All", function (error, response, body) {
                console.log('error:', error); // Print the error if one occurred
                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                PlantThreeArray = body;

                console.log(PlantOneArray[1]);
                console.log(PlantTwoArray[1]);
                console.log(PlantThreeArray[1]);

                for(var i = 0; i < PlantOneArray.length; i++){
                    var DataDate = PlantOneArray[i].Date;
                    var PlantOneBalance = PlantOneArray[i].AllPlantOneEndingBalance;
                    var PlantTwoBalance = PlantTwoArray[i].AllEndingBalance;
                    var PlantThreeBalance = PlantThreeArray[i].AllPlantThreeEndingBalance;

                    DataArray.push({
                        Date: DataDate,
                        PlantOne: PlantOneBalance,
                        PlantTwo: PlantTwoBalance,
                        PlantThree: PlantThreeBalance
                    });

                }


                res.send(JSON.stringify(DataArray));
            });
        });
    });*/


    //CombineArrays(PlantOneArray,PlantTwoArray, TempArray, false);
    //CombineArrays(TempArray, PlantThreeArray, DataArray, true);



}


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

/*db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-00-0000' AND  FiscalYear =" + Year;


        db.query(sql, function (err, rows, moreResultSets) {

            if (err) {
                return console.log(err);
            }

            for(var i = 0; i < rows.length; i++) {
                var FY = parseInt(rows[i].FiscalYear);
                var FiscalYear = FY;
                var FP = parseInt(rows[i].FiscalPeriod);
                var FiscalPeriod = FP;
                var BeginningBalance = rows[i].BeginningBalance;
                var DebitAmount = rows[i].DebitAmount;
                var CreditAmount = rows[i].CreditAmount;
                var EB = BeginningBalance + DebitAmount - CreditAmount;
                var EndingBalance = EB.toString();
                var Date;

                switch (FiscalPeriod) {
                    case 1:
                        Date = FiscalYear - 1 + '-12-01';
                        break;
                    case 2:
                        Date = FiscalYear + '-01-01';
                        break;
                    case 3:
                        Date = FiscalYear + '-02-01';
                        break;
                    case 4:
                        Date = FiscalYear + '-03-01';
                        break;
                    case 5:
                        Date = FiscalYear + '-04-01';
                        break;
                    case 6:
                        Date = FiscalYear + '-05-01';
                        break;
                    case 7:
                        Date = FiscalYear + '-06-01';
                        break;
                    case 8:
                        Date = FiscalYear + '-07-01';
                        break;
                    case 9:
                        Date = FiscalYear + '-08-01';
                        break;
                    case 10:
                        Date = FiscalYear + '-09-01';
                        break;
                    case 11:
                        Date = FiscalYear + '-10-01';
                        break;
                    case 12:
                        Date = FiscalYear + '-11-01';
                        break;
                }

                DataArray.push({

                    Date: Date,
                    EndingBalance: EndingBalance
                });
            }

            db.close(function (err) {
                if(err){
                    console.log('Plant All Error:' + err)
                }else{
                    console.log("the database connection is now closed");
                }

            });



        });

    });*/