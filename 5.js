// Buatlah sebuah fungsi untuk memvalidasi sebuah string apakah String tersebut Palindrome atau bukan.
//Fungsi Deteksi Palindrom
function detectPalindrom(teks) {
  let teks1 = teks.toLowerCase();
  let teks2 = "";
  let len = teks1.length - 1;
  while (len >= 0) {
    teks2 += teks1[len];
    len--;
  }
  if (teks1 === teks2) {
    return `String merupakan Palindrome`;
  } else {
    return `String bukan Palindrome`;
  }
}

console.log(detectPalindrom("NINININ"));
