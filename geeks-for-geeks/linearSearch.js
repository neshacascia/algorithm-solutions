// https://practice.geeksforgeeks.org/problems/searching-a-number0324/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article

class Solution {
  search(arr, n, k) {
    for (let i = 0; i < n; i++) {
      if (arr[i] === k) {
        return i + 1;
      }
    }
    return -1;
  }
}
