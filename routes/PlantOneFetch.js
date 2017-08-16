var express = require('express');
var router = express.Router();
var odbc = require('odbc');
var connectionString ="Driver={SQL Server};Server=tf-sql-01;Database=MAS_TFI";
var db = new odbc.Database();
var DataTempArray = [];
var DataArray = [];
var PlantOneAllArray = [];
var DuctsArray = [];
var TubesArray = [];
var CoversArray = [];
var AssemblysArray = [];
var SpaceArray = [];
var OthersArray = [];

router.get('/:year/:tab', function(req, res, next) {

    DataArray = [];
    var Year = req.params.year;
    var Tab = req.params.tab;

    switch (Tab){

        case 'Duct':
            PlantOneDuct(Year, db, connectionString, res);
            //Duct
            break;
        case 'Tubes':
            PlantOneTubes(Year, db, connectionString, res);
            //Tubes
            break;
        case 'Covers':
            PlantOneCovers(Year, db, connectionString, res);
            //Covers
            break;
        case 'Assembly':
            PlantOneAssembly(Year, db, connectionString, res);
            //Assembly
            break;
        case 'Other':
            PlantOneOthers(Year, db, connectionString, res);
            //Other
            break;
        case 'All':
            PlantOneAll(Year, db, connectionString, res);
            //All
            break;
        case 'Space':
            PlantOneSpace(Year, db, connectionString, res);
            //Space
            break;
    }

});

module.exports = router;

