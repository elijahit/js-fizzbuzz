for (let i = 0; i < 100; i++) {
  let number = i+1;
  if ((number % 5) == 0 && (number % 3) == 0) {
    console.log("FizzBuzz");
  } else if ((number % 5) == 0) {
    console.log("Buzz");
  } else if((number % 3) == 0) {
    console.log("Fizz");
  } else {
    console.log(number)
  }
  
}