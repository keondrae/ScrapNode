var $ = require('jquery');
var Year = 2017;
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