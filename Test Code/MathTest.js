var moment = require('moment');
var odbc = require('odbc');
var connectionString ="Driver={SQL Server};Server=tf-sql-01;Database=MAS_TFI";
var db = new odbc.Database();
var TestArray = [];
var Year = 2017;
console.log('Plant Two All');
var TempArray = [];
var Array08 = [];
var Array04 = [];
var Array05 = [];
var sql08 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-08-0000' AND  FiscalYear = " + Year;
var sql04 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-04-0000' AND  FiscalYear = " + Year;
var sql05 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-05-0000' AND  FiscalYear = " + Year;

// Start of Array 08
db.open(connectionString, function (err) {

    if (err) {
        return console.log(err);
    }

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

        db.query(sql04, function (err, rows, moreResultSets) {

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

                Array04.push({

                    Date: Date,
                    EndingBalance: EndingBalance
                });
            }

            db.query(sql05, function (err, rows, moreResultSets) {

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

                    Array05.push({

                        Date: Date,
                        EndingBalance: EndingBalance
                    });
                }

                //console.log(Array08);
                //console.log(Array04);
                //console.log(Array05);

                Array08.forEach(function (a8) {
                    var match = false;
                    Array04.forEach(function (a4) {
                        if(a8.Date === a4.Date){
                            match = true;
                            a8.EndingBalance += a4.EndingBalance;
                            //a8.EndingBalance = a8.EndingBalance.toString();
                            TempArray.push(a8);
                            console.log(match);
                        }

                    });
                    if(!match) TempArray.push(a8);
                });
                //console.log(TempArray);

                TempArray.forEach(function (TA) {
                    var match = false;
                    Array05.forEach(function (a5) {
                        if(TA.Date === a5.Date){
                            match = true;
                            TA.EndingBalance += a5.EndingBalance;
                            TA.EndingBalance = TA.EndingBalance.toString();
                            TestArray.push(TA);
                            //console.log(match);
                        }

                    });
                    if(!match) TestArray.push(TA);
                });

                db.close(function (err) {

                    if(err){
                        console.log('Plant Two All Array Error: ' + err);
                    }else{
                        console.log("the database connection is now closed");
                    }

                    console.log(TestArray);
                });
            });
        });


    });






    //res.send(JSON.stringify(DataArray));

});