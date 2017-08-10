/**
 * Created by kmell on 6/22/2017.
 */

function PlantThreeAllDetails(data) {

    //Start of Chart
    console.log("Plant 3 All method Called");
    //Chart
    /* data adapter settings */
    var AllDataAdapter = new $.jqx.dataAdapter({
        localdata: data,
        datafields: [
            {name: "Date", type: "string"},
            {name: "AllPlantThreeEndingBalance", type: "number"}
        ]
    });

    /* chart settings */
    var AllChartSettings = {
        source: AllDataAdapter,
        title: "Plant 3 All",
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
            valuesOnTicks: false
        },
        valueAxis: {
            valuesOnTicks: true
        },
        seriesGroups: [
            {
                type: "column",
                click: onChartClick,
                series: [
                    {
                        dataField: "AllPlantThreeEndingBalance", displayText: 'All Plant Three'
                    }
                ]
            }
        ]
    };
    $('#plant3AllChart').jqxChart(AllChartSettings);
    //End of Chart

}

function PlantThreeP8Details(data){

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
            valuesOnTicks: false
        },
        valueAxis: {
            valuesOnTicks: true
        },
        seriesGroups: [
            {
                type: "column",
                click: onChartClick,
                series: [
                    {dataField: 'AllPlantThree', displayText: 'All Plant Two'},
                    {dataField: "P8", displayText: 'P8'}
                ]
            }
        ]
    };
    $('#plant3P8Chart').jqxChart(P8ChartSettings);
    //End of Chart

}

function PlantThreePrimaryOpsDetails(data) {

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
            valuesOnTicks: false
        },
        valueAxis: {
            valuesOnTicks: true
        },
        seriesGroups: [
            {
                type: "column",
                click: onChartClick,
                series: [
                    {dataField: 'AllPlantThree', displayText: 'All Plant Two'},
                    {dataField: "PrimaryOps", displayText: 'Primary Ops'}
                ]
            }
        ]
    };
    $('#plant3PrimaryChart').jqxChart(PrimaryOpsChartSettings);
    //End of Chart

}

function PlantThreeSleevesDetails(data) {

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
            valuesOnTicks: false
        },
        valueAxis: {
            valuesOnTicks: true
        },
        seriesGroups: [
            {
                type: "column",
                click: onChartClick,
                series: [
                    {dataField: 'AllPlantThree', displayText: 'All Plant Two'},
                    {dataField: "Sleeves", displayText: 'Sleeves'}
                ]
            }
        ]
    };
    $('#plant3SleevesChart').jqxChart(SleevesChartSettings);
    //End of Chart


}

function PlantThree737WindowsDetails(data) {

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
            valuesOnTicks: false
        },
        valueAxis: {
            valuesOnTicks: true
        },
        seriesGroups: [
            {
                type: "column",
                click: onChartClick,
                series: [
                    {dataField: 'AllPlantThree', displayText: 'All Plant Two'},
                    {dataField: "Windows737", displayText: '737 Windows'}
                ]
            }
        ]
    };
    $('#plant3737WChart').jqxChart(Windows737ChartSettings);
    //End of Chart

}

function PlantThree787WindowsDetails(data) {

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
            valuesOnTicks: false
        },
        valueAxis: {
            valuesOnTicks: true
        },
        seriesGroups: [
            {
                type: "column",
                click: onChartClick,
                series: [
                    {dataField: 'AllPlantThree', displayText: 'All Plant Two'},
                    {dataField: "Windows787", displayText: '787 Windows'}
                ]
            }
        ]
    };
    $('#plant3787WChart').jqxChart(Windows787ChartSettings);
    //End of Chart

}

function PlantThreeBSIWindowsDetails(data) {

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
            valuesOnTicks: false
        },
        valueAxis: {
            valuesOnTicks: true
        },
        seriesGroups: [
            {
                type: "column",
                click: onChartClick,
                series: [
                    {dataField: 'AllPlantThree', displayText: 'All Plant Two'},
                    {dataField: "BSIWindows", displayText: 'BSI Windows'}
                ]
            }
        ]
    };
    $('#plant3BSIChart').jqxChart(BSIWindowsChartSettings);
    //End of Chart

}

function PlantThreeAllWindowsDetails(data) {

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
            valuesOnTicks: false
        },
        valueAxis: {
            valuesOnTicks: true
        },
        seriesGroups: [
            {
                type: "column",
                click: onChartClick,
                series: [
                    {dataField: 'AllPlantThree', displayText: 'All Plant Two'},
                    {dataField: "AllWindows", displayText: 'All Windows'}
                ]
            }
        ]
    };
    $('#plant3AllWindowsChart').jqxChart(AllWindowsChartSettings);
    //End of Chart

}