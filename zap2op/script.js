async function fetchData() {
    const response = await fetch("./data.json")
    let data = await response.json()
    employees = data.employees
    generate(data.employees)
}

function generate(data) {
    document.getElementById("counter").innerHTML = "Pocet zamestnancov: " + data.length
    let table = `
        <tr>
		    <th>Name</th>
		    <th>Surname</th>
		    <th>Email</th>
		</tr>
    `

    for (let employee of data) {
        table += `
            <tr>
	            <td>${employee.name} </td>
	            <td>${employee.surname}</td>
	            <td>${employee.email}</td>	
	            <td><button onclick="">Zmazať</button></td>	
            </tr>
        `
    }
    document.getElementById("table").innerHTML = table

    document.getElementById("form").innerHTML = `
        <label for="nameInput">Meno: </label>
        <input type="text" id="nameInput">
        <label for="surnameInput">Priezvisko: </label>
        <input type="text" id="surnameInput">
        <label for="emailInput">Email: </label>
        <input type="email" id="emailInput">
        <button onclick="">Pridať</button>
    `
}
