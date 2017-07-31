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
});

$('#plant1Button').click(function () {
    console.log(this.id + ' :Clicked');
    NonActive();
    $('#plant1Button').addClass('active');
    HideTabs();
    $('#plant1').show();
});

$('#plant2Button').click(function () {
    console.log(this.id + ' :Clicked');
    NonActive();
    $('#plant2Button').addClass('active');
    HideTabs();
    $('#plant2').show();
});

$('#hqButton').click(function () {
    console.log(this.id + ' :Clicked');
    NonActive();
    $('#hqButton').addClass('active');
    HideTabs();
    $('#plant3').show();
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