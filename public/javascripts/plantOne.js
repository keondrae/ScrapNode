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
            {name: "EndingBalance", type: "number"}
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
                        dataField: "EndingBalance"
                    }
                ]
            }
        ]
    };
    $('#plant1AllChart').jqxChart(AllChartSettings);

    /*
    //Start of Grid
    var plant1AllDataSource = [
        { name: 'RecordID', type: 'string'},
        { name: 'ItemCode' , type: 'string' },
        { name: 'ItemCodeDesc' , type: 'string' },
        { name: 'ProductLine' , type: 'string' }

    ];
    var plant1AllColumns = [
        { text: 'RecordID', datafield: 'RecordID'},
        { text: 'ItemCode', datafield: 'ItemCode'},
        { text: 'ItemCodeDesc', datafield: 'ItemCodeDesc'},
        { text: 'ProductLine', datafield: 'ProductLine'}
    ];

    var plant1AllSource = {
        datatype: "json",
        datafields: plant1AllDataSource,
        id: 'RecordID',
        url: 'scrapGraph.php?plant=plantOne&tab=p1All&Year=' + Year,
        async: false,
        pager: function (pagenum, pagesize, oldpagenum) {
            // callback called when a page or page size is changed.
        }
    };
    var plantOneAllDataAdapter = new $.jqx.dataAdapter(plant1AllSource,
        { async: false,
            autoBind: true,
            loadError: function (xhr, status, error)
            { alert('Error loading "' + plant1AllSource.url + '" : ' + error); } });

    $("#plant1AllGrid").jqxGrid(
        {
            width: gridWidth,
            height: 685,
            source: plantOneAllDataAdapter,
            theme: gridTheme,
            editable: false,
            columns: plant1AllColumns,
            pageable: true,
            pagermode: 'simple',
            pageSize: 22
        });
    // End of Grid
*/
}

function PlantOneDuctDetails(data) {
    console.log("Plant 1 Duct method Called");
    //Chart
    /* data adapter settings */
    var DuctDataAdapter = new $.jqx.dataAdapter({
        localdata: data,
        datafields: [
            {name: "Date", type: "string"},
            {name: "EndingBalance", type: "number"}
        ]
    });

    /* chart settings */
    var DuctChartSettings = {
        source: DuctDataAdapter,
        title: "Duct",
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
                        dataField: "EndingBalance"
                    }
                ]
            }
        ]
    };
    $('#plant1DuctChart').jqxChart(DuctChartSettings);

    //Grid
}

function PlantOneTubeDetails(data) {
    console.log("Plant 1 Tube method Called");

    /* data adapter settings */
    var TubeDataAdapter = new $.jqx.dataAdapter({
        localdata: data,
        datafields: [
            {name: "Date", type: "string"},
            {name: "EndingBalance", type: "number"}
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
                    {
                        dataField: "EndingBalance"
                    }
                ]
            }
        ]
    };

    /* create chart in the container element */
    $('#plant1TubeChart').jqxChart(TubeChartSettings);

}

function PlantOneCoversDetails(data) {

    /* data adapter settings */
    var CoversDataAdapter = new $.jqx.dataAdapter({
        localdata: data,
        datafields: [
            {name: "Date", type: "string"},
            {name: "EndingBalance", type: "number"}
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
                    {
                        dataField: "EndingBalance"
                    }
                ]
            }
        ]
    };
    // setup the chart
    $('#plant1CoversChart').jqxChart(CoversChartSettings);

}

function PlantOneAssemblyDetails(data) {

    /* data adapter settings */
    var AssemblyDataAdapter = new $.jqx.dataAdapter({
        localdata: data,
        datafields: [
            {name: "Date", type: "string"},
            {name: "EndingBalance", type: "number"}
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
                    {
                        dataField: "EndingBalance"
                    }
                ]
            }
        ]
    };
    // setup the chart
    $('#plant1AssemblyChart').jqxChart(AssemblyChartSettings);


}

function PlantOneOtherDetails(data) {

    /* data adapter settings */
    var OtherDataAdapter = new $.jqx.dataAdapter({
        localdata: data,
        datafields: [
            {name: "Date", type: "string"},
            {name: "EndingBalance", type: "number"}
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
                    {
                        dataField: "EndingBalance"
                    }
                ]
            }
        ]
    };

    // setup the chart
    $('#plant1OtherChart').jqxChart(OtherChartSettings);

}
