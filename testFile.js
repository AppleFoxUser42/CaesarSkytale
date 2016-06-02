"use strict";
var sencrypt = function(text, rows){
    var WLENGTH = text.length;
    var target = "";
    for(var j=0;j<=rows;j++){
        for(var i=0;i<WLENGTH;i++){
            if(i % rows == j){
                target += text[i];
                console.log("Writing text["+i+"]=\'"+text[i]+"\' to target=\'"+target+"\'.");
            }
        }
    }
    
    return target;
};

let sdecrypt = function(text, shift){
    let WLENGTH = text.length;
    let decrypted = [];
    
    //Help-variable for addressing to be set char.
    let index = 0;
    
    for(var i=0;i<shift;i++){
    for(var j=i;j<WLENGTH;j+=shift){
    if((j<WLENGTH || index<WLENGTH)){
        
       decrypted[j]=text[index];
       console.log("Writing text["+index+"]=\'"+text[index]+"\' to decrypted["+j+"]. Resulting in \'"+decrypted+"\'");
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

let testString = "Hello Bob";
let testShiftEn = 4;
let testShiftDe = 4;

let encrypted = sencrypt(testString, testShiftEn);
console.log("\""+testString+"\" has been encrypted to \""+encrypted+"\" using shift "+testShiftEn);

let decrypted = sdecrypt(encrypted, testShiftDe);
console.log("\""+encrypted+"\" has been decrypted to \""+decrypted+"\" using shift "+testShiftDe);