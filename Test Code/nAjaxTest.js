var najax = $ = require('najax');
var TestArray = [];
var TestArrayOne = [];
var TestArrayTwo = [];
var DataArray = [];
var Year = 2017;
/*
$.ajax({// Get All
    type: 'GET',
    url: '/plantOneFetch/' + Year + '/All',
    dataType: 'json',
    async: false,
    cache: true,
    timeout: 5000,
    success: function (data) {
        console.log(data);
    },
    error: function (xhr, status, errorThrown) {
        console.log('Plant One All Error:');
        console.log(xhr);
        console.log(status);
        console.log(errorThrown);
    }
});
*/

TestArray = [];

najax({ // Plant One
    url:'http://localhost:3000/plantOneFetch/' + Year + '/All',
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

        TestArray.push({
            Date: DateOne,
            Bal: EndBalanceOne
        })

    }
    //console.log(TestArray);

    najax({ //Plant Two
        url:'http://localhost:3000/plantTwoFetch/' + Year + '/All',
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

            TestArrayOne.push({
                Date: DateTwo,
                Bal: EndBalanceTwo
            })

        }
        //console.log(TestArrayOne);

        najax({
            url:'http://localhost:3000/plantThreeFetch/' + Year + '/All',
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

                TestArrayTwo.push({
                    Date: DateThree,
                    Bal: EndBalanceThree
                })
            }
            //console.log(TestArrayTwo);

            for(var i = 0; i < TestArrayTwo.length; i++){
                var Date = TestArrayTwo[i].Date;
                var PlantOne = TestArray[i].Bal;
                var PlantTwo = TestArrayOne[i].Bal;
                var PlantThree = TestArrayTwo[i].Bal;

                DataArray.push({
                    Date: Date,
                    PlantOneBal: PlantOne,
                    PlantTwoBal: PlantTwo,
                    PlantThreeBal: PlantThree

                })

            }
            console.log(DataArray);
            console.log(DataArray.length);
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




