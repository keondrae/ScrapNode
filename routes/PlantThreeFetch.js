var odbc = require('odbc');
var connectionString ="Driver={SQL Server};Server=tf-sql-01;Database=MAS_TFI";
var db = new odbc.Database();
var express = require('express');
var router = express.Router();
var DataArray = [];
var DataTempArray = [];
var PlantThreeAllArray = [];
var P8Array = [];
var PriamryOpsArray = [];
var SleevesArray = [];
var Windows737Array = [];
var Windows787Array = [];
var BSIWindowsArray = [];
var AllWindowsArray = [];

router.get('/:year/:tab', function(req, res, next) {
    DataArray = [];
    var Year = req.params.year;
    var Tab = req.params.tab;

    switch (Tab){

        case 'All':
            PlantThreeAll(Year, db, connectionString, res);
            //All
            break;
        case 'P8':
            PlantThreeP8(Year, db, connectionString, res);
            //P8
            break;
        case 'PrimaryOps':
            PlantThreePrimaryOps(Year, db, connectionString, res);
            //PrimaryOps
            break;
        case 'Sleeves':
            PlantThreeSleeves(Year, db, connectionString, res);
            //Sleeves
            break;
        case 'Windows737':
            PlantThreeWindows737(Year, db, connectionString, res);
            //Windows737
            break;
        case 'Windows787':
            PlantThreeWindows787(Year, db, connectionString, res);
            //Windows787
            break;
        case 'BSIWindows':
            PlantThreeBSIWindows(Year, db, connectionString, res);
            //BSIWindows
            break;
        case 'AllWindows':
            PlantThreeAllWindows(Year, db, connectionString, res);
            //AllWindows
            break;
    }
});

module.exports = router;

