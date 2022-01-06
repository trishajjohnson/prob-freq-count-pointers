// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    if(num1.length !== num2.length) return false;

    const num1FreqC = freqCounter(num1);
    const num2FreqC = freqCounter(num2);

    for(let key in num1FreqC) {
        if(num1FreqC[key] !== num2FreqC[key]) return false;
    }
    return true;
}

function freqCounter(str) {
    const arr = str.toString().split('');
    const freqCount = {};

    for(let el of arr) {
        freqCount[el] = freqCount[el] + 1 || 1;
    }

    return freqCount;
}

module.exports = sameFrequency;