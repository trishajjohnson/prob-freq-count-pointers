function validAnagram(str1, str2) {
    if(str1.length !== str2.length) return false;

    const str1FreqCount = freqCounter(str1);
    const str2FreqCount = freqCounter(str2);

    for(let key in str1FreqCount) {
        if(str1FreqCount[key] !== str2FreqCount[key]) return false;
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

module.exports = validAnagram;