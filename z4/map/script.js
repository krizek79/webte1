const mapDiv = document.getElementById("map")

let imagesData = null
const markers = []
const map = L.map(mapDiv).setView([0, 0], 1)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
map.setView([48.70740, 19.64845], 8)

window.onload = () => {
    init()
}

function init () {
    fetch("../data.json")
        .then(response => {
            return response.json()
        })
        .then(data => {
            imagesData = data
            drawMarkers()
        })
        .catch(error => {
            console.log(error)
        })
}

function drawMarkers () {
    imagesData.forEach(item => {
        let marker = L.marker([item.gps[0], item.gps[1]]).addTo(map)
        markers.push(marker)
    })
}