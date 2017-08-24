var express = require('express');
var router = express.Router();
var najax = require('najax');
var DataArray = [];
var PlantOneArray = [];
var PlantTwoArray = [];
var PlantThreeArray = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
    DataArray = [];
    PlantThreeArray = [];
    PlantTwoArray = [];
    PlantOneArray = [];

    najax({ // Plant One
        url:'http://localhost:3000/plantOneFetch/All',
        type:'GET',
        dataType: 'json',
        async: false,
        cache: true,
        timeout: 5000
    }).success(function(data){
        //console.log('Plant One: ' + data.length);


        for(var i = 0; i < data.length; i++){
            var DateOne = data[i].Date;
            var EndBalanceOne = data[i].AllPlantOneEndingBalance;

            PlantOneArray.push({
                Date: DateOne,
                Bal: EndBalanceOne
            })

        }
        najax({ //Plant Two
            url:'http://localhost:3000/plantTwoFetch/All',
            type:'GET',
            dataType: 'json',
            async: true,
            cache: true,
            timeout: 5000
        }).success(function(data1){
            //console.log('Plant Two: ' + data1.length);

            for(var i = 0; i < data1.length; i++){
                var DateTwo = data1[i].Date;
                var EndBalanceTwo = data1[i].AllEndingBalance;

                PlantTwoArray.push({
                    Date: DateTwo,
                    Bal: EndBalanceTwo
                })

            }

            najax({
                url:'http://localhost:3000/plantThreeFetch/All',
                type:'GET',
                dataType: 'json',
                async: false,
                cache: true,
                timeout: 5000
            }).success(function(data2){
                //console.log('Plant Three: ' + data2.length);

                for(var i = 0; i < data2.length; i++){
                    var DateThree = data2[i].Date;
                    var EndBalanceThree = data2[i].AllPlantThreeEndingBalance;

                    PlantThreeArray.push({
                        Date: DateThree,
                        Bal: EndBalanceThree
                    })
                }
                //console.log(TestArrayTwo);

                for(var i = 0; i < PlantThreeArray.length; i++){
                    var Date = PlantThreeArray[i].Date;
                    var PlantOne = PlantOneArray[i].Bal;
                    var PlantTwo = PlantTwoArray[i].Bal;
                    var PlantThree = PlantThreeArray[i].Bal;

                    DataArray.push({
                        Date: Date,
                        PlantOneBal: PlantOne,
                        PlantTwoBal: PlantTwo,
                        PlantThreeBal: PlantThree

                    })
                }
                //console.log(DataArray);
                //console.log(DataArray.length);
                res.send(JSON.stringify(DataArray))
            }).error(function(err){
                console.log('Plant Three Error');
                console.log(err);
            });
        }).error(function(err){
            console.log('Plant Two Error');
            console.log(err);
        });
    }).error(function(err){
        console.log('Plant One Error');
        console.log(err);
    });


});

module.exports = router;