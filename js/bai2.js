
function calculate() {
    var x = parseInt(document.getElementById("inputX").value);
    var n = parseInt(document.getElementById("inputN").value);
    var result = sum(x, n);
    // console.log(result);
    document.getElementById("txtResult2").innerHTML = "Tổng: " + result;
}

function sum(x, n) {
    var total = 0;
    for (var index = 1; index <= n; index++) {
        total += Math.pow(x, index);
        // console.log("i:" + index + ", total:" + total);
    }
    return total;
}