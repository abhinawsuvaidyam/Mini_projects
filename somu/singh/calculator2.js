let display = document.getElementById("display")
let buttons = document.querySelectorAll("button");
let buttonsarray = Array.from(buttons);
let string = '';

buttonsarray.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        let data = e.target.innerHTML;
        if (data == "DEL") {
            string = string.substring(0, string.length - 1)
            display.value = string;
        } else if (data == "AC") {
            string = "";
            display.value = string
        } else if (data == "=") {
            string = eval(string);
            display.value = string;

        } else {
            string += data;
            display.value = string;
        }

    })
});

