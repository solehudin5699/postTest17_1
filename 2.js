// Tulislah sebuah fungsi untuk mencari huruf yang berulang pertama kali pada sebuah string. Berikut contohnya :
// “BCABA” -> Karakter pertama yang berulang adalah B
// “ABCA” -> Karakter pertama yang berulang adalah A

const searchChar = (string) => {
  let arr = string.split("");
  let noSame = true;
  let check;
  let i = 0;
  while (noSame) {
    check = arr.filter((item) => item === arr[i]);
    if (check.length > 1) {
      noSame = false;
    } else {
      noSame = true;
    }
    i++;
    if (i > arr.length) {
      noSame = false;
    }
  }

  return console.log(check[1]);
};

searchChar("ABABB");
