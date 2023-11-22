//// canvas
const rcanvas = document.getElementById("fig");
if (rcanvas.getContext) {
    const ctx = rcanvas.getContext("2d");
    ctx.strokeRect(100, 100, 100, 40);
    ctx.fillRect(250, 100, 100, 40);
    ctx.fillRect(100, 150, 100, 40);
    ctx.clearRect(110, 160, 80, 20);
}
