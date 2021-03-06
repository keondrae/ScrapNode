/**
 * Created by kmell on 6/22/2017.
 */

var xValue = -5;
var yValue = -17;
var xValueAll = -5;
var yValueAll = -17;



function PlantThreeAllDetails(data, unitInterval, MinValueRange, MinDate, MaxDate) {

    //Start of Chart
    console.log("Plant 3 All method Called");
    //Chart
    /* data adapter settings */
    var AllPlantThreeDataAdapter = new $.jqx.dataAdapter({
        localdata: data,
        datafields: [
            {name: "Date", type: "string"},
            {name: "AllPlantThreeEndingBalance", type: "number"}
        ]
    });

    /* chart settings */
    var AllPlantThreeChartSettings = {
        source: AllPlantThreeDataAdapter,
        title: "Plant 3 All",
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
            unitInterval: unitInterval,
            rangeSelector: {
                size: 100,
                padding: {left: 0, right: 30, top: 0, bottom: 0},
                minValue: MinValueRange,
                backgroundColor: 'white',
                dataField: 'Date',
                baseUnit: 'month',
                gridLines: {visible: true},
                unitInterval: unitInterval,
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
                    {dataField: "AllPlantThreeEndingBalance", displayText: 'All Plant Three',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValueAll, y: yValueAll }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        },
                        color: '#8ebc00'
                    }
                ]
            }
        ]
    };
    $('#plant3AllChart').jqxChart(AllPlantThreeChartSettings);
    //End of Chart

}

