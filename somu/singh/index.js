function clock(){
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let second = document.getElementById("second");
    let peroid = document.getElementById("peroid");
     
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    if(h>12){
        h =h-12 
    }
    h = (h < 10) ? "0"+h : h;
    m = (m < 10) ? "0"+m : m;
    s = (s < 10) ? "0"+s : s;

    let ampm = h >= 12 ? "PM" : "AM";

    hours.innerHTML=h;
    minutes.innerHTML=m;
    second.innerHTML=s;
    peroid.innerHTML=ampm;
}
setInterval(clock,1000)