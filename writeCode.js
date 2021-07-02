// function findLongestWord(arr){
//     let answer = [''];
//     for(i=0; i<arr.length; i++){
//       if (answer[0].length < arr[i].length) {
//         answer.splice(0,1,arr[i])
//       }
//     }
//     return answer
//   };

// let wordArray = ['hello', 'Avery', 'Longestword', 'actuallongestword', 'Thisisnowthelongestwordinthearray']

// console.log(findLongestWord(wordArray))

 //Finds the longest word in an array

function addToZero(numArray){
    for(i=0; i<numArray.length; i++){
        for(j=i+1; j<numArray.length; j++){
            if(numArray[i] + numArray[j] === 0){
                return true
            }
        }
    }
    return false
};

// function addToZero(numArray){
//     if (numArray.length < 2) {
//         return false
//     };

//     for(i=0; i<numArray.length; i++){
//          for(let j=i+1; j<numArray.length; j++){
//             if (numArray[i] + numArray[j] === 0) {
//                 return true
//                 }
//              }
//         }
//     return false
// }

console.log(addToZero([]))
console.log(addToZero([2,4,-2]))
console.log(addToZero(5,2,0,0,7))
console.log(addToZero([7,8.6,-7]))