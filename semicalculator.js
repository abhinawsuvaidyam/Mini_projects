let display = document.getElementById("display");
let string = '';
let buttons = document.querySelectorAll("button");
let buttonsarray = Array.from(buttons);

function evaluatePercentage(expression) {
    return expression.replace(/(\d+(?:\.\d+)?)\s*([-+*/])\s*(\d+(?:\.\d+)?)%/g, (match, num1, operator, percent) => {
        return `${num1}${operator}(${num1}*${percent}/100)`;
    });
}

buttonsarray.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const data = e.target.innerHTML;

        if (data === "DEL") {
            string = string.slice(0, -1);
        } else if (data === "AC") {
            string = 'empty';
            display.value = string;
            string = '';
        } else if (data === "=") {
            if (string === "420") {
                display.value = "You are 420";
            } else {
                try {
                    let parsed = evaluatePercentage(string);
                    string = eval(parsed);
                    display.value = string;
                } catch {
                    display.value = "Error";
                }
            }
        } else {
            string += data;
        }

        display.value = string;
    });
});
