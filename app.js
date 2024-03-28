//1
// function ppp(massiv) {
//   let pppSet = new Set();
//   let dubliket = new Set();

//   massiv.forEach((el) => {
//     if (pppSet.has(el)) {
//       dubliket.add(el);
//     } else {
//       pppSet.add(el);
//     }
//   });

//   let pppArr = Array.from(pppSet);

//   pppArr = pppArr.filter((el) => !dubliket.has(el));

//   return pppArr;
// }

// let mass_son = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 4, 9, 10, 25, 95];
// let res = ppp(mass_son);
// console.log("qogan_son", res);
//==================================================================
function sozlarSoniniHisoblash(satr) {
  let sozlar = satr.split(" ");

  let sozlarMap = new Map();

  sozlar.forEach((soz) => {
    if (sozlarMap.has(soz)) {
      let takrorlanishSoni = sozlarMap.get(soz);
      sozlarMap.set(soz, takrorlanishSoni + 1);
    } else {
      sozlarMap.set(soz, 1);
    }
  });

  return sozlarMap;
}

let satr = "nizomiddin aka aka";
let natija = sozlarSoniniHisoblash(satr);
console.log("Satrdagi so'zlar soni:", natija);
