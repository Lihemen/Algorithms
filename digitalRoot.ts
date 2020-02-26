function digitRoot(n: number):  number{
  // const digits = n.toString().split('');
  // let total = 0;
  // let answer = 0;

  // for (let i =0; i <digits.length; i++) {
  //   total += parseInt(digits[i]) 
  // }
  
  // if (total.toString().length > 1) {
  //   const final = total.toString().split('');
  //   for (let n = 0; n < final.length; n++){
  //     answer += parseInt(final[n])
  //   }
  //   return answer;
  // } else {
  //   return total;
  // }
  return (n-1) % 9 + 1
  
}
console.log(digitRoot(187));