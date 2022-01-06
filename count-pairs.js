// add whatever parameters you deem necessary
function countPairs(nums, target) {
    let count = 0;
    const obj = {};

    for(let i=0; i<nums.length; i++) {
        let num = target-nums[i];
        if(obj[num]) count++;
        obj[nums[i]] = 1;

    }
    return count;
}
// function countPairs(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;
//     let count = 0;
//     const sorted = nums.sort((a,b) => a - b);

//     while(left < right) {
//         let sum = (sorted[left] + sorted[right]);

//         if(sum === target) {
//             count++;
//             left++;
//         }
//         else if(sum > target) right--;
//         else left++;
//     }
//     return count;
// }

module.exports = countPairs;