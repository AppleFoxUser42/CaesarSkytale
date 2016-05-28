var sencrypt = function (text, rows) {
    var result = [];
    
    var charsInRow = Math.ceil(text.length / rows);
            for (var i = 0; i < charsInRow; i++) {
                for (var j = i; true; j += charsInRow) {
                    if (text[j] === undefined) {
                        break;
                    } else {
                        result += text[j];
                    }
                }
            }
    console.log(JSON.stringify(result));
    return result;
};
var skytaleenc = function () {
    var text = document.getElementById("t2e").value;
    var shift = document.getElementById("skytale-shift").value;
    var result = sencrypt(text, shift);
    document.getElementById("st2d").value = result;
};

var sdecrypt = function (text, shift) {
    for(var i=0;i<text.length;i++){
        
    }
}