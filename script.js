//Frontend Algorithms Task (Frontend Task 4)

// ( 1 )
// Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius
convertFahrToCelsius = (Fahr) => {

  if (Fahr == null) {
    console.log(`please Enter an input value of farenheit for conversion`)
  }
  else {
    let regex = /[a-zA-Z]/
    regexResult = regex.test(Fahr)
    if (regexResult === true && typeof Fahr !== 'object' && Fahr !== null) {
      console.log(`"${Fahr}"`, `is not a valid number but a/an ${typeof Fahr}`)

    }
    else if (Array.isArray(Fahr) === true) {
      console.log(Fahr, `is not a valid number but a/an array`)
    }
    else if (typeof Fahr === 'object' && typeof Fahr !== null && !Array.isArray(Fahr)) {
      console.log(Fahr, 'is not a valid number but a/an object')
    }
    else {
      let F = Number(Fahr)

      let C = ((F - 32) * 100) / 180
      console.log(C.toFixed(4));
    }
  }

}
//Question 2 

//Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", then returns the resulting array.


checkYuGiOh = (n) => {

  if (n == null) {
    console.log(`please enter an input value`)
  }
  else {
    let regex = /[a-zA-Z]/
    regexResult = regex.test(n)
    if (regexResult === true && typeof n !== 'object') {
      console.log(`invalid parameter:`, `'${n}'`, `is a/an ${typeof n}`);
    }
    else if (Array.isArray(n) === true) {
      console.log(`invalid parameter:`, n, `is an array`);
    }
    else if (typeof n === 'object' && typeof n !== null && !Array.isArray(n)) {
      console.log(`invalid  parameter:`, n, `is an object`);
    }
    else {

      let num = Number(n)

      let result = []
      for (let i = 1; i <= num; i++) {
        if (i % 2 == 0 && i % 3 !== 0 && i % 5 !== 0) {
          result.push('yu')
        }
        else if (i % 3 == 0 && i % 2 !== 0 && i % 5 !== 0) {
          result.push('gi')
        }
        else if (i % 5 == 0 && i % 3 !== 0 && i % 2 !== 0) {
          result.push('oh')
        }
        else if (i % 5 == 0 && i % 3 == 0 && i % 2 !== 0) {
          result.push('gi-oh')
        }
        else if (i % 5 == 0 && i % 3 !== 0 && i % 2 == 0) {
          result.push('yu-oh')
        }
        else if (i % 5 !== 0 && i % 3 == 0 && i % 2 == 0) {
          result.push('yu-gi')
        }
        else if (i % 5 == 0 && i % 3 == 0 && i % 2 == 0) {
          result.push('yu-gi-oh')
        }
        else {
          result.push(i)
        }

      }
      console.log(result);

    }

  }


}

//TESTs

convertFahrToCelsius(100)
checkYuGiOh(false);