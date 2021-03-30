let secondhand = document.querySelector(".second-hand");
let minhand = document.querySelector(".min-hand")
let hourhand = document.querySelector(".hour-hand")



function time() {
    let date = new Date();
    let seconds = date.getSeconds();
    console.log(seconds)
    let secdegree = (seconds / 60 * 360);
    secondhand.style.transform = `rotate(${secdegree}deg)`
    let min = date.getMinutes();
    let mindegree = (min / 60 * 360);
    minhand.style.transform = `rotate(${mindegree}deg)`
    let hour = date.getHours();
    let hourdeg = (hour / 12 * 360);
    hourhand.style.transform = `rotate(${hourdeg}deg)`
}
setInterval(time, 1000);
time();