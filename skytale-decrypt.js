"use strict";

let sdecrypt = function(text, shift){
    let WLENGTH = text.length;
    let decrypted = [];
    
    //Help-variable for addressing to be set char.
    let index = 0;
    
    for(var i=0;i<shift;i++){
    for(var j=i;j<WLENGTH;j+=shift){
    if((j<WLENGTH || index<WLENGTH)){
        
       decrypted[j]=text[index];
       //console.log("Writing text["+index+"]="+text[index]+"to decrypted["+j+"]. Resulting in "+decrypted);
       index++;
       }
     else{break;}
    }
    }
    let result = "";
    decrypted.forEach(function(element) {
        result += element;
    }, this);
    return result;
};

let skytaledec = function () {
    let text = document.getElementById("st2d").value;
    let shift = document.getElementById("skytale-shift").value;
    let result = sdecrypt(text, shift);
    console.log(result);
    document.getElementById("t2e").value = result;
};