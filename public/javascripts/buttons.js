/**
 * Created by kmell on 7/17/2017.
 */


$('#searchButton').click(function () {
    console.log('Search Button Clicked!');
    $('#search').show();
    var newYear = $('#YearDropDown').jqxDropDownList('val');
    console.log('Year: ' + newYear);
    //showPage(newYear);
});

$('#AllPlantButton').click(function () {
    console.log(this.id + ' :Clicked');
    NonActive();
    $('#AllPlantButton').addClass('active');
    HideTabs();
    $('#plantAll').show();
    $('#plantAll').jqxTabs('focus');
    $('#GridForEverything').jqxGrid('clearfilters', 'false');
    $('#GridForEverything').jqxGrid('removefilter', 'MonthDate');
    $('.data').jqxChart('refresh');
});

$('#plant1Button').click(function () {
    console.log(this.id + ' :Clicked');
    NonActive();
    $('#plant1Button').addClass('active');
    HideTabs();
    $('#plant1').show();
    $('#plant1').jqxTabs('focus');
    AddFilter('PLANT #1');
    $('#GridForEverything').jqxGrid('removefilter', 'MonthDate');
    $('.data').jqxChart('refresh');
});

$('#plant2Button').click(function () {
    console.log(this.id + ' :Clicked');
    NonActive();
    $('#plant2Button').addClass('active');
    HideTabs();
    $('#plant2').show();
    $('#plant2').jqxTabs('focus');
    AddFilter('PLANT #2');
    $('#GridForEverything').jqxGrid('removefilter', 'MonthDate');
    $('.data').jqxChart('refresh');
});

$('#hqButton').click(function () {
    console.log(this.id + ' :Clicked');
    NonActive();
    $('#hqButton').addClass('active');
    HideTabs();
    $('#plant3').show();
    $('#plant3').jqxTabs('focus');
    AddFilter('HQ');
    $('#GridForEverything').jqxGrid('removefilter', 'MonthDate');
    $('.data').jqxChart('refresh');
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

function AddFilter(Plant) {
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
};