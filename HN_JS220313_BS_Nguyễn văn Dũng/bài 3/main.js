let input = prompt("Nhập tháng và năm (phải cách nhau bằng Space , không là LỖi đó)");
let [month, year] = input.split(" ");

month = +(month);
year = +(year);

let NgayCuoiThang;

switch (month) {
  case 1: 
  case 3:
  case 5:
  case 7: 
  case 8: 
  case 10: 
  case 12:
    NgayCuoiThang = 31;
    break;
  case 4:
  case 6: 
  case 9: 
  case 11:
    NgayCuoiThang = 30;
    break;
  case 2: 
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      NgayCuoiThang = 29;
    } else {
      NgayCuoiThang = 28;
    }
    break;
  default:
    console.log("Tháng rất rất là không hợp lệ!");
}

if (NgayCuoiThang) {
  console.log(`Số ngày của tháng ${month} năm ${year} là ${NgayCuoiThang} ngày.`);
}