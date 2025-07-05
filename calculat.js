let display = document.getElementById("display");
let string = '';
let buttons = document.querySelectorAll("button");
let buttonsarray = Array.from(buttons);


buttonsarray.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const data = e.target.innerHTML;
        if (data == "DEL") {
            string = string.substring(0, string.length - 1)
            display.value = string;
        } else if (data == "AC") {
            string = 'empty';
            display.value = string;
            string='';
        } else if (data == "=") {
            if (string == "420") {
                display.value = "You are 420"
            } else {
                try{string = eval(string);
                display.value = string;}
                catch{
                    display.value="Error";
                    
                }
            }
        } else {
            string += data;
            display.value = string;

        }
    });

});

