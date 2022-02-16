const max = 31

let currentMonth = 2

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

for (let day = 1; day < monthLength[currentMonth]+1; day++) {
    const element = document.createElement("button");
    let dayLetter = "e"
    if ((day.toString().endsWith("1") || day.toString().endsWith("2")) && (day > 12 || day < 10)) dayLetter = "a"
    element.innerText = day + ":" + dayLetter + " " + monthTable[currentMonth]
    document.getElementById("dateTable").insertBefore(element, document.getElementById("placeholder"));
    element.onclick = function () {
        console.log("Boka " + day)
        document.getElementById("infoPopupText").innerText = "Välj en tillgänglig tid för din bokning. Vald dag är: " + day + ":" + dayLetter + " " + monthTable[currentMonth]
        document.getElementById("tablePopup").classList.remove("hidden")
    }
}

document.getElementById("forward").classList.remove("hidden")
document.getElementById("back").classList.remove("hidden")

document.getElementById("back").style.display = "none"

document.getElementById("placeholder").remove()

function closePopup() {
    document.getElementById("tablePopup").classList.add("hidden")
}