//1 Task
function showArrCount(){
  let arrCounterChet = 0;
  let arrCounterNeChet = 0;
  let arrZero = 0;
  let myArr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < myArr2.length; i = i + 1) {
    if(i === 0 || typeof(i) !== "number"){
      arrZero +=1
    }
    else if(i%2 !== 0){
      arrCounterNeChet += 1
    }
    else if(i%2 === 0){
      arrCounterChet += 1
    }
  }
  console.log(arrZero)
  console.log(arrCounterChet)
  console.log(arrCounterNeChet)
}
showArrCount()

//2 Task
function showTypeDigit(digit){
  if (digit < 2) {
    return 'Число должно быть больше 1';
  } else if (digit === 2) {
    return 'Простое число';
  }

  let i = 2;
  const limit = Math.sqrt(digit);
  while (i <= limit) {
    if (digit % i === 0) {
      return 'Составное число';
    }
    i +=1;
  }
  return 'Простое число';
}
console.log(showTypeDigit(1));
showTypeDigit(10)

//3 Task
function sum(digit1) {
  return function(digit2) {
      return digit1 + digit2;
  };
}
console.log( sum(50)(300));

//4 Task
function couner1(firstDig, secDig) {
  let count1 = firstDig;
  let timerId = setInterval(function() {
    console.log(count1);
    if (count1 == secDig) {
      clearInterval(timerId);
    }
    count1++;
  }, 1000);
}
couner1(1, 9);

//5 Task
const sqrtDigit = (x, n) => {
  const result = (x**n)
  return result
}
console.log(sqrtDigit(8, 2));