function lengthShortestWord(s: string){
  const orderedArray = s.trim().split(' ').sort((a,b) => a.length - b.length);
  return orderedArray[0].length;
}
console.log(lengthShortestWord('bitcoin take over the world maybe who knows perhaps'));