const barberShops = {
    "Bratislavský kraj": {
        "Bratislava I": ["Rado", "Julka", "Paťo", "Je mi to jedno"],
        "Bratislava IV": ["Mišo", "Aďa", "Klement", "Je mi to jedno"],
        "Senec": ["Fero", "Andrej", "Je mi to jedno"],
    },
    "Nitriansky kraj": {
        "Nitra": ["Milan", "Žofka", "Ala", "Je mi to jedno"],
        "Komárno": ["Atila", "Maťka", "Je mi to jedno"],
        "Šaľa": ["Ambróz", "Dávid", "Je mi to jedno"],
    },
    "Banskobystrický kraj": {
        "Banská Bystrica": ["Romča", "Sisa", "Matúš", "Samo", "Je mi to jedno"],
        "Brezno": ["Majo", "Zoltán", "Je mi to jedno"],
        "Žiar nad Hronom": ["Evka", "Rišo", "Je mi to jedno"]
    },
    "Košický kraj": {
        "Košice I": ["Adela", "Jano", "Ďuro", "Je mi to jedno"],
        "Košice IV": ["Zuzka", "Miška", "Je mi to jedno"],
        "Trebišov": ["Oľga", "Igor", "Je mi to jedno"]
    }
}

function validateFirstName() {
    let firstName = document.getElementById("firstName")
    let error = document.getElementById("firstNameError")

    if (firstName.value.length === 0) {
        firstName.style.border = "2px solid red"
        error.style.color = "red"
        error.innerHTML = "Pole Meno nesmie byť prázdne!"
        return false
    }

    firstName.style.border = "2px solid green"
    error.style.color = "green"
    error.innerHTML = "<i class='errorOk'>OK</i>"
    return true
}

function validateLastName() {
    let lastName = document.getElementById("lastName")
    let error = document.getElementById("lastNameError")

    if (lastName.value.length === 0) {
        lastName.style.border = "2px solid red"
        error.style.color = "red"
        error.innerHTML = "Pole Priezvisko nesmie byť prázdne!"
        return false
    }

    lastName.style.border = "2px solid green"
    error.style.color = "green"
    error.innerHTML = "<i class='errorOk'>OK</i>"
    return true
}

function validateEmail() {
    let email = document.getElementById("email")
    let error = document.getElementById("emailError")
    let regex = /^[^\s@]{3,}@[^\s@]+\.[^\s@]{2,4}$/

    if (email.value.length === 0) {
        email.style.border = "2px solid red"
        error.style.color = "red"
        error.innerHTML = "Pole E-mail nesmie byť prázdne!"
        return false
    }
    if (!email.value.match(regex)) {
        email.style.border = "2px solid red"
        error.style.color = "red"
        error.innerHTML = "Pole E-mail nesplňuje požadovaný formát!"
        return false
    }

    email.style.border = "2px solid green"
    error.style.color = "green"
    error.innerHTML = "<i class='errorOk'>OK</i>"
    return true
}

function validatePhoneNumber() {
    let phoneNumber = document.getElementById("phoneNumber")
    let error = document.getElementById("phoneNumberError")
    let regex = /^\+421[0-9]{9}$/

    if(!phoneNumber.value.match(regex)) {
        phoneNumber.style.border = "2px solid red"
        error.style.color = "red"
        error.innerHTML = "Nesplnený formát +421*********"
        return false
    }

    phoneNumber.style.border = "2px solid green"
    error.style.color = "green"
    error.innerHTML = "<i class='ok'>OK</i>"
    return true
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
    ageError.innerHTML = "<i class='ok'>OK</i>"

    birthDateElement.style.border = "2px solid green"
    DateError.style.color = "green"
    DateError.innerHTML = "<i class='ok'>OK</i>"
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
        return false
    }

    if (Number(age.value) < 0) {
        age.style.border = "2px solid red"
        ageError.style.color = "red"
        ageError.innerHTML = "Vek musí byť kladné číslo!"
        return false
    }

    if (Number(age.value) !== ageFromBirthDate) {
        age.style.border = "2px solid red"
        ageError.style.color = "red"
        ageError.innerHTML = "Vek nesedí s dátumom narodenia!"
        return false
    }

    age.style.border = "2px solid green"
    ageError.style.color = "green"
    ageError.innerHTML = "<i class='ok'>OK</i>"
    return true
}

