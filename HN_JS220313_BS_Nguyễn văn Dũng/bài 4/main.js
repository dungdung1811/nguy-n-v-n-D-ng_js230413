// cách 1;
let arr = [3, 25, 38, 49, 12];
arr.sort(function(a, b) {
  return b - a;
});
console.log(arr);
// cách 2;
let mang = [3, 25, 38, 49, 12];
for (let i = 0; i < mang.length - 1; i++) {
  for (let j = i + 1; j < mang.length; j++) {
    if (mang[j] > mang[i]) {
      let temp = mang[i];
      mang[i] = mang[j];
      mang[j] = temp;
    }
  }
}
console.log(mang);