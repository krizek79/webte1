// https://www.digitalocean.com/community/tutorials/js-drag-and-drop-vanilla-js

const mainContainer = document.getElementById("mainContainer")
mainContainer.style.display = "flex"
mainContainer.style.flexWrap = "wrap"
mainContainer.style.margin = "auto"
mainContainer.style.justifyContent = "center"
const dropBox = document.getElementById("dropBox")
dropBox.style.margin = "200px auto"
dropBox.style.display = "flex"
dropBox.style.width = "300px"
dropBox.style.height = "150px"
dropBox.style.border = "2px solid red"
dropBox.style.borderRadius = "10px"
dropBox.style.background = "indianred"
dropBox.style.alignItems = "center"
dropBox.style.justifyContent = "center"
dropBox.style.fontSize = "large"
dropBox.style.fontWeight = "bold"

let quotes = []

window.addEventListener("load", () => fetchData())

function init () {
    console.log(quotes.quotes[0])
    for (let i = 0; i < 5; i++) {
        let quoteBox = document.createElement("quote-box")
        quoteBox.setAttribute("author", quotes.quotes[i].author)
        quoteBox.setAttribute("quote", quotes.quotes[i].text)
        mainContainer.appendChild(quoteBox)
    }
}

function fetchData () {
    fetch("./data.json")
        .then(response => {
            return response.json()
        }).then(json => {
            quotes = json
            init()
        }).catch(error => {
            console.log(error)
        })
}