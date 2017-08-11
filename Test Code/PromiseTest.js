var http = require('http');
var TestArray = [];
http.get("http://localhost:3000/plantOneFetch/2017/All", function(res) {

    console.log("Got response: " + res.statusCode);
    console.log('headers:', res.headers);

    if(res.statusCode === 200) {
        console.log("Got value: " + res.statusMessage);
    }


    res.on('data', function (d) {
        //process.stdout.write(d);
        console.log(d.length)

    });

}).on('error', function(e) {
    console.log("Got error: " + e.message);

});