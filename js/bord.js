const width = 7
const height = 5
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
    let element = document.createElement("button");
    element.innerText = "Mars " + day
    document.getElementById("dateTable").insertBefore(element, document.getElementById("placeholder"));
    console.log(element)
    element.onclick = function () {
        console.log("Boka " + day)
        document.getElementById("tablePopup").classList.remove("hidden")
    }
}

document.getElementById("back").style.display = "none"

document.getElementById("placeholder").remove()