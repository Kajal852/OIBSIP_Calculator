let display = document.querySelector("input");
let buttons = document.querySelectorAll("button");
let output = "";

for(let val of buttons) {
    val.addEventListener("click", (e) => {
        if (e.target.innerHTML === "ENTER" || e.target.innerHTML === "ans") {
            output = eval(output.replace("%", "/100"));
            display.value = output;
        } else if (e.target.innerHTML === "±") {
             if (display.value.charAt(0) === "-") {
                 output = output.toString.slice(1);
                 display.value = output;
            } else {
                 output = "-" + display.value;
                 display.value = output
             }
        } else if (e.target.innerHTML === "√") {
            output = Math.sqrt(display.value);
            display.value = output;
        } else if (e.target.innerHTML === "clear") {
            output = "";
            display.value = output;
        } else if (e.target.innerHTML === "del") {
            output = output.toString().slice(0, -1);
            display.value = output;
        } else {
          console.log(e.target);
          output = output + e.target.innerHTML; 
          display.value = output; 
        }
    }); 
}