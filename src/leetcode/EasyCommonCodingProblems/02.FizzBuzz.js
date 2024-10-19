
// You’re given a number n, and you need to print all numbers from 1 to n.
//     However, for numbers divisible by 3, you print ‘Fizz’,
//     for numbers divisible by 5, you print ‘Buzz’,
// and for numbers divisible by both 3 and 5, you print ‘FizzBuzz’
function fizzBuzz(n){

    for (let i = 1; i <=n  ; i++) {
        if(i % 3 === 0 && i % 5 ===0) {
            console.log('FizzBuzz')
        } else if(i % 3 === 0) {
            console.log('Fizz')
        } else if(i % 5 === 0){
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }

}

fizzBuzz(15)

