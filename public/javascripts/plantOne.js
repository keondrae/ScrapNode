/**
 * Created by kmell on 6/22/2017.
 */
console.log("Plant 1 All Called");
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
                        dataField: "AllPlantOneEndingBalance"
                    }
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
                    {dataField: 'AllPlantOne', displayText: 'All Plant One'},
                    {dataField: "Ducts", displayText: 'Duct / Bin Seal'}
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
                    {dataField: 'AllPlantOne', displayText: 'All Plant One'},
                    {dataField: "Tubes", displayText: 'Tubes'}
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
                    {dataField: 'AllPlantOne', displayText: 'All Plant One'},
                    {dataField: "Covers", displayText: 'Covers'}
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
                    {dataField: 'AllPlantOne', displayText: 'All Plant One'},
                    {dataField: "Assembly", displayText: 'Assembly'}
                ]
            }
        ]
    };
    // setup the chart
    $('#plant1AssemblyChart').jqxChart(AssemblyChartSettings);


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
                    {dataField: 'AllPlantOne', displayText: 'All Plant One'},
                    {dataField: "Other", displayText: 'Other'}
                ]
            }
        ]
    };

    // setup the chart
    $('#plant1OtherChart').jqxChart(OtherChartSettings);

}
