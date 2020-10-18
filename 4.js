// Buatlah method/function perulangan untuk mencetak segitiga seperti diatas. Function harus bisa menerima parameter dan parameternya harus merupakan bilangan ganjil.
// function printDiamond(n) {
//   let space = n - 1;
//   // for (let i = 0; i < n; i++) {
//   //   let text = '';
//   //   for (let j = 0; j < space; j++) {
//   //     text += ' ';
//   //   }
//   //   for (let j = 0; j <= i; j++) {
//   //     text += '* ';
//   //   }
//   //   console.log(text);
//   //   space--;
//   // }

//   space = 0;
//   for (let i = n; i > 0; i--) {
//     // space = 0;
//     let teks = " ";
//     for (let j = 0; j < space; j++) {
//       teks += " ";
//     }
//     for (let j = 0; j < i; j++) {
//       teks += "* ";
//     }

//     console.log(teks);
//     space++;
//   }
// }
// printDiamond(4);

function printSegitiga(col) {
  for (let i = 1; i < Math.ceil(col / 2); i++) {
    let text = "";
    if (i === 1) {
      for (let i = 1; i <= col; i++) {
        text += "* ";
      }
      console.log(text);
    }
  }

  return text;
}

console.log(printSegitiga(3));
//Belum selesai
