/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var position = -1;
    var diff = 0;
    for(var i=0; i<nums.length; i++){
        diff = target - nums[i];
        position = nums.indexOf(diff);
        if(position!=-1&&position!=i) return [i, position];
    }
    
};
