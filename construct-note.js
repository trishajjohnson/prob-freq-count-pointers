// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    if(letters.length < msg.length) return false;

    const msgFreqC = freqCounter(msg); 
    const lettersFreqC = freqCounter(letters); 

    for(let key in msgFreqC) {
        if(msgFreqC[key] > lettersFreqC[key]) return false;
    }

    return true;
}

function freqCounter(str) {
    const arr = str.split('');
    const freqCount = {};

    for(let el of arr) {
        freqCount[el] = freqCount[el] + 1 || 1;
    }

    return freqCount;
}

module.exports = constructNote;