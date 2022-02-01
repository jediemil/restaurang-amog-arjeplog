const width = 7
const height = 5
const max = 31

for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        const day = ((x + (y * width)) + 1)
        let element = document.createElement("button");
        element.innerText = "Mars " + day
        document.getElementById("timeTable").insertBefore(element, document.getElementById("placeholder"));
        console.log(element)
        element.onclick = function () {
            
        }

        if (day >= max) {
            break
        }
    }
}

document.getElementById("back").style.display = "none"

document.getElementById("placeholder").remove()