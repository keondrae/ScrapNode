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

    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        //Plant Three All
        var sql03 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-00-0000' AND  FiscalYear =" + Year;
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
            var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-11-0000' AND  FiscalYear =" + Year;
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
                var sql02 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-02-0000' AND  FiscalYear =" + Year;
                var sql24 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-24-0000' AND  FiscalYear =" + Year;
                var sql21 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-21-0000' AND  FiscalYear =" + Year;
                var sql22 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-22-0000' AND  FiscalYear =" + Year;
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
                                var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-06-0000' AND  FiscalYear =" + Year;
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
                                    var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-07-0000' AND  FiscalYear =" + Year;
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
                                        var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-09-0000' AND  FiscalYear =" + Year;
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
                                            var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-18-0000' AND  FiscalYear =" + Year;
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
                                                var sql07 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-07-0000' AND  FiscalYear =" + Year;
                                                var sql09 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-09-0000' AND  FiscalYear =" + Year;
                                                var sql18 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-18-0000' AND  FiscalYear =" + Year;
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

                                                            CombineArrays(P8Array,PriamryOpsArray, TempArrayOne, false);
                                                            CombineArrays(TempArrayOne, SleevesArray, TempArrayTwo, false);
                                                            CombineArrays(TempArrayTwo, Windows737Array, TempArrayThree, false);
                                                            CombineArrays(TempArrayThree, Windows787Array, TempArrayFour, false);
                                                            CombineArrays(TempArrayFour, BSIWindowsArray, TempArrayFive, false);
                                                            CombineArrays(TempArrayFive, AllWindowsArray, TempArraySix, false);
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

                                                            //console.log(PlantThreeAllArray);
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

    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-11-0000' AND  FiscalYear =" + Year;


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


            for(var i = 0; i < P8Array.length; i++){
                var DataDate = P8Array[i].Date;
                var P8Balance = P8Array[i].EndingBalance;
                var AllPlantThreeBalance = PlantThreeAllArray[i].AllPlantThreeEndingBalance.toString();

                DataArray.push({
                    Date: DataDate,
                    P8: P8Balance,
                    AllPlantThree: AllPlantThreeBalance
                });

            }


            res.send(JSON.stringify(DataArray));

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
    PriamryOpsArray = [];
    DataTempArray =[];
    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        var sql02 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-02-0000' AND  FiscalYear =" + Year;
        var sql24 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-24-0000' AND  FiscalYear =" + Year;
        var sql21 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-21-0000' AND  FiscalYear =" + Year;
        var sql22 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-22-0000' AND  FiscalYear =" + Year;


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

                        for(var i = 0; i < DataTempArray.length; i++){
                            var PODate = DataTempArray[i].Date;
                            var POEndingBalance = DataTempArray[i].EndingBalance;

                            PriamryOpsArray.push({
                                Date: PODate,
                                EndingBalance: POEndingBalance
                            });
                        }

                        for(var i = 0; i < PriamryOpsArray.length; i++){
                            var DataDate = PriamryOpsArray[i].Date;
                            var PrimaryOpsBalance = PriamryOpsArray[i].EndingBalance;
                            var AllPlantThreeBalance = PlantThreeAllArray[i].AllPlantThreeEndingBalance.toString();

                            DataArray.push({
                                Date: DataDate,
                                PrimaryOps: PrimaryOpsBalance,
                                AllPlantThree: AllPlantThreeBalance
                            });

                        }


                            res.send(JSON.stringify(DataArray));
                    });
                });
            });
        });





    });
}
//Done
function PlantThreeSleeves(Year, db, connectionString, res) {
    SleevesArray = [];
    console.log('Plant Three Sleeves');
    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-06-0000' AND  FiscalYear =" + Year;


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

            db.close(function (err) {

                if(err){
                    console.log('Plant Three Sleeves Error: ' + err);
                }else {
                    console.log("the database connection is now closed");
                }

            });

            for(var i = 0; i < SleevesArray.length; i++){
                var DataDate = SleevesArray[i].Date;
                var SleevesBalance = SleevesArray[i].EndingBalance;
                var AllPlantThreeBalance = PlantThreeAllArray[i].AllPlantThreeEndingBalance.toString();

                DataArray.push({
                    Date: DataDate,
                    Sleeves: SleevesBalance,
                    AllPlantThree: AllPlantThreeBalance
                });

            }


            res.send(JSON.stringify(DataArray));

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

        var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-07-0000' AND  FiscalYear =" + Year;


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

            for(var i = 0; i < Windows737Array.length; i++){
                var DataDate = Windows737Array[i].Date;
                var Windows737Balance = Windows737Array[i].EndingBalance;
                var AllPlantThreeBalance = PlantThreeAllArray[i].AllPlantThreeEndingBalance.toString();

                DataArray.push({
                    Date: DataDate,
                    Windows737: Windows737Balance,
                    AllPlantThree: AllPlantThreeBalance
                });

            }

            res.send(JSON.stringify(DataArray));

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

        var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-09-0000' AND  FiscalYear =" + Year;


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

            for(var i = 0; i < Windows787Array.length; i++){
                var DataDate = Windows787Array[i].Date;
                var Windows787Balance = Windows787Array[i].EndingBalance;
                var AllPlantThreeBalance = PlantThreeAllArray[i].AllPlantThreeEndingBalance.toString();

                DataArray.push({
                    Date: DataDate,
                    Windows787: Windows787Balance,
                    AllPlantThree: AllPlantThreeBalance
                });

            }

            res.send(JSON.stringify(DataArray));

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

        var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-18-0000' AND  FiscalYear =" + Year;


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

            for(var i = 0; i < BSIWindowsArray.length; i++){
                var DataDate = BSIWindowsArray[i].Date;
                var BSIWindowsBalance = BSIWindowsArray[i].EndingBalance;
                var AllPlantThreeBalance = PlantThreeAllArray[i].AllPlantThreeEndingBalance.toString();

                DataArray.push({
                    Date: DataDate,
                    BSIWindows: BSIWindowsBalance,
                    AllPlantThree: AllPlantThreeBalance
                });

            }


            res.send(JSON.stringify(DataArray));

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

        var sql07 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-07-0000' AND  FiscalYear =" + Year;
        var sql09 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-09-0000' AND  FiscalYear =" + Year;
        var sql18 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-18-0000' AND  FiscalYear =" + Year;


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

                    //console.log(PlantThreeAllArray);


                    for(var i = 0; i < AllWindowsArray.length; i++){
                        var DataDate = AllWindowsArray[i].Date;
                        var AllWindowsBalance = AllWindowsArray[i].EndingBalance;
                        var AllPlantThreeBalance = PlantThreeAllArray[i].AllPlantThreeEndingBalance.toString();

                        DataArray.push({
                            Date: DataDate,
                            AllWindows: AllWindowsBalance,
                            AllPlantThree: AllPlantThreeBalance
                        });

                    }

                    res.send(JSON.stringify(DataArray));
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