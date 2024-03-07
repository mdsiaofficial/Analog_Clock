let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime(){

    let date = new Date();

    // getting hours mins and secs from date

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let h_rotate = ((30*hh) + (mm/2));
    let m_rotate = 6*mm;
    let s_rotate = 6*ss;

    hour.style.transform = `rotate(${h_rotate}deg)`;
    min.style.transform = `rotate(${m_rotate}deg)`;
    sec.style.transform = `rotate(${s_rotate}deg)`;
}

setInterval(displayTime, 1000);