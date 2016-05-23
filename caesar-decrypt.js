"use stric";
var decrypt = function (text, shift) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var currCharCode = text.charAt(i).charCodeAt(0);
        
        var shiftedCharCode = parseInt(currCharCode) - parseInt(shift);
        
        var shiftedChar = String.fromCharCode(shiftedCharCode);
        result += shiftedChar;
    }
    return result;
}

var caesardec =  function () {
    var text = document.getElementById("ct2d").value;
    var shift = document.getElementById("caesar-shift").value;
    
    
    var result = decrypt(text, shift);
    document.getElementById("t2e").value = result;
    
};