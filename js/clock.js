
let userName = prompt ("Adınız Nedir?")
let myName = document.querySelector("#myName")
myName.innerHTML = `${userName}`

function showTime () {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s
    const weekday = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let d = weekday[today.getDay()];
    let myClock = document.querySelector ("#myClock")
    myClock.innerHTML = `${h}:${m}:${s} - ${d}`
}

setInterval(showTime, 1000)






