/**
 * Created by kmell on 7/14/2017.
 */
var odbc = require('odbc');
var connectionString ="Driver={SQL Server};Server=tf-sql-01;Database=MAS_TFI";
var db = new odbc.Database();
console.log("Connection Called")
/*
db.open(connectionString, function (err) {

    if(err){
        throw err;
    }else{
        console.log("Con")
    }


});
    */