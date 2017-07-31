/**
 * Created by kmell on 6/30/2017.
 */

function PlantAllDetails(data) {

    //Start of Chart
    console.log("Plant All method Called");
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
        title: "All Plants",
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
    $('#AllPlantChart').jqxChart(AllChartSettings);
    //End of Chart


}

function PlantAllGridData(data) {
    var gridTheme = "dark";
    var gridWidth = 1880;
    var gridHeight = 825;

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
}