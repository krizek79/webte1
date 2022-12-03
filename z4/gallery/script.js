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
    for (let index in data) {
        index = Number(index)
        let imageDiv = document.createElement("div")
        imageDiv.className = "col-lg-3 col-md-4 col-sm-6 p-1"
        imageDiv.onclick = () => openModal(index)
        imagesContainer.appendChild(imageDiv)

        let image = document.createElement("img")
        image.className = "img-thumbnail rounded"
        image.src = data[index].path
        image.alt = "Ooops"
        imageDiv.appendChild(image)
    }
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

function openModal (index) {
    let currentImageIndex = index
    let modalBodyArr = []

    let modal = document.createElement("div")
    modal.setAttribute("id", "modal")
    mainSection.appendChild(modal)

    //  Body
    for (let index in imagesData) {
        let modalBodyElements = generateModalBody(index);
        modalBodyArr.push(modalBodyElements)
    }

    //  Overlay
    let overlay = document.createElement("div")
    overlay.setAttribute("id", "overlay")
    document.body.appendChild(overlay)
    overlay.addEventListener("click", () => closeModal(modal, overlay))

    //  Header
    let modalHeader = document.createElement("div")
    modalHeader.setAttribute("id", "modalHeader")
    modal.appendChild(modalHeader)

    let modalNavigation = document.createElement("div")
    modalNavigation.setAttribute("id", "modalNavigation")
    modalHeader.appendChild(modalNavigation)

    let previousBtn = document.createElement("button")
    previousBtn.className = "button"
    previousBtn.innerHTML = "Predošlá"
    previousBtn.onclick = () => {
        changeImage(modalBodyArr, currentImageIndex, -1)
        currentImageIndex = getCurrentImageIndex(currentImageIndex, -1)
    }
    modalNavigation.appendChild(previousBtn)

    let nextBtn = document.createElement("button")
    nextBtn.className = "button"
    nextBtn.innerHTML = "Ďalšia"
    nextBtn.onclick = () => {
        changeImage(modalBodyArr, currentImageIndex, 1)
        currentImageIndex = getCurrentImageIndex(currentImageIndex, 1)
    }
    modalNavigation.appendChild(nextBtn)

    let closeBtn = document.createElement("button")
    closeBtn.setAttribute("id", "closeBtn")
    closeBtn.innerHTML = "&times"
    closeBtn.onclick = () => closeModal(modal, overlay)
    modalHeader.appendChild(closeBtn)

    //  Body
    modalBodyArr.forEach(element => modal.appendChild(element))
    modalBodyArr[currentImageIndex].style.display = "block"

    modal.classList.add('active')
    overlay.classList.add('active')
}

function generateModalBody (currentImageIndex) {
    let modalBody = document.createElement("div")
    modalBody.setAttribute("id", "modalBody")
    modalBody.style.display = "none"

    let modalImageDiv = document.createElement("div")
    modalImageDiv.setAttribute("id", "modalImageDiv")
    modalBody.appendChild(modalImageDiv)

    let modalImage = document.createElement("img")
    modalImage.setAttribute("id", "modalImage")
    modalImage.src = imagesData[currentImageIndex].path
    modalImage.alt = "Ooops"
    modalImageDiv.appendChild(modalImage)

    let modalBodyInfo = document.createElement("div")
    modalBody.appendChild(modalBodyInfo)

    let modalTitle = document.createElement("h4")
    modalTitle.setAttribute("id", "modalTitle")
    modalTitle.innerHTML = imagesData[currentImageIndex].title
    modalBodyInfo.appendChild(modalTitle)

    let modalDescription = document.createElement("p")
    modalDescription.setAttribute("id", "modalDescription")
    modalDescription.innerHTML = imagesData[currentImageIndex].description
    modalBodyInfo.appendChild(modalDescription)

    return modalBody
}

function closeModal (modal, overlay) {
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

function changeImage (modalBodyArr, current, value) {
    modalBodyArr[current].style.display = "none"
    current += value
    if (current < 0) {
        current = imagesData.length - 1
    }
    if (current > (imagesData.length - 1)) {
        current = 0
    }
    modalBodyArr[current].style.display = "block"
}

function getCurrentImageIndex (current, value) {
    current += value
    if (current < 0) {
        current = imagesData.length - 1
    }
    if (current > (imagesData.length - 1)) {
        current = 0
    }
    return current
}