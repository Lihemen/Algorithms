function getCount(str: string): number {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.toLowerCase().split('').filter((element) => vowels.includes(element)).length;
}

console.log(getCount('AmbassAdor is a Man'))