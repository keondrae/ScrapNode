/**
 * Created by kmell on 6/30/2017.
 */



function PlantAllDetails(data, unitInterval, MinValueRange, MinDate, MaxDate) {

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
                minValue: MinValueRange ,
                backgroundColor: 'white',
                dataField: 'Date',
                baseUnit: 'month',
                gridLines: {visible: true},
                unitInterval: unitInterval,
                serieType: 'area',
                minorTicksInterval: 1,
                labels: {angle: -30}
            }
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
                        },
                        color: '#1ca3e3'
                    },
                    {dataField: 'PlantTwoBal', displayText: 'All Plant Two',
                        labels: {
                            visible: true
                        },
                        formatFunction: function (value) {
                            return '$' +  Math.round(value);
                        },
                        color: '#2ba043'
                    },
                    {dataField: 'PlantThreeBal', displayText: 'All Plant Three',
                        labels: {
                            visible: true
                        },
                        formatFunction: function (value, itemIndex) {
                            return '$' + Math.round(value);
                            //return getTotal(itemIndex).toFixed(2);
                        },
                        color: '#8ebc00'
                    }
                ]
            }
        ]
    };
    $('#AllPlantChart').jqxChart(AllChartSettings);
    //End of Chart


    //http://www.jqwidgets.com/community/topic/adding-totals-to-a-stacked-bar-chart/
    var instance = $('#AllPlantChart').jqxChart('getInstance');
    var renderer = instance.renderer;
    for (var i = 0; i < data.length; i++) {
        var pos = instance.getItemCoord(0 /* serieGroupIndex */, 2 /* serieIndex */, i /* itemIndex */);
        var text = getTotal(i, AllDataAdapter);

        //console.log(text + "####" + i)
        var textSize = renderer.measureText(text, 0, { 'class': 'jqx-chart-label-text' });
        renderer.text(
            text, // text
            pos.x + (pos.width - textSize.width) / 2, // x
            pos.y - 20, // y

            textSize.width,
            textSize.height,
            0, // rotation angle
            {'class': 'jqx-chart-label-text' } // parameters

        );
    }

}

function getTotal(itemIndex, AllDataAdapter) {
    var plantOne = parseInt(AllDataAdapter.loadedData[itemIndex].PlantOneBal);
    var plantTwo = parseInt(AllDataAdapter.loadedData[itemIndex].PlantTwoBal);
    var plantThree = parseInt(AllDataAdapter.loadedData[itemIndex].PlantThreeBal);
    var total = plantOne + plantTwo + plantThree;
    return '$'+ total;
}