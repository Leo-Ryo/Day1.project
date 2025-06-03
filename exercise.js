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

document.getElementById("1").addEventListener("click",() => { 
    document.getElementById("mycal").value +="1";});
document.getElementById("2").addEventListener("click",() => {
    document.getElementById("mycal").value +="2";});
document.getElementById("3").addEventListener("click",() => {
    document.getElementById("mycal").value +="3";});
document.getElementById("4").addEventListener("click",() => {
    document.getElementById("mycal").value +="4";});
document.getElementById("5").addEventListener("click",() => {
    document.getElementById("mycal").value +="5";});
document.getElementById("6").addEventListener("click",() => {
    document.getElementById("mycal").value +="6";});
document.getElementById("7").addEventListener("click",() => {
    document.getElementById("mycal").value +="7";});
document.getElementById("8").addEventListener("click",() => {
    document.getElementById("mycal").value +="8";});
document.getElementById("9").addEventListener("click",() => {
    document.getElementById("mycal").value +="9";});
document.getElementById("0").addEventListener("click",() => {
    document.getElementById("mycal").value +="0";});
document.getElementById("plus").addEventListener("click",() => {
    document.getElementById("mycal").value +="+";});
document.getElementById("minus").addEventListener("click",() => {
    document.getElementById("mycal").value +="-";});
document.getElementById("multiply").addEventListener("click",() => {
    document.getElementById("mycal").value +="*";});
document.getElementById("divide").addEventListener("click",() => {
    document.getElementById("mycal").value +="/";});
document.getElementById("clear").addEventListener("click",() => {
    document.getElementById("mycal").value = "";
    sum = 0;
});
document.getElementById("space").addEventListener("click",() => {
    document.getElementById("mycal").value +=" ";});

document.getElementById("mybutton").onclick = calculate;

window.addEventListener("keydown", function(e) {
    console.log(e.code)
    if (e.code === "Enter") {
        calculate();
    }
})