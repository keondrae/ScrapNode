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
        {name: 'PlantNumber', type: 'number'},
        {name: 'AccountNumber', type: 'string'}

    ];
    var plant1AllColumns = [
        {text: 'Reason Code Description', datafield: 'ReasonCodeDesc', width: '18%' , cellsalign: 'center', align: 'center'},
        {text: 'Item', datafield: 'Item', width: '7%' , cellsalign: 'center', align: 'center'},
        {text: 'Description', datafield: 'Description', width: '16%' , cellsalign: 'center', align: 'center'},
        {text: 'Work Order', datafield: 'WorkOrder', width: '10%' , cellsalign: 'center', align: 'center'},
        {text: 'Date', datafield: 'TransactionDate', width: '7%' , cellsalign: 'center', align: 'center'},
        {text: 'QTY', datafield: 'Quantity', width: '3%', cellsalign: 'center', align: 'center'},
        {text: 'First Name', datafield: 'FirstName', width: '7%' , cellsalign: 'center', align: 'center'},
        {text: 'Total', datafield: 'Total', width: '6%' , cellsalign: 'center', align: 'center', cellsformat: 'c2'},
        {text: 'Month', datafield: 'MonthDate', width: '7%' , cellsalign: 'center', align: 'center'},
        {text: 'Plant', datafield: 'PlantNumber', width: '10%' , cellsalign: 'center', align: 'center'},
        {text: 'Account Number', datafield: 'AccountNumber', width: '9%' , cellsalign: 'center', align: 'center'}
    ];

    var plant1AllSource = {
        datatype: "json",
        datafields: plant1AllDataSource,
        localdata: Data,
        async: true
    };

    var plantOneGridDataAdapter = new $.jqx.dataAdapter(plant1AllSource);

    $("#GridForEverything").jqxGrid({
        width: gridWidth,
        autoHeight: false,
        height: 610,
        source: plantOneGridDataAdapter,
        editable: false,
        columns: plant1AllColumns,
        pageable: false,
        groupable: true,
        sortable: true,
        enabletooltips: true,
        filterable: true
    });
    // End of Grid
}