//Start of Plant One Functions
//Done
function PlantOneAll(Year, db, connectionString, res) {
    console.log('Plant One All');
    var Array16 = [];
    var Array08 = [];
    var Array15 = [];
    var Array82 = [];
    var Array20 = [];
    var Array01 = [];
    var Array17 = [];
    var Array19 = [];
    var TempArray = [];
    var TempArrayOne = [];
    var TempArrayTwo = [];
    var TempArrayThree = [];
    var TempArrayFour = [];
    var TempArrayFive = [];
    AssemblysArray = [];
    DataTempArray = [];
    DataArray = [];
    DuctsArray = [];
    TubesArray = [];
    CoversArray = [];
    OthersArray = [];
    SpaceArray = [];
    PlantOneAllArray = [];
    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        var sql16 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-16-0000' AND  FiscalYear =" + Year;
        db.query(sql16, function (err, rows, moreResultSets) {

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

                Array16.push({
                    Date: Date,
                    EndingBalance: EndingBalance
                });
            }
            /*db.close(function (err) {

                if(err){
                    console.log('Plant One All Error: ' + err);
                }else {
                    console.log("the database connection is now closed");
                }

            });

            var temp = [];
            $.each(Array16, function (key, value) {
               if($.inArray(Array16.Date, temp)=== -1){
                   temp.push(Array16.Date);
               } else{
                   console.log(Array16.Date + 'is dup')
               }
            });
            //
            // console.log(DuctsArray);
            // console.log('--------------------------------------');
            // console.log(TubesArray);
            // console.log('--------------------------------------');
            // console.log(CoversArray);
            // console.log('--------------------------------------');
            // console.log(AssemblysArray);
            // console.log('--------------------------------------');
            // console.log(OthersArray);
            // console.log('--------------------------------------');
            // console.log(Array16);

            res.send(JSON.stringify(PlantAllArray));*/

            //Ducts
            var sql08 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-08-0000' AND  FiscalYear =" + Year;
            var sql15 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-15-0000' AND  FiscalYear =" + Year;
            db.query(sql08, function (err, rows, moreResultSets) {

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

                    Array08.push({

                        Date: Date,
                        EndingBalance: EndingBalance
                    });
                }

                db.query(sql15, function (err, rows, moreResultSets) {

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

                        Array15.push({

                            Date: Date,
                            EndingBalance: EndingBalance
                        });
                    }

                    /*
                    db.close(function (err) {

                        if(err){
                            console.log('Plant One Duct Error: ' + err);
                        }else {
                            console.log("the database connection is now closed");
                        }

                    });
                    */

                    if(Array08.length >= Array15.length){
                        CombineArrays(Array08, Array15, DuctsArray, false);
                    }else{
                        CombineArrays(Array15, Array08, DuctsArray, false);
                    }

                    //Tubes
                    var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-05-0000' AND  FiscalYear =" + Year;
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

                            TubesArray.push({

                                Date: Date,
                                EndingBalance: EndingBalance
                            });
                        }

                        /*
                        db.close(function (err) {

                            if(err){
                                console.log('Plant One Tubes Error: ' + err);
                            }else {
                                console.log("the database connection is now closed");
                            }

                        });

                        res.send(JSON.stringify(TubesArray));*/

                        //Covers
                        var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-04-0000' AND  FiscalYear =" + Year;
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

                                CoversArray.push({

                                    Date: Date,
                                    EndingBalance: EndingBalance
                                });
                            }

                            /*
                            db.close(function (err) {

                                if(err){
                                    console.log('Plant One Covers Error: ' + err);
                                }else {
                                    console.log("the database connection is now closed");
                                }

                            });

                            res.send(JSON.stringify(CoversArray));
                            */

                            //Assembly
                            var sql82 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-82-0000' AND  FiscalYear =" + Year;
                            var sql20 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-20-0000' AND  FiscalYear =" + Year;
                            var sql01 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-01-0000' AND  FiscalYear =" + Year;
                            db.query(sql82, function (err, rows, moreResultSets) {

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

                                    Array82.push({

                                        Date: Date,
                                        EndingBalance: EndingBalance
                                    });
                                }

                                db.query(sql20, function (err, rows, moreResultSets) {

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

                                        Array20.push({

                                            Date: Date,
                                            EndingBalance: EndingBalance
                                        });
                                    }

                                    db.query(sql01, function (err, rows, moreResultSets) {

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

                                            Array01.push({

                                                Date: Date,
                                                EndingBalance: EndingBalance
                                            });
                                        }

                                        /* db.close(function (err) {

                                            if(err){
                                                console.log('Plant One Assembly Error: ' + err);
                                            }else {
                                                console.log("the database connection is now closed");
                                            }

                                        });

                                        if(Array82.length >= Array20.length && Array82.length >= Array01.length){

                                            if(Array20.length >= Array01.length){
                                                CombineArrays(Array82, Array20, TempArray, false);
                                            }else{
                                                CombineArrays(Array82, Array01, TempArray, false);
                                            }

                                        }else if(Array20.length >= Array82.length && Array20.length >= Array01.length){

                                            if(Array82.length >= Array01.length){
                                                CombineArrays(Array20, Array82, TempArray, false);
                                            }else{
                                                CombineArrays(Array20, Array01, TempArray, false);
                                            }

                                        }else if(Array01.length >= Array82.length && Array01.length >= Array20.length){

                                            if(Array82.length >= Array20.length){
                                                CombineArrays(Array01, Array82, TempArray, false);
                                            }else{
                                                CombineArrays(Array01, Array20, TempArray, false);
                                            }

                                        }
                                        */

                                        CombineArrays(Array01,Array20, TempArray, false);
                                        CombineArrays(TempArray, Array82, AssemblysArray, false);


                                        //Others
                                        var sql17 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-17-0000' AND  FiscalYear =" + Year;
                                        var sql19 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-19-0000' AND  FiscalYear =" + Year;
                                        db.query(sql17, function (err, rows, moreResultSets) {

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

                                                Array17.push({

                                                    Date: Date,
                                                    EndingBalance: EndingBalance
                                                });
                                            }


                                            db.query(sql19, function (err, rows, moreResultSets) {

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

                                                    Array19.push({

                                                        Date: Date,
                                                        EndingBalance: EndingBalance
                                                    });
                                                }

                                                /*db.close(function (err) {

                                                    if(err){
                                                        console.log('Plant One Others Error: ' + err);
                                                    }else {
                                                        console.log("the database connection is now closed");
                                                    }

                                                });*/

                                                if(Array17.length >= Array19.length){
                                                    CombineArrays(Array17, Array19, OthersArray, false);
                                                }else{
                                                    CombineArrays(Array19, Array17, OthersArray, false);
                                                }

                                                var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-30-0000' AND  FiscalYear =" + Year;
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
                                                        //var EndingBalance = EB.toString();
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

                                                        SpaceArray.push({

                                                            Date: Date,
                                                            EndingBalance: EndingBalance
                                                        });
                                                    }

                                                    db.close(function (err) {

                                                        if(err){
                                                            console.log('Plant One All Error: ' + err);
                                                        }else {
                                                            console.log("the database connection is now closed");
                                                        }

                                                    });

                                                    CombineArrays(DuctsArray, TubesArray, TempArrayOne, false);
                                                    //console.log('--------------------------------------');
                                                    //console.log(TempArrayOne);
                                                    CombineArrays(TempArrayOne, CoversArray, TempArrayTwo, false);
                                                    //console.log('--------------------------------------');
                                                    //console.log(TempArrayTwo);
                                                    CombineArrays(TempArrayTwo, AssemblysArray, TempArrayThree, false);
                                                    //console.log('--------------------------------------');
                                                    CombineArrays(TempArrayThree, SpaceArray, TempArrayFour, false);
                                                    //console.log(TempArrayThree);
                                                    CombineArrays(TempArrayFour, OthersArray, TempArrayFive, false);
                                                    //console.log('--------------------------------------');
                                                    //console.log(TempArrayFour);
                                                    CombineArrays(TempArrayFive, Array16, DataTempArray, false);
                                                    //console.log('--------------------------------------');
                                                    //console.log(DataTempArray);

                                                    for(var i = 0; i < DataTempArray.length; i++){
                                                        var AllDate = DataTempArray[i].Date;
                                                        var AllEndingBalance = DataTempArray[i].EndingBalance;

                                                        PlantOneAllArray.push({
                                                            Date: AllDate,
                                                            AllPlantOneEndingBalance: AllEndingBalance
                                                        });
                                                    }

                                                    res.send(JSON.stringify(PlantOneAllArray));

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
function PlantOneDuct(Year, db, connectionString, res) {
    console.log('Plant One Duct');
    var Array08 = [];
    var Array15 = [];
    DuctsArray = [];

    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        var sql08 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-08-0000' AND  FiscalYear =" + Year;
        var sql15 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-15-0000' AND  FiscalYear =" + Year;


        db.query(sql08, function (err, rows, moreResultSets) {

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

                Array08.push({

                    Date: Date,
                    EndingBalance: EndingBalance
                });
            }

            db.query(sql15, function (err, rows, moreResultSets) {

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

                    Array15.push({

                        Date: Date,
                        EndingBalance: EndingBalance
                    });
                }

                db.close(function (err) {

                    if(err){
                        console.log('Plant One Duct Error: ' + err);
                    }else {
                        console.log("the database connection is now closed");
                    }

                });

                if(Array08.length >= Array15.length){
                    CombineArrays(Array08, Array15, DuctsArray, true);
                }else{
                    CombineArrays(Array15, Array08, DuctsArray, true);
                }

                for(var i = 0; i < DuctsArray.length; i++){
                    var DataDate = DuctsArray[i].Date;
                    var DuctsBalance = DuctsArray[i].EndingBalance;
                    var AllPlantOneBalance = PlantOneAllArray[i].AllPlantOneEndingBalance.toString();

                    DataArray.push({
                        Date: DataDate,
                        Ducts: DuctsBalance,
                        AllPlantOne: AllPlantOneBalance
                    });

                }

                res.send(JSON.stringify(DataArray));
            });


        });

    });
}
//Done
function PlantOneTubes(Year, db, connectionString, res) {
    console.log('Plant One Tubes');
    TubesArray = [];
    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-05-0000' AND  FiscalYear =" + Year;


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
                //var EndingBalance = EB.toString();
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

                TubesArray.push({

                    Date: Date,
                    EndingBalance: EndingBalance
                });
            }

            db.close(function (err) {

                if(err){
                    console.log('Plant One Tubes Error: ' + err);
                }else {
                    console.log("the database connection is now closed");
                }

            });


            for(var i = 0; i < TubesArray.length; i++){
                var DataDate = TubesArray[i].Date;
                var TubesBalance = TubesArray[i].EndingBalance;
                var AllPlantOneBalance = PlantOneAllArray[i].AllPlantOneEndingBalance.toString();

                DataArray.push({
                    Date: DataDate,
                    Tubes: TubesBalance,
                    AllPlantOne: AllPlantOneBalance
                });

            }

            res.send(JSON.stringify(DataArray));

        });

    });
}
//Done
function PlantOneCovers(Year, db, connectionString, res) {
    console.log('Plant One Covers');
    CoversArray = [];
    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-04-0000' AND  FiscalYear =" + Year;


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
                //var EndingBalance = EB.toString();
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

                CoversArray.push({

                    Date: Date,
                    EndingBalance: EndingBalance
                });
            }

            db.close(function (err) {

                if(err){
                    console.log('Plant One Covers Error: ' + err);
                }else {
                    console.log("the database connection is now closed");
                }

            });


            for(var i = 0; i < CoversArray.length; i++){
                var DataDate = CoversArray[i].Date;
                var CoversBalance = CoversArray[i].EndingBalance;
                var AllPlantOneBalance = PlantOneAllArray[i].AllPlantOneEndingBalance.toString();

                DataArray.push({
                    Date: DataDate,
                    Covers: CoversBalance,
                    AllPlantOne: AllPlantOneBalance
                });

            }

            res.send(JSON.stringify(DataArray));

        });

    });
}
//Done
function PlantOneAssembly(Year, db, connectionString, res) {
    console.log('Plant One Assembly');
    var Array82 = [];
    var Array20 = [];
    var Array01 = [];
    var TempArray = [];
    AssemblysArray = [];
    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        var sql82 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-82-0000' AND  FiscalYear =" + Year;
        var sql20 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-20-0000' AND  FiscalYear =" + Year;
        var sql01 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-01-0000' AND  FiscalYear =" + Year;


        db.query(sql82, function (err, rows, moreResultSets) {

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

                Array82.push({

                    Date: Date,
                    EndingBalance: EndingBalance
                });
            }

            db.query(sql20, function (err, rows, moreResultSets) {

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

                    Array20.push({

                        Date: Date,
                        EndingBalance: EndingBalance
                    });
                }

                db.query(sql01, function (err, rows, moreResultSets) {

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

                        Array01.push({

                            Date: Date,
                            EndingBalance: EndingBalance
                        });
                    }

                    db.close(function (err) {

                        if(err){
                            console.log('Plant One Assembly Error: ' + err);
                        }else {
                            console.log("the database connection is now closed");
                        }

                    });
                    /*
                    if(Array82.length >= Array20.length && Array82.length >= Array01.length){

                        if(Array20.length >= Array01.length){
                            CombineArrays(Array82, Array20, TempArray, false);
                        }else{
                            CombineArrays(Array82, Array01, TempArray, false);
                        }

                    }else if(Array20.length >= Array82.length && Array20.length >= Array01.length){

                        if(Array82.length >= Array01.length){
                            CombineArrays(Array20, Array82, TempArray, false);
                        }else{
                            CombineArrays(Array20, Array01, TempArray, false);
                        }

                    }else if(Array01.length >= Array82.length && Array01.length >= Array20.length){

                        if(Array82.length >= Array20.length){
                            CombineArrays(Array01, Array82, TempArray, false);
                        }else{
                            CombineArrays(Array01, Array20, TempArray, false);
                        }

                    }
                    */

                    CombineArrays(Array01,Array20, TempArray, false);
                    CombineArrays(TempArray, Array82, AssemblysArray, true);

                    for(var i = 0; i < AssemblysArray.length; i++){
                        var DataDate = AssemblysArray[i].Date;
                        var AssemblyBalance = AssemblysArray[i].EndingBalance;
                        var AllPlantOneBalance = PlantOneAllArray[i].AllPlantOneEndingBalance.toString();

                        DataArray.push({
                            Date: DataDate,
                            Assembly: AssemblyBalance,
                            AllPlantOne: AllPlantOneBalance
                        });

                    }

                    res.send(JSON.stringify(DataArray));
                });

            });
        });
    });
}
//Done
function PlantOneSpace(Year, db, connectionString, res) {
    console.log('Plant One Space');
    SpaceArray = [];
    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-30-0000' AND  FiscalYear =" + Year;


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
                //var EndingBalance = EB.toString();
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

                SpaceArray.push({

                    Date: Date,
                    EndingBalance: EndingBalance
                });
            }

            db.close(function (err) {

                if(err){
                    console.log('Plant One Space Error: ' + err);
                }else {
                    console.log("the database connection is now closed");
                }

            });


            for(var i = 0; i < SpaceArray.length; i++){
                var DataDate = SpaceArray[i].Date;
                var TubesBalance = SpaceArray[i].EndingBalance;
                var AllPlantOneBalance = PlantOneAllArray[i].AllPlantOneEndingBalance.toString();

                DataArray.push({
                    Date: DataDate,
                    Space: TubesBalance,
                    AllPlantOne: AllPlantOneBalance
                });

            }

            res.send(JSON.stringify(DataArray));

        });

    });

}
//Done
function PlantOneOthers(Year, db, connectionString, res) {
    console.log('Plant One Other');
    var Array17 = [];
    var Array19 = [];
    OthersArray = [];
    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        var sql17 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-17-0000' AND  FiscalYear =" + Year;
        var sql19 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-19-0000' AND  FiscalYear =" + Year;


        db.query(sql17, function (err, rows, moreResultSets) {

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

                Array17.push({

                    Date: Date,
                    EndingBalance: EndingBalance
                });
            }


            db.query(sql19, function (err, rows, moreResultSets) {

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

                    Array19.push({

                        Date: Date,
                        EndingBalance: EndingBalance
                    });
                }

                db.close(function (err) {

                    if(err){
                        console.log('Plant One Others Error: ' + err);
                    }else {
                        console.log("the database connection is now closed");
                    }

                });

                if(Array17.length >= Array19.length){
                    CombineArrays(Array17, Array19, OthersArray, true);
                }else{
                    CombineArrays(Array19, Array17, OthersArray, true);
                }

                for(var i = 0; i < OthersArray.length; i++){
                    var DataDate = OthersArray[i].Date;
                    var OtherBalance = OthersArray[i].EndingBalance;
                    var AllPlantOneBalance = PlantOneAllArray[i].AllPlantOneEndingBalance.toString();

                    DataArray.push({
                        Date: DataDate,
                        Other: OtherBalance,
                        AllPlantOne: AllPlantOneBalance
                    });

                }

                res.send(JSON.stringify(DataArray));
            });
        });

    });
}
//End of Plant One Functions

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

/*
            for(var i = 0; i < DataTempArray.length; i++){
                var AllDate = DataTempArray[i].Date;
                var AllEndingBalance = DataTempArray[i].EndingBalance;

                PlantAllArray.push({
                    Date: AllDate,
                    AllEndingBalance: AllEndingBalance
                });
            }
 */