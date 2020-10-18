// Pada sebuah array [“z”, “d”, “a”, “b”]
// Buatlah sebuah fungsi untuk mengurutkan array di atas sesuai dengan alfabet A-Z tanpa menggunakan built-in helper.
let arr = ["z", "d", "a", "b"];
function sortAlphabet(arr) {
  let newArr = [];
  let arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    let a = arr[i];
    for (let j = i; j < arrLength; j++) {
      if (a.charCodeAt() < arr[j].charCodeAt()) {
        a = arr[i];
      } else {
        a = arr[j];
      }
    }
    console.log(i, a);
    newArr[i] = a;
  }
  return newArr;
}

console.log(sortAlphabet(arr));
