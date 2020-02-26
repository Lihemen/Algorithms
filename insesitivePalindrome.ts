function isCaseInsensitivePalindrom(input: string): boolean {
  return input.toLowerCase().split('').reverse().join('') == input.toLowerCase();
}

console.log(isCaseInsensitivePalindrom('aaBaa'))
console.log(isCaseInsensitivePalindrom('aaBaac'))