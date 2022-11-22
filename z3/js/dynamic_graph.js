const chartDiv = document.getElementById("chart")

let xData = []
let xDataOld = []
let y1Data = []
let y1DataOld = []
let y2Data = []
let y2DataOld = []

let traceSin = {
    x: null,
    y: null,
    type: "scatter",
    name: "Sínus"
}
let traceCos = {
    x: null,
    y: null,
    type: "scatter",
    name: "Cosínus"
}
let layout = {
    title: "Graf zašumeného sínusu a cosínusu"
}
let config = {
    responsive: true
}

let drawingTerminated = false

document.addEventListener("DOMContentLoaded", () => fetchData())
document.querySelector("#drawBtn").disabled = true

function fetchData () {
    let source = new EventSource("http://old.iolab.sk/evaluation/sse/sse.php")
    source.addEventListener("message", e => {
        let data = JSON.parse(e.data)
        console.log(data)

        xData.push(data.x)
        y1Data.push(data.y1)
        y2Data.push(data.y2)

        if (!drawingTerminated) {
            drawChart(xData, y1Data, y2Data)
        }
    })
}

//  called from html
function drawChartFromOriginalData () {
    drawingTerminated = false
    drawChart(xData, y1Data, y2Data)
    document.querySelector("#drawBtn").disabled = true
}

function drawChart (xData, y1Data, y2Data) {
    traceSin.x = xData
    traceSin.y = y1Data
    traceCos.x = xData
    traceCos.y = y2Data

    Plotly.newPlot(chartDiv, [traceSin, traceCos], layout, config)
    document.querySelector("#terminateBtn").disabled = false
}

function terminate () {
    drawingTerminated = true

    xDataOld = xData
    y1DataOld = y1Data
    y2DataOld = y2Data

    traceSin.x = xDataOld
    traceSin.y = y1DataOld
    traceCos.x = xDataOld
    traceCos.y = y2DataOld

    Plotly.purge(chartDiv)
    Plotly.newPlot(chartDiv, [traceSin, traceCos], layout, config)
    Plotly.relayout(chartDiv, {
        'xaxis.autorange': true,
        'yaxis.autorange': true
    });

    document.querySelector("#terminateBtn").disabled = true
    document.querySelector("#drawBtn").disabled = false
}