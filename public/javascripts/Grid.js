function Grid(Data) {
    var gridWidth = '100%';

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
        localdata: Data,
        async: true,
        pager: function (pagenum, pagesize, oldpagenum) {
            // callback called when a page or page size is changed.
        }
    };

    var plantOneGridDataAdapter = new $.jqx.dataAdapter(plant1AllSource);

    $("#GridForEverything").jqxGrid({
        width: gridWidth,
        autoHeight: false,
        height: 610,
        source: plantOneGridDataAdapter,
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