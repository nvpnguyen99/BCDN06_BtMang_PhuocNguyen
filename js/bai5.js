/**
 * ^Tìm số chẵn cuối cùng trong mảng
 * Khối 1: Input
 *      numArray
 * Khối 2: Các bước xử lý
 *      tạo hàm và gắn sự kiện cho button
 *      tạo biến lưu trữ số chẵn cuối cùng trong mảng num
 *      duyệt mảng
 *              nếu là số chẵn thì gán vào biến num
 *      hiển thị kết quả lên UI
 * Khối 3:
 *      số chẵn cuối cùng trong mảng 
 *      num
 */

function timSoChanCuoiCung() {
    var num = -1;
    var content = "";
    for (var i = 0; i < numArray.length; i++){
        if(numArray[i] % 2 == 0){
            num = numArray[i];
        }
    }
    if(num == -1){
        content = "Không có số chẵn trong mảng";
    } else {
        content = "Số chẵn cuối cùng trong mảng: " + num;
    }
    document.querySelector("#bai5Result").innerHTML = content;
}

document.querySelector("#bai5Btn").onclick = timSoChanCuoiCung;