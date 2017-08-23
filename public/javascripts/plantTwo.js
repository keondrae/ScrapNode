/**
 * Created by kmell on 6/22/2017.
 */

var xValue = -5;
var yValue = -17;
var xValueAll = -5;
var yValueAll = -17;
/*
//Test Vars
var dd = 9;
var mm = 11 + 1; //January is 0!
var yyyy = 2020;
*/
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
var prvYear = yyyy - 1;
var prvTwoYr = yyyy - 2;
var currentDate;
var lastYear;
var twoYearsAgo;

if(dd < 10){
    dd = '0' + dd
}

if(mm < 10){
    mm = '0' + mm
}
currentDate = mm + '/' + '01' + '/' + yyyy;
lastYear = mm + '/' + '01' + '/' + prvYear;
twoYearsAgo = '01/01' + '/' + prvTwoYr;


//console.log(dd);
//console.log(mm);
//console.log(yyyy);
//console.log(currentDate);
//console.log(lastYear);
//console.log(twoYearsAgo);

var MinDate = lastYear;
var MaxDate = currentDate;
var MinValueRange = twoYearsAgo;

function PlantTwoAllDetails(data) {
    //Start of Chart
    console.log("Plant 2 All method Called");
    //Chart
    /* data adapter settings */
    var AllPlantTwoDataAdapter = new $.jqx.dataAdapter({
        localdata: data,
        datafields: [
            {name: "Date", type: "string"},
            {name: "AllEndingBalance", type: "number"}

        ]
    });

    /* chart settings */
    var AllPlantTwoChartSettings = {
        source: AllPlantTwoDataAdapter,
        title: "Plant 2 All",
        description: "",
        showToolTips: true,
        enableAnimations: true,
        padding: {
            left: 5,
            top: 5,
            right: 30,
            bottom: 5
        },
        titlePadding: {
            left: 5,
            top: 5,
            right: 5,
            bottom: 5
        },
        colorScheme: "scheme05",
        enableCrosshairs: true,
        enableAxisTextAnimation: true,
        xAxis: {
            dataField: "Date",
            type: "date",
            baseUnit: "month",
            valuesOnTicks: false,
            minValue: MinDate,
            maxValue: MaxDate,
            unitInterval: 1,
            rangeSelector: {
                size: 100,
                padding: {left: 0, right: 30, top: 0, bottom: 0},
                minValue: MinValueRange,
                backgroundColor: 'white',
                dataField: 'Date',
                baseUnit: 'month',
                gridLines: {visible: true},
                unitInterval: 1,
                serieType: 'area',
                minorTicksInterval: 1,
                labels: {
                    angle: -30
                }
            }
        },
        valueAxis: {
            valuesOnTicks: true,
            title: { text: 'Scrap Amount ($)<br>' },
            labels: { horizontalAlignment: 'right' }
        },
        seriesGroups: [
            {
                type: "column",
                click: onChartClick,
                series: [
                    {dataField: "AllEndingBalance" , displayText: 'All Plant Two',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValueAll, y: yValueAll }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        },
                        color: '#2ba043'
                    }
                ]
            }
        ]
    };
    $('#plant2AllChart').jqxChart(AllPlantTwoChartSettings);
    //End of Chart



}

function PlantTwoPlenumsDetails(data) {

    console.log("Plant 2 Plenums method Called");
    //Chart
    /* data adapter settings */
    var PlenumsDataAdapter = new $.jqx.dataAdapter({
        localdata: data,
        datafields: [
            {name: "Date", type: "string"},
            {name: "Plenums", type: "number"},
            {name: "AllPlantTwo", type: "number"}
        ]
    });

    /* chart settings */
    var PlenumsChartSettings = {
        source: PlenumsDataAdapter,
        title: "Plenums",
        description: "",
        showToolTips: true,
        enableAnimations: true,
        padding: {
            left: 5,
            top: 5,
            right: 30,
            bottom: 5
        },
        titlePadding: {
            left: 5,
            top: 5,
            right: 5,
            bottom: 5
        },
        colorScheme: "scheme05",
        enableCrosshairs: true,
        enableAxisTextAnimation: true,
        xAxis: {
            dataField: "Date",
            type: "date",
            baseUnit: "month",
            valuesOnTicks: false,
            minValue: MinDate,
            maxValue: MaxDate,
            unitInterval: 1,
            rangeSelector: {
                size: 100,
                padding: {left: 0, right: 30, top: 0, bottom: 0},
                minValue: MinValueRange,
                backgroundColor: 'white',
                dataField: 'Date',
                baseUnit: 'month',
                gridLines: {visible: true},
                unitInterval: 1,
                serieType: 'area',
                minorTicksInterval: 1,
                labels: {
                    angle: -30
                }
            }
        },
        valueAxis: {
            valuesOnTicks: true,
            title: { text: 'Scrap Amount ($)<br>' },
            labels: { horizontalAlignment: 'right' }
        },
        seriesGroups: [
            {
                type: "column",
                click: onChartClick,
                series: [
                    {dataField: 'AllPlantTwo', displayText: 'All Plant Two',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValue, y: yValue }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        },
                        color: '#2ba043'
                    },
                    {dataField: "Plenums", displayText: 'Plenums',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValue, y: yValue }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        },
                        color: '#287cdf'
                    }
                ]
            }
        ]
    };
    $('#plant2PlenChart').jqxChart(PlenumsChartSettings);
    //End of Chart

}

