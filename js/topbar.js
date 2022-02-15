function drawArrow(angle) {
    ctx.clearRect(0, 0, cv.width, cv.height);
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(-Math.PI / 2);  // correction for image starting position
    ctx.rotate(angle);
    ctx.drawImage(arrow, -arrow.width / 2, -arrow.height / 2);
    ctx.restore();
}

document.onmousemove = function(e) {
    var dx = e.pageX - centerX;
    var dy = e.pageY - centerY;
    var theta = Math.atan2(dy, dx);
    drawArrow(theta);

    document.getElementById("spinImage").style.rotate =
};