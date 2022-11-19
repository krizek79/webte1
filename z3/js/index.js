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

            //  Combo chart
            let traceA = {
                x: dataPointsYear,
                y: dataPointsA,
                name: "A",
                type: "bar",
                text: dataPointsA.map(String)
            }
            let traceB = {
                x: dataPointsYear,
                y: dataPointsB,
                name: "B",
                type: "bar",
                text: dataPointsB.map(String)
            }
            let traceC = {
                x: dataPointsYear,
                y: dataPointsC,
                name: "C",
                type: "bar",
                text: dataPointsC.map(String)
            }
            let traceD = {
                x: dataPointsYear,
                y: dataPointsD,
                name: "D",
                type: "bar",
                text: dataPointsD.map(String)
            }
            let traceE = {
                x: dataPointsYear,
                y: dataPointsE,
                name: "E",
                type: "bar",
                text: dataPointsE.map(String)
            }
            let traceFx = {
                x: dataPointsYear,
                y: dataPointsFX,
                name: "Fx",
                type: "bar",
                text: dataPointsFX.map(String)
            }
            let traceFn = {
                x: dataPointsYear,
                y: dataPointsFN,
                name: "Fn",
                type: "bar",
                text: dataPointsFN.map(String)
            }

            let comboChartData = [traceA, traceB, traceC, traceD, traceE, traceFx, traceFn]
            let comboChartLayout = {
                title: "Úspešnosť na predmete WEBTE1",
                xaxis: {
                    title: "Akademický rok"
                },
                yaxis: {
                    title: "Počet študentov"
                }
            }
            let comboChartconfig = {
                responsive: true
            }

            Plotly.newPlot("comboChart", comboChartData, comboChartLayout, comboChartconfig)

            // Pie charts
            for (let i = 0; i < dataPointsYear.length; i++) {
                let pieChart = [{
                    values: [dataPointsA[i], dataPointsB[i],dataPointsC[i], dataPointsD[i],dataPointsE[i],dataPointsFX[i],dataPointsFN[i]],
                    labels: ["A","B","C","D","E","FX","FN"],
                    type: "pie"
                }]
                let pieChartLayout = {
                    title: "Úspešnosť na predmete WEBTE1 " + dataPointsYear[i]
                }
                let pieChartConfig = {
                    responsive: true
                }

                Plotly.newPlot("pieChart" + i, pieChart, pieChartLayout, pieChartConfig)
            }

            // Area chart
            let areaChartTraceA = {
                x: dataPointsYear,
                y: dataPointsA,
                name: "A",
                type: "scatter",
                stackgroup: "one",
                groupnorm: "percent"
            }
            let areaChartTraceB = {
                x: dataPointsYear,
                y: dataPointsB,
                name: "B",
                type: "scatter",
                stackgroup: "one",
                groupnorm: "percent"
            }
            let areaChartTraceC = {
                x: dataPointsYear,
                y: dataPointsC,
                name: "C",
                type: "scatter",
                stackgroup: "one",
                groupnorm: "percent"
            }
            let areaChartTraceD = {
                x: dataPointsYear,
                y: dataPointsD,
                name: "D",
                type: "scatter",
                stackgroup: "one",
                groupnorm: "percent"
            }
            let areaChartTraceE = {
                x: dataPointsYear,
                y: dataPointsE,
                name: "E",
                type: "scatter",
                stackgroup: "one",
                groupnorm: "percent"
            }
            let areaChartTraceFx = {
                x: dataPointsYear,
                y: dataPointsFX,
                name: "FX",
                type: "scatter",
                stackgroup: "one",
                groupnorm: "percent"
            }
            let areaChartTraceFn = {
                x: dataPointsYear,
                y: dataPointsFN,
                name: "FN",
                type: "scatter",
                stackgroup: "one",
                groupnorm: "percent"
            }

            let areaChartData = [areaChartTraceA, areaChartTraceB, areaChartTraceC, areaChartTraceD, areaChartTraceE, areaChartTraceFn, areaChartTraceFx]
            let areaChartLayout = {
                title: "Úspešnosť na predmete WEBTE1"
            }
            let areaChartConfig = {
                responsive: true
            }

            Plotly.newPlot("areaChart", areaChartData, areaChartLayout, areaChartConfig)
        })
    })
}