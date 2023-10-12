// https://practice.geeksforgeeks.org/problems/pair-with-given-sum-in-a-sorted-array4940/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab

// You are given an array Arr of size N. You need to find all pairs in the array that sum to
// a number K. If no such pair exists then output will be -1. The elements of the array are
// distinct and are in sorted order.
// Note: (a,b) and (b,a) are considered same. Also, an element cannot pair with itself,
// i.e., (a,a) is invalid.

class Solution {
  Countpair(arr, n, k) {
    let i = 0;
    let j = n - 1;
    let count = 0;

    while (i < j) {
      if (arr[i] + arr[j] === k && arr[i] !== arr[j]) {
        count++;
        i++;
        j--;
      } else if (arr[i] + arr[j] < k) {
        i++;
      } else {
        j--;
      }
    }
    return count ? count : -1;
  }
}
