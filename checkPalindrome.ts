function checkPalindrome(s: string): boolean {
  return s.toLowerCase().split('').reverse().join('') === s;
}
console.log(checkPalindrome('able was i ere i saw elba'))