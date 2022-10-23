
function show10Divs() {
    document.getElementById("txtResult4").innerHTML = showNDivs(10);
}

function showNDivs(number) {
    var strResult = "";
    for (var index = 1; index <= number; index++) {
        if(index % 2 ==1){
            strResult += "<div class=\"bg-primary text-white  p-2\">Div lẻ </div>";
        }
        else {
            strResult += "<div class=\"bg-danger text-white  p-2\">Div chẵn </div>";
        }
    }
    return strResult;
}