let caltext;
let sum = 0;
function calculate(){
    caltext = document.getElementById("mycal").value;
    let parts = caltext.split(/(\+|\-|\*|\/)/);
    sum = Number(parts[0]);
    console.log(parts);
    for (let i = 1; i < parts.length; i += 2) {
        if (parts[i] === "+") {
            sum += Number(parts[i + 1]);
        } else if (parts[i] === "-") {
            sum -= Number(parts[i + 1]);
        } else if (parts[i] === "*") {
            sum *= Number(parts[i + 1]);
        } else if (parts[i] === "/") {
            sum /= Number(parts[i + 1]);
        }
    }
    console.log(sum);
}
document.getElementById("mybutton").onclick = calculate;

window.addEventListener("keydown", function(e) {
    console.log(e.code)
    if (e.code === "Enter") {
        calculate();
    }
})