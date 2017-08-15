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
            {name: "PlantOneBal", type: "number"},
            {name: "PlantTwoBal", type: "number"},
            {name: "PlantThreeBal", type: "number"}
        ]
    });

    function getTotal(itemIndex) {
        var plantOne = parseInt(AllDataAdapter.loadedData[itemIndex].PlantOneBal);
        var plantTwo = parseInt(AllDataAdapter.loadedData[itemIndex].PlantTwoBal);
        var plantThree = parseInt(AllDataAdapter.loadedData[itemIndex].PlantThreeBal);

        return  plantOne + plantTwo + plantThree;
    }

    /* chart settings */
    var AllChartSettings;
    AllChartSettings = {
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
            valuesOnTicks: true,
            title: { text: 'Scrap Amount ($)<br>' },
            labels: { horizontalAlignment: 'right' }
        },
        seriesGroups: [
            {
                type: "stackedcolumn",
                click: onChartClick ,
                series: [
                    {dataField: 'PlantOneBal', displayText: 'All Plant One',
                        labels: {
                        visible: true
                    },
                        formatFunction: function (value) {
                            //$.getScript('/javascripts/numeral.js', function(){

                                //alert("Script loaded but not necessarily executed.");
                                //var money = numeral(value).format('0,0');

                                return '$' + Math.round(value) ;
                            //});
                        }},
                    {dataField: 'PlantTwoBal', displayText: 'All Plant Two',
                        labels: {
                            visible: true
                        },
                        formatFunction: function (value) {
                            return '$' +  Math.round(value);
                        }
                    },
                    {dataField: 'PlantThreeBal', displayText: 'All Plant Three',
                        labels: {
                            visible: true
                        },
                        formatFunction: function (value, itemIndex) {
                            return '$' + Math.round(value);
                            //return getTotal(itemIndex).toFixed(2);
                        }}
                    /*{dataField: '', displayText: 'Total',
                        labels: {
                            visible: true,
                            verticalAlignment: 'top',
                            offset: { x: -5, y: -17 }
                        },
                        formatFunction: function (value, itemIndex) {
                            return 'Total: ' + getTotal(itemIndex).toFixed(2);
                        }}*/

                ]
            }
        ]
    };
    $('#AllPlantChart').jqxChart(AllChartSettings);
    //End of Chart


}
