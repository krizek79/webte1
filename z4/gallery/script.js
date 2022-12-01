const imagesContainer = document.getElementById("imagesContainer")
const images = null

function fetchData () {
    fetch("./data.json")
        .then(response => {
            return response.json()
        })
        .then(data => {
            this.images = data
        })
        .catch(error => {
            console.log(error)
        })
}

function init () {

}