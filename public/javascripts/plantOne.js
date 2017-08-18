/**
 * Created by kmell on 6/22/2017.
 */
console.log("Plant 1 All Called");
var xValue = -5;
var yValue = -17;
var xValueAll = -5;
var yValueAll = -17;
var MinDate = new Date(2016, 7, 1);
var MaxDate = new Date(2017, 7, 1);

function PlantOneAllDetails(data) {
    console.log("Plant 1 All method Called");
    //Chart
    /* data adapter settings */
    var AllDataAdapter = new $.jqx.dataAdapter({
        localdata: data,
        datafields: [
            {name: "Date", type: "string"},
            {name: "AllPlantOneEndingBalance", type: "number"}
        ]
    });

    /* chart settings */
    var AllChartSettings = {
        source: AllDataAdapter,
        title: "Plant 1 All",
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
                    {dataField: "AllPlantOneEndingBalance", displayText: 'All Plant One',
                        labels: {
                        visible: true,
                        verticalAlignment: 'top',
                        offset: { x: xValueAll, y: yValueAll }
                    },
                        formatFunction: function (value) {
                            return '$' +  Math.round(value);
                        }}
                ]
            }
        ]
    };
    $('#plant1AllChart').jqxChart(AllChartSettings);

}

function PlantOneDuctDetails(data) {
    console.log("Plant 1 Duct method Called");
    //Chart
    /* data adapter settings */
    var DuctDataAdapter = new $.jqx.dataAdapter({
        localdata: data,
        datafields: [
            {name: "Date", type: "string"},
            {name: "Ducts", type: "number"},
            {name: "AllPlantOne", type: "number"}
        ]
    });

    /* chart settings */
    var DuctChartSettings = {
        source: DuctDataAdapter,
        title: "Duct / Bin Seal",
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
                    {dataField: 'AllPlantOne', displayText: 'All Plant One',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValue, y: yValue }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        }
                    },
                    {dataField: "Ducts", displayText: 'Duct / Bin Seal',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValue, y: yValue }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        }
                    }
                ]
            }
        ]
    };
    $('#plant1DuctChart').jqxChart(DuctChartSettings);

}

function PlantOneTubeDetails(data) {
    console.log("Plant 1 Tube method Called");

    /* data adapter settings */
    var TubeDataAdapter = new $.jqx.dataAdapter({
        localdata: data,
        datafields: [
            {name: "Date", type: "string"},
            {name: "Tubes", type: "number"},
            {name: "AllPlantOne", type: "number"}
        ]
    });

    /* chart settings */
    var TubeChartSettings = {
        source: TubeDataAdapter,
        title: "Tubes",
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
                    {dataField: 'AllPlantOne', displayText: 'All Plant One',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValue, y: yValue }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        }
                    },
                    {dataField: "Tubes", displayText: 'Tubes',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValue, y: yValue }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        }
                    }
                ]
            }
        ]
    };

    /* create chart in the container element */
    $('#plant1TubeChart').jqxChart(TubeChartSettings);

}

function PlantOneCoversDetails(data) {
    console.log("Plant 1 Covers method Called");
    /* data adapter settings */
    var CoversDataAdapter = new $.jqx.dataAdapter({
        localdata: data,
        datafields: [
            {name: "Date", type: "string"},
            {name: "Covers", type: "number"},
            {name: "AllPlantOne", type: "number"}
        ]
    });

    /* chart settings */
    var CoversChartSettings = {
        source: CoversDataAdapter,
        title: "Covers",
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
                    {dataField: 'AllPlantOne', displayText: 'All Plant One',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValue, y: yValue }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        }
                    },
                    {dataField: "Covers", displayText: 'Covers',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValue, y: yValue }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        }
                    }
                ]
            }
        ]
    };
    // setup the chart
    $('#plant1CoversChart').jqxChart(CoversChartSettings)

}

function PlantOneAssemblyDetails(data) {
    console.log("Plant 1 Assembly method Called");
    /* data adapter settings */
    var AssemblyDataAdapter = new $.jqx.dataAdapter({
        localdata: data,
        datafields: [
            {name: "Date", type: "string"},
            {name: "Assembly", type: "number"},
            {name: "AllPlantOne", type: "number"}
        ]
    });

    /* chart settings */
    var AssemblyChartSettings = {
        source: AssemblyDataAdapter,
        title: "Assembly",
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
                    {dataField: 'AllPlantOne', displayText: 'All Plant One',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValue, y: yValue }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        }
                    },
                    {dataField: "Assembly", displayText: 'Assembly',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValue, y: yValue }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        }
                    }
                ]
            }
        ]
    };
    // setup the chart
    $('#plant1AssemblyChart').jqxChart(AssemblyChartSettings);


}

function PlantOneSpaceDetails(data) {
    console.log("Plant 1 Space method Called");
    /* data adapter settings */
    var SpaceDataAdapter = new $.jqx.dataAdapter({
        localdata: data,
        datafields: [
            {name: "Date", type: "string"},
            {name: "Space", type: "number"},
            {name: "AllPlantOne", type: "number"}
        ]
    });

    /* chart settings */
    var SpaceChartSettings = {
        source: SpaceDataAdapter,
        title: "Space",
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
                    {dataField: 'AllPlantOne', displayText: 'All Plant One',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValue, y: yValue }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        }
                    },
                    {dataField: "Space", displayText: 'Space',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValue, y: yValue }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        }
                    }
                ]
            }
        ]
    };
    // setup the chart
    $('#plant1SpaceChart').jqxChart(SpaceChartSettings);


}

function PlantOneOtherDetails(data) {
    console.log("Plant 1 Others method Called");
    /* data adapter settings */
    var OtherDataAdapter = new $.jqx.dataAdapter({
        localdata: data,
        datafields: [
            {name: "Date", type: "string"},
            {name: "Other", type: "number"},
            {name: "AllPlantOne", type: "number"}
        ]
    });

    /* chart settings */
    var OtherChartSettings = {
        source: OtherDataAdapter,
        title: "Other",
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
                click:onChartClick,
                series: [
                    {dataField: 'AllPlantOne', displayText: 'All Plant One',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValue, y: yValue }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        }
                    },
                    {dataField: "Other", displayText: 'Other',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: xValue, y: yValue }
                        },
                        formatFunction: function (value) {
                            return '$' + Math.round(value);
                        }
                    }
                ]
            }
        ]
    };

    // setup the chart
    $('#plant1OtherChart').jqxChart(OtherChartSettings);

}

