fn backspace_compare(s: String, t: String) -> bool {
  return backspace(s) == backspace(t);
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

fn main() {
  let equal = backspace_compare(String::from("bo#o#oee#"), String::from("##bn#oe"));
  println!("value of equal: {}", equal);
}