function PlantThreeP8Details(data, unitInterval, MinValueRange, MinDate, MaxDate){

    //Start of Chart
    console.log("Plant 3 P8 method Called");
    //Chart
    /* data adapter settings */
    var P8DataAdapter = new $.jqx.dataAdapter({
        localdata: data,
        datafields: [
            {name: "Date", type: "string"},
            {name: "P8", type: "number"},
            {name: "AllPlantThree", type: "number"}
        ]
    });

    /* chart settings */
    var P8ChartSettings = {
        source: P8DataAdapter,
        title: "P8",
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
            unitInterval: unitInterval,
            rangeSelector: {
                size: 100,
                padding: {left: 0, right: 30, top: 0, bottom: 0},
                minValue: MinValueRange,
                backgroundColor: 'white',
                dataField: 'Date',
                baseUnit: 'month',
                gridLines: {visible: true},
                unitInterval: unitInterval,
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
                    {dataField: 'AllPlantThree', displayText: 'All Plant Two',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValue, y: yValue }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        },
                        color: '#8ebc00'
                    },
                    {dataField: "P8", displayText: 'P8',
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
    $('#plant3P8Chart').jqxChart(P8ChartSettings);
    //End of Chart

}

function PlantThreePrimaryOpsDetails(data, unitInterval, MinValueRange, MinDate, MaxDate) {

    //Start of Chart
    console.log("Plant 3 Primary Ops method Called");
    //Chart
    /* data adapter settings */
    var PrimaryOpsDataAdapter = new $.jqx.dataAdapter({
        localdata: data,
        datafields: [
            {name: "Date", type: "string"},
            {name: "PrimaryOps", type: "number"},
            {name: "AllPlantThree", type: "number"}
        ]
    });

    /* chart settings */
    var PrimaryOpsChartSettings = {
        source: PrimaryOpsDataAdapter,
        title: "Primary Ops",
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
            unitInterval: unitInterval,
            rangeSelector: {
                size: 100,
                padding: {left: 0, right: 30 ,top: 0, bottom: 0},
                minValue: MinValueRange,
                backgroundColor: 'white',
                dataField: 'Date',
                baseUnit: 'month',
                gridLines: {visible: true},
                unitInterval: unitInterval,
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
                    {dataField: 'AllPlantThree', displayText: 'All Plant Two',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValue, y: yValue }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        },
                        color: '#8ebc00'
                    },
                    {dataField: "PrimaryOps", displayText: 'Primary Ops',
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
    $('#plant3PrimaryChart').jqxChart(PrimaryOpsChartSettings);
    //End of Chart

}

function PlantThreeSleevesDetails(data, unitInterval, MinValueRange, MinDate, MaxDate) {

    //Start of Chart
    console.log("Plant 2 Sleeves method Called");
    //Chart
    /* data adapter settings */
    var SleevesDataAdapter = new $.jqx.dataAdapter({
        localdata: data,
        datafields: [
            {name: "Date", type: "string"},
            {name: "Sleeves", type: "number"},
            {name: "AllPlantThree", type: "number"}
        ]
    });

    /* chart settings */
    var SleevesChartSettings = {
        source: SleevesDataAdapter,
        title: "Sleeves",
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
            unitInterval: unitInterval,
            rangeSelector: {
                size: 100,
                padding: {left: 0, right: 30, top: 0, bottom: 0},
                minValue: MinValueRange,
                backgroundColor: 'white',
                dataField: 'Date',
                baseUnit: 'month',
                gridLines: {visible: true},
                unitInterval: unitInterval,
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
                    {dataField: 'AllPlantThree', displayText: 'All Plant Two',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValue, y: yValue }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        },
                        color: '#8ebc00'
                    },
                    {dataField: "Sleeves", displayText: 'Sleeves',
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
    $('#plant3SleevesChart').jqxChart(SleevesChartSettings);
    //End of Chart


}

function PlantThree737WindowsDetails(data, unitInterval, MinValueRange, MinDate, MaxDate) {

    //Start of Chart
    console.log("Plant 3 737 Windows method Called");
    //Chart
    /* data adapter settings */
    var Windows737DataAdapter = new $.jqx.dataAdapter({
        localdata: data,
        datafields: [
            {name: "Date", type: "string"},
            {name: "Windows737", type: "number"},
            {name: "AllPlantThree", type: "number"}
        ]
    });

    /* chart settings */
    var Windows737ChartSettings = {
        source: Windows737DataAdapter,
        title: "737 Windows",
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
            unitInterval: unitInterval,
            rangeSelector: {
                size: 100,
                padding: {left: 0, right: 30, top: 0, bottom: 0},
                minValue: MinValueRange,
                backgroundColor: 'white',
                dataField: 'Date',
                baseUnit: 'month',
                gridLines: {visible: true},
                unitInterval: unitInterval,
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
                    {dataField: 'AllPlantThree', displayText: 'All Plant Two',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValue, y: yValue }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        },
                        color: '#8ebc00'
                    },
                    {dataField: "Windows737", displayText: '737 Windows',
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
    $('#plant3737WChart').jqxChart(Windows737ChartSettings);
    //End of Chart

}

function PlantThree787WindowsDetails(data, unitInterval, MinValueRange, MinDate, MaxDate) {

    //Start of Chart
    console.log("Plant 3 787 Windows method Called");
    //Chart
    /* data adapter settings */
    var Windows787DataAdapter = new $.jqx.dataAdapter({
        localdata: data,
        datafields: [
            {name: "Date", type: "string"},
            {name: "Windows787", type: "number"},
            {name: "AllPlantThree", type: "number"}
        ]
    });

    /* chart settings */
    var Windows787ChartSettings = {
        source: Windows787DataAdapter,
        title: "787 Windows",
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
            unitInterval: unitInterval,
            rangeSelector: {
                size: 100,
                padding: {left: 0, right: 30, top: 0, bottom: 0},
                minValue: MinValueRange,
                backgroundColor: 'white',
                dataField: 'Date',
                baseUnit: 'month',
                gridLines: {visible: true},
                unitInterval: unitInterval,
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
                    {dataField: 'AllPlantThree', displayText: 'All Plant Two',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValue, y: yValue }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        },
                        color: '#8ebc00'
                    },
                    {dataField: "Windows787", displayText: '787 Windows',
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
    $('#plant3787WChart').jqxChart(Windows787ChartSettings);
    //End of Chart

}

function PlantThreeBSIWindowsDetails(data, unitInterval, MinValueRange, MinDate, MaxDate) {

    //Start of Chart
    console.log("Plant 3 BSI Windows method Called");
    //Chart
    /* data adapter settings */
    var BSIWindowsDataAdapter = new $.jqx.dataAdapter({
        localdata: data,
        datafields: [
            {name: "Date", type: "string"},
            {name: "BSIWindows", type: "number"},
            {name: "AllPlantThree", type: "number"}
        ]
    });

    /* chart settings */
    var BSIWindowsChartSettings = {
        source: BSIWindowsDataAdapter,
        title: "BSI Windows",
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
            unitInterval: unitInterval,
            rangeSelector: {
                size: 100,
                padding: {left: 0, right: 30, top: 0, bottom: 0},
                minValue: MinValueRange,
                backgroundColor: 'white',
                dataField: 'Date',
                baseUnit: 'month',
                gridLines: {visible: true},
                unitInterval: unitInterval,
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
                    {dataField: 'AllPlantThree', displayText: 'All Plant Two',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValue, y: yValue }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        },
                        color: '#8ebc00'
                    },
                    {dataField: "BSIWindows", displayText: 'BSI Windows',
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
    $('#plant3BSIChart').jqxChart(BSIWindowsChartSettings);
    //End of Chart

}

function PlantThreeAllWindowsDetails(data, unitInterval, MinValueRange, MinDate, MaxDate) {

    //Start of Chart
    console.log("Plant 3 All Windows method Called");
    //Chart
    /* data adapter settings */
    var AllWindowsDataAdapter = new $.jqx.dataAdapter({
        localdata: data,
        datafields: [
            {name: "Date", type: "string"},
            {name: "AllWindows", type: "number"},
            {name: "AllPlantThree", type: "number"}
        ]
    });

    /* chart settings */
    var AllWindowsChartSettings = {
        source: AllWindowsDataAdapter,
        title: "All Windows",
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
            unitInterval: unitInterval,
            rangeSelector: {
                size: 100,
                padding: {left: 0, right: 30, top: 0, bottom: 0},
                minValue: MinValueRange,
                backgroundColor: 'white',
                dataField: 'Date',
                baseUnit: 'month',
                gridLines: {visible: true},
                unitInterval: unitInterval,
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
                    {dataField: 'AllPlantThree', displayText: 'All Plant Two',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValue, y: yValue }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        },
                        color: '#8ebc00'
                    },
                    {dataField: "AllWindows", displayText: 'All Windows',
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
    $('#plant3AllWindowsChart').jqxChart(AllWindowsChartSettings);
    //End of Chart

}