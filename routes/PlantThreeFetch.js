var odbc = require('odbc');
var connectionString ="Driver={SQL Server};Server=tf-sql-01;Database=MAS_TFI";
var db = new odbc.Database();
var DataArray = [];
var express = require('express');
var router = express.Router();


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
function PlantThreeAll(Year, db, connectionString, res) {
    console.log('Plant Three All');
    db.open(connectionString, function (err) {

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

            res.send(JSON.stringify(DataArray));

        });
        db.close(function (err) {

            if(err){
                console.log('Plant Three All Error: ' + err);
            }else {
                console.log("the database connection is now closed");
            }

        });
    });
}
//Done
function PlantThreeP8(Year, db, connectionString, res) {
    console.log('Plant Three P8');
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
                    console.log('Plant Three P8 Error: ' + err);
                }else {
                    console.log("the database connection is now closed");
                }

            });

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
                            CombineArrays(TempArrayTwo, Array24, DataArray, true);

                            res.send(JSON.stringify(DataArray));
                    });
                });
            });
        });





    });
}
//Done
function PlantThreeSleeves(Year, db, connectionString, res) {
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
                    console.log('Plant Three Sleeves Error: ' + err);
                }else {
                    console.log("the database connection is now closed");
                }

            });

            res.send(JSON.stringify(DataArray));

        });

    });
}
//Done
function PlantThreeWindows737(Year, db, connectionString, res) {
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
                    console.log('Plant Three 737 Windows Error: ' + err);
                }else {
                    console.log("the database connection is now closed");
                }

            });

            res.send(JSON.stringify(DataArray));

        });

    });

}
//Done
function PlantThreeWindows787(Year, db, connectionString, res) {
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
                    console.log('Plant Three Windows 787 Error: ' + err);
                }else {
                    console.log("the database connection is now closed");
                }

            });

            res.send(JSON.stringify(DataArray));

        });

    });
}
//Done
function PlantThreeBSIWindows(Year, db, connectionString, res) {
    console.log('Plant Three BSI Windows');
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
                    console.log('Plant Three BSI Windows Error: ' + err);
                }else {
                    console.log("the database connection is now closed");
                }

            });

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
                    CombineArrays(TempArray, Array18, DataArray, true);
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