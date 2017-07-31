var moment = require('moment');
var odbc = require('odbc');
var connectionString ="Driver={SQL Server};Server=tf-sql-01;Database=MAS_TFI";
var db = new odbc.Database();
var TestArray = [];

db.open(connectionString, function (err) {

    if (err) {
        return console.log(err);
    }

    var sql = "SELECT SY_User.FirstName AS 'FirstName', CI_Item.ItemCodeDesc, CI_ITEM.ItemCode,\n" +
        "  TransactionDate, FiscalCalYear, FiscalCalPeriod,\n" +
        "  TransactionQty, ExtendedCost, UDF_SCRAP_REASON_CODE,\n" +
        "  UDF_WORK_TICKET_NUMBER\n" +
        "FROM IM_ItemTransactionHistory\n" +
        "INNER JOIN CI_ITEM ON IM_ItemTransactionHistory.ItemCode = CI_ITEM.ItemCode\n" +
        "INNER JOIN SY_User ON IM_ItemTransactionHistory.UserUpdatedKey = SY_User.UserKey\n" +
        "WHERE FiscalCalYear = 2015";

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
            var Date;
            var ReasonCodeDesc;

            switch (FiscalCalPeriod) {
                case 1:
                    Date = FiscalCalYear - 1 + '-12-01';
                    break;
                case 2:
                    Date = FiscalCalYear + '-01-01';
                    break;
                case 3:
                    Date = FiscalCalYear + '-02-01';
                    break;
                case 4:
                    Date = FiscalCalYear + '-03-01';
                    break;
                case 5:
                    Date = FiscalCalYear + '-04-01';
                    break;
                case 6:
                    Date = FiscalCalYear + '-05-01';
                    break;
                case 7:
                    Date = FiscalCalYear + '-06-01';
                    break;
                case 8:
                    Date = FiscalCalYear + '-07-01';
                    break;
                case 9:
                    Date = FiscalCalYear + '-08-01';
                    break;
                case 10:
                    Date = FiscalCalYear + '-09-01';
                    break;
                case 11:
                    Date = FiscalCalYear + '-10-01';
                    break;
                case 12:
                    Date = FiscalCalYear + '-11-01';
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

            TestArray.push({
                ReasonCodeDesc: ReasonCodeDesc,
                Item: ItemCode,
                Description: ItemDesc,
                WorkOrder: UDF_WORK_TICKET_NUMBER,
                Date: Date,
                TransactionDate: TransactionDate,
                Quantity: TransactionQty,
                FirstName: FirstName,
                Total: ExtendedCost
            })

        }

        console.log(TestArray[1]);

    });
});