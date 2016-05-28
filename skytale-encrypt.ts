let encrypt = function(text: string, shift: number){
    let result;
for(var i=0;i<shift;i++){
    for(var j=i;j<text.length;j+=shift){
        if(text[j]===undefined) break;
        result += text[j];
    }
}
    return result;
}

let skytaleenc =  function () {
    let text: any = document.getElementById("t2e").innerHTML;
    let shift: any = document.getElementById("caesar-shift").innerHTML
    
    
    
    let result: any = encrypt(text, shift);
    document.getElementById("ct2d").innerHTML = result;
    
};