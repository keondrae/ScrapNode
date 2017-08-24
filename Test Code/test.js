/**
 * Created by kmell on 7/13/2017.
 */
var odbc = require('odbc');
var connectionString ="Driver={SQL Server};Server=tf-sql-01;Database=MAS_TFI";
var db = new odbc.Database();
var items;
console.log("Connection Called")

var TestArray = [];


items = function () {

    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-02-0000' AND  FiscalYear = 2015";

        //we now have an open connection to the database
        //so lets get some data
        db.query(sql, function (err, rows, moreResultSets) {


            if (err) {
                return console.log(err);
            }


            for(var i = 0; i < rows.length; i++) {
                var FiscalYear = rows[i].FiscalYear;
                var FP = parseInt(rows[i].FiscalPeriod);
                var FiscalPeriod = FP;
                var BeginningBalance = rows[i].BeginningBalance;
                var DebitAmount = rows[i].DebitAmount;
                var CreditAmount = rows[i].CreditAmount;
                var AccountKey = rows[i].AccountKey;
                var EndingBalance = BeginningBalance + DebitAmount - CreditAmount;
                var Date;
                switch (FiscalPeriod) {
                    case 1:
                        Date = FiscalYear + '-12-01';
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
                TestArray.push({
                    AccountKey: AccountKey,
                    FiscalYear: FiscalYear,
                    FiscalPeriod: FiscalPeriod,
                    BeginningBalance: BeginningBalance,
                    DebitAmount: DebitAmount,
                    CreditAmount: CreditAmount,
                    EndingBalance: EndingBalance,
                    Date: Date
                });

            }
            console.log(TestArray);

            var item = JSON.stringify(rows);
            return item;
        });
    });
};
module.exports = items();
