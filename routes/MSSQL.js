/**
 * *
 * *
 * *
 * *
 * *
 * *
 * *
 * * THIS IS TEST CODE !!!!!!
 * * HAS NOTHING TO DO WITH THE ACTUAL APPLICATION
 * * -Km
 * *
 * *
 * */
var express = require('express');
var router = express.Router();
var sql = require("mssql");
require("msnodesqlv8");
var moment = require('moment');
var config = {
    server: 'tf-sql-01',
    database: 'MAS_TFI',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true
    }
};

router.get('/:year', function(req, res, next) {
    res.addHeader("Access-Control-Allow-Origin", "*");

    var Year = req.params.year;
    sql.connect(config, function (err) {
        var DataArray = [];

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        var query = "SELECT SY_User.FirstName AS 'FirstName', CI_Item.ItemCodeDesc, CI_ITEM.ItemCode,\n" +
            "  TransactionDate, FiscalCalYear, FiscalCalPeriod,\n" +
            "  TransactionQty, ExtendedCost, UDF_SCRAP_REASON_CODE,\n" +
            "  UDF_WORK_TICKET_NUMBER, UDF_FACTORY_CODE\n" +
            "FROM IM_ItemTransactionHistory\n" +
            "INNER JOIN CI_ITEM ON IM_ItemTransactionHistory.ItemCode = CI_ITEM.ItemCode\n" +
            "INNER JOIN SY_User ON IM_ItemTransactionHistory.UserUpdatedKey = SY_User.UserKey\n" +
            "WHERE FiscalCalYear = "+ Year;


        // query to the database and get the records
        request.query(query, function (err, rows) {

            if (err) console.log(err);

            // send records as a response
            //console.log(rows);

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
                    Total: ExtendedCost
                })

            }

            //console.log(DataArray);
            res.send(JSON.stringify(DataArray));

        });
    });
});

module.exports = router;
