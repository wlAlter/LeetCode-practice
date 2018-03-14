/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result = [];
    while(nums.length>1){
        temp_num = nums.pop();
        nums.forEach(function(element){
            if(element+temp_num == target)  result = [nums.length, nums.indexOf(element)];
        });
        if(result.length>0) return result;
    }
    
};
