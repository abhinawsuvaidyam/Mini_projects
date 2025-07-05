let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let string = '';

let buttonsarray = Array.from(buttons);
buttonsarray.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const data = e.target.innerHTML;
        Object.assign(display.style, { color: 'black', backgroundColor: 'white' });
        if (data == "DEL") {
            string = string.substring(0, string.length - 1);
            display.value = string;

        } else if (data == "AC") {
            string = '';
            display.value = string;

        } else if (data == "=") {

            if (string === "143") {
                display.value = "I LOVE YOU"; 
                Object.assign(display.style, { color: 'pink', backgroundColor: 'black' });
            } else {
                try {
                    string = eval(string);
                    display.value = string;
                } catch {
                    display.value = "Error";
                }
            }

        } else {
            string += data;
            display.value = string;
            console.log(data);
        }
    });
});
