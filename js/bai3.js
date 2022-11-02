/**
 * ^ Tìm số nhỏ nhất trong mảng
 * Khối 1: Input
 *      numArray
 * Khối 2: Các bước xử lý
 *      tạo hàm và gắn sự kiện cho button
 *      tạo biến lưu giá trị nhỏ nhất min, giả sử min là vị trí 0 trong mảng
 *      duyệt mảng
 *          nếu phần tử nhỏ hơn min
 *          thay thế min bằng phần tử đó
 *      hiển thị lên UI
 * Khối 3: Output
 *      min
 */

function timSoNhoNhat(){
    var min = numArray[0];
    for(var i = 1; i < numArray.length; i++){
        if(numArray[i] < min){
            min = numArray[i];
        }
    }
    document.querySelector("#bai3Result").innerHTML = min;
}
document.querySelector("#bai3Btn").onclick = timSoNhoNhat;