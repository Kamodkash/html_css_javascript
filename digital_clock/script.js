const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
    let hr = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (hr > 12){
        hr = hr - 12;
        ampm = "PM";
    }

    hr = hr<10 ? "0" + hr : hr;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;
    
    hourEl.innerText = hr;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl, (innerText = ampm);
    setTimeout(()=>{
        updateClock()
    },1000)
}

updateClock();