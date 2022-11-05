/**
 * ^ Tìm số nguyên tố đầu tiên trong mảng
 * Khối 1: Input
 *      numArray
 * Khối 2: Các bước xử lý
 *      Tạo hàm và gán sự kiện cho nút button
 *      Tạo biến lưu trữ số nguyên tố
 *      Duyệt mảng
 *          +  Hàm kiểm tra từng phần tử có phải là số nguyên tố
 *                      nếu giá trị phần tử nhỏ hơn 2 thì không phải là số nguyên tố
 *                      sử dụng vòng for(var i=2; i<n; i++)
 *                          nếu có số chia hết => không phải số nguyên tố
 *                          nếu không có số chia hết => là số nguyên tố
 * Khối 3: Output
 *      số nguyên tố đầu tiên trong mảng
 *      num
 */

function timSoNguyenTo(){
    var num = -1;
    for (var i = 0; i < numArray.length; i++){
        if(kiemTraSoNguyenTo(numArray[i])){
            num = numArray[i];
            break;
        }
    }
    document.querySelector("#bai8Result").innerHTML = num;
}
document.querySelector("#bai8Btn").onclick = timSoNguyenTo;

function kiemTraSoNguyenTo(num){
    if(num < 2){
        return false;
    }

    for(var i = 2; i < num; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}