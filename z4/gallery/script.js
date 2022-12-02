const mainSection = document.getElementById("mainSection")
const imagesContainer = document.getElementById("imagesContainer")
const searchBar = document.getElementById("searchBar")

let imagesData = null

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
            createGalleryElements(data)
        })
        .catch(error => {
            console.log(error)
        })
}

function createGalleryElements (data) {
    imagesContainer.replaceChildren()
    data.forEach(item => {
        let imageDiv = document.createElement("div")
        imageDiv.className = "col-lg-3 col-md-4 col-sm-6 p-1"
        imageDiv.onclick = () => openModal(item)
        imagesContainer.appendChild(imageDiv)

        let image = document.createElement("img")
        image.className = "img-thumbnail rounded"
        image.src = item.path
        image.alt = "Ooops"
        imageDiv.appendChild(image)
    })
}

function filterImages () {
    let requestString = searchBar.value.toUpperCase()
    let data = imagesData
    if (requestString.length > 0) {
        data = []
        imagesData.forEach(image => {
            if (image.title.toUpperCase().includes(requestString)
                || image.description.toUpperCase().includes(requestString)
            ) {
                data.push(image)
            }
        })
    }
    createGalleryElements(data)
}

function openModal (item) {
    let imageModal = document.createElement("div")
    imageModal.id = "imageModalDiv"
    imageModal.className = "d-block w-75 p-2 z-index-master bg-dark text-light"
    mainSection.appendChild(imageModal)

    let previousBtn = document.createElement("button")
    previousBtn.innerHTML = "Predošlá"
    imageModal.appendChild(previousBtn)
    let nextBtn = document.createElement("button")
    nextBtn.innerHTML = "Ďalšia"
    imageModal.appendChild(nextBtn)

    let closeBtn = document.createElement("button")
    closeBtn.innerHTML = "Zatvoriť"
    closeBtn.onclick = () => imageModal.className = "d-none"
    imageModal.appendChild(closeBtn)

    let image = document.createElement("image")
    image.src = item.path
    image.alt = "Ooops"
    imageModal.appendChild(image)

    let header = document.createElement("h4")
    header.innerHTML = item.title
    imageModal.appendChild(header)
    let description = document.createElement("p")
    description.innerHTML = item.description
    imageModal.appendChild(description)
}