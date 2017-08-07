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
