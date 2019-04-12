export function getDisasterDataForAlaska(){
    return([
        {
            type: "stackedColumn",
            name: "Fire",
            showInLegend: true,
            yValueFormatString: "#,###",
            dataPoints: [
                { label: "2014", y: 2 },
                { label: "2015", y: 1 },
                { label: "2016", y: 4 },
                { label: "2017", y: 3 },
                { label: "2018", y: 2}
            ]
        },
        {
            type: "stackedColumn",
            name: "Flood",
            showInLegend: true,
            yValueFormatString: "#,###",
            dataPoints: [
                { label: "2014", y: 2 },
                { label: "2015", y: 1 },
                { label: "2016", y: 1},
                { label: "2017", y: 1 },
                { label: "2018", y: 3 }
            ]
        }
        ])
}