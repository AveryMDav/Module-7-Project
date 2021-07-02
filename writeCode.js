function findLongestWord(arr){
    let answer = [''];
    for(i=0; i<arr.length; i++){
      if (answer[0].length < arr[i].length) {
        answer.splice(0,1,arr[i])
      }
    }
    return answer
  }
  //Finds the longest word in an array

let wordArray = ['hello', 'Avery', 'Longestword', 'actuallongestword', 'Thisisnowthelongestwordinthearray']

console.log(findLongestWord(wordArray))