var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var moment = require('moment');
var index = require('./routes/index');
var users = require('./routes/users');
var test = require('./routes/test');
var plantAllFetch = require('./routes/PlantAllFetch');
var plantOneFetch = require('./routes/PlantOneFetch');
var plantTwoFetch = require('./routes/PlantTwoFetch');
var plantThreeFetch = require('./routes/PlantThreeFetch');
var plantAllGridFetch = require('./routes/PlantAllGridFetch');
var odbc = require('odbc');
var sql = require("mssql");
var app = express();
var config = {
    server: 'tf-sql-01',
    database: 'MAS_TFI',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true
   }
};

var connectionString ="Driver={SQL Server};Server=tf-sql-01;Database=MAS_TFI";
var db = new odbc.Database();
var DataArray = [];

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/test', test);
app.use('/plantAllFetch',plantAllFetch);
app.get('/plantOneFetch/:year/:tab', function (req, res) {
    DataArray = [];
    var Year = req.params.year;
    var Tab = req.params.tab;

    switch (Tab){

        case 'All':
           // PlantOneAll(Year, db, connectionString, res);
            //All
            break;
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
    }

});
app.get('/plantTwoFetch/:year/:tab', function (req, res) {
    DataArray = [];
    var Year = req.params.year;
    var Tab = req.params.tab;

    switch (Tab){

        case 'All':
            PlantTwoAll(Year, db, connectionString, res);
            //All
            break;
        case 'Plenums':
            PlantTwoPlenums(Year, db, connectionString, res);
            //Plenums
            break;
        case 'FlexHCaps':
            PlantTwoFlexHCaps(Year, db, connectionString, res);
            //FlexHCaps
            break;
        case 'Downers':
            PlantTwoDowners(Year, db, connectionString, res);
            //Downers
            break;
    }

});
app.get('/plantThreeFetch/:year/:tab', function (req, res) {
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
app.get('/plantAllGridFetch/:year', function (req, res) {
    var DataArray = [];
    var Year = req.params.year;
    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        var sql = "SELECT SY_User.FirstName AS 'FirstName', CI_Item.ItemCodeDesc, CI_ITEM.ItemCode,\n" +
            "  TransactionDate, FiscalCalYear, FiscalCalPeriod,\n" +
            "  TransactionQty, ExtendedCost, UDF_SCRAP_REASON_CODE,\n" +
            "  UDF_WORK_TICKET_NUMBER, UDF_FACTORY_CODE\n" +
            "FROM IM_ItemTransactionHistory\n" +
            "INNER JOIN CI_ITEM ON IM_ItemTransactionHistory.ItemCode = CI_ITEM.ItemCode\n" +
            "INNER JOIN SY_User ON IM_ItemTransactionHistory.UserUpdatedKey = SY_User.UserKey\n" +
            "WHERE FiscalCalYear = "+ Year;

        db.query(sql, function (err, rows, moreResultSets) {

            if (err) {
                return console.log(err);
            }


            for(var i = 0, j = rows.length; i < j; i++){

                var FirstName = rows[i].FirstName;
                var ItemDesc = rows[i].ItemCodeDesc;
                var ItemCode = rows[i].ItemCode;
                var TransactionDate = moment(rows[i].TransactionDate).format("YYYY-MM-DD");
                var FY = parseInt(rows[i].FiscalCalYear);
                var FiscalCalYear = FY;
                var FP = parseInt(rows[i].FiscalCalPeriod);
                var FiscalCalPeriod = FP;
                var TransactionQty = rows[i].TransactionQty;
                var ExtendedCost = rows[i].ExtendedCost;
                var UDF_SCRAP_REASON_CODE = rows[i].UDF_SCRAP_REASON_CODE;
                var UDF_WORK_TICKET_NUMBER = rows[i].UDF_WORK_TICKET_NUMBER;
                var PrevYear = FiscalCalYear -1;
                var MonthDate;
                var ReasonCodeDesc;
                var PlantNumber = rows[i].UDF_FACTORY_CODE;

                switch (FiscalCalPeriod) {
                    case 1:
                        MonthDate = '1-Dec-' + PrevYear ;
                        break;
                    case 2:
                        MonthDate = '1-Jan-' +  FiscalCalYear;
                        break;
                    case 3:
                        MonthDate = '1-Feb-' +  FiscalCalYear;
                        break;
                    case 4:
                        MonthDate = '1-Mar-' +  FiscalCalYear;
                        break;
                    case 5:
                        MonthDate = '1-Apr-' +  FiscalCalYear;
                        break;
                    case 6:
                        MonthDate = '1-May-' +  FiscalCalYear;
                        break;
                    case 7:
                        MonthDate = '1-Jun-' +  FiscalCalYear;
                        break;
                    case 8:
                        MonthDate = '1-Jul-' +  FiscalCalYear;
                        break;
                    case 9:
                        MonthDate = '1-Aug-' +  FiscalCalYear;
                        break;
                    case 10:
                        MonthDate = '1-Sep-' +  FiscalCalYear;
                        break;
                    case 11:
                        MonthDate = '1-Oct-' +  FiscalCalYear;
                        break;
                    case 12:
                        MonthDate = '1-Nov-' +  FiscalCalYear;
                        break;
                }

                switch(UDF_SCRAP_REASON_CODE){
                    case '':
                        ReasonCodeDesc = 'Not Recorded';
                        break;
                    case'01':
                        ReasonCodeDesc = 'Material Handling';
                        break;
                    case '02':
                        ReasonCodeDesc = 'Training';
                        break;
                    case '03':
                        ReasonCodeDesc = 'Material Handling';
                        break;
                    case '04':
                        ReasonCodeDesc = 'Mfg Defect / Out of Tolerance / Dim issue';
                        break;
                    case '05':
                        ReasonCodeDesc = 'Tooling Issues';
                        break;
                    case '06':
                        ReasonCodeDesc = 'Qualification / Produciton Run Testing';
                        break;
                    case '07':
                        ReasonCodeDesc = 'Other';
                        break;
                }
                DataArray.push({
                    ReasonCodeDesc: ReasonCodeDesc,
                    Item: ItemCode,
                    Description: ItemDesc,
                    WorkOrder: UDF_WORK_TICKET_NUMBER,
                    MonthDate: MonthDate,
                    TransactionDate: TransactionDate,
                    Quantity: TransactionQty,
                    FirstName: FirstName,
                    Total: ExtendedCost,
                    PlantNumber: PlantNumber
                })

            }

            //console.log(TestArray[1]);
            res.send(JSON.stringify(DataArray));

        });
        db.close(function (err) {
            console.log("the database connection is now closed");
        });
    });




});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

