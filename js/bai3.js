
function tinhGiaiThua() {
    var n = parseInt(document.getElementById("inputN3").value);
    var result = giaiThua(n);
    document.getElementById("txtResult3").innerHTML = "Giai thừa: " + result;
}

function giaiThua(n) {
    var result = 1;
    for (let index = 1; index <= n; index++) {
        result *= index;
    }
    return result;
}