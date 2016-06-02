"use strict";
var sdecrypt = function (text, shift) {
    var WLENGTH = text.length;
    var decrypted = [];
    shift = parseInt(shift);
    
    //Help-variable for addressing to be set char.
    var index = 0;
    for (var i = 0; i < shift; i++) {
        for (var j = i; j < WLENGTH; j += shift) {
            if ((j < WLENGTH || index < WLENGTH)) {
                decrypted[j] = text[index];
                console.log("Writing text[" + index + "]=\'" + text[index] + "\' to decrypted[" + j + "]. Resulting in \'" + decrypted + "\'");
                index++;
            }
            else {
                break;
            }
        }
    }
    var result = "";
    decrypted.forEach(function (element) {
        result += element;
    }, this);
    return result;
};
var skytaledec = function () {
    var text = document.getElementById("st2d").value;
    var shift = document.getElementById("skytale-shift").value;
    var result = sdecrypt(text, shift);
    console.log(result);
    document.getElementById("t2e").value = result;
};
