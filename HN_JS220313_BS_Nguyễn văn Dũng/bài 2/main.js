
let newText = prompt("Nhập vào một câu:");
newText= newText.trim();
let arr = newText.split(" ");

for (let i = 0; i < arr.length; i++) {
    let mang = arr[i];
    let firstText = mang.charAt(0).toUpperCase();
    let restText = mang.slice(1).toLowerCase();
    arr[i] = firstText + restText;
}
let gopTu = arr.join(" ");
console.log(gopTu);