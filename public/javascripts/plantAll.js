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
        {name: 'ReasonCodeDesc', type: 'string'},
        {name: 'Item', type: 'string'},
        {name: 'Description', type: 'string'},
        {name: 'WorkOrder', type: 'string'},
        {name: 'MonthDate', type: 'string'},
        {name: 'TransactionDate', type: 'string'},
        {name: 'Quantity', type: 'number'},
        {name: 'FirstName', type: 'string'},
        {name: 'Total', type: 'number'},
        {name: 'PlantNumber', type: 'number'}

    ];
    var plant1AllColumns = [
        {text: 'Reason Code Description', datafield: 'ReasonCodeDesc'},
        {text: 'Item', datafield: 'Item'},
        {text: 'Description', datafield: 'Description'},
        {text: 'Work Order', datafield: 'WorkOrder'},
        {text: 'Transaction Date', datafield: 'TransactionDate'},
        {text: 'Quantity', datafield: 'Quantity'},
        {text: 'First Name', datafield: 'FirstName'},
        {text: 'Total', datafield: 'Total'},
        {text: 'Month', datafield: 'MonthDate'},
        {text: 'Plant', datafield: 'PlantNumber'}
    ];

    var plant1AllSource = {
        datatype: "json",
        datafields: plant1AllDataSource,
        localdata: data,
        async: true,
        pager: function (pagenum, pagesize, oldpagenum) {
            // callback called when a page or page size is changed.
        }
    };

    var plantOneGridDataAdapter = new $.jqx.dataAdapter(plant1AllSource);

    $("#GridForEverything").jqxGrid({
        width: gridWidth,
        autoHeight: false,
        height: 605,
        source: plantOneGridDataAdapter,
        theme: gridTheme,
        editable: false,
        columns: plant1AllColumns,
        pageable: true,
        groupable: true,
        sortable: true,
        enabletooltips: true,
        filterable: true,
        pagermode: 'simple',
        pageSize: 18
    });
    // End of Grid
}