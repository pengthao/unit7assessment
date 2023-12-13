
const addToZero = (array) => {
    let total = 0
        array.forEach(element => {
            total += element
            console.log(total)
        });
        
        if(total === 0) {
        return true
        } else return false
    }

arr = [1,3,-8]

console.log(addToZero(arr))

//my prediction: runtime is O(n)
//space complexity will be O(1) the total is the only variable we will hold in memory.


const uniqChar = (str) => {
    const charMap = {};
    
    for (let i=0; i < str.length; i++) {
        const char = str[i];
        if (charMap[char]) {
            return false;
        }
        charMap[char] = true;
    }
    return true;    
}

console.log(uniqChar("Monday")); 
console.log(uniqChar("Moonday")); 

//prediction: runtime is O(n)
//space complexity = O(1) the charMap variable contains an object with maximum 26 letter keys and some special characters
//that will not scale with the size of string.


const panaGram = (str) => {
    const alphMap = {};
    const alph = 'abcdefghijklmnopqrstuvwxyz'

    for (let i=0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        alphMap[char] = true;
    }

    for (let i=0; i < alph.length; i++) {
        const char1 = alph[i];
        if (!alphMap[char1]) {
            return false;
        } 
    }
    return true;
}


console.log(panaGram("I like cats, but not mice"))

//prediction: O(n)   +26 for alphabets check but this is typically disregarded in notation for bigO
//space complexity = O(1) the alphMap variable contains an object with maximum 26 letter keys and some special characters
//that will not scale with the size of string.


const longestWord = (arr) => {
    let longestWord = ''

    for (let i=0; i < arr.length; i++) {
        const word = arr[i];

        if (word.length > longestWord.length) {
            longestWord = word
        }
    }
    return `${longestWord}:${longestWord.length} letters`
}

console.log(longestWord(["hi", "hello"]))

//prediction: O(n)
//space complexity = O(1) longestWord variable is keeping only 1 word in memory at all times.