const width = 10
const height = 3

for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        let element = document.createElement("button");
        element.innerText = "Hej"
        element.classList.add("timeButton")
        document.getElementById("timeTable").insertBefore(element, document.getElementById("placeholder"));
        console.log(element)
    }
}

document.getElementById("placeholder").remove()