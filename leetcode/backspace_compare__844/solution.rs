/*
Given two strings s and t, return if they are equal when both are typed into empty text editors. # means a backspace character.

Time complexity: O(n)
Runtime: 0 ms, faster than 100.00% of Rust online submissions for Backspace String Compare.
Memory Usage: 2.1 MB, less than 100.00% of Rust online submissions for Backspace String Compare.

*/

// #[test]
// fn it_compares_strings_ignoring_backspaces() {
//  assert_eq!(backspace_compare(String::from("bo#o#oee#"), String::from("##bn#oe")), true);
// }  

impl Solution {    
    pub fn backspace_compare(s: String, t: String) -> bool {
      return Self::backspace(s) == Self::backspace(t);
    }

    fn backspace(s: String) -> String {
      let mut vec = Vec::new();

      for c in s.chars() { 
        if c != '#' {
          vec.push(c.to_string());
        } else {
          vec.pop();
        }
      }

      return vec.concat();
    }
}