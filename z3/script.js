const mainContainer = document.getElementById("mainContainer")
const mainHeader = document.getElementById("mainHeader")

const navigate = (number) => {
    if (number === 1) {
        //  Change header
        mainHeader.innerHTML = "Akademické výsledky"

        // Fetch data from XML
        let xml = fetchDataFromXML()
    }
    if (number === 2) {
        //  Change header
        mainHeader.innerHTML = "Sínusoida"
    }
}

const fetchDataFromXML = () => {
    let request = new XMLHttpRequest()
    request.open("GET", "z03.xml", false)
    request.send()
    return request.responseXML
}