//Functions to Be called on the app.get. One for each tab of each plants chart

//Start of plant All Function
function PlantAll(Year, db, connectionString, res) {
    console.log('Plant All');

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
            console.log("the database connection is now closed");
        });
    });

}
//End of plant All Function

//Start of Plant One Functions
function PlantOneAll(Year, db, connectionString, res) {
    console.log('Plant One All');
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
            console.log("the database connection is now closed");
        });
    });
}
function PlantOneDuct(Year, db, connectionString, res) {
    console.log('Plant One Duct');
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
            console.log("the database connection is now closed");
        });
    });
}
function PlantOneTubes(Year, db, connectionString, res) {
    console.log('Plant One Tubes');
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
            console.log("the database connection is now closed");
        });
    });
}
function PlantOneCovers(Year, db, connectionString, res) {
    console.log('Plant One Covers');
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
            console.log("the database connection is now closed");
        });
    });
}
function PlantOneAssembly(Year, db, connectionString, res) {
    console.log('Plant One Assembly');
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
            console.log("the database connection is now closed");
        });
    });
}
function PlantOneOthers(Year, db, connectionString, res) {
    console.log('Plant One Other');
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
            console.log("the database connection is now closed");
        });
    });
}
//End of Plant One Functions

//Start of Plant Two Functions
function PlantTwoAll(Year, db, connectionString, res) {
    console.log('Plant Two All');
        var TempArray = [];
        var Array08 = [];
        var Array04 = [];
        var Array05 = [];

    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        var sql08 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-08-0000' AND  FiscalYear =" + Year;
        var sql04 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-04-0000' AND  FiscalYear =" + Year;
        var sql05 = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-05-0000' AND  FiscalYear =" + Year;
        
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
            console.log("the database connection is now closed");
        });
    });
}
function PlantTwoPlenums(Year, db, connectionString, res) {
    console.log('Plant Two Plenums');
    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-12-0000' AND  FiscalYear =" + Year;

        
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
            console.log("the database connection is now closed");
        });
    });

}
function PlantTwoFlexHCaps(Year, db, connectionString, res) {
    console.log('Plant Two Flex Hose / Caps');
    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-13-0000' AND  FiscalYear =" + Year;

        
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
            console.log("the database connection is now closed");
        });
    });

}
function PlantTwoDowners(Year, db, connectionString, res) {
    console.log('Downers');
    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        var sql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory INNER JOIN GL_Account ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey Where GL_Account.Account ='5010-14-0000' AND  FiscalYear =" + Year;

        
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
            console.log("the database connection is now closed");
        });
    });
}
//End of Plant Two Functions

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
    });
}
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

            res.send(JSON.stringify(DataArray));

        });
    });
}
function PlantThreePrimaryOps(Year, db, connectionString, res) {
    console.log('Plant Three Primary Ops');
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
    });
}
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

            res.send(JSON.stringify(DataArray));

        });
    });
}
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

            res.send(JSON.stringify(DataArray));

        });
    });

}
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

            res.send(JSON.stringify(DataArray));

        });
    });
}
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

            res.send(JSON.stringify(DataArray));

        });
    });
}
function PlantThreeAllWindows(Year, db, connectionString, res) {
    console.log('Plant Three All Windows');
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
    });
}
//End of Plant Three Functions

//Start of Plant Four Functions

//End of Plant Four Functions

/****** Start of Grid Functions ******/