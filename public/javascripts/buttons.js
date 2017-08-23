/**
 * Created by kmell on 7/17/2017.
 */

var today = new Date();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
var TodayDate;

switch(mm){
    case 1:
        TodayDate = '1' + '-' + 'Jan' + '-' + yyyy;
        break;
    case 2:
        TodayDate = '1' + '-' + 'Feb' + '-' + yyyy;
        break;
    case 3:
        TodayDate = '1' + '-' + 'Mar' + '-' + yyyy;
        break;
    case 4:
        TodayDate = '1' + '-' + 'Apr' + '-' + yyyy;
        break;
    case 5:
        TodayDate = '1' + '-' + 'May' + '-' + yyyy;
        break;
    case 6:
        TodayDate = '1' + '-' + 'Jun' + '-' + yyyy;
        break;
    case 7:
        TodayDate = '1' + '-' + 'Jul' + '-' + yyyy;
        break;
    case 8:
        TodayDate = '1' + '-' + 'Aug' + '-' + yyyy;
        break;
    case 9:
        TodayDate = '1' + '-' + 'Sep' + '-' + yyyy;
        break;
    case 10:
        TodayDate = '1' + '-' + 'Oct' + '-' + yyyy;
        break;
    case 11:
        TodayDate = '1' + '-' + 'Nov' + '-' + yyyy;
        break;
    case 12:
        TodayDate = '1' + '-' + 'Dec' + '-' + yyyy;
        break;
}


$('#searchButton').click(function () {
    console.log('Search Button Clicked!');
    $('#search').show();
    var newYear = $('#YearDropDown').jqxDropDownList('val');
    console.log('Year: ' + newYear);
    //showPage(newYear);
});

$('#AllPlantButton').click(function () {
    $('#GridForEverything').jqxGrid('removefilter', 'AccountNumber');
    console.log(this.id + ' :Clicked');
    NonActive();
    $('#AllPlantButton').addClass('active');
    HideTabs();
    $('#plantAll').show();
    $('#plantAll').jqxTabs('focus');
    $('#GridForEverything').jqxGrid('clearfilters', 'false');
    $('#GridForEverything').jqxGrid('removefilter', 'MonthDate');
    $('.data').jqxChart('refresh');
    AddFilterDate(TodayDate);
});

$('#plant1Button').click(function () {
    $('#GridForEverything').jqxGrid('removefilter', 'AccountNumber');
    console.log(this.id + ' :Clicked');
    NonActive();
    $('#plant1Button').addClass('active');
    HideTabs();
    $('#plant1').show();
    $('#plant1').jqxTabs('focus');
    AddFilterPlant('PLANT #1');
    $('#GridForEverything').jqxGrid('removefilter', 'MonthDate');
    $('.data').jqxChart('refresh');
    AddFilterDate(TodayDate);
});

$('#plant2Button').click(function () {
    $('#GridForEverything').jqxGrid('removefilter', 'AccountNumber');
    console.log(this.id + ' :Clicked');
    NonActive();
    $('#plant2Button').addClass('active');
    HideTabs();
    $('#plant2').show();
    $('#plant2').jqxTabs('focus');
    AddFilterPlant('PLANT #2');
    $('#GridForEverything').jqxGrid('removefilter', 'MonthDate');
    $('.data').jqxChart('refresh');
    AddFilterDate(TodayDate);
});

$('#hqButton').click(function () {
    $('#GridForEverything').jqxGrid('removefilter', 'AccountNumber');
    console.log(this.id + ' :Clicked');
    NonActive();
    $('#hqButton').addClass('active');
    HideTabs();
    $('#plant3').show();
    $('#plant3').jqxTabs('focus');
    AddFilterPlant('HQ');
    $('#GridForEverything').jqxGrid('removefilter', 'MonthDate');
    $('.data').jqxChart('refresh');
    AddFilterDate(TodayDate);
});

//Start of HideTabs Function
function HideTabs() {
    $('#plant1').hide();
    $('#plant2').hide();
    $('#plant3').hide();
    $('#plantAll').hide();
} //End of HideTabs Function

function NonActive() {
    $('#AllPlantButton').removeClass('active');
    $('#plant1Button').removeClass('active');
    $('#plant2Button').removeClass('active');
    $('#hqButton').removeClass('active');
}

function AddFilterPlant(Plant) {
    var filtergroup = new $.jqx.filter();
    var filter_or_operator = 1;
    var filtervalue = Plant;
    var filtercondition = 'equal';
    var filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
    filtergroup.addfilter(filter_or_operator, filter);
    // add the filters.
    $("#GridForEverything").jqxGrid('addfilter', 'PlantNumber', filtergroup);
    // apply the filters.
    $("#GridForEverything").jqxGrid('applyfilters');
}

function AddFilterDate (Date) {
    var filtergroup = new $.jqx.filter();
    var filter_or_operator = 1;
    var filtervalue = Date;
    var filtercondition = 'equal';
    var filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
    filtergroup.addfilter(filter_or_operator, filter);
    // add the filters.
    $("#GridForEverything").jqxGrid('addfilter', 'MonthDate', filtergroup);
    // apply the filters.
    $("#GridForEverything").jqxGrid('applyfilters');
}