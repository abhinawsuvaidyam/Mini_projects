let string='';
let number = document.getElementById("number");
let buttons = document.querySelectorAll("button");
let  isOn = true;
buttons.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    const data = e.target.innerText;
    console.log(btn.innerText);
    
  if (btn.innerText === "ON") {
    btn.disabled = true
    number.value = "";
} else if (data === "DEL") {
      number.value = number.value.slice(0, -1);
    } else if (data === "AC") {
      number.value = "";
    }  else if (data === "=") {
      try {
        number.value = eval(number.value);
      } catch (err) {
        number.value = "Error";
      }
    } else {
      number.value += data;
    }
  });
});


// for (let i = 0; i < buttons.length; i++) {
//     // console.log(buttons[i]);
//     buttons[i].addEventListener("click", function() {
//         console.log("b");
        
//     }) 
// }