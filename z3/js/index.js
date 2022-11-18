let dataPointsA = []
let dataPointsB = []
let dataPointsC = []
let dataPointsD = []
let dataPointsE = []
let dataPointsFX = []
let dataPointsFN = []
let dataPointsYear = []

window.onload = () => {
    $.get("../z03.xml", function(data) {
        $(data).find("zaznam").each(function() {
            let $dataPoint = $(this)

            //  Combo chart
            let A = $dataPoint.find("A").text()
            dataPointsA.push(A)
            let B = $dataPoint.find("B").text()
            dataPointsB.push(B)
            let C = $dataPoint.find("C").text()
            dataPointsC.push(C)
            let D = $dataPoint.find("D").text()
            dataPointsD.push(D)
            let E = $dataPoint.find("E").text()
            dataPointsE.push(E)
            let FX = $dataPoint.find("FX").text()
            dataPointsFX.push(FX)
            let FN = $dataPoint.find("FN").text()
            dataPointsFN.push(FN)
            let year = $dataPoint.find("rok").text()
            dataPointsYear.push(year)

            let colA = {
                x: dataPointsYear,
                y: dataPointsA,
                name: "A",
                type: "bar",
                text: dataPointsA.map(String)
            }

            let colB = {
                x: dataPointsYear,
                y: dataPointsB,
                name: "B",
                type: "bar",
                text: dataPointsB.map(String)
            }

            let colC = {
                x: dataPointsYear,
                y: dataPointsC,
                name: "C",
                type: "bar",
                text: dataPointsC.map(String)
            }

            let colD = {
                x: dataPointsYear,
                y: dataPointsD,
                name: "D",
                type: "bar",
                text: dataPointsD.map(String)
            }

            let colE = {
                x: dataPointsYear,
                y: dataPointsE,
                name: "E",
                type: "bar",
                text: dataPointsE.map(String)
            }

            let colFx = {
                x: dataPointsYear,
                y: dataPointsFX,
                name: "Fx",
                type: "bar",
                text: dataPointsFX.map(String)
            }

            let colFn = {
                x: dataPointsYear,
                y: dataPointsFN,
                name: "Fn",
                type: "bar",
                text: dataPointsFN.map(String)
            }

            let data = [colA, colB, colC, colD, colE, colFx, colFn]

            let layout = {
                title: "Úspešnosť na predmete WEBTE1",
                xaxis: {
                    title: "Akademický rok"
                },
                yaxis: {
                    title: "Počet študentov"
                }
            }

            Plotly.newPlot("comboChart", data, layout)

            // Pie charts
            for (let i = 0; i < dataPointsYear.length; i++) {
                let pieChart = [{
                    values: [dataPointsA[i], dataPointsB[i],dataPointsC[i], dataPointsD[i],dataPointsE[i],dataPointsFX[i],dataPointsFN[i]],
                    labels: ["A","B","C","D","E","FX","FN"],
                    type: "pie",
                }]
                let layout = {
                    title: dataPointsYear[i],
                    width: 400,
                    height: 400
                }
                Plotly.newPlot("pieChart" + i, pieChart, layout)
            }
        })
    })
}