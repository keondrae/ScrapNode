var express = require('express');
var router = express.Router();
var odbc = require('odbc');
var moment = require('moment');
var connectionString ="Driver={SQL Server};Server=tf-sql-01;Database=MAS_TFI";
var db = new odbc.Database();
var DataArray = [];

router.get('/', function(req, res, next) {
     DataArray = [];

    db.open(connectionString, function (err) {

        if (err) {
            return console.log(err);
        }

        var sql = "SELECT SY_User.FirstName AS 'FirstName', CI_Item.ItemCodeDesc, CI_ITEM.ItemCode,\n" +
            "  TransactionDate, FiscalCalYear, FiscalCalPeriod,\n" +
            "  TransactionQty, ExtendedCost, UDF_SCRAP_REASON_CODE,\n" +
            "  UDF_WORK_TICKET_NUMBER, UDF_FACTORY_CODE, AccountKey,\n" +
            "  MainAccountCode, RawAccount, AccountType\n" +
            "FROM IM_ItemTransactionHistory\n" +
            "INNER JOIN CI_ITEM ON IM_ItemTransactionHistory.ItemCode = CI_ITEM.ItemCode\n" +
            "INNER JOIN SY_User ON IM_ItemTransactionHistory.UserUpdatedKey = SY_User.UserKey\n" +
            "INNER JOIN GL_Account ON IM_ItemTransactionHistory.UDF_GL_ACCOUNT_KEY = GL_Account.AccountKey\n" +
            "WHERE MainAccountCode = 5010 AND FiscalCalYear >= 2014";

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
                var RawAccount = rows[i].RawAccount;

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
                    PlantNumber: PlantNumber,
                    AccountNumber: RawAccount
                })

            }

            db.close(function (err) {
                if(err){
                    console.log('Grid Error: ' + err);
                }else{
                    console.log("the database connection is now closed");
                }

            });

            //console.log(TestArray[1]);
            res.send(JSON.stringify(DataArray));

        });
    });


});

module.exports = router;
