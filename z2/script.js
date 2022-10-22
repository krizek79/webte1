const ambulances = {
    "Bratislavský kraj": [
        "Bratislava I",
        "Bratislava II",
        "Senec",
    ],
    "Trnavský kraj": [
        "Dunajská Streda",
        "Galanta",
        "Hlohovec",
    ],
    "Nitriansky kraj": [
        "Nitra",
        "Komárno",
        "Šaľa",
    ],
    "Trenčiansky kraj": [
        "Trenčín",
        "Púchov",
        "Prievidza",
    ],
    "Žilinský kraj": [
        "Žilina",
        "Dolný Kubín",
        "Ružomberok",
    ],
    "Banskobystrický kraj": [
        "Banská Bystrica",
        "Brezno",
        "Žiar nad Hronom"
    ],
    "Prešovský kraj": [
        "Prešov",
        "Sabinov",
        "Bardejov"
    ],
    "Košiscký kraj": [
        "Košice I",
        "Košice IV",
        "Trebišov"
    ]
}

function validateFirstName() {
    let firstName = document.getElementById("firstName")
    let error = document.getElementById("firstNameError")

    if (firstName.value.length === 0) {
        firstName.style.border = "2px solid red"
        error.style.color = "red"
        error.innerHTML = "Pole Meno nesmie byť prázdne!"
        return
    }

    firstName.style.border = "2px solid green"
    error.style.color = "green"
    error.innerHTML = "<i class='errorOk'>OK</i>"
}

function validateLastName() {
    let lastName = document.getElementById("lastName")
    let error = document.getElementById("lastNameError")

    if (lastName.value.length === 0) {
        lastName.style.border = "2px solid red"
        error.style.color = "red"
        error.innerHTML = "Pole Priezvisko nesmie byť prázdne!"
        return
    }

    lastName.style.border = "2px solid green"
    error.style.color = "green"
    error.innerHTML = "<i class='errorOk'>OK</i>"
}

function validateEmail() {
    let email = document.getElementById("email")
    let error = document.getElementById("emailError")
    let regex = /^[^\s@]{3,}@[^\s@]+\.[^\s@]{2,4}$/

    if (email.value.length === 0) {
        email.style.border = "2px solid red"
        error.style.color = "red"
        error.innerHTML = "Pole E-mail nesmie byť prázdne!"
        return
    }
    if (!email.value.match(regex)) {
        email.style.border = "2px solid red"
        error.style.color = "red"
        error.innerHTML = "Pole E-mail nesplňuje požadovaný formát!"
        return
    }

    email.style.border = "2px solid green"
    error.style.color = "green"
    error.innerHTML = "<i class='errorOk'>OK</i>"
}

function validatePhoneNumber() {
    let phoneNumber = document.getElementById("phoneNumber")
    let error = document.getElementById("phoneNumberError")
    let regex = /^\+421[0-9]{9}$/

    if(!phoneNumber.value.match(regex)) {
        phoneNumber.style.border = "2px solid red"
        error.style.color = "red"
        error.innerHTML = "Nesplnený formát +421*********"
        return
    }

    phoneNumber.style.border = "2px solid green"
    error.style.color = "green"
    error.innerHTML = "<i class='ok'>OK</i>";
}

function calculateAndSetAge() {
    let currentDate = Date.now()
    let birthDateElement = document.getElementById("birthDate")
    let birthDate = new Date(birthDateElement.value)
    let age = document.getElementById("age")
    let DateError = document.getElementById("birthDateError")
    let ageError = document.getElementById("ageError")

    if (birthDateElement.value === null || birthDateElement.value === "") {
        birthDateElement.style.border = "2px solid red"
        DateError.style.color = "red"
        DateError.innerHTML = "Pole Dátum narodenia nesmie byť prázdne!"
        return
    }

    age.value = Math.floor((currentDate - birthDate) / 31_557_600_000)
    age.style.border = "2px solid green"
    ageError.style.color = "green"
    ageError.innerHTML = "<i class='ok'>OK</i>";

    birthDateElement.style.border = "2px solid green"
    DateError.style.color = "green"
    DateError.innerHTML = "<i class='ok'>OK</i>";
}

function validateAge() {
    let currentDate = Date.now()
    let birthDateElement = document.getElementById("birthDate")
    let birthDate = new Date(birthDateElement.value)
    let age = document.getElementById("age")
    let ageError = document.getElementById("ageError")
    let ageFromBirthDate = Math.floor((currentDate - birthDate) / 31_557_600_000)

    if (age.value === null) {
        age.style.border = "2px solid red"
        ageError.style.color = "red"
        ageError.innerHTML = "Pole Vek nesmie byť prázdne!"
        return
    }

    if (Number(age.value) < 0) {
        age.style.border = "2px solid red"
        ageError.style.color = "red"
        ageError.innerHTML = "Vek musí byť kladné číslo!"
        return
    }

    if (Number(age.value) !== ageFromBirthDate) {
        age.style.border = "2px solid red"
        ageError.style.color = "red"
        ageError.innerHTML = "Vek nesedí s dátumom narodenia!"
        return
    }

    age.style.border = "2px solid green"
    ageError.style.color = "green"
    ageError.innerHTML = "<i class='ok'>OK</i>";
}

