function Generatecolor() {
    var hex = ""
    var hexColor = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F",]
    for (var i = 0; i < 6; i++) {

        var randomNumber = Math.floor(Math.random() * hexColor.length);
        console.log(randomNumber);
        hex += hexColor[randomNumber]
    }
    var codeHex = "#" + hex
    console.log(codeHex)
    document.body.style.backgroundColor = codeHex
    return codeHex;
}
function showColor(){
    var color = Generatecolor()
document.getElementById("color").innerHTML = color
}

