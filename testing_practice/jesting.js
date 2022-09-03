function capitalize(text){
    let ret = text.charAt(0).toUpperCase() + text.slice(1);
    return ret;
}

function reverseString(text){
    let ret = text.split("").map((letter, i) => {
        return text[text.length-1-i];
    });
    ret = ret.join("");
    return ret;
}
function add(x, y){
    let ret = x+y;
    return ret;
}
function subtract(x, y){
    let ret = x-y;
    return ret;
}
function multiply(x, y){
    let ret = x*y;
    return ret;
}
function divide(x, y){
    let ret = x/y;
    return ret;
}

function caesarChiper(text, i){
    let ret;
    ret = text.split("").map(letter => {
        if((letter >= 'a' && letter <= 'z') || (letter >= 'A' && letter <='Z')){
            let shifted = shift(letter, i);
            return shifted;
        } else{ return letter}
    });
    ret = ret.join("");
    return ret;
}
function shift(letter, i){
    let base;
    if(letter => "a"){
        base = "a".charCodeAt(0);
    } else {
        base = "A".charCodeAr(0);
    }
    let code = letter.charCodeAt(0);
    let ret = String.fromCharCode((code-base+i)%26+base);
    return ret;
}

function analyzer(ar){
    let ret = {};
    let tot = 0;
    ret.length = ar.length;
    ret.min = ar.reduce((min, item) => {
        if(item < min){return item}
        else{return min}
    }, ar[0]);
    ret.max = ar.reduce((max, item) => {
        if(item > max){return item}
        else{return max}
    }, ar[0]);
    tot = ar.reduce((tot, item) => {
        tot += item;
        return tot;
    }, 0)
    ret.average = tot / ar.length;
    return ret;
}

module.exports = {
    capitalize,
    reverseString,
    add,
    subtract,
    multiply,
    divide,
    caesarChiper,
    analyzer
}