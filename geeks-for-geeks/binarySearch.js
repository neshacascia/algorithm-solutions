// https://practice.geeksforgeeks.org/problems/binary-search-1587115620/1?utm_source=geeksforgeeks&utm_medium=article_practice_tab&utm_campaign=article_practice_tab

class Solution {
  binarysearch(arr, n, k) {
    let min = 0;
    let max = n - 1;
    let mid;

    while (max >= min) {
      mid = min + Math.floor((max - min) / 2);

      if (arr[mid] === k) return mid;

      if (arr[mid] > k) {
        max = mid - 1;
      } else {
        min = mid + 1;
      }
    }
    return -1;
  }
}
