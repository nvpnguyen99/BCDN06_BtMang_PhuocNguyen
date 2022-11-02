/**
 * ^Đếm số dương
 * Khối 1: Input
 *         mảng numArray
 * Khối 2: Các bước xử lý
 *      tạo hàm và gắn sự kiện cho button
 *      tạo biến đếm cộng dồn count
 *      duyệt mảng
 *          kiểm tra nếu phần tử lớn hơn 0 thì tăng biến đếm count
 * Khối 3: Output
 *          count
 */
function demSoDuong(){
    var count = 0;
    for(var i = 0; i < numArray.length; i++){
        if(numArray[i] > 0){
            count++;
        }
    }
    document.querySelector("#bai2Result").innerHTML = count;
}
document.querySelector("#bai2Btn").onclick = demSoDuong;