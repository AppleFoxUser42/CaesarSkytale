"use strict";

let sencrypt = function(text, rows){
    //var rows = 4;
    let WLENGTH = text.length;
    let target = "";
    for(var j=0;j<=rows;j++){
        for(var i=0;i<WLENGTH;i++){
            if(i % rows == j){
                target += text[i];
            }
        }
    }
    
    return target;
};

let skytaleenc = function () {
    let text = document.getElementById("t2e").value;
    let shift = document.getElementById("skytale-shift").value;
    let result = sencrypt(text, shift);
    document.getElementById("st2d").value = result;
};