/**
 * ^ Tìm số dương nhỏ nhất trong mảng
 * Khối 1: Input
 *      numArray
 * Khối 2: Các bước xử lý
 *      tạo hàm và gắn sự kiện cho button
 *      tạo mảng dùng để chứa các số dương positiveArray
 *      duyệt mảng numArray
 *          lưu các giá trị số dương vào mảng mới
 * 
 *      tạo biến lưu giá trị số dương nhỏ nhất min, giả sử min là vị trí 0 trong mảng positiveArray
 *      duyệt mảng positiveArray
 *          nếu phần tử nhỏ hơn min
 *          thay thế min bằng phần tử đó
 *      hiển thị lên UI
 * Khối 3: Output
 *      min
 */

function timSoDuongNhoNhat(){
    var positiveArray = timSoDuong();
    var content = "";
    if(positiveArray.length == 0){
        content = "Không có số dương trong mảng";
    } else{
        var min = positiveArray[0];
        for(var i = 1; i < positiveArray.length; i++){
            if(positiveArray[i] < min){
                min = positiveArray[i];
            }
        }
        content = min;
    }
   
    document.querySelector("#bai4Result").innerHTML = content;
  
}
document.querySelector("#bai4Btn").onclick = timSoDuongNhoNhat;


function timSoDuong(){
    var positiveArray = [];
    console.log(typeof(positiveArray));
    for(var i = 0; i < numArray.length; i++){
        if(numArray[i] > 0){
            positiveArray.push(numArray[i]);
        }
    }
    
    return positiveArray;
}