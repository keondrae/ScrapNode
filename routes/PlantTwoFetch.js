var express = require('express');
var router = express.Router();
var odbc = require('odbc');
var connectionString ="Driver={SQL Server};Server=tf-sql-01;Database=MAS_TFI";
var db = new odbc.Database();
var DataTempArray = [];
var DataArray = [];
var PlantTwoAllArray = [];
var PlenumsArray = [];
var FlexHCapsArray = [];
var DownersArray = [];
router.get('/:tab', function(req, res, next) {
    DataArray = [];
    var Tab = req.params.tab;

    switch (Tab){

        case 'All':
            PlantTwoAll(db, connectionString, res);
            //All
            break;
        case 'Plenums':
            PlantTwoPlenums(db, connectionString, res);
            //Plenums
            break;
        case 'FlexHCaps':
            PlantTwoFlexHCaps(db, connectionString, res);
            //FlexHCaps
            break;
        case 'Downers':
            PlantTwoDowners(db, connectionString, res);
            //Downers
            break;
    }
});

module.exports = router;

//Start of Plant Two Functions
//Done
function PlantTwoAll(db, connectionString, res) {
    console.log('Plant Two All');
    PlantTwoAllArray = [];
    DataArray = [];
    DataTempArray = [];
    var TempArray = [];
    var Array12 = [];
    var Array13 = [];
    var Array14 = [];
    var sql12 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-12-0000' AND  FiscalYear >= 2015";
    var sql13 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-13-0000' AND  FiscalYear >= 2015";
    var sql14 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-14-0000' AND  FiscalYear >= 2015";


    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        db.query(sql12, function (err, rows, moreResultSets) {
            Array12 = [];
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
                var EndingBalance = BeginningBalance + DebitAmount - CreditAmount;
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

                Array12.push({

                    Date: Date,
                    EndingBalance: EndingBalance
                });
            }

            db.query(sql13, function (err, rows, moreResultSets) {
                Array13 = [];
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
                    var EndingBalance = BeginningBalance + DebitAmount - CreditAmount;
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

                    Array13.push({

                        Date: Date,
                        EndingBalance: EndingBalance
                    });
                }

                db.query(sql14, function (err, rows, moreResultSets) {
                    Array14 = [];
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
                        var EndingBalance = BeginningBalance + DebitAmount - CreditAmount;
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

                        Array14.push({

                            Date: Date,
                            EndingBalance: EndingBalance
                        });


                    }

                    db.close(function (err) {

                        if(err){
                            console.log('Plant Two All Array Error: ' + err);
                        }else{
                            console.log("the database connection is now closed");
                        }
                    });

                    if(Array12.length >= Array13.length){
                        CombineArrays(Array12, Array13, TempArray, false);
                    }else{
                        CombineArrays(Array13, Array12, TempArray, false);
                    }

                    if(TempArray.length >= Array14.length){
                        CombineArrays(TempArray, Array14, DataTempArray , true);
                    }else{
                        CombineArrays(Array14, TempArray, DataTempArray, true);
                    }

                    for(var i = 0; i < DataTempArray.length; i++){
                        var AllDate = DataTempArray[i].Date;
                        var AllEndingBalance = DataTempArray[i].EndingBalance;

                        PlantTwoAllArray.push({
                            Date: AllDate,
                            AllEndingBalance: AllEndingBalance
                        });
                    }


                    //console.log(TestArray);
                    res.send(JSON.stringify(PlantTwoAllArray));
                });
            });
        });
    });
}
//Done
function PlantTwoPlenums(db, connectionString, res) {
    console.log('Plant Two Plenums');
    PlenumsArray = [];
    DataArray = [];
    DataTempArray = [];
    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-12-0000' AND  FiscalYear >= 2015";


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


                PlenumsArray.push({
                    Date: Date,
                    EndingBalance: EndingBalance
                });
            }

            db.close(function (err) {

                if(err){
                    console.log('Plant Two Plenums Error: ' + err);
                }else {
                    console.log("the database connection is now closed");
                }

            });


            try{


                for(var i = 0; i < PlantTwoAllArray.length; i++){

                    var PlantTwoDate = PlantTwoAllArray[i].Date;
                    var AllPlantTwoBalance = PlantTwoAllArray[i].AllEndingBalance;

                    for(var j = 0; j < PlenumsArray.length; j++){
                        var PlenumsBalance = PlenumsArray[j].EndingBalance;
                        var match = false;
                        if(PlantTwoAllArray[i].Date === PlenumsArray[j].Date){

                            match = true;
                            DataArray.push({
                                Date: PlantTwoDate,
                                Plenums: PlenumsBalance,
                                AllPlantTwo: AllPlantTwoBalance
                            });
                            break;

                        }
                    }
                    if(!match){
                        DataArray.push({
                            Date: PlantTwoDate,
                            Plenums: '0',
                            AllPlantTwo: AllPlantTwoBalance
                        });

                    }
                }

                res.send(JSON.stringify(DataArray));
            }catch (e){

                console.log('Plant Two Plenums Error: ');
                console.log(e);
            }

        });
    });

}
//Done
function PlantTwoFlexHCaps(db, connectionString, res) {
    console.log('Plant Two Flex Hose / Caps');
    FlexHCapsArray = [];
    DataArray = [];
    DataTempArray = [];
    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-13-0000' AND  FiscalYear >= 2015";


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

                FlexHCapsArray.push({

                    Date: Date,
                    EndingBalance: EndingBalance
                });
            }

            db.close(function (err) {

                if(err){
                    console.log('Plant Two Flex Hose / Caps Error: ' + err);
                }else {
                    console.log("the database connection is now closed");
                }

            });

            try{


                for(var i = 0; i < PlantTwoAllArray.length; i++){

                    var PlantTwoDate = PlantTwoAllArray[i].Date;
                    var AllPlantTwoBalance = PlantTwoAllArray[i].AllEndingBalance;

                    for(var j = 0; j < FlexHCapsArray.length; j++){
                        var FlexHCapsBalance = FlexHCapsArray[j].EndingBalance;
                        var match = false;
                        if(PlantTwoAllArray[i].Date === FlexHCapsArray[j].Date){

                            match = true;
                            DataArray.push({
                                Date: PlantTwoDate,
                                FlexHCaps: FlexHCapsBalance,
                                AllPlantTwo: AllPlantTwoBalance
                            });
                            break;

                        }
                    }
                    if(!match){
                        DataArray.push({
                            Date: PlantTwoDate,
                            FlexHCaps: '0',
                            AllPlantTwo: AllPlantTwoBalance
                        });

                    }
                }

                res.send(JSON.stringify(DataArray));
            }catch (e){

                console.log('Plant Two FlexHCaps Error: ');
                console.log(e);
            }
        });

    });

}
//Done
function PlantTwoDowners(db, connectionString, res) {
    console.log('Downers');
    DownersArray = [];
    DataArray = [];
    DataTempArray = [];
    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-14-0000' AND  FiscalYear >= 2015";


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

                DownersArray.push({
                    Date: Date,
                    EndingBalance: EndingBalance
                });
            }

            db.close(function (err) {

                if(err){
                    console.log('Plant Two Downers Error: ' + err);
                }else {
                    console.log("the database connection is now closed");
                }
            });


            try{


                for(var i = 0; i < PlantTwoAllArray.length; i++){

                    var PlantTwoDate = PlantTwoAllArray[i].Date;
                    var AllPlantTwoBalance = PlantTwoAllArray[i].AllEndingBalance;

                    for(var j = 0; j < DownersArray.length; j++){
                        var DownersBalance = DownersArray[j].EndingBalance;
                        var match = false;
                        if(PlantTwoAllArray[i].Date === DownersArray[j].Date){

                            match = true;
                            DataArray.push({
                                Date: PlantTwoDate,
                                Downers: DownersBalance,
                                AllPlantTwo: AllPlantTwoBalance
                            });
                            break;

                        }
                    }
                    if(!match){
                        DataArray.push({
                            Date: PlantTwoDate,
                            Downers: '0',
                            AllPlantTwo: AllPlantTwoBalance
                        });

                    }
                }

                res.send(JSON.stringify(DataArray));
            }catch (e){

                console.log('Plant Two Downers Error: ');
                console.log(e);
            }

        });
    });


}
//End of Plant Two Functions

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