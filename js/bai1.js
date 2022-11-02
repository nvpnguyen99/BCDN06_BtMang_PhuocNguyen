/**
 * ^Tính tổng số dương của mảng
 * Khối 1: Input
 *      numArray
 * Khối 2: Các bước xử lý
 *      tạo hàm và gắn sự kiện cho button
 *      tạo biến tổng cộng dồn sum
 *      duyệt mảng
 *          kiểm tra nếu phần tử lớn hơn 0 thì cộng dồn vào sum
 * Khối 3: Output
 *      tổng số dương của mảng: sum     
 */

function tinhTongSoDuong(){
    var sum = 0;
    for(var i = 0; i < numArray.length; i++){
        if(numArray[i] > 0){
            sum += numArray[i];
        }
    }
    document.querySelector("#bai1Result").innerHTML = sum;
}

document.querySelector("#bai1Btn").onclick = tinhTongSoDuong;