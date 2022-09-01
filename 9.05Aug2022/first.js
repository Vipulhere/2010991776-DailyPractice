function isOdd(number) {
    return number % 2 != 0;
   }
   function filter(numbers, fn) {
    let results = [];
    for (const number of numbers) {
    if (fn(number)) {results.push(number);
    }
    }
    return results;
   }
   let numbers = [1, 2, 4, 7, 3, 5, 6];
   let oddNumbers = filter(numbers, isOdd);
   console.log("Hello ", oddNumbers);
   document.getElementById("oddNo").innerHTML = oddNumbers;