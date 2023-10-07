// https://leetcode.com/problems/binary-search/

// Given an array of integers nums which is sorted in ascending order, and an integer target,
// write a function to search target in nums. If target exists, then return its index. Otherwise,
// return -1.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let min = 0;
  let max = nums.length - 1;
  let mid;

  while (max >= min) {
    mid = min + Math.floor((max - min) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] > target) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return -1;
};

// TESTCASES:
console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
