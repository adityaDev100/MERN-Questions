let a = ["NumArray","sumRange","sumRange","sumRange"]
let inputArr = [[[-2,0,3,-5,2,-1]],[0,2],[2,5],[0,5]]

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.prefixSumArray = Array(nums.length).fill(0);
    nums.forEach((_, index) => {
        if (index === 0) {
            this.prefixSumArray[0] = nums[0];
        } else {
            this.prefixSumArray[index] = nums[index] + this.prefixSumArray[index - 1];
        }
    });
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if (left === 0) {
        return this.prefixSumArray[right];
    }
    return this.prefixSumArray[right] - this.prefixSumArray[left - 1];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
