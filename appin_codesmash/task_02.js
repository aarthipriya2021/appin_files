// Count the of 1s in the binary representation of a number.


function characterCount(arr) {
    
    let count = 0;
    let n = 1
    for (let i = 0; i <= arr.length; i++) {

            if(n === arr[i]){
                count++;
            }
          }
        return count;
    }
console.log(characterCount([0, 1, 1, 0, 1, 0, 1, 0, 1]));



// function characterCount(a, b) {
//     let count = 0;
//     for (let i = 0; i <= b.length - a.length; i++) {
//       if (b.substr(i, a.length) === a) {
//         count++;
//       }
//     }
//     return count;
//   }

// console.log(1, [0, 1, 1, 0, 1, 0, 1, 0, 1])
