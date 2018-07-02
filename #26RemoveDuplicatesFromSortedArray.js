/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length == 0) return 0;
    var i = 0;
    for (var j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    nums.length = i+1;
    return nums.length;
};

// 最初想用Set, Set确实可以过滤Array, 不过不符合题目要求.
// 后来想用Array.sort(function(){});的方式, 不过没想到好点子
// 最后, 参考了答案, 就是简单的利用for循环比大小.

// 不过原答案中, 直接返回的是i+1, 这样会导致nums是原始数组的长度, 并且最后一个元素一定是重复元素.
// 可以使用pop()或者直接修改nums.length来去掉最后一个重复元素


// tips: 不要看不起for循环...有些基础的功能, 还是需要for循环来写, 奇淫巧技性能不一定高
