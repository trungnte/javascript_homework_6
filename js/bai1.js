
function findMinInteger() {
    var result = findNumber(10000);
    document.getElementById("txtKetQua1").innerHTML = "Số nguyên dương nhỏ nhất: " + result;
}

function findNumber(minSum) {
    var total = 0;
    var idx = 1;
    while (total <= minSum) {
        total += idx++;
    }
    return (idx - 1);
}

findMinInteger();