const date = new Date()
const todayDayNumber = parseInt(String(date.getDate()).padStart(2, '0'))
const todayMonthNumber = parseInt(String(date.getMonth() + 1).padStart(2, '0'))
const dateTable = document.getElementById("dateTable")

let currentMonth = todayMonthNumber - 1

const monthTable = {
    0: "Januari",
    1: "Februari",
    2: "Mars",
    3: "April",
    4: "Maj",
    5: "Juni",
    6: "Juli",
    7: "Augusti",
    8: "September",
    9: "Oktober",
    10: "November",
    11: "December"
}

const monthLength = {
    0: 31,
    1: 28,
    2: 31,
    3: 30,
    4: 31,
    5: 30,
    6: 31,
    7: 31,
    8: 30,
    9: 31,
    10: 30,
    11: 31
}

function updateDates() {
    while (dateTable.firstChild) {
        dateTable.firstChild.remove()
    }
    for (let day = 1; day < monthLength[currentMonth%12] + 1; day++) {
        const element = document.createElement("button");
        let dayLetter = "e"
        if ((day.toString().endsWith("1") || day.toString().endsWith("2")) && (day > 12 || day < 10)) dayLetter = "a"
        element.innerText = day + ":" + dayLetter + " " + monthTable[currentMonth%12]
        if (day < todayDayNumber && todayMonthNumber > currentMonth) {
            element.classList.add("pastDay")
        } else {
            element.onclick = function () {
                console.log("Boka " + day)
                document.getElementById("infoPopupText").innerText = "Välj en tillgänglig tid för din bokning. Vald dag är: " + day + ":" + dayLetter + " " + monthTable[currentMonth%12]
                document.getElementById("tablePopup").classList.remove("hidden")
            }
        }
        dateTable.appendChild(element)
    }
}

document.getElementById("forward").classList.remove("hidden")
document.getElementById("placeholder").remove()

function closePopup() {
    document.getElementById("tablePopup").classList.add("hidden")
}

function changeDate(step) {
    currentMonth += step
    if (currentMonth < todayMonthNumber) {
        document.getElementById("back").classList.add("hidden")
    } else {
        document.getElementById("back").classList.remove("hidden")
    }
    updateDates()
}

updateDates()