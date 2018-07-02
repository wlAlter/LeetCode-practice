/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    var len = nums.length;
    
    if(len<1 || !Number.isInteger(target)) return -1;
    
    if(nums[0]>target){
        nums.splice(0, 0, target);
        return 0;
    }else if(nums[len-1]<target){
        nums.push[target];
        return len;
    }else{
        for(var i=0; i<len; i++){
            if(nums[i]==target){
                return i;
            }else if(nums[i]<target){
                continue;
            }else if(nums[i]>target){
                nums.splice(i-1, 0, target);
                return i;
            }
        }
    }
    
    
};
// 最早的版本没考虑target插入在'开头' '末尾'的情况. 修改后如上
// 这个答案在88%左右的位置, 然而看看了sample答案, 感觉自己写的好傻...答案如下

var searchInsert = function(nums, target) {
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] >= target) return i;
    }
    return nums.length;
};
// 看了前三的答案, 貌似while的性能要比for更好一些
// null<1 为true
var searchInsert = function(nums, target) {
    var lo=0,hi=nums.length-1
    while(lo<=hi){
        var mid=Math.floor((lo+hi)/2);
        if(lo>nums.length-1){return nums.length}
        if(hi<0){return 0}
        if(nums[mid]==target){
            return mid
        } else if(nums[mid]>target){
            hi=mid-1;
        } else{
            lo=mid+1;
        }
    }
    return lo;
};

var searchInsert = function(nums, target) {
    if (nums === null || nums.length === 0) {
        return 0;
    }
    
    var begin = 0;
    var end = nums.length - 1;
    while(begin <= end) {
        var index = Math.floor((end - begin) / 2) + begin;
        if (target === nums[index]) {
            return index;
        } else if (target > nums[index]) {
            begin = index + 1;
        } else if (target < nums[index]) {
            end = index - 1;
        }
    }
    
    return begin;
    
};// 没太理解...
