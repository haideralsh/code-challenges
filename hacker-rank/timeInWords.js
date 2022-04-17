const nums = {
 1: "one",
 2: "two",
 3: "three",
 4: "four",
 5: "five",
 6: "six",
 7: "seven",
 8: "eight",
 9: "nine",
 10: "ten",
 11: "eleven",
 12: "twelve",
 13: "thirteen",
 14: "fourteen",
 15: "fifteen",
 16: "sixteen",
 17: "seventeen",
 18: "eighteen",
 19: "nineteen",
 20: "twenty",
}

function timeInWords(h, m) {
  if (m === 0) return `${nums[h]} o' clock`

  let suffix = m > 30 ? `to ${nums[h+1]}` : `past ${nums[h]}`
  let prefix = ""

  switch (m) {
    case 30: 
      prefix = "half"
      break
    case 15:
    case 45:
      prefix = "quarter"
      break
    default: 
      if (m > 30) {
        let delta = 60 - m
        if (delta > 20) {
          prefix = `${nums[20]} ${nums[delta - 20]} minutes`
        } else {
          prefix = `${nums[delta]} minutes`
        }
      } else {
        if (m > 20) {
          prefix = `${nums[20]} ${nums[m - 20]} minutes`
        } else {
          prefix = m > 1 ? `${nums[m]} minutes` : `${nums[m]} minute`
        }
      }
  }

  return prefix + " " + suffix
}
