/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var len = nums.length,
        result = [],
        diff;
    for(var i=0; i<len; i++){
        diff = target - nums[i];
        if(result[diff] !== undefined) return [result[diff], i];
        result[nums[i]] = i;
    }
    return []; // 增加一个空Array, 可以确保函数被调用, 即使没有答案, 也不至于下一个接收Array的函数出异常
};

// 最早的思路是用当前可以确定的变量nums[i], 去剩余的Array中依次匹配相加之和可以等于target的值, 可以这么做的时间复杂度已经达到了O(n*n).

// 这个答案的思路参考了运行时间最短的答案, 用已知的target和nums[i], 得到一个差值diff, 这个diff就是我们要找的第二个数.
// 把第二个数放入一个新数组result, 这样每次循环nums的时候, 直接去匹配result这个短数组(因为只有diff, 所以比较短), 性能可以得到一定的提升.

// tips: 数组也是可以用 array[key]=val; 这么操作的, 这样输出的数组本质还是[x1, x2, x3 ~~~], 不过这些元素的下标, 是由之前的key决定的
// !!! 以上操作得出的Array, 元素下标不一定是从0开始的