function generateSpecialService() {
    let specialServiceDiv = document.getElementById("specialServiceDiv")
    let specialServiceLabel = document.getElementById("specialServiceLabel")
    let sexMale = document.getElementById("sexMale")
    let sexFemale = document.getElementById("sexFemale")

    if (sexMale.checked) {
        specialServiceDiv.style.display = "flex"
        specialServiceLabel.innerHTML = "Prajete si aj extra úpravu brady? (+ 10 €)"
    }
    if (sexFemale.checked) {
        specialServiceDiv.style.display = "flex"
        specialServiceLabel.innerHTML = "Prajete si aj extra úpravu obočia? (+ 10 €)"
    }
}

function validateAppointmentDate() {
    let appointmentDate = document.getElementById("appointmentDate")
    let appointmentDateError = document.getElementById("appointmentDateError")

    if (appointmentDate.value === null || appointmentDate.value === "") {
        appointmentDate.style.border = "2px solid red"
        appointmentDateError.style.color = "red"
        appointmentDateError.innerHTML = "Pole Dátum stretnutia nesmie byť prázdne!"
        return false
    }

    appointmentDate.style.border = "2px solid green"
    appointmentDateError.style.color = "green"
    appointmentDateError.innerHTML = "<i class='ok'>OK</i>"
    return true
}

function validateAppointmentTime() {
    let appointmentTime = document.getElementById("appointmentTime")
    let appointmentTimeError = document.getElementById("appointmentTimeError")

    if (appointmentTime.value === null || appointmentTime.value === "") {
        appointmentTime.style.border = "2px solid red"
        appointmentTimeError.style.color = "red"
        appointmentTimeError.innerHTML = "Pole Čas stretnutia nesmie byť prázdne!"
        return false
    }

    appointmentTime.style.border = "2px solid green"
    appointmentTimeError.style.color = "green"
    appointmentTimeError.innerHTML = "<i class='ok'>OK</i>"
    return true
}

window.onload = function () {
    let regions = document.getElementById("regionSelect")
    let districts = document.getElementById("districtSelect")
    let workers = document.getElementById("workerSelect")
    for (let region in barberShops) {
        regions.options[regions.options.length] = new Option(region, region)
    }

    regions.onchange = function () {
        districts.length = 1
        workers.length = 1
        for (let district in barberShops[this.value]) {
            districts.options[districts.options.length] = new Option(district, district)
        }
    }

    districts.onchange = function () {
        workers.length = 1
        let workerElement = barberShops[regions.value][this.value];
        for (let i = 0; i < workerElement.length; i++) {
            workers.options[workers.options.length] = new Option(workerElement[i], workerElement[i])
        }
    }

    showBarbershopsOptions()
}

function showBarbershopsOptions() {
    let regions = document.getElementById("regionSelect")
    let districts = document.getElementById("districtSelect")
    let districtLabel = document.getElementById("district")
    let workersLabel = document.getElementById("worker")

    if (regions.value === "---") {
        districtLabel.style.display = "none"
        workersLabel.style.display = "none"
        districts.value = "---"
    } else {
        districtLabel.style.display = "block"
    }
    if (districts.value === "---") {
        workersLabel.style.display = "none"
    } else {
        workersLabel.style.display = "block"
    }
}

function showNoteTextArea() {
    let checkbox = document.getElementById("note")
    let textAreaDiv = document.getElementById("noteTextAreaDiv")

    if (checkbox.checked) {
        textAreaDiv.style.display = "block"
    } else {
        textAreaDiv.style.display = "none"
    }
}

const noteTextArea = document.getElementById("noteTextArea")
const letterCounter = document.getElementById("letterCounter")
noteTextArea.addEventListener("input", event => {
    const target = event.currentTarget;
    const maxLength = target.getAttribute("maxlength");

    letterCounter.style.fontSize = "smaller"
    letterCounter.innerHTML = target.value.length + "/" + maxLength
});