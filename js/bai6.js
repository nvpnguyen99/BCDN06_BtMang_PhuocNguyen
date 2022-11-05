/**
 * ^ Đổi chỗ 2 giá trị trong mảng theo vị trí
 * Khối 1: Input
 *      numArray
 * Khối 2: Các bước xử lý
 *      tạo hàm và gắn sự kiện cho nút button
 *      tạo mảng phụ và copy mảng chính vào mảng phụ để không làm thay đổi mảng chính
 *      tạo biến tạm, gán giá trị của phần tử ở vị trí 1 vào biến tạm
 *      gán giá trị phần tử ở vị trí thứ 2 vào phần tử vị trí thứ 1
 *      gán giá trị biến tạm vào phần tử vị trí thứ 2
 *      hiển thị kết quả lên UI
 * Khối 3: Output
 *      numArrayCopy
 */

function doiChoPhanTuMang() {
    var viTri1 = Number(document.querySelector("#num1Swap").value);
    var viTri2 = Number(document.querySelector("#num2Swap").value);
    var content = "";

    var numArrayCopy = [];  
    for(var i = 0; i < numArray.length; i++){
        numArrayCopy.push(numArray[i]);
    }

    if(viTri1 < numArrayCopy.length && viTri2 < numArrayCopy.length){
        var temp = numArrayCopy[viTri1];
        numArrayCopy[viTri1] = numArrayCopy[viTri2];
        numArrayCopy[viTri2] = temp 
        content = "Mảng sau khi đổi vị trí phần tử: " + numArrayCopy;
    } else {
        content = "Vị trí không có trong mảng";
    }

    document.querySelector("#bai6Result").innerHTML = content;
}
document.querySelector("#bai6Btn").onclick = doiChoPhanTuMang;