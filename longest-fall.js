// add whatever parameters you deem necessary
function longestFall(arr) {
    if(arr.length <= 1) return arr.length;
    
    let maxCount = 1;
    let currCount = 1; 

    for(let i=1; i<arr.length; i++) { 
        if(arr[i] < arr[i-1]) {
            currCount++; 
        } else {
            if(currCount > maxCount) maxCount = currCount; 
            currCount = 1; 
        }
    }
    return Math.max(currCount, maxCount); 
}

module.exports = longestFall;