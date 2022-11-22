let dataPointsA = []
let dataPointsB = []
let dataPointsC = []
let dataPointsD = []
let dataPointsE = []
let dataPointsFX = []
let dataPointsFN = []
let dataPointsYear = []

//  Combo chart
const comboChartTraceA = {
    x: null,
    y: null,
    name: "A",
    type: "bar",
    text: null,
    orientation: "v"
}
const comboChartTraceB = {
    x: [],
    y: [],
    name: "B",
    type: "bar",
    text: null,
    orientation: "v"
}
const comboChartTraceC = {
    x: [],
    y: [],
    name: "C",
    type: "bar",
    text: null,
    orientation: "v"
}
const comboChartTraceD = {
    x: [],
    y: [],
    name: "D",
    type: "bar",
    text: null,
    orientation: "v"
}
const comboChartTraceE = {
    x: [],
    y: [],
    name: "E",
    type: "bar",
    text: null,
    orientation: "v"
}
const comboChartTraceFx = {
    x: [],
    y: [],
    name: "Fx",
    type: "bar",
    text: null,
    orientation: "v"
}
const comboChartTraceFn = {
    x: [],
    y: [],
    name: "Fn",
    type: "bar",
    text: null,
    orientation: "v"
}

window.onresize = () => {
    if ($(window).width() < 576) {
        console.log("yeeyee ass graph rotation")
    }
}

window.onload = () => {
    $.get("../z03.xml", function (data) {
        $(data).find("zaznam").each(function () {
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
            comboChartTraceA.x = dataPointsYear
            comboChartTraceA.y = dataPointsA
            comboChartTraceA.text = dataPointsA.map(String)

            comboChartTraceB.x = dataPointsYear
            comboChartTraceB.y = dataPointsB
            comboChartTraceB.text = dataPointsB.map(String)

            comboChartTraceC.x = dataPointsYear
            comboChartTraceC.y = dataPointsC
            comboChartTraceC.text = dataPointsC.map(String)

            comboChartTraceD.x = dataPointsYear
            comboChartTraceD.y = dataPointsD
            comboChartTraceD.text = dataPointsD.map(String)

            comboChartTraceE.x = dataPointsYear
            comboChartTraceE.y = dataPointsE
            comboChartTraceE.text = dataPointsE.map(String)

            comboChartTraceFx.x = dataPointsYear
            comboChartTraceFx.y = dataPointsFX
            comboChartTraceFx.text = dataPointsFX.map(String)

            comboChartTraceFn.x = dataPointsYear
            comboChartTraceFn.y = dataPointsFN
            comboChartTraceFn.text = dataPointsFN.map(String)

            let comboChartData = [comboChartTraceA, comboChartTraceB, comboChartTraceC, comboChartTraceD, comboChartTraceE, comboChartTraceFx, comboChartTraceFn]
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
                    title: dataPointsYear[i]
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