function PlantTwoFlexHoseCapsDetails(data) {

    console.log("Plant 2 Flex Hoes / Caps method Called");
    //Chart
    /* data adapter settings */
    var FlexHoseCapsDataAdapter = new $.jqx.dataAdapter({
        localdata: data,
        datafields: [
            {name: "Date", type: "string"},
            {name: "FlexHCaps", type: "number"},
            {name: "AllPlantTwo", type: "number"}
        ]
    });

    /* chart settings */
    var FlexHoseCapsChartSettings = {
        source: FlexHoseCapsDataAdapter,
        title: "Flex Hose / Caps",
        description: "",
        showToolTips: true,
        enableAnimations: true,
        padding: {
            left: 5,
            top: 5,
            right: 30,
            bottom: 5
        },
        titlePadding: {
            left: 5,
            top: 5,
            right: 5,
            bottom: 5
        },
        colorScheme: "scheme05",
        enableCrosshairs: true,
        enableAxisTextAnimation: true,
        xAxis: {
            dataField: "Date",
            type: "date",
            baseUnit: "month",
            valuesOnTicks: false,
            minValue: MinDate,
            maxValue: MaxDate,
            unitInterval: 1,
            rangeSelector: {
                size: 100,
                padding: {left: 0, right: 30, top: 0, bottom: 0},
                minValue: MinValueRange,
                backgroundColor: 'white',
                dataField: 'Date',
                baseUnit: 'month',
                gridLines: {visible: true},
                unitInterval: 1,
                serieType: 'area',
                minorTicksInterval: 1,
                labels: {
                    angle: -30
                }
            }
        },
        valueAxis: {
            valuesOnTicks: true,
            title: { text: 'Scrap Amount ($)<br>' },
            labels: { horizontalAlignment: 'right' }
        },
        seriesGroups: [
            {
                type: "column",
                click: onChartClick,
                series: [
                    {dataField: 'AllPlantTwo', displayText: 'All Plant Two',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValue, y: yValue }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        },
                        color: '#2ba043'
                    },
                    {dataField: "FlexHCaps", displayText: 'Flex Hose / Caps',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValue, y: yValue }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        },
                        color: '#287cdf'
                    }
                ]
            }
        ]
    };
    $('#plant2FCChart').jqxChart(FlexHoseCapsChartSettings);
    //End of Chart

}

function PlantTwoDownersDetails(data) {

    console.log("Plant 2 Downers method Called");
    //Chart
    /* data adapter settings*/
    var DownersDataAdapter = new $.jqx.dataAdapter({
        localdata: data,
        datafields: [
            {name: "Date", type: "string"},
            {name: "Downers", type: "number"},
            {name: "AllPlantTwo", type: "number"}
        ]
    });

    /* chart settings */
    var DownersChartSettings;
    DownersChartSettings = {
        source: DownersDataAdapter,
        title: "Downers",
        description: "",
        showToolTips: true,
        enableAnimations: true,
        padding: {
            left: 5,
            top: 5,
            right: 30,
            bottom: 5
        },
        titlePadding: {
            left: 5,
            top: 5,
            right: 5,
            bottom: 5
        },
        colorScheme: "scheme05",
        enableCrosshairs: true,
        enableAxisTextAnimation: true,
        xAxis: {
            dataField: "Date",
            type: "date",
            baseUnit: "month",
            valuesOnTicks: false,
            minValue: MinDate,
            maxValue: MaxDate,
            unitInterval: 1,
            rangeSelector: {
                size: 100,
                padding: {left: 0, right: 30, top: 0, bottom: 0},
                minValue: MinValueRange,
                backgroundColor: 'white',
                dataField: 'Date',
                baseUnit: 'month',
                gridLines: {visible: true},
                unitInterval: 1,
                serieType: 'area',
                minorTicksInterval: 1,
                labels: {
                    angle: -30
                }
            }
        },
        valueAxis: {
            valuesOnTicks: true,
            title: { text: 'Scrap Amount ($)<br>' },
            labels: { horizontalAlignment: 'right' }
        },
        seriesGroups: [
            {
                type: "column",
                click: onChartClick,
                series: [
                    {dataField: "AllPlantTwo", displayText: 'All Plant Two',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValue, y: yValue }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        },
                        color: '#2ba043'
                    },
                    {dataField: "Downers", displayText: 'Downers',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValue, y: yValue }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        },
                        color: '#287cdf'
                    }
                ]
            }
        ]
    };
    $('#plant2DownChart').jqxChart(DownersChartSettings);
    //End of Chart

}

function onChartClickTest(e) {
    var id;
    var thisDate;
    var thisYear = Year;
    var PrevYear = parseInt(thisYear) - 1;
    $('#GridForEverything').jqxGrid('removefilter', 'MonthDate');
    id = e.elementIndex;
    console.log(id);
    switch (id) {
        case 0:
            thisDate = '1-Dec-' + PrevYear;
            break;
        case 1:
            thisDate = '1-Jan-' + thisYear;
            break;
        case 2:
            thisDate = '1-Feb-' + thisYear;
            break;
        case 3:
            thisDate = '1-Mar-' + thisYear;
            break;
        case 4:
            thisDate = '1-Apr-' + thisYear;
            break;
        case 5:
            thisDate = '1-May-' + thisYear;
            break;
        case 6:
            thisDate = '1-Jun-' + thisYear;
            break;
        case 7:
            thisDate = '1-Jul-' + thisYear;
            break;
        case 8:
            thisDate = '1-Aug-' + thisYear;
            break;
        case 9:
            thisDate = '1-Sep-' + thisYear;
            break;
        case 10:
            thisDate = '1-Oct-' + thisYear;
            break;
        case 11:
            thisDate = '1-Nov-' + thisYear;
            break;
    }
    console.log(thisDate);
    //addfilter(thisDate);
}