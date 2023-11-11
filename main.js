let myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Promise выполнено")
    }, 2000)
})

myPromise.then(function(result) {
    console.log(result)
    }).catch(function(error) {
    console.error(error)
    })



let myPromiseWithError = new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject("Произошла ошибка")
    }, 3000)
})

myPromiseWithError
    .then(function(result) {
      console.log(result)
})
     .catch(function(error) {
      console.error(error)
})

function checkEvenNumber(number) {
    return new Promise(function(resolve, reject) {
      if (number % 2 === 0) {
        resolve(`${number} - четное число`)
      } else {
        reject(`${number} - нечетное число`)
      }
    })
}

let inputNumber = 6
  
checkEvenNumber(inputNumber)
    .then(function(result) {
      console.log(result)
})
    .catch(function(error) {
      console.error(error)
})


const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    return response.json()
})
  .then(data => {
    console.log('Данные получены:', data)
})
  .catch(error => {
    console.error('Ошибка запроса:', error)
})
