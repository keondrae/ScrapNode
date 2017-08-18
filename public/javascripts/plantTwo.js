/**
 * Created by kmell on 6/22/2017.
 */

var xValue = -5;
var yValue = -17;
var xValueAll = -5;
var yValueAll = -17;
var MinDate = new Date(2016, 7, 1);
var MaxDate = new Date(2017, 7, 1);

function PlantTwoAllDetails(data) {
    //Start of Chart
    console.log("Plant 2 All method Called");
    //Chart
    /* data adapter settings */
    var AllDataAdapter = new $.jqx.dataAdapter({
        localdata: data,
        datafields: [
            {name: "Date", type: "string"},
            {name: "AllEndingBalance", type: "number"}

        ]
    });

    /* chart settings */
    var AllChartSettings = {
        source: AllDataAdapter,
        title: "Plant 2 All",
        description: "",
        showToolTips: true,
        enableAnimations: true,
        padding: {
            left: 5,
            top: 5,
            right: 5,
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
                padding: {/*left: 0, right: 0,*/top: 0, bottom: 0},
                minValue: new Date(2014, 12, 1),
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
                click: onChartClickTest,
                series: [
                    {dataField: "AllEndingBalance" , displayText: 'All Plant Two',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValueAll, y: yValueAll }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        }
                    }
                ]
            }
        ]
    };
    $('#plant2AllChart').jqxChart(AllChartSettings);
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
            right: 5,
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
                padding: {/*left: 0, right: 0,*/top: 0, bottom: 0},
                minValue: new Date(2014, 12, 1),
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
                        }},
                    {dataField: "Plenums", displayText: 'Plenums',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValue, y: yValue }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        }}

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
            right: 5,
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
                padding: {/*left: 0, right: 0,*/top: 0, bottom: 0},
                minValue: new Date(2014, 12, 1),
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
                        }},
                    {dataField: "FlexHCaps", displayText: 'Flex Hose / Caps',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValue, y: yValue }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        }}
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
            right: 5,
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
                padding: {/*left: 0, right: 0,*/top: 0, bottom: 0},
                minValue: new Date(2014, 12, 1),
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
                        }},
                    {dataField: "Downers", displayText: 'Downers',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValue, y: yValue }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        }}
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