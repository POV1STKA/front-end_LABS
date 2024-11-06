function validateForm() {
    const inputs = document.querySelectorAll("input[type='text']");
    inputs.forEach(input => input.classList.remove("error"));
    document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

    const name = document.getElementById("name").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const address = document.getElementById("address").value.trim();
    const email = document.getElementById("email").value.trim();
    const telegram = document.getElementById("telegram").value.trim();

    const namePattern = /^[А-ЯІЇЄҐа-яіїєґ]+\s[А-ЯІЇЄҐа-яіїєґ]\.[А-ЯІЇЄҐа-яіїєґ]\.$/;
    const dobPattern = /^\d{2}\.\d{2}\.\d{4}$/;
    const addressPattern = /^м\.\s[А-ЯІЇЄҐа-яіїєґ]+$/;
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,10}$/;
    const telegramPattern = /^@[\w_]{2,15}$/;

    let isValid = true;

    if (!namePattern.test(name)) {
        document.getElementById("name").classList.add("error");
        document.getElementById("nameError").textContent = "Неправильний формат ПІБ.";
        isValid = false;
    }
    if (!dobPattern.test(dob)) {
        document.getElementById("dob").classList.add("error");
        document.getElementById("dobError").textContent = "Неправильний формат дати народження.";
        isValid = false;
    } else {
        const [day, month, year] = dob.split('.').map(Number);
        const date = new Date(year, month - 1, day); 
        if (
            date.getFullYear() !== year ||
            date.getMonth() + 1 !== month ||
            date.getDate() !== day ||
            year < 1900
        ) {
            document.getElementById("dob").classList.add("error");
            document.getElementById("dobError").textContent = "Неправильна або неможлива дата народження.";
            isValid = false;
        }
    }
    if (!addressPattern.test(address)) {
        document.getElementById("address").classList.add("error");
        document.getElementById("addressError").textContent = "Неправильний формат адреси.";
        isValid = false;
    }
    if (!emailPattern.test(email)) {
        document.getElementById("email").classList.add("error");
        document.getElementById("emailError").textContent = "Неправильний формат e-mail.";
        isValid = false;
    }
    if (!telegramPattern.test(telegram)) {
        document.getElementById("telegram").classList.add("error");
        document.getElementById("telegramError").textContent = "Неправильний формат Telegram.";
        isValid = false;
    }

    if (isValid) {
        const resultContainer = document.getElementById("resultContainer");
        resultContainer.innerHTML = `
            <strong>Введена інформація:</strong><br>
            <p>ПІБ: ${name}</p>
            <p>Дата народження: ${dob}</p>
            <p>Адреса: ${address}</p>
            <p>E-mail: ${email}</p>
            <p>Telegram: ${telegram}</p>
        `;
        resultContainer.style.display = "block";
    } else {
        document.getElementById("resultContainer").style.display = "none";
    }
}


function createTable() {
    const table = document.getElementById("colorTable");
    let cellNumber = 1;
    for (let i = 0; i < 6; i++) {
        const row = table.insertRow();
        for (let j = 0; j < 6; j++) {
            const cell = row.insertCell();
            cell.textContent = cellNumber++;
            cell.addEventListener("mouseover", randomColorOnHover);
            cell.addEventListener("click", setColorOnClick);
            cell.addEventListener("dblclick", setRectangleColor);
        }
    }
}

function randomColorOnHover(event) {
    event.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
}

function setColorOnClick(event) {
    const color = document.getElementById("colorPicker").value;
    event.target.style.backgroundColor = color;
}

function setRectangleColor(event) {
    const startRow = event.target.parentNode.rowIndex;
    const startCell = event.target.cellIndex;
    const table = document.getElementById("colorTable");
    const color = document.getElementById("colorPicker").value;

    j = startCell;
    for (let i = startRow; i < 6; i++) {
        while (j<6){
            table.rows[i].cells[j].style.backgroundColor = color;
            j++
        }
        j = 0;
    }
}

document.addEventListener("DOMContentLoaded", createTable);