//Start of Plant Three Functions
//Done
function PlantThreeAll(Year, db, connectionString, res) {
    console.log('Plant Three All');
    var Array02 = [];
    var Array24 = [];
    var Array21 = [];
    var Array22 = [];
    var Array03 = [];
    var Array07 = [];
    var Array09 = [];
    var Array18 = [];
    var TempArray = [];
    var TempArrayOne = [];
    var TempArrayTwo = [];
    var TempArrayThree = [];
    var TempArrayFour = [];
    var TempArrayFive = [];
    var TempArraySix = [];
    PlantThreeAllArray = [];
    DataArray = [];
    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        //Plant Three All
        var sql03 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-00-0000' AND  FiscalYear >= 2015";
        db.query(sql03, function (err, rows, moreResultSets) {

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

                Array03.push({

                    Date: Date,
                    EndingBalance: EndingBalance
                });
            }
            /* db.close(function (err) {

                if(err){
                    console.log('Plant Three All Error: ' + err);
                }else {
                    console.log("the database connection is now closed");
                }

            });



            CombineArrays(P8Array,PriamryOpsArray, TempArrayOne, false);
            CombineArrays(TempArrayOne, SleevesArray, TempArrayTwo, false);
            CombineArrays(TempArrayTwo, Windows737Array, TempArrayThree, false);
            CombineArrays(TempArrayThree, Windows787Array, TempArrayFour, false);
            CombineArrays(TempArrayFour, BSIWindowsArray, TempArrayFive, false);
            CombineArrays(TempArrayFive, AllWindowsArray, TempArraySix, false);
            CombineArrays(TempArraySix, Array03, DataTempArray, true);

            console.log(DataTempArray);

            for(var i = 0; i < DataTempArray.length; i++){
                var AllDate = DataTempArray[i].Date;
                var AllEndingBalance = DataTempArray[i].EndingBalance;

                PlantThreeAllArray.push({
                    Date: AllDate,
                    AllEndingBalance: AllEndingBalance
                });
            }

            //console.log(PlantThreeAllArray.length);
            //res.send(JSON.stringify(PlantThreeAllArray));
            */

            //Plant Three P8
            var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-11-0000' AND  FiscalYear >= 2015";
            db.query(sql, function (err, rows, moreResultSets) {
                P8Array = [];
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

                    P8Array.push({

                        Date: Date,
                        EndingBalance: EndingBalance
                    });
                }
                /*
                                db.close(function (err) {

                                    if(err){
                                        console.log('Plant Three P8 Error: ' + err);
                                    }else {
                                        console.log("the dabase connection is now closed");
                                    }

                                });

                                /*
                                for(var i = 0; i < P8Array.length; i++){
                                    var DataDate = P8Array[i].Date;
                                    var P8Balance = P8Array[i].EndingBalance;
                                    var AllPlantThreeBalance = PlantThreeAllArray[i].AllEndingBalance.toString();

                                    DataArray.push({
                                        Date: DataDate,
                                        P8: P8Balance,
                                        AllPlantThree: AllPlantThreeBalance
                                    });

                                }


                //res.send(JSON.stringify(P8Array));
                //res.send(JSON.stringify(P8Array));
                //console.log(P8Array.length);
                //console.log(P8Array.length + PlantThreeAllArray.length);*/

                //Plant Three Primary Ops
                var sql02 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-02-0000' AND  FiscalYear >= 2015";
                var sql24 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-24-0000' AND  FiscalYear >= 2015";
                var sql21 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-21-0000' AND  FiscalYear >= 2015";
                var sql22 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-22-0000' AND  FiscalYear >= 2015";
                db.query(sql02, function (err, rows, moreResultSets) {
                    DataTempArray =[];
                    PriamryOpsArray = [];
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

                        Array02.push({
                            Date: Date,
                            EndingBalance: EndingBalance
                        });
                    }

                    db.query(sql24, function (err, rows, moreResultSets) {

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

                            Array24.push({
                                Date: Date,
                                EndingBalance: EndingBalance
                            });
                        }

                        db.query(sql21, function (err, rows, moreResultSets) {

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

                                Array21.push({
                                    Date: Date,
                                    EndingBalance: EndingBalance
                                });
                            }

                            db.query(sql22, function (err, rows, moreResultSets) {

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

                                    Array22.push({
                                        Date: Date,
                                        EndingBalance: EndingBalance
                                    });
                                }

                                /*db.close(function (err) {

                                    if (err) {
                                        console.log('Plant Three Primary Ops Error: ' + err);
                                    } else {
                                        console.log("the database connection is now closed");
                                    }
                                });*/
                                CombineArrays(Array02, Array22, TempArrayOne, false);
                                CombineArrays(TempArrayOne, Array21, TempArrayTwo, false);
                                CombineArrays(TempArrayTwo, Array24, DataTempArray, false);

                                for(var i = 0; i < DataTempArray.length; i++){
                                    var PODate = DataTempArray[i].Date;
                                    var POEndingBalance = DataTempArray[i].EndingBalance;

                                    PriamryOpsArray.push({
                                        Date: PODate,
                                        EndingBalance: POEndingBalance
                                    });
                                }

                                //Plant Three Sleeves
                                var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-06-0000' AND  FiscalYear >= 2015";
                                db.query(sql, function (err, rows, moreResultSets) {
                                    SleevesArray = [];
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

                                        SleevesArray.push({

                                            Date: Date,
                                            EndingBalance: EndingBalance
                                        });
                                    }
                                    /*db.close(function (err) {

                                        if(err){
                                            console.log('Plant Three Sleeves Error: ' + err);
                                        }else {
                                            console.log("the database connection is now closed");
                                        }

                                    });

                                    //res.send(JSON.stringify(SleevesArray));*/
                                    //Plant Three Windows 737
                                    var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-07-0000' AND  FiscalYear >= 2015";
                                    db.query(sql, function (err, rows, moreResultSets) {
                                        Windows737Array = [];
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

                                            Windows737Array.push({

                                                Date: Date,
                                                EndingBalance: EndingBalance
                                            });
                                        }
                                       /* db.close(function (err) {

                                            if(err){
                                                console.log('Plant Three 737 Windows Error: ' + err);
                                            }else {
                                                console.log("the database connection is now closed");
                                            }

                                        });

                                        //res.send(JSON.stringify(Windows737Array));*/
                                        //Plant Three Windows 787
                                        var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-09-0000' AND  FiscalYear >= 2015";
                                        db.query(sql, function (err, rows, moreResultSets) {
                                            Windows787Array = [];
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

                                                Windows787Array.push({

                                                    Date: Date,
                                                    EndingBalance: EndingBalance
                                                });
                                            }
                                            /*db.close(function (err) {

                                                if(err){
                                                    console.log('Plant Three Windows 787 Error: ' + err);
                                                }else {
                                                    console.log("the database connection is now closed");
                                                }

                                            });

                                            //res.send(JSON.stringify(Windows787Array));*/
                                            //Plant Three BSI Windows
                                            var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-18-0000' AND  FiscalYear >= 2015";
                                            db.query(sql, function (err, rows, moreResultSets) {
                                                BSIWindowsArray = [];
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

                                                    BSIWindowsArray.push({

                                                        Date: Date,
                                                        EndingBalance: EndingBalance
                                                    });
                                                }
                                                /*db.close(function (err) {

                                                    if(err){
                                                        console.log('Plant Three BSI Windows Error: ' + err);
                                                    }else {
                                                        console.log("the database connection is now closed");
                                                    }

                                                });

                                                //res.send(JSON.stringify(BSIWindowsArray));*/
                                                //Plant Three All Windows
                                                var sql07 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-07-0000' AND  FiscalYear >= 2015";
                                                var sql09 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-09-0000' AND  FiscalYear >= 2015";
                                                var sql18 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-18-0000' AND  FiscalYear >= 2015";
                                                db.query(sql07, function (err, rows, moreResultSets) {
                                                    DataTempArray = [];
                                                    AllWindowsArray = [];
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
                                                        var EndingBalance = BeginningBalance + DebitAmount - CreditAmount;;
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

                                                        Array07.push({

                                                            Date: Date,
                                                            EndingBalance: EndingBalance
                                                        });
                                                    }

                                                    db.query(sql09, function (err, rows, moreResultSets) {

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

                                                            Array09.push({

                                                                Date: Date,
                                                                EndingBalance: EndingBalance
                                                            });
                                                        }

                                                        db.query(sql18, function (err, rows, moreResultSets) {

                                                            if (err) {
                                                                return console.log(err);
                                                            }

                                                            for (var i = 0; i < rows.length; i++) {
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

                                                                Array18.push({

                                                                    Date: Date,
                                                                    EndingBalance: EndingBalance
                                                                });
                                                            }

                                                            db.close(function (err) {

                                                                if(err){
                                                                    console.log('Plant Three All Windows Error: ' + err);
                                                                }else {
                                                                    console.log("the database connection is now closed");
                                                                }

                                                            });

                                                            CombineArrays(Array07, Array09, TempArray, false);
                                                            CombineArrays(TempArray, Array18, DataTempArray, false);

                                                            for(var i = 0; i < DataTempArray.length; i++){
                                                                var AllWindowsDate = DataTempArray[i].Date;
                                                                var AllWindowsEndingBalance = DataTempArray[i].EndingBalance;

                                                                AllWindowsArray.push({
                                                                    Date: AllWindowsDate,
                                                                    EndingBalance: AllWindowsEndingBalance
                                                                });
                                                            }

                                                            DataTempArray = [];
                                                            TempArray = [];
                                                            TempArrayOne = [];
                                                            TempArrayTwo = [];
                                                            TempArrayThree = [];
                                                            TempArrayFour = [];
                                                            TempArrayFive = [];
                                                            TempArraySix = [];

                                                            //console.log(P8Array.length);
                                                            //console.log(PriamryOpsArray.length);
                                                            //console.log(SleevesArray.length);
                                                            //console.log(Windows737Array.length);
                                                            //console.log(Windows787Array.length);
                                                            //console.log(BSIWindowsArray.length);
                                                            //console.log(AllWindowsArray.length);
                                                            //console.log(Array03.length);


                                                            CombineArrays(AllWindowsArray,PriamryOpsArray, TempArrayOne, false);
                                                            CombineArrays(TempArrayOne, SleevesArray, TempArrayTwo, false);
                                                            CombineArrays(TempArrayTwo, Windows737Array, TempArrayThree, false);
                                                            CombineArrays(TempArrayThree, Windows787Array, TempArrayFour, false);
                                                            CombineArrays(TempArrayFour, BSIWindowsArray, TempArrayFive, false);
                                                            CombineArrays(TempArrayFive, P8Array, TempArraySix, false);
                                                            CombineArrays(TempArraySix, Array03, DataTempArray, true);

                                                            //console.log(DataTempArray);

                                                            for(var i = 0; i < DataTempArray.length; i++){
                                                                var AllDate = DataTempArray[i].Date;
                                                                var AllEndingBalance = DataTempArray[i].EndingBalance;

                                                                PlantThreeAllArray.push({
                                                                    Date: AllDate,
                                                                    AllPlantThreeEndingBalance: AllEndingBalance
                                                                });
                                                            }

                                                            //console.log(PlantThreeAllArray.length);
                                                            res.send(JSON.stringify(PlantThreeAllArray));
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}
//Done
function PlantThreeP8(Year, db, connectionString, res) {
    console.log('Plant Three P8');
    P8Array = [];
    DataArray = [];

    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-11-0000' AND  FiscalYear >= 2015";


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

                P8Array.push({

                    Date: Date,
                    EndingBalance: EndingBalance
                });
            }

            db.close(function (err) {

                if(err){
                    console.log('Plant Three P8 Error: ' + err);
                }else {
                    console.log("the database connection is now closed");
                }

            });

            console.log('All: ' + PlantThreeAllArray.length);
            console.log('P8: ' + P8Array.length);

            try{
                for(var i = 0; i < PlantThreeAllArray.length; i++){

                    var PlantThreeDate = PlantThreeAllArray[i].Date;
                    var AllPlantThreeBalance = PlantThreeAllArray[i].AllPlantThreeEndingBalance;

                    for(var j = 0; j < P8Array.length; j++){
                        var P8Balance = P8Array[j].EndingBalance;
                        var match = false;
                        if(PlantThreeAllArray[i].Date === P8Array[j].Date){

                            match = true;
                            DataArray.push({
                                Date: PlantThreeDate,
                                P8: P8Balance,
                                AllPlantThree: AllPlantThreeBalance
                            });
                            break;

                        }

                    }
                    if(!match){
                        DataArray.push({
                            Date: PlantThreeDate,
                            P8: '0',
                            AllPlantThree: AllPlantThreeBalance
                        });

                    }
                }
                res.send(JSON.stringify(DataArray));
            }catch (e){
                console('Plant Three P8 Error: ')
                console.log(e)
            }


            //console.log(DataArray);


        });

    });

}
//Done
function PlantThreePrimaryOps(Year, db, connectionString, res) {
    console.log('Plant Three Primary Ops');
    var Array02 = [];
    var Array24 = [];
    var Array21 = [];
    var Array22 = [];
    var TempArrayOne = [];
    var TempArrayTwo = [];
    var TempDataArray = [];
    PriamryOpsArray = [];
    DataTempArray =[];
    DataArray = [];
    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        var sql02 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-02-0000' AND  FiscalYear >= 2015";
        var sql24 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-24-0000' AND  FiscalYear >= 2015";
        var sql21 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-21-0000' AND  FiscalYear >= 2015";
        var sql22 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-22-0000' AND  FiscalYear >= 2015";


        db.query(sql02, function (err, rows, moreResultSets) {

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

                Array02.push({
                    Date: Date,
                    EndingBalance: EndingBalance
                });
            }

            db.query(sql24, function (err, rows, moreResultSets) {

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

                    Array24.push({
                        Date: Date,
                        EndingBalance: EndingBalance
                    });
                }

                db.query(sql21, function (err, rows, moreResultSets) {

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

                        Array21.push({
                            Date: Date,
                            EndingBalance: EndingBalance
                        });
                    }

                    db.query(sql22, function (err, rows, moreResultSets) {

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

                            Array22.push({
                                Date: Date,
                                EndingBalance: EndingBalance
                            });
                        }

                        db.close(function (err) {

                            if (err) {
                                console.log('Plant Three Primary Ops Error: ' + err);
                            } else {
                                console.log("the database connection is now closed");
                            }
                        });
                            CombineArrays(Array02, Array22, TempArrayOne, false);
                            CombineArrays(TempArrayOne, Array21, TempArrayTwo, false);
                            CombineArrays(TempArrayTwo, Array24, DataTempArray, false);

                            //console.log(PlantThreeAllArray);

                        for(var i = 0; i < DataTempArray.length; i++){
                            var PODate = DataTempArray[i].Date;
                            var POEndingBalance = DataTempArray[i].EndingBalance;

                            PriamryOpsArray.push({
                                Date: PODate,
                                EndingBalance: POEndingBalance
                            });
                        }

                        //console.log('Primary Ops: ' + PriamryOpsArray.length);

                        try{

                            for(var i = 0; i < PlantThreeAllArray.length; i++){

                                var PlantThreeDate = PlantThreeAllArray[i].Date;
                                var AllPlantThreeBalance = PlantThreeAllArray[i].AllPlantThreeEndingBalance;

                                for(var j = 0; j < PriamryOpsArray.length; j++){
                                    var PrimaryOpsBalance = PriamryOpsArray[j].EndingBalance;
                                    var match = false;
                                    if(PlantThreeAllArray[i].Date === PriamryOpsArray[j].Date){

                                        match = true;
                                        DataArray.push({
                                            Date: PlantThreeDate,
                                            PrimaryOps: PrimaryOpsBalance,
                                            AllPlantThree: AllPlantThreeBalance
                                        });
                                        break;

                                    }

                                }
                                if(!match){
                                    DataArray.push({
                                        Date: PlantThreeDate,
                                        PrimaryOps: '0',
                                        AllPlantThree: AllPlantThreeBalance
                                    });

                                }
                            }
                            res.send(JSON.stringify(DataArray));
                        }catch (e){
                            console.log('Plant Three Primary Ops Error: ');
                            console.log(e);
                        }

                    });
                });
            });
        });





    });
}
//Done
function PlantThreeSleeves(Year, db, connectionString, res) {
    SleevesArray = [];
    DataArray = [];
    console.log('Plant Three Sleeves');
    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-06-0000' AND  FiscalYear >= 2015";


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

                SleevesArray.push({

                    Date: Date,
                    EndingBalance: EndingBalance
                });
            }

            //console.log('Sleeves: ' + SleevesArray.length);
            
            db.close(function (err) {

                if(err){
                    console.log('Plant Three Sleeves Error: ' + err);
                }else {
                    console.log("the database connection is now closed");
                }

            });

            //console.log(PlantThreeAllArray);
            //console.log(SleevesArray);

            try{

                for(var i = 0; i < PlantThreeAllArray.length; i++){

                    var PlantThreeDate = PlantThreeAllArray[i].Date;
                    var AllPlantThreeBalance = PlantThreeAllArray[i].AllPlantThreeEndingBalance;

                    for(var j = 0; j < SleevesArray.length; j++){
                        var SleevesBalance = SleevesArray[j].EndingBalance;
                        var match = false;
                        if(PlantThreeAllArray[i].Date === SleevesArray[j].Date){

                            match = true;
                            DataArray.push({
                                Date: PlantThreeDate,
                                Sleeves: SleevesBalance,
                                AllPlantThree: AllPlantThreeBalance
                            });
                            break;

                        }

                    }
                    if(!match){
                        DataArray.push({
                            Date: PlantThreeDate,
                            Sleeves: '0',
                            AllPlantThree: AllPlantThreeBalance
                        });

                    }
                }

                res.send(JSON.stringify(DataArray));

            }catch (e){
                console.log('Plant Three Sleeves Error: ');
                console.log(e)

            }

        });

    });
}
//Done
function PlantThreeWindows737(Year, db, connectionString, res) {
    Windows737Array = [];
    console.log('Plant Three Windows 737');
    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-07-0000' AND  FiscalYear >= 2015";


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

                Windows737Array.push({

                    Date: Date,
                    EndingBalance: EndingBalance
                });
            }

            db.close(function (err) {

                if(err){
                    console.log('Plant Three 737 Windows Error: ' + err);
                }else {
                    console.log("the database connection is now closed");
                }

            });

            //console.log('Window 737: ' + Windows737Array.length);
            
            try{

                for(var i = 0; i < PlantThreeAllArray.length; i++){

                    var PlantThreeDate = PlantThreeAllArray[i].Date;
                    var AllPlantThreeBalance = PlantThreeAllArray[i].AllPlantThreeEndingBalance;

                    for(var j = 0; j < Windows737Array.length; j++){
                        var Windows737Balance = Windows737Array[j].EndingBalance;
                        var match = false;
                        if(PlantThreeAllArray[i].Date === Windows737Array[j].Date){

                            match = true;
                            DataArray.push({
                                Date: PlantThreeDate,
                                Windows737: Windows737Balance,
                                AllPlantThree: AllPlantThreeBalance
                            });
                            break;

                        }

                    }
                    if(!match){
                        DataArray.push({
                            Date: PlantThreeDate,
                            Windows737: '0',
                            AllPlantThree: AllPlantThreeBalance
                        });

                    }
                }
                res.send(JSON.stringify(DataArray));

            }catch(e){
                console.log('Plant Three 737 Windows Error: ');
                console.log(e);

            }
        });
    });

}
//Done
function PlantThreeWindows787(Year, db, connectionString, res) {
    Windows787Array = [];
    console.log('Plant Three Windows 787');
    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-09-0000' AND  FiscalYear >= 2015";


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

                Windows787Array.push({

                    Date: Date,
                    EndingBalance: EndingBalance
                });
            }

            db.close(function (err) {

                if(err){
                    console.log('Plant Three Windows 787 Error: ' + err);
                }else {
                    console.log("the database connection is now closed");
                }

            });

            //console.log('Windows 787: ' + Windows787Array.length);
            
            try{

                for(var i = 0; i < PlantThreeAllArray.length; i++){

                    var PlantThreeDate = PlantThreeAllArray[i].Date;
                    var AllPlantThreeBalance = PlantThreeAllArray[i].AllPlantThreeEndingBalance;

                    for(var j = 0; j < Windows787Array.length; j++){
                        var Windows787Balance = Windows787Array[j].EndingBalance;
                        var match = false;
                        if(PlantThreeAllArray[i].Date === Windows787Array[j].Date){

                            match = true;
                            DataArray.push({
                                Date: PlantThreeDate,
                                Windows787: Windows787Balance,
                                AllPlantThree: AllPlantThreeBalance
                            });
                            break;

                        }

                    }
                    if(!match){
                        DataArray.push({
                            Date: PlantThreeDate,
                            Windows787: '0',
                            AllPlantThree: AllPlantThreeBalance
                        });

                    }
                }
                res.send(JSON.stringify(DataArray));

            }catch(e){
                console.log('Plant Three 787 Windows Error: ');
                console.log(e);
            }

        });

    });
}
//Done
function PlantThreeBSIWindows(Year, db, connectionString, res) {
    console.log('Plant Three BSI Windows');
    BSIWindowsArray = [];
    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-18-0000' AND  FiscalYear >= 2015";


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

                BSIWindowsArray.push({

                    Date: Date,
                    EndingBalance: EndingBalance
                });
            }

            db.close(function (err) {

                if(err){
                    console.log('Plant Three BSI Windows Error: ' + err);
                }else {
                    console.log("the database connection is now closed");
                }

            });

            //console.log('BSI Window: ' + BSIWindowsArray.length);
            
            try{


                for(var i = 0; i < PlantThreeAllArray.length; i++){

                    var PlantThreeDate = PlantThreeAllArray[i].Date;
                    var AllPlantThreeBalance = PlantThreeAllArray[i].AllPlantThreeEndingBalance;

                    for(var j = 0; j < BSIWindowsArray.length; j++){
                        var BSIWindowsBalance = BSIWindowsArray[j].EndingBalance;
                        var match = false;
                        if(PlantThreeAllArray[i].Date === BSIWindowsArray[j].Date){

                            match = true;
                            DataArray.push({
                                Date: PlantThreeDate,
                                BSIWindows: BSIWindowsBalance,
                                AllPlantThree: AllPlantThreeBalance
                            });
                            break;

                        }

                    }
                    if(!match){
                        DataArray.push({
                            Date: PlantThreeDate,
                            BSIWindows: '0',
                            AllPlantThree: AllPlantThreeBalance
                        });

                    }
                }
                res.send(JSON.stringify(DataArray));

            }catch (e){
                console.log('Plant Three BSI Windows Error: ');
                console.log(e);
            }


        });

    });
}
//Done
function PlantThreeAllWindows(Year, db, connectionString, res) {
    console.log('Plant Three All Windows');
    var Array07 = [];
    var Array09 = [];
    var Array18 = [];
    var TempArray = [];
    DataTempArray =[];
    AllWindowsArray = [];
    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        var sql07 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-07-0000' AND  FiscalYear >= 2015";
        var sql09 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-09-0000' AND  FiscalYear >= 2015";
        var sql18 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-18-0000' AND  FiscalYear >= 2015";


        db.query(sql07, function (err, rows, moreResultSets) {

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
                var EndingBalance = BeginningBalance + DebitAmount - CreditAmount;;
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

                Array07.push({

                    Date: Date,
                    EndingBalance: EndingBalance
                });
            }

            db.query(sql09, function (err, rows, moreResultSets) {

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

                    Array09.push({

                        Date: Date,
                        EndingBalance: EndingBalance
                    });
                }

                db.query(sql18, function (err, rows, moreResultSets) {

                    if (err) {
                        return console.log(err);
                    }

                    for (var i = 0; i < rows.length; i++) {
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

                        Array18.push({

                            Date: Date,
                            EndingBalance: EndingBalance
                        });
                    }

                    db.close(function (err) {

                        if(err){
                            console.log('Plant Three All Windows Error: ' + err);
                        }else {
                            console.log("the database connection is now closed");
                        }

                    });

                    CombineArrays(Array07, Array09, TempArray, false);
                    CombineArrays(TempArray, Array18, DataTempArray, false);

                    for(var i = 0; i < DataTempArray.length; i++){
                        var AllWindowsDate = DataTempArray[i].Date;
                        var AllWindowsEndingBalance = DataTempArray[i].EndingBalance;

                        AllWindowsArray.push({
                            Date: AllWindowsDate,
                            EndingBalance: AllWindowsEndingBalance
                        });
                    }

                    //console.log('All Windows: ' + AllWindowsArray.length);

                    try{

                        for(var i = 0; i < PlantThreeAllArray.length; i++){

                            var PlantThreeDate = PlantThreeAllArray[i].Date;
                            var AllPlantThreeBalance = PlantThreeAllArray[i].AllPlantThreeEndingBalance;

                            for(var j = 0; j < AllWindowsArray.length; j++){
                                var AllWindowsBalance = AllWindowsArray[j].EndingBalance;
                                var match = false;
                                if(PlantThreeAllArray[i].Date === AllWindowsArray[j].Date){

                                    match = true;
                                    DataArray.push({
                                        Date: PlantThreeDate,
                                        AllWindows: AllWindowsBalance,
                                        AllPlantThree: AllPlantThreeBalance
                                    });
                                    break;

                                }

                            }
                            if(!match){
                                DataArray.push({
                                    Date: PlantThreeDate,
                                    AllWindows: '0',
                                    AllPlantThree: AllPlantThreeBalance
                                });

                            }
                        }
                        res.send(JSON.stringify(DataArray));

                    }catch(e){
                        console.log('Plant Three All Windows Error: ');
                        console.log(e);

                    }
                });
            });
        });





    });
}
//End of Plant Three Functions

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