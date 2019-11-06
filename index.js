let a = (document.getElementById("inputA"));
let b = (document.getElementById("inputB"));

// document.getElementById("addMe").addEventListener("click", () => {
//     document.getElementById("result").textContent = (Number(a.value) + Number(b.value));
// });

// document.getElementById("subtractMe").addEventListener("click", () => {
//     document.getElementById("result").textContent = (a.value - b.value);
// });

// document.getElementById("divideMe").addEventListener("click", () => {
//     document.getElementById("result").textContent = (a.value / b.value);
// });

// document.getElementById("multiplyMe").addEventListener("click", () => {
//     document.getElementById("result").textContent = (a.value * b.value);
// });

// document.getElementById("modulusMe").addEventListener("click", () => {
//     document.getElementById("result").textContent = (a.value % b.value);
// });

document.getElementById("reset").addEventListener("click", () => {
    a.value = (""),
    b.value = (""),
    document.getElementById("result").textContent = ("");
});

let buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event){
        let sum;
        let btnId = event.target.id;

        switch (btnId) {
            case "addMe":
                    sum = Number(a.value) + Number(b.value);
                    document.getElementById("result").textContent = sum;            
                    break;
            case "subtractMe":
                    sum = a.value - b.value;
                    document.getElementById("result").textContent = sum;            
                    break;
            case "divideMe":
                    sum = a.value / b.value;
                    document.getElementById("result").textContent = sum;            
                    break;
            case "multiplyMe":
                    sum = a.value * b.value;
                    document.getElementById("result").textContent = sum;            
                    break;
            case "modulusMe":
                    sum = a.value % b.value;
                    document.getElementById("result").textContent = sum;            
                    break;
        }
    })
}