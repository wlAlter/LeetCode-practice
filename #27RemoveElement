/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    if(nums.length<1 || !Number.isInteger(val)) return nums.length;
    
    // for(var i=0; i<nums.length; i++){
    //     console.log(nums.length);
    //     if(nums[i]==val) nums.splice(i, 1);
    // }
    var i = 0;
    while(i<nums.length){
        if(nums[i]==val) {
            nums.splice(i, 1);   
        }else{
            i++;            
        }
    }
    
    // var i = nums.length-1;
    // while(i<nums.length){
    //     if(nums[i]==val) {
    //         nums.splice(i, 1);
    //         i--;
    //     }
    // }
    // time limit exceeded
    
};

// 一开始没有考虑nums=[3,3] val=3的极端情况, 这种情况下, 删除一个3后, 下标i不能增加, 否则会漏掉一个3.

// 第二种while方式是参考submission, i--写起来会比i++更漂亮, 不过我这么写timeout了...原答案用的for
