let rightAmogX = 0
let rightAmogY = 0
let leftAmogX = 0
let leftAmogY = 0

document.onmousemove = function (e) {
    const dxLeft = e.pageX - leftAmogX;
    const dyLeft = e.pageY - leftAmogY;
    const thetaLeft = Math.atan2(dyLeft, dxLeft);

    const dxRight = e.pageX - rightAmogX;
    const dyRight = e.pageY - rightAmogY;
    const thetaRight = Math.atan2(dyRight, dxRight);
    document.getElementById("leftAmog").style.transform = "rotate(" + thetaLeft * (180 / Math.PI) + "deg)"
    document.getElementById("rightAmog").style.transform = "rotate(" + thetaRight * (180 / Math.PI) + "deg) scaleY(-1)"
    document.getElementById("rightAmog").style.webkitTransform = "rotate(" + thetaRight * (180 / Math.PI) + "deg) scaleY(-1)"

};

window.onload = window.onresize = function () {
    const leftAmogRect = document.getElementById("leftAmog").getBoundingClientRect()
    leftAmogY = leftAmogRect.top + leftAmogRect.height/2
    leftAmogX = leftAmogRect.left + leftAmogRect.width/2

    const rigthAmogRect = document.getElementById("rightAmog").getBoundingClientRect()
    rightAmogY = rigthAmogRect.top + rigthAmogRect.height/2
    rightAmogX = rigthAmogRect.left + rigthAmogRect.width/2
}